# VISUAL DIRECTION — Desa Air Putih Digital Experience

> **Status:** Project Design Manifesto (PR22.5 Master Planning)  
> **Target Aesthetic:** Coffee Table Book, Apple Story / Environment, National Geographic, Aesop, Kinfolk Magazine, Cereal Magazine, Stripe Press.  
> **Forbidden Aesthetic:** SaaS Dashboard, Startup Landing Page, Glassmorphism Showcase, Material UI Demo, Neumorphism, Floating Cards with Heavy Shadows.

---

## 1. Design Philosophy

The digital experience for **Desa Air Putih** is conceived not as a traditional commercial website, but as a **Digital Coffee Table Book**. 

### The Core Premise
A village website does not need conversion funnels, floating action buttons, or dark-mode toggle gimmicks. It needs **reverence, calm, and narrative depth**. We design for quiet contemplation and immersive reading—presenting the history, nature, culture, and community of Desa Air Putih with the elegance of a print monograph.

---

## 2. Editorial Philosophy & Reading Experience

- **Reading as the Primary Action:** Every page layout is structured to prioritize sustained reading comfort. Line lengths are strictly controlled (`55ch`–`65ch`) to prevent eye fatigue.
- **Narrative Pacing:** Information is revealed sequentially, resembling turning pages in a physical book. We eschew dense grid dashboards in favor of spacious, single-column or asymmetric 2-column narrative flows.
- **Silence over Noise:** We treat whitespace as an active structural element rather than empty space. Whitespace allows complex historical and cultural stories to settle emotionally with the reader.

---

## 3. Visual Hierarchy & Weight

- **Dominant Visual Center:** Every section must feature **exactly one dominant focal element**—either a full-bleed documentary photograph, an oversized serif quote, or a bold hero statement. Visual elements must never compete for equal attention within the same viewport.
- **Typographic Scale Contrast:** High contrast between massive display titles (`clamp(3rem, 6vw, 6.25rem)`) and muted, elegant body text (`1rem` with `1.625` line height).
- **Asymmetrical Balance:** We favor asymmetrical grid distributions (4:8, 5:7, 8:4 splits) over rigid, centered 3-column card layouts to mimic high-end magazine publishing.

---

## 4. Photography & Caption Philosophy

- **Documentary Authenticity:** All imagery must reflect real, un-stylized documentary photography of rural life, natural palm/rubber groves, river springs, and community gatherings in Desa Air Putih.
- **No Decorative Graphics or Vector Illustrations:** Stock vectors, 3D clay illustrations, and SaaS-style icons are strictly banned. Real photography is our primary visual language.
- **Framing & Aspect Presets:** Images are rendered using `<EditorialImage>` presets (`hero`, `story`, `portrait`, `landscape`, `gallery-feature`, `narrative`) with subtle borders and organic aspect ratios.
- **Poetic Captions:** Captions (`<Caption>`) serve as editorial narrative annotations, not technical image descriptions.

---

## 5. Color Psychology & Surface Strategy

- **Warm Paper Canvas (`--color-background: #FAF9F6`):** Off-white background reflecting organic, unbleached paper stock.
- **Deep Charcoal Typography (`--color-foreground: #1A1A1A`):** Softer than pure `#000000` to eliminate harsh contrast fatigue.
- **Forest Green Brand Accent (`--color-brand-primary: #2C3E2D`):** Rooted in the natural flora, rivers, and plantations of Indragiri Hulu.
- **Earth Tone Accents (`--color-brand-accent: #8C7A6B`):** Warm soil tones used sparingly for borders, overlines, and pull quote highlights.
- **Background Rhythm:** Pages cycle through background states (`transparent` → `primary` → `muted` / `bg-stone-50` → `dark` / `bg-stone-900`) to create distinct chapter shifts.

---

## 6. Border System & Materiality

- **Borders over Shadows:** Depth is established through 1px crisp borders (`border-[var(--color-border)]`) and subtle color blocks, never through heavy blurred drop-shadows.
- **Paper over Plastic:** Surfaces feel like matte paper cards rather than glossy plastic panels.

---

## 7. Motion Philosophy & Micro-Interactions

- **Motion as Narrative Emphasis:** Animations are limited to subtle scroll-triggered fade-ins (`FadeIn`) and gentle vertical up-translations (`Reveal`).
- **No Decorative Animation:** Wobbles, bounces, floating loops, or particle effects are strictly prohibited.
- **Respect Reduced Motion:** All motion primitives obey user accessibility preferences (`prefers-reduced-motion`).

---

## 8. Timeless Design Principles

### Things We Always Do
1. Provide single source-of-truth static content for every string.
2. Maintain strict 1:1 contrast and semantic heading levels (`H1` → `H2` → `H3`).
3. Enforce responsive fluidity across all device viewports (360px to 1536px).
4. Treat whitespace as content.

### Things We Never Do
1. Never use glassmorphism, neumorphism, or floating card shadows.
2. Never use decorative background gradients or SaaS pricing tables.
3. Never introduce un-scoped third-party UI component libraries.
4. Never place text directly inside components without routing through content data files.
