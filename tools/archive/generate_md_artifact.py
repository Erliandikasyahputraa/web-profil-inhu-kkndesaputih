import os

artifact_dir = 'C:/Users/acer/.gemini/antigravity-ide/brain/a52c3b0c-1afc-40eb-8cf1-db3b465cd88d/scratch/contact-sheets'

md = ["""# 📸 Visual Contact Sheets (PASS 2)

Gunakan *contact sheets* ini untuk melakukan **Visual Intelligence Audit**. 
Setiap sheet berisi maksimal 25 foto beserta ID unik yang akan digunakan untuk final `PHOTO_CURATION_DATABASE.csv`.

> [!TIP]
> **Creative Director:** Anda dapat merekomendasikan ID secara manual berdasarkan gambar-gambar di bawah ini, atau menggunakan script `technical_audit.py` dan `detect_duplicates.py` untuk membantu filter masalah teknis secara otomatis sebelum melakukan mapping Tier dan Role.

---
"""]

for i in range(1, 26):
    sheet_name = f"sheet_{i:03d}.jpg"
    path = os.path.join(artifact_dir, sheet_name).replace('\\', '/')
    md.append(f"## Sheet {i:03d}")
    md.append(f"![Contact Sheet {i}]({path})")
    md.append("---")

with open('C:/Users/acer/.gemini/antigravity-ide/brain/a52c3b0c-1afc-40eb-8cf1-db3b465cd88d/VISUAL_CONTACT_SHEETS.md', 'w', encoding='utf-8') as f:
    f.write('\n'.join(md))

print('Artifact created.')
