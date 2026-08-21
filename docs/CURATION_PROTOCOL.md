# CURATION PROTOCOL

## 3-PASS CURATION WORKFLOW

This document outlines the strict protocol for auditing and evaluating the 603 photographs for the Desa Air Putih Digital Experience project. 
To ensure zero hallucination and maximum editorial quality, the process is divided into three distinct passes.

### PASS 1: Technical & Computer Vision Audit
**Executor:** AI / Automated Script (`tools/technical_audit.py`, `tools/detect_duplicates.py`)
**Goal:** Objective technical filtering without subjective judgement.
**Checks:**
- Resolution (width x height)
- Orientation (Landscape/Portrait)
- Blur Detection (Laplacian variance)
- Exposure (Average brightness)
- File Integrity
- Perceptual Hashing (pHash) for true duplicate detection

### PASS 2: Visual Intelligence (Human Review)
**Executor:** Human Creative Director (via Visual Contact Sheets)
**Goal:** Assign qualitative metrics based on true visual inspection.
**Checks:**
- Composition (1-10)
- Technical Quality (1-10)
- Lighting (1-10)
- Subject Clarity (1-10)
- Storytelling (1-10)
- Emotional Impact (1-10)
- Uniqueness (1-10)
- Web Usability (1-10)
**Output:** Tier Assignment (S, A, B, C, REJECT)

### PASS 3: Editorial Mapping
**Executor:** Collaborative (Creative Director + AI Mapping)
**Goal:** Assign functional website roles independent of the visual tier.
**Attributes:**
- Primary Role (HERO, ABOUT, POTENSI, PENDIDIKAN, KKN, GALLERY, BACKGROUND, SUPPORTING) - *Max 1*
- Secondary Role - *Max 2*
- Story Role (ESTABLISHING, PEOPLE, PORTRAIT, ACTION, INTERACTION, DETAIL, RESULT, ENVIRONMENT, GROUP, CANDID, ATMOSPHERE)
- Status (PRIMARY, SECONDARY, ARCHIVE, REJECT, PRIVATE)
- Reason (Concrete justification)

---
*Note: The final database `PHOTO_CURATION_DATABASE.csv` will ONLY be generated after PASS 2 and PASS 3 are completed.*
