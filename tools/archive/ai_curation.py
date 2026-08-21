import os
import csv
import math

base_dir = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience'
tech_csv = os.path.join(base_dir, 'docs/TECHNICAL_AUDIT.csv')
dup_csv = os.path.join(base_dir, 'docs/DUPLICATE_CANDIDATES.csv')
out_db = os.path.join(base_dir, 'docs/PHOTO_CURATION_DATABASE.csv')
report_md = os.path.join(base_dir, 'docs/FINAL_VISUAL_CURATION_REPORT.md')

def get_page_candidates(path):
    p = path.upper()
    pages = []
    if 'AESTHETIC' in p or 'PEMANDANGAN' in p:
        pages.extend(['GALLERY', 'BACKGROUND'])
    if 'GORO' in p or 'PAWAI' in p or 'POSYANDU' in p or 'STUNTING' in p or 'TANAM POHON' in p or 'RUMAH DATAKU' in p:
        pages.append('KKN')
    if 'MTS' in p or 'SD' in p or 'TKA TPA' in p or 'PRAMUKA' in p or 'USTADZ' in p:
        pages.append('PENDIDIKAN')
    if 'UMKM' in p or 'TARI' in p or 'LANSIA' in p:
        pages.append('POTENSI')
    if 'KANTOR DESA' in p:
        pages.extend(['ABOUT', 'SUPPORTING'])
    
    if not pages:
        pages = ['GALLERY']
        
    return pages

