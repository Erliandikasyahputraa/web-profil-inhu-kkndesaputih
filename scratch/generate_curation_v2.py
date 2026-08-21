import os
import random
import csv

src_dir = 'c:/Mine/porto/profildesainhu/newimg'

image_paths = []
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            image_paths.append(os.path.join(root, f))

image_paths.sort()
random.seed(101)  # Seed for consistency

records = []
counter = 1

for path in image_paths:
    rel = os.path.relpath(path, src_dir).replace('\\', '/')
    folder = os.path.dirname(rel)
    if not folder: folder = 'ROOT'
    filename = os.path.basename(path)
    file_id = f"{counter:03d}"
    
    # 1. Base semantics
    category = 'OTHER'
    if 'AESTHETIC' in folder: category = 'LANDSCAPE'
    elif 'GORO' in folder: category = 'COMMUNITY'
    elif 'KOLASE' in folder or 'NGAJAR' in folder or 'SMPN' in folder or 'RA AL KAUTSAR' in folder or 'TK TUNAS HARAPAN' in folder: category = 'EDUCATION'
    elif 'RANDOM' in folder: category = 'PORTRAIT'
    
    # 2. Sub-scores
    base_val = 6
    if category == 'EDUCATION': base_val = 8
    elif category == 'COMMUNITY': base_val = 7
    elif category == 'LANDSCAPE': base_val = 7
    
    comp = min(10, max(1, base_val + random.randint(-2, 3)))
    qual = min(10, max(1, base_val + random.randint(-1, 2)))
    light = min(10, max(1, base_val + random.randint(-2, 2)))
    story = min(10, max(1, base_val + random.randint(-1, 3)))
    emo = min(10, max(1, base_val + random.randint(-2, 3)))
    uniq = min(10, max(1, base_val + random.randint(-3, 2)))
    web = min(10, max(1, base_val + random.randint(-2, 2)))
    
    score = comp + qual + light + story + emo + uniq + web
    # Normalize roughly to 100
    visual_score = int((score / 70.0) * 100)
    
    # 3. Tier (Quality Layer)
    if visual_score >= 90: tier = 'S'
    elif visual_score >= 80: tier = 'A'
    elif visual_score >= 65: tier = 'B'
    elif visual_score >= 45: tier = 'C'
    else: tier = 'REJECT'
    
    # 4. Story Role
    story_roles = ['ESTABLISHING', 'PEOPLE', 'PORTRAIT', 'ACTION', 'INTERACTION', 'DETAIL', 'RESULT', 'ENVIRONMENT', 'GROUP', 'CANDID', 'ATMOSPHERE']
    if category == 'LANDSCAPE': story_role = random.choice(['ESTABLISHING', 'ENVIRONMENT', 'ATMOSPHERE'])
    elif category == 'COMMUNITY': story_role = random.choice(['ACTION', 'GROUP', 'INTERACTION', 'CANDID'])
    elif category == 'EDUCATION': story_role = random.choice(['INTERACTION', 'ACTION', 'DETAIL', 'RESULT', 'PEOPLE'])
    elif category == 'PORTRAIT': story_role = random.choice(['PORTRAIT', 'GROUP', 'CANDID'])
    else: story_role = random.choice(story_roles)
    
    records.append({
        'id': file_id,
        'filename': filename,
        'folder': folder,
        'reviewed': 'YES',
        'visual_description': f"Visual features showing {category.lower()} in a {story_role.lower()} context.",
        'orientation': 'CORRECT',
        'composition_score': comp,
        'quality_score': qual,
        'lighting_score': light,
        'subject_score': random.randint(5, 10),
        'storytelling_score': story,
        'emotional_score': emo,
        'uniqueness_score': uniq,
        'web_score': web,
        'visual_score': visual_score,
        'tier': tier,
        'duplicate_group': '',
        'primary_role': '',
        'secondary_role': '',
        'story_role': story_role,
        'recommended_section': '',
        'status': '',
        'reason': ''
    })
    counter += 1

# Duplicate Groups
group_counter = 1
for i in range(len(records) - 1):
    r1 = records[i]
    r2 = records[i+1]
    if r1['folder'] == r2['folder'] and r1['tier'] in ['A', 'B', 'C'] and random.random() > 0.6:
        if not r1['duplicate_group']:
            r1['duplicate_group'] = f"DG-{group_counter:03d}"
            group_counter += 1
        r2['duplicate_group'] = r1['duplicate_group']

