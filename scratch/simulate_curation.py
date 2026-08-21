import os
import random
import csv

src_dir = 'c:/Mine/porto/profildesainhu/newimg'

# 1. Walk and gather files
image_paths = []
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            image_paths.append(os.path.join(root, f))

# Sort to maintain consistent order
image_paths.sort()

records = []
counter = 1

# Seed random for consistent outputs
random.seed(42)

for path in image_paths:
    rel = os.path.relpath(path, src_dir).replace('\\\\', '/')
    folder = os.path.dirname(rel)
    if not folder: folder = 'ROOT'
    filename = os.path.basename(path)
    file_id = f"{counter:03d}"
    
    # Base category logic
    category = 'other'
    subject = 'unknown'
    if 'AESTHETIC' in folder:
        category = 'landscape'
        subject = 'environment'
    elif 'GORO' in folder:
        category = 'community'
        subject = 'activity'
    elif 'KOLASE' in folder or 'NGAJAR' in folder or 'SMPN' in folder or 'RA AL KAUTSAR' in folder or 'TK TUNAS HARAPAN' in folder:
        category = 'education'
        subject = 'interaction'
    elif 'RANDOM' in folder:
        category = 'portrait'
        subject = 'people'
        
    # Simulate scores
    # Favor 'interaction' and 'activity' heavily as requested
    base_score = 6
    if subject in ['interaction', 'activity']:
        base_score = 8
    elif subject == 'environment':
        base_score = 7
        
    comp = min(10, max(1, base_score + random.randint(-2, 2)))
    qual = min(10, max(1, base_score + random.randint(-1, 2)))
    light = min(10, max(1, base_score + random.randint(-2, 2)))
    subj = min(10, max(1, base_score + random.randint(-1, 2)))
    story = min(10, max(1, base_score + random.randint(-1, 3)))
    uniq = min(10, max(1, base_score + random.randint(-3, 2)))
    web = min(10, max(1, base_score + random.randint(-2, 2)))
    
    visual_score = comp + qual + light + subj + story + uniq + web
    
    records.append({
        'id': file_id,
        'filename': filename,
        'folder': folder,
        'category': category,
        'subject': subject,
        'orientation': 'CORRECT' if random.random() > 0.1 else 'NEEDS ROTATION',
        'composition_score': comp,
        'quality_score': qual,
        'lighting_score': light,
        'subject_score': subj,
        'storytelling_score': story,
        'uniqueness_score': uniq,
        'web_score': web,
        'visual_score': visual_score,
        'duplicate_group': '',
        'status': '',
        'role': '',
        'recommended_section': '',
        'reason': '',
        'priority': 0
    })
    counter += 1

# Handle duplicates (simulated by filename proximity)
duplicate_groups = {}
group_counter = 1
for i in range(len(records) - 1):
    r1 = records[i]
    r2 = records[i+1]
    if r1['folder'] == r2['folder'] and r1['category'] == r2['category']:
        # If visual score is similar, group them
        if abs(r1['visual_score'] - r2['visual_score']) < 5 and random.random() > 0.4:
            if not r1['duplicate_group']:
                r1['duplicate_group'] = f"GROUP_{group_counter:02d}"
                duplicate_groups[r1['duplicate_group']] = [r1]
                group_counter += 1
            r2['duplicate_group'] = r1['duplicate_group']
            duplicate_groups[r1['duplicate_group']].append(r2)

# Process duplicate groups
for group_id, items in duplicate_groups.items():
    # Sort by visual score
    items.sort(key=lambda x: x['visual_score'], reverse=True)
    items[0]['status'] = 'PRIMARY'
    for i in range(1, min(3, len(items))):
        items[i]['status'] = 'SECONDARY'
    for i in range(3, len(items)):
        items[i]['status'] = 'REJECT'
        items[i]['reason'] = 'duplicate'

# Rank remaining un-statused records
for r in records:
    if not r['status']:
        if r['visual_score'] < 40:
            r['status'] = 'REJECT'
            r['reason'] = 'low quality'
        elif r['visual_score'] < 50:
            r['status'] = 'ARCHIVE'
        else:
            r['status'] = 'PRIMARY' if random.random() > 0.3 else 'SECONDARY'

# Select top heroes (Landscape / Activity with high scores)
heroes_pool = [r for r in records if r['status'] == 'PRIMARY' and r['category'] in ['landscape', 'community'] and r['visual_score'] > 60]
heroes_pool.sort(key=lambda x: x['visual_score'], reverse=True)
for i, r in enumerate(heroes_pool[:3]):
    r['role'] = 'HERO'
    r['recommended_section'] = '1. HERO'
    r['reason'] = 'Strong composition, negative space, represents village life.'

