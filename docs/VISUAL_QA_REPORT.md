# VISUAL QA REPORT
**Phase 5A: Audit & Identification**

*Focus: Minimal Editorial Documentary, calm, human, photography-led, responsive polish.*

## A. GLOBAL UI
| Component | Problem / Finding | Impact | Recommended Fix | Status |
|-----------|-------------------|--------|-----------------|--------|
| **Navbar** | Desktop links hover effect is adequate, but mobile hamburger menu lacks smooth transition closing state. Mobile menu sometimes feels cramped. | 🟡 POLISH | Ensure mobile menu overlay has proper padding and smooth `easeOut` closing transition. | 🟡 POLISH |
| **Footer** | Footer is clean but currently has some excessive top padding (`pt-24` or similar). | 🟠 IMPORTANT | Reduce vertical whitespace on mobile. Keep it minimal and readable. | 🟠 IMPORTANT |
| **Typography** | Font sizes on mobile (especially `h1` and `h2`) occasionally dominate the viewport. | 🔴 CRITICAL | Cap mobile display headings (e.g. `text-4xl` max on mobile) to maintain editorial restraint. | 🔴 CRITICAL |
| **Spacing** | Repeated use of `min-h-screen` and `py-24`/`py-32` across sections causes disconnected narrative flow. | 🔴 CRITICAL | Replace `min-h-screen` with content-driven heights. Reduce vertical paddings on mobile (`py-12` or `py-16`). | 🔴 CRITICAL |
| **Motion** | Some scroll-triggered animations might be using high distances (`translateY-24`). | 🟠 IMPORTANT | Standardize to `translateY(12px)` and opacity `0 -> 1` over `600ms easeOut`. | 🟠 IMPORTANT |

## B. HOME (`/`)
| Section | Problem / Finding | Impact | Recommended Fix | Status |
|---------|-------------------|--------|-----------------|--------|
| **Hero** | Image sizing can feel too tall on certain mobile aspects, pushing title too low. | 🟠 IMPORTANT | Set a constrained height on mobile (e.g., `h-[70vh]`) instead of `min-h-screen`. | 🟠 IMPORTANT |
| **Narrative Flow** | Hard cuts between Identity, History, and Geography. Lack of continuous story feel. | 🔴 CRITICAL | Unify background colors, use subtle editorial connective text, and refine vertical rhythm so it reads like a documentary. | 🔴 CRITICAL |
| **Images** | Supporting images sometimes take `width: 100%` on mobile and feel like hero sections. | 🔴 CRITICAL | Scale down supporting images on mobile. Use natural aspect ratios. | 🔴 CRITICAL |

## C. PROFIL (`/profil`)
| Section | Problem / Finding | Impact | Recommended Fix | Status |
|---------|-------------------|--------|-----------------|--------|
| **Values / Warga** | Content feels slightly boxy/card-heavy rather than editorial. | 🟠 IMPORTANT | Remove excessive glassmorphism/borders. Let typography and whitespace define boundaries. | 🟠 IMPORTANT |
| **Environment / Map** | The map placeholder and geographic images break the text rhythm. | 🟡 POLISH | Integrate the map smoothly with surrounding text padding. | 🟡 POLISH |

## D. PEMERINTAHAN (`/pemerintahan`)
| Section | Problem / Finding | Impact | Recommended Fix | Status |
|---------|-------------------|--------|-----------------|--------|
| **Structure SVG** | `struktur-perangkat-desa.svg` may overflow horizontally on narrow mobile screens (375px). | 🔴 CRITICAL | Wrap the SVG in an `overflow-x-auto` container with a subtle fade mask, or scale it down proportionally. | 🔴 CRITICAL |
| **Gov Info** | Looks a bit like a corporate dashboard. | 🟠 IMPORTANT | Strip away heavy card styles. Use simple text lists and subtle lines (editorial style). | 🟠 IMPORTANT |

## E. GALERI (`/galeri`)
| Section | Problem / Finding | Impact | Recommended Fix | Status |
|---------|-------------------|--------|-----------------|--------|
| **Grid Layout** | Missing clear structural separation between Landscape and Portrait photographs. | 🔴 CRITICAL | Create distinct layout zones for Landscape (horizontal grid) and Portrait (vertical columns) to respect image nature. | 🔴 CRITICAL |
| **Mobile Grid** | Mobile grid currently pushes images to fill 100% width, causing huge scrolling distances. | 🔴 CRITICAL | Implement a tight 2-column grid on mobile to keep density comfortable. | 🔴 CRITICAL |
| **Hover Effects** | Excessive zoom/shadow on hover. | 🟠 IMPORTANT | Tone down to a very subtle brightness or scale change. | 🟠 IMPORTANT |

## F. KKN (`/kkn`)
| Section | Problem / Finding | Impact | Recommended Fix | Status |
|---------|-------------------|--------|-----------------|--------|
| **Proker / Team** | Multiple giant images back-to-back. Team portraits are unevenly sized. | 🔴 CRITICAL | Normalize portrait dimensions. Use a restrained grid. Lazy load images below the fold. | 🔴 CRITICAL |
| **Activity Docs** | Looks like a standard collage overload. | 🟠 IMPORTANT | Reduce image density. Highlight one dominant image per activity. | 🟠 IMPORTANT |

---

## PRIORITY ORDER FOR PHASE 5B

1. **🔴 CRITICAL: Typography & Mobile Headings** (Fix global mobile text scaling to prevent viewport domination).
2. **🔴 CRITICAL: Spacing & `min-h-screen` Removal** (Establish intentional, content-driven vertical rhythm to create a continuous story flow).
3. **🔴 CRITICAL: Gallery Structural Refactoring** (Separate Landscape vs Portrait explicitly. Fix mobile 2-column density).
4. **🔴 CRITICAL: Image Proportion Control** (Prevent supporting images in Home and KKN from stretching to 100% width/height and acting like Heros).
5. **🔴 CRITICAL: Horizontal Overflow (Pemerintahan)** (Fix SVG structure mobile scrolling).
6. **🟠 IMPORTANT: Animation Standardization** (Ensure all motion is `opacity`, `translateY(12px)`, `600ms`, `easeOut`).
7. **🟠 IMPORTANT: Editorial De-styling** (Remove corporate cards, heavy glassmorphism, and excessive borders in Profil and Pemerintahan).
8. **🟡 POLISH: Navbar & Footer Adjustments** (Smooth mobile menu closing, trim footer padding).
