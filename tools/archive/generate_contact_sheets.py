import os
from PIL import Image, ImageDraw, ImageFont

src_dir = 'c:/Mine/porto/profildesainhu/newimg'
artifact_dir = 'C:/Users/acer/.gemini/antigravity-ide/brain/a52c3b0c-1afc-40eb-8cf1-db3b465cd88d/scratch/contact-sheets'
local_dir = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience/contact-sheets'

os.makedirs(artifact_dir, exist_ok=True)
os.makedirs(local_dir, exist_ok=True)

image_paths = []
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            image_paths.append(os.path.join(root, f))
image_paths.sort()

# Configuration for contact sheet
thumb_w = 400
thumb_h = 400
cols = 5
rows = 5
padding = 40
margin = 60
text_h = 40

sheet_w = margin * 2 + cols * thumb_w + (cols - 1) * padding
sheet_h = margin * 2 + rows * (thumb_h + text_h) + (rows - 1) * padding

try:
    font = ImageFont.truetype("arial.ttf", 20)
except:
    font = ImageFont.load_default()

counter = 1
sheet_num = 1
current_img_idx = 0

while current_img_idx < len(image_paths):
    sheet = Image.new('RGB', (sheet_w, sheet_h), (250, 249, 246))
    draw = ImageDraw.Draw(sheet)
    
    # Title
    draw.text((margin, 20), f"CONTACT SHEET {sheet_num:03d}", fill=(44, 62, 45), font=font)
    
    for row in range(rows):
        for col in range(cols):
            if current_img_idx >= len(image_paths):
                break
                
            path = image_paths[current_img_idx]
            filename = os.path.basename(path)
            file_id = f"{counter:03d}"
            
            x = margin + col * (thumb_w + padding)
            y = margin + row * (thumb_h + text_h + padding)
            
            try:
                with Image.open(path) as img:
                    img.thumbnail((thumb_w, thumb_h))
                    if img.mode in ('RGBA', 'P'):
                        img = img.convert('RGB')
                    
                    # Center thumbnail in its cell
                    offset_x = x + (thumb_w - img.width) // 2
                    offset_y = y + (thumb_h - img.height) // 2
                    sheet.paste(img, (offset_x, offset_y))
            except Exception as e:
                draw.rectangle([x, y, x+thumb_w, y+thumb_h], fill=(200, 200, 200))
                draw.text((x+10, y+thumb_h//2), "ERROR LOADING", fill=(255, 0, 0))
            
            # Label
            label_text = f"ID: {file_id} | {filename[:15]}"
            draw.text((x, y + thumb_h + 10), label_text, fill=(26, 26, 26), font=font)
            
            counter += 1
            current_img_idx += 1
            
    # Save sheet
    sheet_name = f"sheet_{sheet_num:03d}.jpg"
    sheet.save(os.path.join(local_dir, sheet_name), 'JPEG', quality=85)
    sheet.save(os.path.join(artifact_dir, sheet_name), 'JPEG', quality=85)
    
    print(f"Generated {sheet_name} with {min(25, counter - 1 - (sheet_num - 1) * 25)} images")
    sheet_num += 1

print("All contact sheets generated.")
