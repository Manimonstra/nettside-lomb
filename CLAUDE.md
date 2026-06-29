# CLAUDE.md — Frontend Website Rules

## Always Do First
- Before writing or editing any frontend code, invoke the `frontend-design` skill. Every session, no exceptions.

## Reference Images & Iteration
- **A reference image is the target — match it.** Replicate layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve, extend, or reinterpret it.
- **No reference image?** Design from scratch with high craft (see Anti-Generic Guardrails).
- **Don't ship the first pass.** Review every build against the reference — or against these rules when there's no reference — before presenting it.
- **Visual QA is manual — there is no auto-screenshot loop.** This environment has no browser/screenshot tool, so you cannot render or grade your own output. The loop is: build → the user previews in VS Code **Live Server** (`http://127.0.0.1:5500/`) → the user shares a screenshot → iterate. (A reference image is *input from the user*; a review screenshot is *verification of the output* — not the same thing. Reading reference images the user sends works; self-grading a render does not.)

## Local Server
- Save `index.html` to the project root; preview with the VS Code **Live Server** extension at `http://127.0.0.1:5500/`.
- Never reference `file:///` URLs.

## Output Defaults
- One self-contained `index.html` at the project root, unless the user says otherwise. A `tailwind.config` block and a single `<style>` block in that file are fine — "self-contained" means one file, not zero CSS.
- Tailwind via CDN: `<script src="https://cdn.tailwindcss.com"></script>`.
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`.
- Mobile-first; responsive down to mobile.

## Brand Assets
- Check `customer_assets/` before designing — it may hold logos, color/style guides, or images.
- Use real assets wherever they exist. Never use a placeholder in place of a provided asset.
- If a logo or palette is defined, use those exact values. Never invent brand colors.

## Visual Hierarchy
- One dominant element per section (headline, hero image, or primary CTA). Never let two elements compete for top attention.
- Build hierarchy with size, weight, and opacity — not color alone. Body text ~60% opacity, secondary labels ~40%.
- One primary CTA (filled) per group; any second action is ghost/text. Never two equal-weight CTAs side by side.
- Treat whitespace as hierarchy: the more important the element, the more room it gets.

## Component Quality
- **Buttons:** distinct hover, active, focus-visible, loading, and disabled states. Disabled = `cursor-not-allowed` + no pointer events, never just `opacity-50`.
- **Inputs:** focus ring, valid, error, and disabled states. Error messages sit below the field, never in tooltips.
- **Cards:** clamp overflowing text with `line-clamp`; content never breaks the layout.
- **Images:** explicit `width`/`height` or `aspect-ratio` — zero layout shift on load.
- **Everything interactive:** keyboard-navigable with a visible `focus-visible` outline. No exceptions.

## Anti-Generic Guardrails
- **Colors:** No default Tailwind palette (indigo-500, blue-600, etc.). Pick a brand color and derive from it.
- **Typography:** Different families for headings and body — pair a display/serif with a clean sans. Tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Shadows:** No flat `shadow-md`. Use layered, color-tinted shadows at low opacity.
- **Gradients:** Layer multiple radial gradients; add grain/texture via an SVG noise filter for depth.
- **Depth:** Use a layering system (base → elevated → floating), not one flat z-plane.
- **Imagery treatment:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color-treatment layer with `mix-blend-multiply`.
- **Spacing:** Consistent, intentional spacing tokens — not random Tailwind steps.
- **Animation:** Animate only `transform` and `opacity`, with spring-style easing. Never `transition-all`.

## Hard Rules
- Match the reference. Never add sections, features, or content it doesn't have, and never "improve" it.
- Review the result before presenting — don't ship the first pass blind.
- Never use `transition-all`.
- Never use default Tailwind blue/indigo as the primary color.
- Invoke the `site-teardown` skill (`TEARDOWNSKILL.md`) **only** when the user explicitly asks for it — never automatically. This is a separate skill from `frontend-design`; do not confuse the two.

## Git & .gitignore
- The project uses a `.gitignore` at the repo root.
- **Always keep `.gitignore` up to date.** Whenever an asset file (image, font, etc.) is removed from the site HTML but left on disk, add its path to `.gitignore` so it is not committed.
- Conversely, if a previously-ignored asset is added back to the site, remove it from `.gitignore`.
- Standard ignores (OS files, editor configs, logs, `node_modules`) are already covered — do not duplicate them.
