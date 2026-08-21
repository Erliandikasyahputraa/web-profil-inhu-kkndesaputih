import os
import glob
import sys
from PIL import Image

src_dir = 'c:/Mine/porto/profildesainhu/newimg'
out_dir = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/docs/contact_sheet'
thumb_dir = os.path.join(out_dir, 'thumbnails')

os.makedirs(thumb_dir, exist_ok=True)

print("Memulai pembuatan Visual Contact Sheet...")
sys.stdout.flush()

html_content = ["""
<!DOCTYPE html>
<html lang='id'>
<head>
    <meta charset='UTF-8'>
    <title>Visual Contact Sheet - Desa Air Putih</title>
    <style>
        body { font-family: sans-serif; background: #FAF9F6; color: #1A1A1A; padding: 2rem; }
        h1 { font-family: serif; border-bottom: 2px solid #2C3E2D; padding-bottom: 0.5rem; }
        h2 { font-family: serif; color: #2C3E2D; margin-top: 3rem; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; }
        .card { background: white; border: 1px solid #E5E7EB; border-radius: 4px; padding: 0.5rem; text-align: center; }
        .card img { max-width: 100%; height: auto; border-radius: 2px; }
        .card .id { font-weight: bold; margin-top: 0.5rem; font-size: 1.1rem; }
        .card .filename { font-size: 0.7rem; color: #6B7280; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    </style>
</head>
<body>
    <h1>VISUAL CONTACT SHEET (603 PHOTOS)</h1>
    <p>Silakan tinjau thumbnail berikut berdasarkan ID untuk mapping visual.</p>
"""]

image_paths = []
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            image_paths.append(os.path.join(root, f))

total_images = len(image_paths)
print(f"Total foto ditemukan: {total_images}")
sys.stdout.flush()

grouped = {}
for path in image_paths:
    rel = os.path.relpath(path, src_dir)
    folder = os.path.dirname(rel)
    if not folder: folder = 'ROOT'
    if folder not in grouped: grouped[folder] = []
    grouped[folder].append((path, rel))

mapping_md = ["""# MAPPING VISUAL ASSET (DRAFT)

Gunakan tabel ini untuk mengisi hasil review dari `docs/contact_sheet/CONTACT_SHEET.html`.

| ID | Nama File | Konten Visual | Bisa Untuk Halaman / Scene |
|----|-----------|---------------|----------------------------|"""]

counter = 1
for folder in sorted(grouped.keys()):
    html_content.append(f"<h2>{folder}</h2>\n<div class='grid'>")
    for path, rel in sorted(grouped[folder], key=lambda x: x[1]):
        file_id = f"{counter:03d}"
        filename = os.path.basename(path)
        
        thumb_path = os.path.join(thumb_dir, f"{file_id}.jpg")
        if not os.path.exists(thumb_path):
            try:
                with Image.open(path) as img:
                    img.thumbnail((300, 300))
                    if img.mode in ('RGBA', 'P'):
                        img = img.convert('RGB')
                    img.save(thumb_path, 'JPEG', quality=70)
            except Exception as e:
                print(f"Error pada file {filename}: {e}")
                
        html_content.append(f"""
            <div class='card'>
                <img src='thumbnails/{file_id}.jpg' loading='lazy' alt='{file_id}' />
                <div class='id'>ID: {file_id}</div>
                <div class='filename'>{filename}</div>
            </div>
        """)
        
        mapping_md.append(f"| {file_id} | {filename} | | |")
        
        if counter % 20 == 0:
            print(f"Progress: Memproses thumbnail {counter} dari {total_images}...")
            sys.stdout.flush()
            
        counter += 1
    html_content.append("</div>")

html_content.append("</body></html>")

with open(os.path.join(out_dir, 'CONTACT_SHEET.html'), 'w', encoding='utf-8') as f:
    f.write('\n'.join(html_content))

with open('c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/docs/VISUAL_MAPPING_TEMPLATE.md', 'w', encoding='utf-8') as f:
    f.write('\n'.join(mapping_md))

print(f"\nSELESAI! Contact sheet berhasil dibuat dengan {counter-1} thumbnails.")
sys.stdout.flush()