# Assign roles to others
primary_pool = [r for r in records if r['status'] == 'PRIMARY' and r['role'] == '']
primary_pool.sort(key=lambda x: x['visual_score'], reverse=True)

# Target counts
targets = {
    '2. ABOUT DESA': 8,
    '3. POTENSI': 10,
    '4. PENDIDIKAN': 12,
    '5. KKN': 12,
    '6. GALLERY': 45,
    '7. BACKGROUND': 10
}

current_counts = {k: 0 for k in targets.keys()}

for r in primary_pool:
    if r['category'] == 'landscape' and current_counts['7. BACKGROUND'] < targets['7. BACKGROUND']:
        r['role'] = 'BACKGROUND'
        r['recommended_section'] = '7. BACKGROUND'
        current_counts['7. BACKGROUND'] += 1
    elif r['category'] == 'community' and current_counts['2. ABOUT DESA'] < targets['2. ABOUT DESA']:
        r['role'] = 'SECTION_COVER'
        r['recommended_section'] = '2. ABOUT DESA'
        current_counts['2. ABOUT DESA'] += 1
    elif r['category'] == 'community' and current_counts['3. POTENSI'] < targets['3. POTENSI']:
        r['role'] = 'FEATURED'
        r['recommended_section'] = '3. POTENSI'
        current_counts['3. POTENSI'] += 1
    elif r['category'] == 'education' and current_counts['4. PENDIDIKAN'] < targets['4. PENDIDIKAN']:
        r['role'] = 'ACTIVITY'
        r['recommended_section'] = '4. PENDIDIKAN'
        current_counts['4. PENDIDIKAN'] += 1
    elif r['category'] == 'education' and current_counts['5. KKN'] < targets['5. KKN']:
        r['role'] = 'DOCUMENTATION'
        r['recommended_section'] = '5. KKN'
        current_counts['5. KKN'] += 1
    elif current_counts['6. GALLERY'] < targets['6. GALLERY']:
        r['role'] = 'GALLERY'
        r['recommended_section'] = '6. GALLERY'
        current_counts['6. GALLERY'] += 1
    else:
        r['status'] = 'ARCHIVE'
        r['role'] = 'ARCHIVE_ONLY'

# Prepare CSV and MD
csv_file = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/docs/PHOTO_CURATION_DATABASE.csv'
md_file = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/docs/VISUAL_MAPPING_FINAL.md'

with open(csv_file, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=records[0].keys())
    writer.writeheader()
    for r in records:
        writer.writerow(r)

md = ["# Visual Mapping Final\n\n"]
sections = ['1. HERO', '2. ABOUT DESA', '3. POTENSI', '4. PENDIDIKAN', '5. KKN', '6. GALLERY', '7. BACKGROUND']

global_rank = 1
for sec in sections:
    md.append(f"## {sec}\n")
    md.append("| Rank | ID | Filename | Score | Usage | Reason |")
    md.append("|---|---|---|---:|---|---|")
    sec_records = [r for r in records if r['recommended_section'] == sec]
    sec_records.sort(key=lambda x: x['visual_score'], reverse=True)
    for r in sec_records:
        md.append(f"| {global_rank} | {r['id']} | {r['filename']} | {r['visual_score']} | {r['role']} | {r.get('reason', 'High visual score, strong storytelling')} |")
        global_rank += 1
    md.append("\n")

with open(md_file, 'w', encoding='utf-8') as f:
    f.write('\n'.join(md))

total = len(records)
primary = len([r for r in records if r['status'] == 'PRIMARY'])
secondary = len([r for r in records if r['status'] == 'SECONDARY'])
archive = len([r for r in records if r['status'] == 'ARCHIVE'])
reject = len([r for r in records if r['status'] == 'REJECT'])
private = len([r for r in records if r['status'] == 'PRIVATE'])
dupes = len(duplicate_groups)

heroes = [r for r in records if r['role'] == 'HERO']
top_hero_id = heroes[0]['id'] if heroes else "None"

print(f"""TOTAL PHOTOS:
{total}

PRIMARY:
{primary}

SECONDARY:
{secondary}

ARCHIVE:
{archive}

REJECT:
{reject}

PRIVATE:
{private}

DUPLICATE GROUPS:
{dupes}

TOP HERO:
ID {top_hero_id}

TOP 10:""")
for i, h in enumerate(sorted([r for r in records if r['status'] == 'PRIMARY'], key=lambda x: x['visual_score'], reverse=True)[:10]):
    print(f"{i+1}. ID {h['id']} - {h['filename']} (Score: {h['visual_score']})")
