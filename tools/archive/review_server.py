import os
import csv
import json
from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.parse

base_dir = 'c:/Mine/porto/profildesainhu/Desa Air Putih Digital Experience'
db_csv = os.path.join(base_dir, 'docs/VISUAL_CURATION_DATABASE.csv')
tech_csv = os.path.join(base_dir, 'docs/TECHNICAL_AUDIT.csv')
img_dir = 'c:/Mine/porto/profildesainhu/newimg'

HTML_CONTENT = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Desa Air Putih - Hybrid Curation Tool</title>
    <style>
        body { font-family: system-ui, sans-serif; background: #1e1e1e; color: #eee; margin: 0; padding: 20px; font-size: 14px;}
        .container { display: flex; gap: 20px; height: 95vh; flex-direction: column;}
        
        /* HEADER & MODES */
        .header { display: flex; justify-content: space-between; align-items: center; background: #2a2a2a; padding: 10px 20px; border-radius: 8px;}
        .mode-toggle { display: flex; gap: 10px; }
        .btn-mode { padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; background: #444; color: #fff;}
        .btn-mode.active { background: #4caf50; }
        .stats-bar { display: flex; gap: 15px; font-size: 14px; background: #222; padding: 10px 20px; border-radius: 8px; justify-content: center; font-weight: bold;}
        .stat-item { padding: 4px 10px; border-radius: 4px; background: #333; }
        
        /* TRIAGE MODE */
        .layout-triage { display: flex; flex-direction: column; flex: 1; align-items: center; justify-content: center; background: #111; border-radius: 8px; padding: 20px; }
        .triage-img { flex: 1; max-height: 60vh; max-width: 100%; object-fit: contain; margin-bottom: 15px;}
        .triage-info { font-family: monospace; color: #aaa; font-size: 16px; margin-bottom: 20px; padding: 8px 16px; background: #333; border-radius: 20px; font-weight: bold; letter-spacing: 1px;}
        .triage-controls { display: flex; gap: 15px; margin-bottom: 10px; align-items: center;}
        .btn-triage { padding: 15px 25px; font-size: 18px; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; color: white; width: 160px;}
        .btn-triage.strong { background: #4CAF50; }
        .btn-triage.keep { background: #2196F3; }
        .btn-triage.maybe { background: #FF9800; }
        .btn-triage.reject { background: #F44336; }
        .btn-nav-triage { padding: 15px 20px; background: #555; color: white; border: none; border-radius: 8px; font-size: 18px; cursor: pointer;}
        
        /* DETAIL MODE */
        .layout-detail { display: flex; gap: 20px; flex: 1;}
        .left-pane { flex: 2; display: flex; flex-direction: column; }
        .right-pane { flex: 1; background: #2a2a2a; padding: 30px; overflow-y: auto; border-radius: 8px; display: flex; flex-direction: column;}
        
        .img-container { flex: 1; background: #000; border-radius: 8px; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom:10px;}
        .detail-img { max-width: 100%; max-height: 100%; object-fit: contain; }
        
        /* FORM ELEMENTS */
        .section-title { font-size: 16px; color: #fff; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #444; padding-bottom: 5px; text-transform: uppercase;}
        textarea { width: 100%; padding: 12px; background: #333; color: #fff; border: 1px solid #555; border-radius: 4px; box-sizing: border-box; font-size: 14px; font-family: inherit;}
        
        .btn-save { padding: 15px; background: #2196F3; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 18px; font-weight: bold;}
        .btn-save:hover { background: #1976D2; }
        
        .tech-box { background: #222; padding: 10px; border-radius: 4px; font-family: monospace; font-size: 12px; margin-bottom:15px; color:#aaa; display: flex; gap: 10px;}
        
        /* TIER BUTTONS */
        .btn-tier { flex: 1; padding: 15px; font-size: 20px; font-weight: bold; border: 2px solid #555; background: #333; color: white; border-radius: 8px; cursor: pointer; transition: 0.2s;}
        .btn-tier:hover { background: #444; }
        .btn-tier.active { border-color: #4caf50; background: #4caf50; color: #fff; }
        .btn-tier.reject.active { border-color: #F44336; background: #F44336; }
        
        /* CHECKBOXES */
        .chk-container { display: flex; align-items: center; gap: 10px; background: #333; padding: 12px 15px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 14px;}
        .chk-container:hover { background: #444; }
        .chk-container input { width: 20px; height: 20px; cursor: pointer; }
        
        #toast { position: fixed; top: 20px; right: 20px; background: #4caf50; color: white; padding: 10px 20px; border-radius: 4px; display: none; z-index:9999;}
    </style>
</head>
<body>
    <div id="toast">Saved successfully!</div>
    
    <div class="container">
        <!-- HEADER -->
        <div class="header">
            <div class="mode-toggle">
                <button class="btn-mode active" id="btn-mode-triage" onclick="switchMode('triage')">⚡ QUICK TRIAGE (Pass 2A)</button>
                <button class="btn-mode" id="btn-mode-detail" onclick="switchMode('detail')">📝 DETAILED REVIEW (Pass 2B)</button>
            </div>
            <div style="font-size: 18px; font-weight: bold;">
                ID: <span id="lbl-id">---</span> | <span id="lbl-filename">---</span>
            </div>
            <div>
                Progress: <span id="lbl-progress-header">0/603</span>
            </div>
        </div>
        
        <!-- STATS BAR -->
        <div class="stats-bar" id="stats-bar">
            <div class="stat-item">REVIEWED <span id="stat-total">0/603</span></div>
            <div class="stat-item" style="color:#4CAF50;">🟢 STRONG <span id="stat-strong">0</span></div>
            <div class="stat-item" style="color:#2196F3;">⭐ KEEP <span id="stat-keep">0</span></div>
            <div class="stat-item" style="color:#FF9800;">🟡 MAYBE <span id="stat-maybe">0</span></div>
            <div class="stat-item" style="color:#F44336;">🔴 REJECT <span id="stat-reject">0</span></div>
            <div class="stat-item" style="color:#aaa;">REMAINING <span id="stat-remain">603</span></div>
        </div>
        
        <!-- TRIAGE MODE LAYOUT -->
        <div id="layout-triage" class="layout-triage">
            <img id="triage-img" class="triage-img" src="" alt="Image">
            <div class="triage-info" id="triage-tech-data">1920x1280 | LANDSCAPE | BLUR 204 | EXP NORMAL</div>
            <div class="triage-controls">
                <button class="btn-nav-triage" onclick="nav(-1)">&larr; PREV</button>
                <button class="btn-triage strong" onclick="saveTriage('STRONG')">[1] 🟢 STRONG</button>
                <button class="btn-triage keep" onclick="saveTriage('KEEP')">[2] ⭐ KEEP</button>
                <button class="btn-triage maybe" onclick="saveTriage('MAYBE')">[3] 🟡 MAYBE</button>
                <button class="btn-triage reject" onclick="saveTriage('REJECT')">[4] 🔴 REJECT</button>
                <button class="btn-nav-triage" onclick="nav(1)">NEXT &rarr;</button>
                <button class="btn-nav-triage" onclick="nextUnreviewedTriage()" style="background:#444;">N UNREV</button>
            </div>
        </div>
        
        <!-- DETAIL MODE LAYOUT (ULTRA MINIMAL) -->
        <div id="layout-detail" class="layout-detail" style="display:none;">
            <div class="left-pane">
                <div style="margin-bottom:10px;">
                    <button class="btn-nav-triage" onclick="nav(-1)" style="padding: 8px 15px; font-size: 14px;">&larr; Prev Filtered</button>
                    <button class="btn-nav-triage" onclick="nav(1)" style="padding: 8px 15px; font-size: 14px;">Next Filtered &rarr;</button>
                    <span style="margin-left:10px; font-size:12px; color:#aaa;">(Only showing STRONG/KEEP/MAYBE)</span>
                </div>
                
                <div class="img-container">
                    <img id="detail-img" class="detail-img" src="" alt="Loading...">
                </div>
                
                <div class="tech-box" id="detail-tech-data">RES 1920x1280 | ORI LANDSCAPE | BLUR 204 | EXP NORMAL</div>
            </div>
            
            <div class="right-pane">
                <div style="background:#111; padding:10px 15px; border-radius:6px; display:flex; justify-content:space-between; align-items:center; margin-bottom: 25px;">
                    <span style="color:#888; font-size:14px; font-weight:bold;">Triage Status:</span>
                    <span id="lbl-triage-status" style="font-weight:bold; font-size:18px;">---</span>
                </div>
                
                <div class="section-title">1. QUALITY</div>
                <div style="display: flex; gap: 10px; margin-bottom: 30px;">
                    <button class="btn-tier" id="btn-tier-S" onclick="setTier('S')">S</button>
                    <button class="btn-tier" id="btn-tier-A" onclick="setTier('A')">A</button>
                    <button class="btn-tier" id="btn-tier-B" onclick="setTier('B')">B</button>
                    <button class="btn-tier reject" id="btn-tier-REJECT" onclick="setTier('REJECT')">REJECT</button>
                </div>
                <input type="hidden" id="f-tier" value="">
                
                <div class="section-title">2. FOTO INI COCOK UNTUK</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 30px;" id="chk-group">
                    <label class="chk-container"><input type="checkbox" value="LANDING / HERO" class="page-chk"> LANDING / HERO</label>
                    <label class="chk-container"><input type="checkbox" value="DESA / ABOUT" class="page-chk"> DESA / ABOUT</label>
                    <label class="chk-container"><input type="checkbox" value="POTENSI" class="page-chk"> POTENSI</label>
                    <label class="chk-container"><input type="checkbox" value="PENDIDIKAN" class="page-chk"> PENDIDIKAN</label>
                    <label class="chk-container"><input type="checkbox" value="KKN" class="page-chk"> KKN</label>
                    <label class="chk-container"><input type="checkbox" value="GALLERY" class="page-chk"> GALLERY</label>
                    <label class="chk-container"><input type="checkbox" value="BACKGROUND" class="page-chk"> BACKGROUND</label>
                </div>
                
                <div class="section-title">3. CATATAN (Optional)</div>
                <textarea id="f-reason" rows="3" placeholder="Catatan singkat (optional)" style="margin-bottom: 25px;"></textarea>
                
                <button class="btn-save" style="width:100%;" onclick="saveDetail()">SAVE & NEXT (S)</button>
            </div>
        </div>
    </div>
    
    <script>
        let db = [];
        let tech = {};
        let currentIndex = 0;
        let isDirty = false;
        let currentMode = 'triage';
        
        async function loadData() {
            const res = await fetch('/api/data');
            const data = await res.json();
            db = data.db;
            tech = data.tech;
            
            const hash = window.location.hash.replace('#', '');
            if(hash) {
                const idx = db.findIndex(r => r.id === hash);
                if(idx !== -1) currentIndex = idx;
            }
            renderCurrent();
        }
        
        function switchMode(mode) {
            currentMode = mode;
            document.getElementById('btn-mode-triage').className = mode === 'triage' ? 'btn-mode active' : 'btn-mode';
            document.getElementById('btn-mode-detail').className = mode === 'detail' ? 'btn-mode active' : 'btn-mode';
            
            document.getElementById('layout-triage').style.display = mode === 'triage' ? 'flex' : 'none';
            document.getElementById('layout-detail').style.display = mode === 'detail' ? 'flex' : 'none';
            
            if(mode === 'detail' && !isShortlisted(db[currentIndex])) {
                nav(1);
            } else {
                renderCurrent();
            }
        }
        
        function isShortlisted(rec) {
            return ['KEEP', 'STRONG', 'MAYBE'].includes(rec.triage_status);
        }
        
        function setTier(tier) {
            document.getElementById('f-tier').value = tier;
            document.querySelectorAll('.btn-tier').forEach(b => b.classList.remove('active'));
            if(tier) {
                document.getElementById('btn-tier-' + tier).classList.add('active');
            }
            isDirty = true;
        }
        
        function renderCurrent() {
            if(db.length === 0) return;
            isDirty = false;
            const rec = db[currentIndex];
            window.location.hash = rec.id;
            
            document.getElementById('lbl-id').innerText = rec.id;
            document.getElementById('lbl-filename').innerText = rec.filename;
            
            const imgSrc = '/image/' + rec.relative_path;
            const t = tech[rec.id];
            
            if(currentMode === 'triage') {
                document.getElementById('triage-img').src = imgSrc;
                let tHtml = '';
                if(t) {
                    tHtml = `RES ${t.width}x${t.height} | ORI ${t.orientation} | BLUR ${t.blur_score} | EXP ${t.exposure_status}`;
                }
                const statStr = rec.triage_status && rec.triage_status !== 'UNREVIEWED' ? `<span style="color:#4caf50; margin-left:15px;">[ ${rec.triage_status} ]</span>` : ``;
                document.getElementById('triage-tech-data').innerHTML = `${tHtml} ${statStr}`;
            } else {
                document.getElementById('detail-img').src = imgSrc;
                let dtHtml = 'Tech data unavailable';
                if(t) {
                    dtHtml = `RES ${t.width}x${t.height} | ORI ${t.orientation} | BLUR ${t.blur_score} | EXP ${t.exposure_status}`;
                }
                document.getElementById('detail-tech-data').innerHTML = dtHtml;
                document.getElementById('lbl-triage-status').innerText = rec.triage_status || '---';
                
                // Tier
                setTier(rec.tier || '');
                
                // Pages
                const pages = (rec.target_page || '').split(',').map(s => s.trim());
                document.querySelectorAll('.page-chk').forEach(chk => {
                    chk.checked = pages.includes(chk.value);
                    chk.onchange = () => isDirty = true;
                });
                
                // Reason
                document.getElementById('f-reason').value = rec.reason || '';
                document.getElementById('f-reason').oninput = () => isDirty = true;
            }
            
            updateProgress();
        }
        
        function updateProgress() {
            const total = db.length;
            const strong = db.filter(r => r.triage_status === 'STRONG').length;
            const keep = db.filter(r => r.triage_status === 'KEEP').length;
            const maybe = db.filter(r => r.triage_status === 'MAYBE').length;
            const reject = db.filter(r => r.triage_status === 'REJECT').length;
            const reviewed = strong + keep + maybe + reject;
            const remain = total - reviewed;
            
            document.getElementById('stat-total').innerText = `${reviewed}/${total}`;
            document.getElementById('stat-strong').innerText = strong;
            document.getElementById('stat-keep').innerText = keep;
            document.getElementById('stat-maybe').innerText = maybe;
            document.getElementById('stat-reject').innerText = reject;
            document.getElementById('stat-remain').innerText = remain;
            document.getElementById('lbl-progress-header').innerText = `${currentIndex + 1}/${total}`;
        }
        
        async function saveTriage(status) {
            const rec = db[currentIndex];
            rec.triage_status = status;
            await postData(rec);
            nav(1);
        }
        
        async function saveDetail() {
            const rec = db[currentIndex];
            rec.tier = document.getElementById('f-tier').value;
            
            // Collect checked pages
            const checked = [];
            document.querySelectorAll('.page-chk:checked').forEach(chk => checked.push(chk.value));
            rec.target_page = checked.join(', ');
            
            rec.reason = document.getElementById('f-reason').value;
            rec.reviewed = 'TRUE';
            
            await postData(rec);
            isDirty = false;
            nav(1);
        }
        
        async function postData(rec) {
            const res = await fetch('/api/save', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(rec)
            });
            if(res.ok) {
                const toast = document.getElementById('toast');
                toast.style.display = 'block';
                setTimeout(() => toast.style.display='none', 500); 
            }
        }
        
        function nav(dir) {
            if(isDirty && !confirm('Unsaved changes! Continue?')) return;
            
            if(currentMode === 'triage') {
                currentIndex += dir;
                if(currentIndex < 0) currentIndex = db.length - 1;
                if(currentIndex >= db.length) currentIndex = 0;
            } else {
                let found = false;
                for(let i=1; i<=db.length; i++) {
                    let idx = dir > 0 ? (currentIndex + i) % db.length : (currentIndex - i + db.length) % db.length;
                    if(isShortlisted(db[idx])) {
                        currentIndex = idx;
                        found = true;
                        break;
                    }
                }
                if(!found) alert('No shortlisted images found.');
            }
            renderCurrent();
        }
        
        function nextUnreviewedTriage() {
            for(let i=1; i<=db.length; i++) {
                let idx = (currentIndex + i) % db.length;
                const stat = db[idx].triage_status;
                if(!stat || stat === 'UNREVIEWED') {
                    currentIndex = idx;
                    renderCurrent();
                    return;
                }
            }
            alert('All images triaged!');
        }
        
        document.addEventListener('keydown', (e) => {
            if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
            
            if(currentMode === 'triage') {
                if(e.key === '1') saveTriage('STRONG');
                if(e.key === '2') saveTriage('KEEP');
                if(e.key === '3') saveTriage('MAYBE');
                if(e.key === '4') saveTriage('REJECT');
                if(e.key === 'ArrowLeft') nav(-1);
                if(e.key === 'ArrowRight') nav(1);
                if(e.key.toLowerCase() === 'n') nextUnreviewedTriage();
            } else {
                if(e.key === 'ArrowLeft') nav(-1);
                if(e.key === 'ArrowRight') nav(1);
                if(e.key.toLowerCase() === 's') saveDetail();
            }
        });
        
        window.onload = loadData;
    </script>
</body>
</html>
"""

class ReviewHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/' or self.path == '/index.html':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(HTML_CONTENT.encode('utf-8'))
            
        elif self.path.startswith('/api/data'):
            db = []
            with open(db_csv, 'r', encoding='utf-8') as f:
                db = list(csv.DictReader(f))
                
            tech = {}
            if os.path.exists(tech_csv):
                with open(tech_csv, 'r', encoding='utf-8') as f:
                    for row in csv.DictReader(f):
                        tech[row['id']] = row
            
            res = json.dumps({'db': db, 'tech': tech})
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(res.encode('utf-8'))
            
        elif self.path.startswith('/image/'):
            rel_path = urllib.parse.unquote(self.path[7:])
            abs_path = os.path.join(img_dir, rel_path)
            if os.path.exists(abs_path):
                self.send_response(200)
                ext = os.path.splitext(abs_path)[1].lower()
                mime = 'image/jpeg' if ext in ['.jpg', '.jpeg'] else 'image/png'
                self.send_header('Content-type', mime)
                self.end_headers()
                with open(abs_path, 'rb') as f:
                    self.wfile.write(f.read())
            else:
                self.send_error(404, "Image not found")
        else:
            self.send_error(404, "Not found")

    def do_POST(self):
        if self.path == '/api/save':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            record = json.loads(post_data.decode('utf-8'))
            
            db = []
            with open(db_csv, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                fieldnames = reader.fieldnames
                db = list(reader)
                
            updated = False
            for r in db:
                if r['id'] == record['id']:
                    r.update(record)
                    updated = True
                    break
                    
            if updated:
                with open(db_csv, 'w', newline='', encoding='utf-8') as f:
                    writer = csv.DictWriter(f, fieldnames=fieldnames)
                    writer.writeheader()
                    writer.writerows(db)
                    
                strong = sum(1 for r in db if r.get('triage_status') == 'STRONG')
                keep = sum(1 for r in db if r.get('triage_status') == 'KEEP')
                maybe = sum(1 for r in db if r.get('triage_status') == 'MAYBE')
                reject = sum(1 for r in db if r.get('triage_status') == 'REJECT')
                triaged = strong + keep + maybe + reject
                
                with open(os.path.join(base_dir, 'docs/PASS_2_PROGRESS.md'), 'w', encoding='utf-8') as f:
                    f.write(f"# PASS 2 — Visual Intelligence Progress\n\n")
                    f.write(f"REVIEWED {triaged} / {len(db)}\n\n")
                    f.write(f"🟢 STRONG   {strong}\n")
                    f.write(f"⭐ KEEP     {keep}\n")
                    f.write(f"🟡 MAYBE    {maybe}\n")
                    f.write(f"🔴 REJECT   {reject}\n\n")
                    f.write(f"Remaining: {len(db) - triaged}\n")
                    
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(b'{"status":"ok"}')
            else:
                self.send_error(400, "Record ID not found")

def run():
    port = 800
    server_address = ('', port)
    httpd = HTTPServer(server_address, ReviewHandler)
    print(f"Server running at http://localhost:{port}/")
    print("Press Ctrl+C to stop.")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
