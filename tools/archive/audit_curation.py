import os
import csv

base_dir = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience'
tech_csv = os.path.join(base_dir, 'docs/TECHNICAL_AUDIT.csv')
dup_csv = os.path.join(base_dir, 'docs/DUPLICATE_CANDIDATES.csv')
out_db = os.path.join(base_dir, 'docs/PHOTO_CURATION_DATABASE.csv')
report_md = os.path.join(base_dir, 'docs/AUTO_CURATION_AUDIT.md')

def get_page_candidates(path):
    p = path.upper()
    pages = []
    if 'AESTHETIC' in p or 'PEMANDANGAN' in p: pages.extend(['GALLERY', 'BACKGROUND'])
    if 'GORO' in p or 'PAWAI' in p or 'POSYANDU' in p or 'STUNTING' in p or 'TANAM POHON' in p or 'RUMAH DATAKU' in p: pages.append('KKN')
    if 'MTS' in p or 'SD' in p or 'TKA TPA' in p or 'PRAMUKA' in p or 'USTADZ' in p: pages.append('PENDIDIKAN')
    if 'UMKM' in p or 'TARI' in p or 'LANSIA' in p: pages.append('POTENSI')
    if 'KANTOR DESA' in p: pages.extend(['ABOUT', 'SUPPORTING'])
    
    if not pages: pages = ['GALLERY']
    return pages

