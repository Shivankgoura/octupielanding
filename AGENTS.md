<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Website Reverse-Engineer Template

## What This Is
A reusable template for reverse-engineering any website into a clean, modern Next.js codebase using AI coding agents. The Next.js + shadcn/ui + Tailwind v4 base is pre-scaffolded — just run `/clone-website <url1> [<url2> ...]`.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React (default — will be replaced/supplemented by extracted SVGs)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles
- **Pixel-perfect emulation** — match the target's spacing, colors, typography exactly
- **No personal aesthetic changes during emulation phase** — match 1:1 first, customize later
- **Real content** — use actual text and assets from the target site, not placeholders
- **Beauty-first** — every pixel matters

## Project Structure
```
src/
  app/              # Next.js routes
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons as React components
  lib/
    utils.ts        # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  images/           # Downloaded images from target site
  videos/           # Downloaded videos from target site
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Inspection output (design tokens, components, layout)
  design-references/ # Screenshots and visual references
scripts/            # Asset download scripts
```

## MOST IMPORTANT NOTES
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly since you are basically serving the orchestrator role and have full context to our goals, work given, work achieved, and desired outcomes.
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate platform-specific instruction files.
- After editing `.claude/skills/clone-website/SKILL.md`, run `node scripts/sync-skills.mjs` to regenerate the skill for all platforms.

@docs/research/INSPECTION_GUIDE.md

## Content Rules (Octupie)

- **NEVER use em-dashes or en-dashes anywhere in copy, UI text, comments, or docs.** Use commas, periods, colons, or parentheses instead. Applies to both the literal U+2014 and U+2013 characters. This is a hard rule. Enforce before committing.

## Brand Assets (Octupie)

- **Logo:** `src/components/logo.tsx` exports `OctupieLogo` — inline SVG, brand gradient (#4C61FF to #014CE3), 8 dots (tentacles / pie slices) around a core node. Use via `Brandmark` / `Wordmark` in `src/components/brand.tsx`. Do NOT reintroduce the old `brandmark.webp` path.
- **Favicon:** `src/app/icon.svg` is the Next.js 16 app-router icon file. Do NOT recreate `favicon.ico` — it will double up. Update `icon.svg` when the logo changes.
- **Tab title:** maintained in `src/app/layout.tsx` `metadata.title`. Current: `"Octupie | Your viral-content researcher & script-writing agent"`. Keep the pipe separator (no dashes allowed).
- **Social brand icons:** `src/components/social-icons.tsx` exports `InstagramIcon` and `LinkedInIcon` (inline SVG, unique gradient ids via `useId()`). Use these wherever the copy references Instagram or LinkedIn (hero pill, social-proof paragraph, feature illustrations).

## Scroll + Responsive Rules (Octupie)

These rules exist because mouse-wheel stutter and horizontal scrollbars were shipped bugs. Do not regress them.

- **Never set `scroll-behavior: smooth` on `html` unconditionally.** Wheel scrolling inherits the easing and feels sticky. The current pattern in `globals.css` is smooth only under `html:focus-within` and only when `prefers-reduced-motion: no-preference`. Preserve it.
- **Never use `backdrop-blur-md` or larger on full-width fixed elements** (nav pill, mobile menu, toasts). They reblur the whole region per scroll frame and cause jank. `backdrop-blur-sm` on small elements is fine.
- **Scroll listeners must be rAF-throttled and state-gated.** See `src/components/sections/nav.tsx` for the canonical pattern (no `setState` per wheel tick, no `window` reads in the `useState` initializer, initial state is deterministic to avoid hydration mismatch).
- **Horizontal scroll is forbidden.** `html, body` already set `overflow-x: clip` (with `overflow-x: hidden` fallback). Every `<section>` that contains absolutely-positioned decorations (blur blobs, glows, `-inset-x-*`) MUST add `overflow-x-clip` on the section wrapper. Use `overflow-x-clip`, NOT `overflow-hidden`, so `position: sticky` descendants keep working.
- **Responsive headings** should use `text-[clamp(min, vw, max)]` with `break-words hyphens-auto text-balance` for the base size so they never overflow 320px viewports.
- **Inline-flex pills** with multiple text + icon chunks must have `flex-wrap` + `max-w-full` so they wrap instead of pushing layout width.
- **SSR/hydration:** `<body>` in `src/app/layout.tsx` has `suppressHydrationWarning` to absorb browser-extension attributes (ColorZilla `cz-shortcut-listen`, Grammarly, etc.). Do not remove. Any Client Component using `window`/`Date.now()` must initialize deterministically and sync in `useEffect`.
- **Cross-browser base styles** in `globals.css`: keep `-webkit-text-size-adjust: 100%`, `overscroll-behavior-y: none`, and `-webkit-overflow-scrolling: touch`. These fix iOS Safari font inflation, Chrome/Edge rubber-band chaining, and legacy iOS momentum scroll respectively.
- **GPU-heavy continuous animations** (marquee rows, long-running transforms) should use the `.gpu-layer` utility (`will-change: transform; translateZ(0); backface-visibility: hidden;`) so they stay on the compositor and do not jank scroll.
