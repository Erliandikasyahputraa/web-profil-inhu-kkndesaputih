import os
import csv
import shutil

BASE_IMG_DIR = r"C:\Mine\porto\profildesainhu\newimg"
PROJECT_DIR = r"C:\Mine\porto\profildesainhu\Desa Air Putih Digital Experience"
FINAL_CSV = os.path.join(PROJECT_DIR, "docs", "FINAL_PHOTO_SELECTION.csv")
DB_CSV = os.path.join(PROJECT_DIR, "docs", "PHOTO_CURATION_DATABASE.csv")
DEST_DIR = os.path.join(PROJECT_DIR, "public", "images", "final")

os.makedirs(DEST_DIR, exist_ok=True)

# Load DB for relative paths
db_paths = {}
with open(DB_CSV, "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        db_paths[row['id']] = row['relative_path']

# Load Final Selection and copy
count = 0
with open(FINAL_CSV, "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        pid = row['id']
        filename = row['filename']
        if pid in db_paths:
            src = os.path.join(BASE_IMG_DIR, db_paths[pid])
            dest = os.path.join(DEST_DIR, filename)
            if os.path.exists(src):
                shutil.copy2(src, dest)
                print(f"Copied {filename}")
                count += 1
            else:
                print(f"Missing: {src}")

print(f"Total copied: {count}")
