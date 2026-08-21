import os
import csv
import sys

db_csv = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/docs/VISUAL_CURATION_DATABASE.csv'
tech_csv = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/docs/TECHNICAL_AUDIT.csv'

def validate():
    if not os.path.exists(db_csv):
        print("FAILURE: VISUAL_CURATION_DATABASE.csv not found.")
        sys.exit(1)
        
    with open(db_csv, 'r', encoding='utf-8') as f:
        reader = list(csv.DictReader(f))
        
    total_rows = len(reader)
    unique_ids = len(set(r['id'] for r in reader))
    
    if total_rows != 603:
        print(f"FAILURE: TOTAL ROWS = {total_rows}, expected 603.")
        sys.exit(1)
        
    if unique_ids != 603:
        print(f"FAILURE: UNIQUE IDS = {unique_ids}, expected 603.")
        sys.exit(1)
        
    reviewed_count = sum(1 for r in reader if r['reviewed'] == 'TRUE')
    
    # Check Pass 1 consistency
    with open(tech_csv, 'r', encoding='utf-8') as f:
        tech_data = {r['id']: r['filename'] for r in csv.DictReader(f)}
        
    for r in reader:
        if r['filename'] != tech_data.get(r['id']):
            print(f"FAILURE: PASS 1 DATA MODIFIED for ID {r['id']}")
            sys.exit(1)
            
        # Check constraints for valid fields (only if they are filled)
        if r['tier'] and r['tier'] not in ['S', 'A', 'B', 'C', 'REJECT']:
            print(f"FAILURE: Invalid tier {r['tier']} for ID {r['id']}")
            sys.exit(1)
            
        if r['status'] and r['status'] not in ['PRIMARY', 'SECONDARY', 'ARCHIVE', 'REJECT', 'PRIVATE']:
            print(f"FAILURE: Invalid status {r['status']} for ID {r['id']}")
            sys.exit(1)
            
        if r['primary_role'] and r['primary_role'] not in ['HERO', 'ABOUT', 'POTENSI', 'PENDIDIKAN', 'KKN', 'GALLERY', 'BACKGROUND', 'SUPPORTING']:
            print(f"FAILURE: Invalid primary role {r['primary_role']} for ID {r['id']}")
            sys.exit(1)

    print("VALIDATION SUCCESS")
    print(f"TOTAL: {total_rows}")
    print(f"UNIQUE IDS: {unique_ids}")
    print(f"REVIEWED: {reviewed_count}")
    print(f"PASS 1 INTEGRITY: OK")
    print(f"FIELD CONSTRAINTS: OK")

if __name__ == '__main__':
    validate()
