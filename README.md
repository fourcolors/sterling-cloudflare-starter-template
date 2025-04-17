# Sterling Cloudflare Remix Starter Template

A modern, production-ready starter template for building Remix applications on Cloudflare, using Bun, Vite, D1, TailwindCSS v4+, and Radix UI.

---

## Features
- **Remix (Cloudflare Adapter):** Fast, edge-ready fullstack framework.
- **Vite:** Lightning-fast dev/build tool with HMR.
- **Bun:** Modern JS runtime and package manager.
- **TailwindCSS v4+:** Utility-first CSS framework.
- **Radix UI:** Accessible, unstyled UI primitives.
- **Cloudflare D1:** Built-in SQLite database for Cloudflare Workers.
- **Drizzle ORM:** Type-safe SQL and migrations.
- **Zero legacy code:** All configs, scripts, and styles are up-to-date and ESM-compatible.

---

## Quick Start

```sh
bun install
bun run dev
```
- Visit the local dev server URL (shown in your terminal, e.g. http://localhost:5173/)

### Production Build
```sh
bun run build
bun run start
```

---

## Project Structure
- `app/` - Remix app code (routes, components, entry points)
- `public/` - Static assets
- `app/styles/tailwind.css` - Tailwind entrypoint
- `postcss.config.cjs`, `tailwind.config.cjs` - ESM-compatible configs
- `.gitignore` - Ignores all build artifacts, lockfiles, and local files
- `PRD.md` - Product requirements and design notes

---

## Cleaned Up
- **No nested templates** or duplicate config files
- **No legacy lockfiles** or build artifacts
- **Single, unified git history**

---

## Documentation
- See `PRD.md` for detailed requirements, rationale, and migration notes.

---

MIT License
