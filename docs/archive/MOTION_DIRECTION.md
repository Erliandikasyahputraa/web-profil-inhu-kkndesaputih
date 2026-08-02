# MOTION DIRECTION — Motion & Animation Architecture

> **Status:** Project Motion Specification  
> **Primary Motion Engine:** Framer Motion (`framer-motion` v12)  
> **Philosophy:** Quiet, Purposeful, Editorial. Motion acts as a gentle scroll-triggered page turner.

---

## 1. Motion Philosophy

Motion in the **Desa Air Putih** digital experience is designed to mimic the physical act of turning pages in a fine-art photo book. 

- **Quiet Entrance:** Elements fade into view gracefully as the reader scrolls.
- **Zero Distraction:** Motion never draws attention to itself or competes with the editorial text and documentary photography.
- **Accessibility First:** Motion automatically respects `prefers-reduced-motion` settings across all devices.

---

## 2. Reveal & Scroll Storytelling Principles

### `FadeIn` Component
- **Purpose:** Gentle opacity transition for text blocks, subheadings, and secondary metadata.
- **Duration:** `0.8s`
- **Easing:** `easeOut` (`[0.16, 1, 0.3, 1]`)
- **Viewport Margin:** `-50px` (Triggers slightly before entering screen center)

### `Reveal` Component
- **Purpose:** Combined opacity fade and vertical up-translation (`y: 30` → `y: 0`) for hero headlines, major section photography, and prominent section titles.
- **Duration:** `0.8s`
- **Distance:** `30px`
- **Stagger Delays:** `hero` (`0.2s`), `editorial` (`0.15s`), `none` (`0s`).

### `Parallax` Component
- **Purpose:** Subtle depth displacement for large full-width documentary photographs and pull quotes.
- **Offset Bounds:** Maximum `20px` to `50px`. High-speed parallax displacements are strictly forbidden.

---

## 3. Motion Specs per Component Type

| Component | Allowed Motion | Duration | Stagger / Delay |
|---|---|---|---|
| **Hero Title & Lead** | `<Reveal>` (y: 30 → 0) | `0.8s` | Delay `0.2s` |
| **Hero Background Image** | Static / Priority Load | N/A | Immediate |
| **Section Headlines** | `<FadeIn>` | `0.8s` | `0s` |
| **Documentary Photography** | `<Reveal>` or `<Parallax>` | `0.8s` | Delay `0.2s` |
| **Timeline Nodes** | Vertical `<FadeIn>` sequence | `0.6s` | Stagger `0.1s` |
| **Gallery Items** | Grid `<FadeIn>` | `0.8s` | Stagger `0.15s` |
| **Buttons & CTAs** | CSS transition `transition-colors duration-300` | `0.3s` | On Hover |

---

## 4. Motion Technology Selection

### Primary Motion Engine
**Framer Motion v12**
- **Status:** APPROVED

### GSAP
- **Status:** DEFERRED
- **Reason:** The current project scope does not require:
  - complex scroll storytelling
  - pinned sections
  - image sequence animation
  - clip-path animation
  - advanced mask reveal
  - horizontal scroll narratives
  - synchronized scroll timelines

Framer Motion already satisfies all current motion requirements while maintaining:
- simpler React integration
- lower conceptual complexity
- smaller engineering overhead
- easier maintenance

### Future Evaluation
GSAP may be reconsidered if future requirements include:
- advanced editorial storytelling
- cinematic pinned chapters
- long-form scroll synchronization
- image sequence animations
- advanced clip-path transitions

### Current Recommendation
Do not install GSAP during this project phase.
Re-evaluate only if future requirements genuinely exceed Framer Motion capabilities.

---

## 5. Anti-Patterns & Prohibited Motion

- ❌ **No Spring Physics Bounces:** Wobbles and elastic overshoot effects are banned.
- ❌ **No Infinite Hover Loops:** Floating cards or pulsing buttons are banned.
- ❌ **No Continuous Canvas Particles:** Floating dust particles, stars, or water ripples are banned.
- ❌ **No Horizontal Scroll Hijacking:** Scroll direction must remain natural vertical window scrolling.
- ❌ **No Motion Without Trigger:** Elements do not move autonomously without scroll progression.
