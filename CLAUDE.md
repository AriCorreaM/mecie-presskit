# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Artist press kit website for **Mecie** (DJ/Producer from Santiago, Chile). Built as a single-page app with section-based layout. Content is in Spanish (locale: `es_CL`).

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (eslint-config-next with core-web-vitals + typescript)
```

No test framework is configured.

## Tech Stack

- **Next.js 16** with App Router and React Compiler enabled
- **React 19** — all section components use `'use client'`
- **TypeScript** (strict mode)
- **Tailwind CSS 4** via `@tailwindcss/postcss`
- **Framer Motion** for scroll-triggered and hover animations
- **Lucide React** for icons

## Architecture

### Centralized Data Pattern

All content lives in `data/artist.ts` as a single exported `artist` object. Components never contain hardcoded text — they import from this file. This is the most important architectural decision: to add/edit content (venues, releases, collaborations, labels, bio text, section labels, social links, SEO metadata), modify `data/artist.ts`.

### Page Structure

`app/page.tsx` is the orchestrator — it imports and arranges all section components in order. Each component in `components/` represents one section of the press kit (Hero, About, Releases, SoundCloudPlayer, Venues, Collaborations, Gallery, RecordLabels, TechRider, Contact, Footer). `SectionTitle.tsx` is the only shared/reusable component.

### Layout & SEO

`app/layout.tsx` handles fonts (Inter + JetBrains Mono as CSS variables), metadata (OpenGraph, Twitter cards), and JSON-LD structured data (MusicGroup schema) — all driven by `artist.seo` and `artist.social`.

Dynamic image generation files (`opengraph-image.tsx`, `twitter-image.tsx`, `apple-icon.tsx`) and SEO files (`robots.ts`, `sitemap.ts`) live in `app/`.

### Styling

Ultra-dark brutalist aesthetic defined via CSS variables in `app/globals.css` (background: `#050505`). Uses Tailwind utilities with custom properties. Fluid typography via `clamp()` for the hero. Subtle grain texture overlay on body. Images use grayscale + contrast filters with hover color restoration.

### Path Alias

`@/*` maps to the project root (configured in `tsconfig.json`).
