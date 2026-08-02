# VISUAL PRINCIPLES — Desa Air Putih Constitution

> **Status:** Immutable Visual Constitution  
> **Scope:** Enforced across all current and future design/development milestones (`PR22` to `PR28`).

---

## The 50 Immutable Laws of Design & Art Direction

### Core Identity & Philosophy
1. **Editorial over Dashboard:** The application is a digital book, never a software product.
2. **Photography over Illustration:** Real documentary photography is our sole visual medium; vector illustrations are forbidden.
3. **Paper over Plastic:** Surfaces mimic unbleached paper stock (`#FAF9F6`), never glossy acrylics.
4. **Whitespace is Content:** Empty space is an active design choice that gives narratives emotional weight.
5. **Reading over Interaction:** Prioritize legibility and calm consumption over complex interactive widgets.
6. **Storytelling over Marketing:** Present history and culture authentically, avoiding promotional sales copy.
7. **Silence over Decoration:** Remove any element that exists solely to fill empty space.
8. **Timeless over Trendy:** Prefer classic print design rules over transient web design fads.
9. **Calm over Exciting:** The interface should evoke peace, like sitting near a river spring.
10. **Subtle over Flashy:** Micro-details should reward quiet observation, never scream for attention.

---

### Visual Weight & Layout
11. **One Dominant Visual per Section:** Every section has exactly one primary hero image or text quote.
12. **No Visual Competition:** Secondary elements must yield hierarchy to the primary section focus.
13. **Asymmetry over Symmetry:** Prefer 4:8, 5:7, and 8:4 grid distributions over identical 3-column grids.
14. **Borders over Shadows:** Establish structure using 1px borders, never heavy drop-shadows.
15. **Large Images Deserve Space:** High-value documentary photographs require generous padding and wide containers.
16. **Negative Space is Intentional:** Margin and padding tokens control breathing rhythm across viewports.
17. **No Dense Layouts:** Keep item counts per section low (maximum 3–4 items per list/grid).
18. **No Hero Overload:** Hero sections state a single clear title, lead, and background photo.
19. **No Floating Cards:** Content containers sit grounded on the page grid, never hovering in mid-air.
20. **No Masonry Grid Chaos:** Wall gallery grids must follow structured editorial collage ratios.

---

### Anti-Patterns & Banned Aesthetics
21. **No Glassmorphism:** Backdrop blur panels over images are strictly banned.
22. **No Neumorphism:** Soft extruded 3D shadow elements are forbidden.
23. **No Decorative Gradients:** Color gradients used as background eye-candy are banned.
24. **No SaaS Badges:** Floating pill badges like "v1.0 NEW!" or "FEATURED" are prohibited.
25. **No Glow Effects:** Neon outer glows, drop-shadow blurs, and animated borders are banned.
26. **No Heavy Box Shadows:** `shadow-2xl` and `shadow-inset` blurs are strictly banned.
27. **No Marketing Tricks:** Counter animations, urgency timers, and pop-ups are prohibited.
28. **No Attention Competition:** No two CTA buttons in the same section may share `primary` solid styling.
29. **No Decorative Icons:** Do not place abstract line icons beside text headings simply for decoration.
30. **No Floating Action Buttons (FAB):** Sticky circular action buttons in screen corners are banned.

---

### Typography & Hierarchy
31. **Serif Headings, Sans-Serif Body:** Heading typography is strictly *Libre Baskerville*; body is *Inter*.
32. **Fluid Typography Scaling:** Font sizes scale continuously via CSS `clamp()` without abrupt breakpoint jumps.
33. **Comfortable Reading Measure:** Body text containers never exceed `65ch` in width.
34. **No Text Direct in Components:** All verbal copy must route through static content files (`src/content/*`).
35. **Capitalization Discipline:** Overlines are uppercase with wide letter-spacing (`tracking-widest`); headings use title case.
36. **Pull Quotes Need Authority:** Quotes must feature left-border accents and italic serif display styling.
37. **No Arbitrary Font Sizes:** Only use predefined font-size CSS variables (`--text-display`, `--text-h1`, etc.).
38. **Heading Hierarchy Integrity:** Pages strictly follow `H1` → `H2` → `H3` sequence without skipping levels.
39. **No Inline Text Overrides:** Do not apply inline font-size or font-family styles inside JSX elements.
40. **Captions Annotated:** Captions must use `--text-caption` with muted tone and explicit attribution.

---

### Motion & Performance
41. **No Motion without Purpose:** Animations must only serve to reveal content on scroll.
42. **No Motion for Entertainment:** No bouncing, swinging, or continuous looping animations.
43. **Fade & Up-Translate Only:** Motion is restricted to opacity fades (`FadeIn`) and slight Y-axis reveals (`Reveal`).
44. **Respect Reduced Motion:** All animations must disable gracefully when user requests reduced motion.
45. **No Component Exists Only to Look Cool:** Every component must convey real historical/cultural data.
46. **Single Source of Truth:** Never duplicate data across multiple content schema files.
47. **Lazy Loading Default:** All non-hero images must specify `loading="lazy"`.
48. **No Heavy External Libraries:** Do not import UI component libraries (Chakra, MUI, AntD).
49. **Keep Bundles Lean:** Zero client-side JS overhead for static content rendering.
50. **Static-First Invariant:** The website must remain 100% functional as a static export without server requirements.
