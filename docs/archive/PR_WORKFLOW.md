# PR WORKFLOW — Standard Development Lifecycle

> **Scope:** Standardized Pull Request & Milestone Workflow for Desa Air Putih Digital Experience

---

## The 6-Stage PR Lifecycle

### Stage 1: Planning
- Define PR goals in `implementation_plan.md`.
- Verify architectural alignment against `ARCHITECTURE_FREEZE.md` and `VISUAL_PRINCIPLES.md`.
- Obtain user approval before writing code.

### Stage 2: Implementation
- Implement feature or content page strictly following Single Source of Truth (`src/content/`).
- Use existing Layout Primitives (`<Stack>`, `<Grid>`, `<Split>`) and Typography components.

### Stage 3: Code Review & Quality Gates
- Execute `pnpm lint` (0 warnings/errors).
- Execute `pnpm tsc --noEmit` (0 type errors).
- Execute `pnpm build` (clean bundle output).

### Stage 4: Documentation
- Update `ROADMAP.md` checklist.
- Update page documentation in `docs/pages/`.
- Update `walkthrough.md` with implementation summary and verification logs.

### Stage 5: Freeze & Acceptance
- Create page freeze policy (`PAGE_NAME_FREEZE.md`) once feature-complete.
- Final user review and acceptance.
