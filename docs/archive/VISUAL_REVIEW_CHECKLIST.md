# VISUAL REVIEW CHECKLIST — Quality Assurance Audit

> **Scope:** Audit checklist for verifying visual quality, editorial pacing, and design system adherence.

---

## 1. Editorial Hierarchy & Reading Comfort
- [ ] **Single Focus:** Does each section feature exactly one primary focal visual?
- [ ] **Line Length:** Is text width constrained to comfortable reading bounds (`55ch`–`65ch`)?
- [ ] **Typography Contrast:** Is there distinct visual scale between Display headings and Lead paragraphs?
- [ ] **Heading Order:** Does heading hierarchy strictly follow `H1` → `H2` → `H3`?

## 2. Pacing & Whitespace
- [ ] **Section Breathing Room:** Does padding follow fluid `--spacing-section` tokens?
- [ ] **Background Rhythm:** Do section background states cycle gracefully (`primary` → `muted` → `dark`)?
- [ ] **Asymmetric Balance:** Do desktop spreads use 4:8, 5:7, or 8:4 grid distributions?

## 3. Media & Materiality
- [ ] **Documentary Authenticity:** Are images authentic documentary photographs of Desa Air Putih?
- [ ] **Preset Integrity:** Are images using `<EditorialImage>` presets (`hero`, `story`, `portrait`, `narrative`)?
- [ ] **Borders over Shadows:** Are structural boundaries established via crisp 1px borders rather than heavy drop shadows?

## 4. Motion & Performance
- [ ] **Subtle Motion:** Are animations restricted to scroll-triggered `<FadeIn>` and `<Reveal>` entrances?
- [ ] **Reduced Motion:** Does motion disable cleanly under `prefers-reduced-motion`?
- [ ] **Bundle & Quality Gates:** Do `pnpm lint`, `pnpm tsc --noEmit`, and `pnpm build` pass with 0 errors?
