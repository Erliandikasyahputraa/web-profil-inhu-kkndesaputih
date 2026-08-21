import os
import csv
import sys

csv1 = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/docs/TECHNICAL_AUDIT.csv'
csv2 = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/docs/DUPLICATE_CANDIDATES.csv'
md_out = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/docs/PASS_1_REPORT.md'

def generate_report():
    if not os.path.exists(csv1):
        print("FAILURE: TECHNICAL_AUDIT.csv not found.")
        sys.exit(1)
        
    with open(csv1, 'r', encoding='utf-8') as f:
        reader = list(csv.DictReader(f))
        
    total_rows = len(reader)
    unique_ids = len(set(r['id'] for r in reader))
    unique_filenames = len(set(r['filename'] for r in reader))
    
    if total_rows != 603:
        print(f"FAILURE: TECHNICAL_AUDIT ROWS = {total_rows}, expected 603.")
        sys.exit(1)
        
    landscape = sum(1 for r in reader if r['orientation'] == 'LANDSCAPE')
    portrait = sum(1 for r in reader if r['orientation'] == 'PORTRAIT')
    square = sum(1 for r in reader if r['orientation'] == 'SQUARE')
    blurry = sum(1 for r in reader if r['is_blurry'] == 'YES')
    exposure_cand = sum(1 for r in reader if r['exposure_status'] != 'NORMAL')
    corrupt = sum(1 for r in reader if r['file_integrity'] != 'OK')
    other = sum(1 for r in reader if r['technical_status'] not in ['OK', 'NEEDS_REVIEW'])
    
    dup_groups = 0
    dup_candidates = 0
    
    if os.path.exists(csv2):
        with open(csv2, 'r', encoding='utf-8') as f:
            reader2 = list(csv.DictReader(f))
            dup_candidates = len(reader2)
            dup_groups = len(set(r['duplicate_group'] for r in reader2))
            
    print(f"TOTAL IMAGES: {total_rows}")
    print(f"TECHNICAL AUDIT ROWS: {total_rows}")
    print(f"UNIQUE IDS: {unique_ids}")
    print(f"UNIQUE FILENAMES: {unique_filenames}")
    print(f"BLUR CANDIDATES: {blurry}")
    print(f"EXPOSURE CANDIDATES: {exposure_cand}")
    print(f"DUPLICATE CANDIDATES: {dup_candidates}")
    print(f"DUPLICATE GROUPS: {dup_groups}")
    
    md_content = f"""# PASS 1 — Technical Audit

## Dataset
603 photos

## Coverage
{total_rows} / 603

## Technical findings

- Landscape: {landscape}
- Portrait: {portrait}
- Square: {square}
- Potentially blurry: {blurry}
- Exposure candidates: {exposure_cand}
- Corrupt/unreadable: {corrupt}
- Other technical issues: {other}

## Duplicate candidates

- Candidate groups: {dup_groups}
- Candidate images: {dup_candidates}
"""
    with open(md_out, 'w', encoding='utf-8') as f:
        f.write(md_content)
        
    print(f"Successfully generated {md_out}")

if __name__ == '__main__':
    generate_report()