def main():
    # Load tech data
    photos = {}
    with open(tech_csv, 'r', encoding='utf-8') as f:
        for row in csv.DictReader(f):
            id = row['id']
            # Calculate a base technical score
            w = int(row['width'])
            h = int(row['height'])
            res = (w * h) / 1000000.0  # MP
            blur = float(row['blur_score'])
            
            exp_pen = 0
            if row['exposure_status'] != 'NORMAL':
                exp_pen = 2
                
            blur_pen = blur / 100.0
            
            score = res - blur_pen - exp_pen
            
            photos[id] = {
                'id': id,
                'filename': row['filename'],
                'path': row['relative_path'],
                'res': res,
                'blur': blur,
                'exposure': row['exposure_status'],
                'tech_status': row['technical_status'],
                'raw_score': score,
                'dup_group': ''
            }

    # Load duplicates
    dup_groups = {}
    if os.path.exists(dup_csv):
        with open(dup_csv, 'r', encoding='utf-8') as f:
            for row in csv.DictReader(f):
                id = row['id']
                dg = row['duplicate_group']
                if id in photos:
                    photos[id]['dup_group'] = dg
                if dg not in dup_groups:
                    dup_groups[dg] = []
                dup_groups[dg].append(id)
    else:
        # If no duplicates file, just make unique groups
        for id in photos:
            photos[id]['dup_group'] = f"DG-{id}"
            dup_groups[f"DG-{id}"] = [id]

    # Determine masters and ensure all have dup_decision
    for id in photos:
        photos[id]['dup_decision'] = 'MASTER' # Default
        
    for dg, members in dup_groups.items():
        if len(members) > 1:
            # Sort members by raw_score desc
            members.sort(key=lambda x: photos[x]['raw_score'], reverse=True)
            for i, id in enumerate(members):
                if i == 0:
                    photos[id]['dup_decision'] = 'MASTER'
                else:
                    photos[id]['dup_decision'] = 'SECONDARY' if i < 3 else 'DISCARD'
                    # Penalize non-masters to ensure diversity
                    photos[id]['raw_score'] -= (i * 2)

    # Sort all by final raw score to assign Tiers
    sorted_ids = sorted(photos.keys(), key=lambda x: photos[x]['raw_score'], reverse=True)
    total = len(sorted_ids)
    
    tier_counts = {'S': 0, 'A': 0, 'B': 0, 'C': 0, 'REJECT': 0}
    page_counts = {'HERO': 0, 'ABOUT': 0, 'POTENSI': 0, 'PENDIDIKAN': 0, 'KKN': 0, 'GALLERY': 0, 'BACKGROUND': 0, 'SUPPORTING': 0}
    
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
        
        # Determine Tier
        if p['tech_status'] == 'NEEDS_REVIEW' and p['raw_score'] < 0:
            tier = 'REJECT'
        elif i < total * 0.1:
            tier = 'S'
        elif i < total * 0.35:
            tier = 'A'
        elif i < total * 0.75:
            tier = 'B'
        else:
            tier = 'C'
            
        tier_counts[tier] += 1
        
        pages = get_page_candidates(p['path'])
        prim = pages[0]
        sec1 = pages[1] if len(pages) > 1 else ''
        sec2 = pages[2] if len(pages) > 2 else ''
        
        if tier in ['S', 'A'] and 'HERO' not in pages and len(hero_candidates) < 5 and p['dup_decision'] == 'MASTER':
            prim = 'HERO'
            sec1 = pages[0]
            hero_candidates.append(p['filename'])
            
        page_counts[prim] += 1
        
        if prim == 'ABOUT' and tier in ['S', 'A'] and p['dup_decision'] == 'MASTER': about_candidates.append(p['filename'])
        if prim == 'POTENSI' and tier in ['S', 'A'] and p['dup_decision'] == 'MASTER': potensi_candidates.append(p['filename'])
        if prim == 'PENDIDIKAN' and tier in ['S', 'A'] and p['dup_decision'] == 'MASTER': pendidikan_candidates.append(p['filename'])
        if prim == 'KKN' and tier in ['S', 'A'] and p['dup_decision'] == 'MASTER': kkn_candidates.append(p['filename'])
        if prim == 'GALLERY' and tier in ['S', 'A'] and p['dup_decision'] == 'MASTER': gallery_candidates.append(p['filename'])
        if 'BACKGROUND' in pages and tier in ['S', 'A']: background_candidates.append(p['filename'])

        # Normalize visual score to 1-100 for display
        min_score = -10
        max_score = 30
        norm_score = max(1, min(100, int(((p['raw_score'] - min_score) / (max_score - min_score)) * 100)))

        status = 'PRIMARY' if tier in ['S', 'A'] else 'SECONDARY' if tier == 'B' else 'ARCHIVE'
        if tier == 'REJECT': status = 'REJECT'

        out_rows.append({
            'id': id,
            'filename': p['filename'],
            'tier': tier,
            'visual_score': norm_score,
            'confidence': 'LOW',
            'primary_page': prim,
            'secondary_page_1': sec1,
            'secondary_page_2': sec2,
            'story_type': '',
            'status': status,
            'duplicate_group': p['dup_group'],
            'duplicate_decision': p['dup_decision'],
            'reasoning': 'Automated curation based on technical metrics and folder context.',
            'review_method': 'TECHNICAL_FALLBACK'
        })
        
    out_rows.sort(key=lambda x: x['id'])

    with open(out_db, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=[
            'id', 'filename', 'tier', 'visual_score', 'confidence',
            'primary_page', 'secondary_page_1', 'secondary_page_2',
            'story_type', 'status', 'duplicate_group', 'duplicate_decision',
            'reasoning', 'review_method'
        ])
        writer.writeheader()
        writer.writerows(out_rows)

    # Generate Report
    with open(report_md, 'w', encoding='utf-8') as f:
        f.write("# FINAL VISUAL CURATION REPORT\n\n")
        f.write(f"**1. Dataset**: {total} photos\n")
        f.write(f"**2. Coverage**: {total} / {total}\n\n")
        
        f.write("### 3. Tier Distribution\n")
        f.write(f"- **S**: {tier_counts['S']}\n")
        f.write(f"- **A**: {tier_counts['A']}\n")
        f.write(f"- **B**: {tier_counts['B']}\n")
        f.write(f"- **C**: {tier_counts['C']}\n")
        f.write(f"- **REJECT**: {tier_counts['REJECT']}\n\n")
        
        f.write(f"### 4. Duplicate Groups\n")
        f.write(f"Total similarity groups: {len(dup_groups)}\n\n")
        
        website_worthy = tier_counts['S'] + tier_counts['A']
        f.write(f"### 5. Final Website-Worthy Count\n")
        f.write(f"**{website_worthy}** photos (Tiers S & A)\n\n")
        
        f.write("### 6. Hero Candidates\n")
        f.write(", ".join(hero_candidates) if hero_candidates else "None")
        f.write("\n\n")
        
        f.write("### 7. About / Desa Candidates\n")
        f.write(", ".join(about_candidates[:10]) + ("..." if len(about_candidates)>10 else ""))
        f.write("\n\n")
        
        f.write("### 8. Potensi Candidates\n")
        f.write(", ".join(potensi_candidates[:10]) + ("..." if len(potensi_candidates)>10 else ""))
        f.write("\n\n")
        
        f.write("### 9. Pendidikan Candidates\n")
        f.write(", ".join(pendidikan_candidates[:10]) + ("..." if len(pendidikan_candidates)>10 else ""))
        f.write("\n\n")
        
        f.write("### 10. KKN Candidates\n")
        f.write(", ".join(kkn_candidates[:10]) + ("..." if len(kkn_candidates)>10 else ""))
        f.write("\n\n")
        
        f.write("### 11. Gallery Candidates\n")
        f.write(", ".join(gallery_candidates[:10]) + ("..." if len(gallery_candidates)>10 else ""))
        f.write("\n\n")
        
        f.write("### 12. Background Candidates\n")
        f.write(", ".join(background_candidates[:10]) + ("..." if len(background_candidates)>10 else ""))
        f.write("\n\n")
        
        f.write("### 13. Low-Confidence Decisions\n")
        f.write(f"All {total} photos were curated using TECHNICAL_FALLBACK due to lack of bulk vision API capabilities in this environment. Confidence is marked as LOW.\n\n")
        
        f.write("### 14. Photos Requiring Human Verification\n")
        f.write("Tiers S and A should be visually verified by the Creative Director prior to publishing to ensure storytelling alignment.\n\n")
        
        f.write("### 15. Overall Confidence\n")
        f.write("LOW (Deterministic via technical metadata only)\n")

if __name__ == '__main__':
    main()
    print("Curation complete!")
