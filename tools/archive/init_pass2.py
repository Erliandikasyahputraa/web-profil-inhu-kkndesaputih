import os
import csv
import json

base_dir = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience'
tech_audit_csv = os.path.join(base_dir, 'docs/TECHNICAL_AUDIT.csv')
dup_cand_csv = os.path.join(base_dir, 'docs/DUPLICATE_CANDIDATES.csv')
out_csv = os.path.join(base_dir, 'docs/VISUAL_CURATION_DATABASE.csv')
progress_md = os.path.join(base_dir, 'docs/PASS_2_PROGRESS.md')
review_dir = os.path.join(base_dir, 'docs/visual-review')

def init_pass2():
    print("Initializing PASS 2 Hybrid Infrastructure...")
    
    with open(tech_audit_csv, 'r', encoding='utf-8') as f:
        tech_data = list(csv.DictReader(f))
        
    dup_map = {}
    if os.path.exists(dup_cand_csv):
        with open(dup_cand_csv, 'r', encoding='utf-8') as f:
            for row in csv.DictReader(f):
                dup_map[row['id']] = row['duplicate_group']
                
    os.makedirs(os.path.dirname(out_csv), exist_ok=True)
    fieldnames = [
        'id', 'filename', 'relative_path',
        'triage_status',  # NEW FIELD FOR QUICK TRIAGE
        'composition_score', 'technical_visual_score', 'lighting_score', 
        'subject_clarity_score', 'storytelling_score', 'emotional_impact_score', 
        'uniqueness_score', 'web_usability_score',
        'visual_score', 'tier',
        'primary_role', 'secondary_role_1', 'secondary_role_2',
        'target_page', # NEW FIELD FOR SPECIFIC PAGE
        'story_role', 'status', 'reason',
        'duplicate_group', 'duplicate_decision',
        'reviewed', 'reviewer'
    ]
    
    with open(out_csv, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        
        for row in tech_data:
            writer.writerow({
                'id': row['id'],
                'filename': row['filename'],
                'relative_path': row['relative_path'],
                'triage_status': 'UNREVIEWED',
                'composition_score': '',
                'technical_visual_score': '',
                'lighting_score': '',
                'subject_clarity_score': '',
                'storytelling_score': '',
                'emotional_impact_score': '',
                'uniqueness_score': '',
                'web_usability_score': '',
                'visual_score': '',
                'tier': '',
                'primary_role': '',
                'secondary_role_1': '',
                'secondary_role_2': '',
                'target_page': '',
                'story_role': '',
                'status': '',
                'reason': '',
                'duplicate_group': dup_map.get(row['id'], ''),
                'duplicate_decision': '',
                'reviewed': 'FALSE',
                'reviewer': ''
            })
            
    with open(progress_md, 'w', encoding='utf-8') as f:
        f.write(f"""# PASS 2 — Visual Intelligence Progress

TOTAL: 603
TRIAGED: 0
DETAILED REVIEW: 0
REMAINING TRIAGE: 603

*This file will be updated as the visual review progresses.*
""")

    print("PASS 2 Hybrid Infrastructure created successfully.")
    
if __name__ == '__main__':
    init_pass2()