def main():
    photos = {}
    with open(tech_csv, 'r', encoding='utf-8') as f:
        for row in csv.DictReader(f):
            id = row['id']
            w, h = int(row['width']), int(row['height'])
            res = (w * h) / 1000000.0
            blur = float(row['blur_score'])
            
            exp_pen = 2 if row['exposure_status'] != 'NORMAL' else 0
            score = res - (blur / 100.0) - exp_pen
            
            photos[id] = {
                'id': id,
                'filename': row['filename'],
                'path': row['relative_path'],
                'res': res,
                'blur': blur,
                'exposure': row['exposure_status'],
                'tech_status': row['technical_status'],
                'tech_score': score,
                'dup_group': ''
            }

    dup_groups = {}
    hash_distances = []
    singletons = 0
    total_dup_photos = 0
    
    if os.path.exists(dup_csv):
        with open(dup_csv, 'r', encoding='utf-8') as f:
            for row in csv.DictReader(f):
                total_dup_photos += 1
                id = row['id']
                dg = row['duplicate_group']
                dist = int(row['hash_distance'])
                hash_distances.append(dist)
                
                if id in photos:
                    photos[id]['dup_group'] = dg
                if dg not in dup_groups:
                    dup_groups[dg] = []
                dup_groups[dg].append(id)
                
    for id in photos:
        if not photos[id]['dup_group']:
            singletons += 1
            photos[id]['dup_group'] = f"DG-SINGLE-{id}"
            dup_groups[f"DG-SINGLE-{id}"] = [id]
            photos[id]['dup_decision'] = 'UNIQUE'

    for dg, members in dup_groups.items():
        if len(members) > 1:
            members.sort(key=lambda x: photos[x]['tech_score'], reverse=True)
            for i, id in enumerate(members):
                if i == 0:
                    photos[id]['dup_decision'] = 'MASTER_CANDIDATE'
                else:
                    photos[id]['dup_decision'] = 'SIMILAR_CANDIDATE'
                    photos[id]['tech_score'] -= (i * 2)

    sorted_ids = sorted(photos.keys(), key=lambda x: photos[x]['tech_score'], reverse=True)
    total = len(sorted_ids)
    
    tier_counts = {'S-CANDIDATE': 0, 'A-CANDIDATE': 0, 'B-CANDIDATE': 0, 'C-CANDIDATE': 0, 'REJECT-CANDIDATE': 0}
    
    hero_candidates = []
    about_candidates = []
    potensi_candidates = []
    pendidikan_candidates = []
    kkn_candidates = []
    gallery_candidates = []
    background_candidates = []

    out_rows = []
    for i, id in enumerate(sorted_ids):
        p = photos[id]
        
        if p['tech_status'] == 'NEEDS_REVIEW' and p['tech_score'] < 0:
            tier = 'REJECT-CANDIDATE'
        elif i < total * 0.1:
            tier = 'S-CANDIDATE'
        elif i < total * 0.35:
            tier = 'A-CANDIDATE'
        elif i < total * 0.75:
            tier = 'B-CANDIDATE'
        else:
            tier = 'C-CANDIDATE'
            
        tier_counts[tier] += 1
        
        pages = get_page_candidates(p['path'])
        prim = pages[0]
        sec1 = pages[1] if len(pages) > 1 else ''
        sec2 = pages[2] if len(pages) > 2 else ''
        
        if tier in ['S-CANDIDATE', 'A-CANDIDATE'] and 'HERO' not in pages and len(hero_candidates) < 5 and p['dup_decision'] in ['MASTER_CANDIDATE', 'UNIQUE']:
            prim = 'HERO'
            sec1 = pages[0]
            hero_candidates.append(p['filename'])
            
        if prim == 'ABOUT' and tier in ['S-CANDIDATE', 'A-CANDIDATE']: about_candidates.append(p['filename'])
        if prim == 'POTENSI' and tier in ['S-CANDIDATE', 'A-CANDIDATE']: potensi_candidates.append(p['filename'])
        if prim == 'PENDIDIKAN' and tier in ['S-CANDIDATE', 'A-CANDIDATE']: pendidikan_candidates.append(p['filename'])
        if prim == 'KKN' and tier in ['S-CANDIDATE', 'A-CANDIDATE']: kkn_candidates.append(p['filename'])
        if prim == 'GALLERY' and tier in ['S-CANDIDATE', 'A-CANDIDATE']: gallery_candidates.append(p['filename'])
        if 'BACKGROUND' in pages and tier in ['S-CANDIDATE', 'A-CANDIDATE']: background_candidates.append(p['filename'])

        # Normalize visual score to technical rank 1-100
        min_score = -10
        max_score = 30
        norm_score = max(1, min(100, int(((p['tech_score'] - min_score) / (max_score - min_score)) * 100)))

        out_rows.append({
            'id': id,
            'filename': p['filename'],
            'visual_tier': tier,
            'technical_rank': norm_score,
            'technical_score': round(p['tech_score'], 2),
            'editorial_confidence': 'LOW',
            'primary_page': prim,
            'secondary_page_1': sec1,
            'secondary_page_2': sec2,
            'story_type': '',
            'status': 'CANDIDATE' if tier in ['S-CANDIDATE', 'A-CANDIDATE'] else 'ARCHIVE',
            'duplicate_group': p['dup_group'],
            'duplicate_decision': p['dup_decision'],
            'reasoning': 'Automated via technical/context fallback.',
            'review_method': 'CONTEXT_FALLBACK'
        })
        
    out_rows.sort(key=lambda x: x['id'])

    with open(out_db, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=[
            'id', 'filename', 'visual_tier', 'technical_rank', 'technical_score', 'editorial_confidence',
            'primary_page', 'secondary_page_1', 'secondary_page_2',
            'story_type', 'status', 'duplicate_group', 'duplicate_decision',
            'reasoning', 'review_method'
        ])
        writer.writeheader()
        writer.writerows(out_rows)

    # Generate Report
    with open(report_md, 'w', encoding='utf-8') as f:
        f.write("# AUTO_CURATION_AUDIT.md\n\n")
        f.write("## 1. Dataset & Technical Ranking\n")
        f.write(f"- **Total Data**: {total} photos\n")
        f.write("- **Method**: `CONTEXT_FALLBACK` & `TECHNICAL_FALLBACK`\n")
        f.write("- **Important**: Scores are derived from objective metadata (Resolution, Blur, Exposure) and not true visual inspection.\n\n")
        
        f.write("### Visual Tier Distribution (Contextual Candidates)\n")
        f.write(f"- **S-CANDIDATE**: {tier_counts['S-CANDIDATE']} (Strong technical/context match)\n")
        f.write(f"- **A-CANDIDATE**: {tier_counts['A-CANDIDATE']}\n")
        f.write(f"- **B-CANDIDATE**: {tier_counts['B-CANDIDATE']}\n")
        f.write(f"- **C-CANDIDATE**: {tier_counts['C-CANDIDATE']}\n")
        f.write(f"- **REJECT-CANDIDATE**: {tier_counts['REJECT-CANDIDATE']} (Critical technical failure)\n\n")
        
        # Duplicate Analysis
        f.write("## 2. Duplicate Analysis\n")
        f.write("The previous duplicate detection grouped 602 out of 603 photos. Our audit reveals why this occurred:\n\n")
        f.write(f"- **Total duplicate groups**: {len([g for g in dup_groups if not g.startswith('DG-SINGLE')])}\n")
        sizes = [len(members) for g, members in dup_groups.items() if not g.startswith('DG-SINGLE')]
        f.write(f"- **Largest group size**: {max(sizes) if sizes else 0} photos\n")
        f.write(f"- **Smallest group size**: {min(sizes) if sizes else 0} photos\n")
        f.write(f"- **Singletons (unpaired photos)**: {singletons}\n")
        if hash_distances:
            f.write(f"- **Hash distance distribution**: Min={min(hash_distances)}, Max={max(hash_distances)}, Avg={sum(hash_distances)/len(hash_distances):.2f}\n")
        
        f.write("\n### Finding on Duplicate Grouping Aggression\n")
        f.write("The script utilized **transitive / chain similarity**. Since photos were taken in continuous bursts (e.g., event documentation), Photo A is similar to Photo B, B to C, and so on. The grouping script chained them together even when the distance between the first and last photo grew very large (e.g., max distance > 80). The grouping reflects **timeline sessions** rather than exact duplicates.\n\n")
        f.write("**Correction Applied:**\n")
        f.write("We no longer automatically discard similar photos. They are classified as `MASTER_CANDIDATE` or `SIMILAR_CANDIDATE` and kept in the database to preserve varying angles and contexts.\n\n")
        
        f.write("## 3. Context Mapping\n")
        f.write("Mapping to pages was performed using folder structures (e.g., GORO -> KKN/ABOUT). Since visual semantics were not explicitly seen by AI, confidence is set to `LOW`.\n\n")
        
        f.write("### Candidates Shortlist\n")
        f.write(f"- **Hero Candidates**: {len(hero_candidates)} found ({', '.join(hero_candidates) if hero_candidates else 'None'})\n")
        f.write(f"- **About/Desa Candidates**: {len(about_candidates)}\n")
        f.write(f"- **Potensi Candidates**: {len(potensi_candidates)}\n")
        f.write(f"- **Pendidikan Candidates**: {len(pendidikan_candidates)}\n")
        f.write(f"- **KKN Candidates**: {len(kkn_candidates)}\n")
        f.write(f"- **Gallery Candidates**: {len(gallery_candidates)}\n")
        f.write(f"- **Background Candidates**: {len(background_candidates)}\n\n")
        
        f.write("## 4. Potentially Problematic Decisions\n")
        f.write("- All contextual categorizations should be treated as suggestions.\n")
        f.write("- Photos penalized for 'blur' may actually be intentional artistic depth-of-field shots.\n")
        f.write("- Relying entirely on resolution and brightness means emotionally powerful photos taken in low light or lower resolutions may have been unfairly penalized.\n")

if __name__ == '__main__':
    main()
    print("Audit complete.")
