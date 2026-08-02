# AI GUARDRAILS — Operating Protocol for AI Agents

> **Status:** Mandatory Operating Guidelines  
> **Target Audience:** All AI Agents & Pair Programming Assistants working on this codebase.

---

## 1. Absolute Invariants (Never Do)

1. **NEVER Modify Frozen Architecture:** Design Tokens (`src/styles/tokens.css`), Layout Primitives (`Container`, `Section`, `Grid`, `Split`, `Stack`, `Cluster`), Typography Components, and Routing Architecture are READ-ONLY.
2. **NEVER Bypass Design System:** Do not write ad-hoc inline layout styling (`flex`, `grid`, `gap-*`, `px-*`) in feature components when a Layout Primitive exists.
3. **NEVER Invent Duplicate Components:** Always inspect `@/components/ui`, `@/components/editorial`, `@/components/layout`, and `@/components/typography` before creating new UI elements.
4. **NEVER Hardcode Verbal Copy in JSX:** All text, headings, captions, and links MUST be driven by content data files in `src/content/`.
5. **NEVER Use Browser / DOM Agents Unprompted:** Do not execute automated browser subagents unless explicitly requested by the user.
6. **NEVER Install Dependencies without Justification:** Packages must not be added via `pnpm add` without prior engineering evaluation and user approval.

---

## 2. Mandatory Workflow Standards (Always Do)

1. **ALWAYS Validate Quality Gates:** Run `pnpm lint`, `pnpm tsc --noEmit`, and `pnpm build` before completing any PR or milestone task.
2. **ALWAYS Maintain Single Source of Truth:** Content lives in `src/content/`, metadata in `src/constants/metadata/`, and routes in `src/constants/routes.ts`.
3. **ALWAYS Update Documentation:** Keep `ROADMAP.md`, `walkthrough.md`, and relevant page docs up-to-date with every milestone.
4. **ALWAYS Explain Trade-offs:** When proposing planning steps or fixes, provide clear rationale, risks, and effort estimates.

---

## 3. Implementation Reminder

During implementation phases, AI must never redesign the product.
If a better visual idea is discovered, it must be documented as a future proposal, NOT implemented immediately.

Planning ends at PR22.5.
Implementation begins at PR23.
