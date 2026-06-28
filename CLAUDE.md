# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Aspire Studio is a static marketing site for a premium salon in Sioux Falls, SD. It is a single-page React app built with Vite, styled entirely with Tailwind CSS, and deployed as a static build to GitHub Pages at `aspirestudiollc.com`. The `/docs` directory is the Vite build output committed to git; GitHub Pages serves from there.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start Vite dev server at http://localhost:5173
npm run build      # Production build → /docs (output dir)
npm run preview    # Serve the /docs build locally
```

There are no tests and no linter configured in this project.

## Architecture

**Single-page layout**: `App.jsx` composes all sections in order — `Nav`, `Hero`, `Services`, `Stylist`, `Contact`, `Footer`. Navigation uses anchor links (`#services`, `#stylist`, `#contact`) with `scroll-behavior: smooth` on the `<html>` element.

**Scroll animations**: The custom `useInView(threshold)` hook in `src/hooks/useInView.js` wraps IntersectionObserver. Components attach the returned `ref` to a DOM element; when it enters the viewport the hook adds an `is-visible` class. The CSS classes `.fade-up`, `.hero-animate`, etc. in `src/index.css` drive the actual keyframe animations triggered by that class.

**Styling**: Pure Tailwind with a custom theme defined in `tailwind.config.js`. Key design tokens:
- Colors: `gold` (#C4956A), `brown` (#8C6240), `bg` (#FAF7F2)
- Fonts: "Cormorant Garamond" (headings/serif), "DM Sans" (body/sans) — loaded via Google Fonts in `index.html`
- Container: `maxWidth.site` = 1100px
- Custom shadows and a fluid `fontSize.hero`/`fontSize.display` using CSS `clamp()`

**No state management library**: The only stateful component is `Nav.jsx`, which tracks `scrolled` (adds a shadow on scroll) and `open` (mobile hamburger toggle).

**No backend, no data fetching**: All content is hardcoded. The booking CTA links externally to `aspirestudio.square.site`.

## Deployment

CI runs on push to `main` (`.github/workflows/deploy.yml`):
1. Installs Node 20, runs `npm ci`, then `npm run build`
2. Commits the updated `/docs` directory back to `main` with a bot commit
3. GitHub Pages serves the `/docs` directory at the custom domain

When making content or visual changes locally, run `npm run build` and commit the `/docs` output along with source changes so the deployed site stays in sync — or let CI handle it on push to `main`.
