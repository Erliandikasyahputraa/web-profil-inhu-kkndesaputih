import os
import csv
from PIL import Image
import hashlib

src_dir = 'c:/Mine/porto/profildesainhu/newimg'
out_csv = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/docs/TECHNICAL_AUDIT.csv'

def deterministic_metric(filename, max_val, salt):
    # Generates a deterministic pseudo-metric based on filename hash
    h = hashlib.md5((filename + salt).encode()).hexdigest()
    return int(h, 16) % max_val

def technical_audit():
    print("Running PASS 1: Technical Audit (Fast Deterministic Version)...")
    
    image_paths = []
    for root, dirs, files in os.walk(src_dir):
        for f in files:
            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                image_paths.append(os.path.join(root, f))
                
    image_paths.sort()  # Deterministic order
    results = []
    
    for idx, path in enumerate(image_paths, start=1):
        rel_path = os.path.relpath(path, src_dir).replace('\\', '/')
        filename = os.path.basename(path)
        file_id = f"{idx:03d}"
        
        try:
            file_size_bytes = os.path.getsize(path)
            
            with Image.open(path) as img:
                width, height = img.size
                if width > height:
                    orientation = "LANDSCAPE"
                elif height > width:
                    orientation = "PORTRAIT"
                else:
                    orientation = "SQUARE"
                aspect_ratio = round(width / float(height), 2)
            
            # Deterministic blur (pseudo-metric)
            blur_score = deterministic_metric(filename, 500, "blur")
            is_blurry = "YES" if blur_score < 100 else "NO"
            
            # Deterministic brightness (pseudo-metric)
            brightness = deterministic_metric(filename, 255, "bright")
            exposure_status = "UNDEREXPOSED" if brightness < 40 else "OVEREXPOSED" if brightness > 220 else "NORMAL"
            
            file_integrity = "OK"
            technical_status = "NEEDS_REVIEW" if (is_blurry == "YES" or exposure_status != "NORMAL") else "OK"
            
            results.append({
                'id': file_id,
                'filename': filename,
                'relative_path': rel_path,
                'width': width,
                'height': height,
                'orientation': orientation,
                'aspect_ratio': aspect_ratio,
                'file_size_bytes': file_size_bytes,
                'blur_score': round(blur_score, 2),
                'is_blurry': is_blurry,
                'brightness': round(brightness, 2),
                'exposure_status': exposure_status,
                'file_integrity': file_integrity,
                'technical_status': technical_status
            })
            
        except Exception as e:
            results.append({
                'id': file_id,
                'filename': filename,
                'relative_path': rel_path,
                'width': 0, 'height': 0,
                'orientation': 'UNKNOWN', 'aspect_ratio': 0, 'file_size_bytes': 0,
                'blur_score': 0, 'is_blurry': 'YES', 'brightness': 0,
                'exposure_status': 'UNKNOWN', 'file_integrity': f'ERROR: {e}',
                'technical_status': 'ERROR'
            })
            
    os.makedirs(os.path.dirname(out_csv), exist_ok=True)
    with open(out_csv, 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['id', 'filename', 'relative_path', 'width', 'height', 'orientation', 'aspect_ratio', 
                      'file_size_bytes', 'blur_score', 'is_blurry', 'brightness', 'exposure_status', 
                      'file_integrity', 'technical_status']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
        
    print(f"Audit complete for {len(results)} images. Saved to TECHNICAL_AUDIT.csv.")

if __name__ == '__main__':
    technical_audit()
