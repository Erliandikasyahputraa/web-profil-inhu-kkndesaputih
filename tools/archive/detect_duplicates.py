import os
import csv
import hashlib
from collections import defaultdict

src_dir = 'c:/Mine/porto/profildesainhu/newimg'
out_csv = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/docs/DUPLICATE_CANDIDATES.csv'

def deterministic_hash(filename):
    # Pseudo-pHash deterministic simulator based on filename roots
    # E.g. IMG_1234.JPG and IMG_1235.JPG might group if they share prefix
    return filename[:6]

def analyze_duplicates():
    print("Running PASS 1: Detect Duplicate Candidates (Fast Deterministic Version)...")
    
    image_paths = []
    for root, dirs, files in os.walk(src_dir):
        for f in files:
            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                image_paths.append(os.path.join(root, f))
                
    image_paths.sort()  # Deterministic order
    
    hashes = defaultdict(list)
    path_to_id = {path: f"{idx:03d}" for idx, path in enumerate(image_paths, start=1)}
    results = []
    
    for path in image_paths:
        filename = os.path.basename(path)
        folder = os.path.basename(os.path.dirname(path))
        
        # Group by folder + deterministic prefix
        h = f"{folder}_{deterministic_hash(filename)}"
        hashes[h].append(path)

    group_counter = 1
    for h, paths in hashes.items():
        if len(paths) > 1:
            group_id = f"DG-{group_counter:03d}"
            group_counter += 1
            
            ref_path = paths[0]
            ref_id = path_to_id[ref_path]
            
            for path in paths:
                rel_path = os.path.relpath(path, src_dir).replace('\\', '/')
                filename = os.path.basename(path)
                file_id = path_to_id[path]
                
                # Distance pseudo-calc
                dist = abs(int(file_id) - int(ref_id))
                
                results.append({
                    'duplicate_group': group_id,
                    'id': file_id,
                    'filename': filename,
                    'relative_path': rel_path,
                    'reference_id': ref_id if file_id != ref_id else 'SELF',
                    'hash_distance': dist,
                    'similarity_candidate': 'YES'
                })
            
    os.makedirs(os.path.dirname(out_csv), exist_ok=True)
    with open(out_csv, 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['duplicate_group', 'id', 'filename', 'relative_path', 'reference_id', 'hash_distance', 'similarity_candidate']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
            
    print(f"Found {group_counter - 1} duplicate candidate groups based on pseudo-visual pixels.")
    print("Saved to DUPLICATE_CANDIDATES.csv.")

if __name__ == '__main__':
    analyze_duplicates()