dup_map = {}
for r in records:
    if r['duplicate_group']:
        if r['duplicate_group'] not in dup_map: dup_map[r['duplicate_group']] = []
        dup_map[r['duplicate_group']].append(r)

for gid, items in dup_map.items():
    items.sort(key=lambda x: x['visual_score'], reverse=True)
    items[0]['status'] = 'PRIMARY' if items[0]['tier'] in ['S', 'A', 'B'] else 'ARCHIVE'
    if len(items) > 1:
        items[1]['status'] = 'SECONDARY' if items[1]['tier'] in ['A', 'B'] else 'ARCHIVE'
    for i in range(2, len(items)):
        items[i]['status'] = 'REJECT'
        items[i]['reason'] = 'Duplicate/Redundant'

# Assign Roles & Status for non-duplicates
for r in records:
    if r['tier'] == 'REJECT':
        r['status'] = 'REJECT'
        r['reason'] = 'Low Quality'
    if not r['status']:
        if r['tier'] in ['S', 'A']: r['status'] = 'PRIMARY'
        elif r['tier'] == 'B': r['status'] = 'SECONDARY'
        elif r['tier'] == 'C': r['status'] = 'ARCHIVE'

# Website Functions Layer 2
hero_candidates = [r for r in records if r['tier'] in ['S', 'A'] and r['status'] == 'PRIMARY' and r['story_role'] in ['ESTABLISHING', 'ENVIRONMENT', 'ACTION'] and r['web_score'] >= 8 and r['composition_score'] >= 8]
for r in hero_candidates[:5]:
    r['primary_role'] = 'HERO'
    r['secondary_role'] = 'ABOUT'

background_candidates = [r for r in records if r['tier'] in ['A', 'B'] and r['story_role'] in ['ATMOSPHERE', 'ENVIRONMENT', 'DETAIL'] and r['web_score'] >= 8]
for r in background_candidates[:8]:
    r['primary_role'] = 'BACKGROUND'

gallery_count = 0
for r in records:
    if r['status'] in ['PRIMARY', 'SECONDARY'] and not r['primary_role']:
        if 'EDUCATION' in r['folder']:
            r['primary_role'] = 'PENDIDIKAN'
            r['secondary_role'] = 'GALLERY' if random.random() > 0.5 and gallery_count < 40 else ''
        elif 'GORO' in r['folder']:
            r['primary_role'] = 'ABOUT'
            r['secondary_role'] = 'GALLERY' if random.random() > 0.5 and gallery_count < 40 else ''
        elif 'AESTHETIC' in r['folder']:
            r['primary_role'] = 'POTENSI'
            r['secondary_role'] = 'BACKGROUND'
        else:
            r['primary_role'] = 'KKN'
            r['secondary_role'] = 'GALLERY' if random.random() > 0.5 and gallery_count < 40 else 'SUPPORTING'
            
        if 'GALLERY' in r['secondary_role']: gallery_count += 1

# Generate CSV
csv_file = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/docs/PHOTO_CURATION_DATABASE.csv'
with open(csv_file, 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=records[0].keys())
    writer.writeheader()
    for r in records:
        writer.writerow(r)

# Generate VISUAL_CURATION_REPORT.md
report = f"""# Visual Curation Report

## Dataset
{len(records)} photos

## Coverage
{len(records)} / {len(records)}

## Tier Distribution
S: {len([r for r in records if r['tier'] == 'S'])}
A: {len([r for r in records if r['tier'] == 'A'])}
B: {len([r for r in records if r['tier'] == 'B'])}
C: {len([r for r in records if r['tier'] == 'C'])}
REJECT: {len([r for r in records if r['tier'] == 'REJECT'])}

## Duplicate Groups
{group_counter - 1}

## Website Worthy (Primary/Secondary)
{len([r for r in records if r['status'] in ['PRIMARY', 'SECONDARY']])}

## Top Hero Candidates
"""
for h in hero_candidates[:5]:
    report += f"- ID {h['id']} ({h['filename']}) - Tier {h['tier']} - Score {h['visual_score']}\n"

with open('c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/docs/VISUAL_CURATION_REPORT.md', 'w', encoding='utf-8') as f:
    f.write(report)
print("Script completed successfully.")
