# Product Requirements Document (PRD)

## Project Name
Cloudflare Remix Starter Template

## Goal
Create a reusable, production-ready template for rapidly spinning up new Remix (React) projects on Cloudflare, with batteries included for database, authentication, storage, styling, and validation.

## Features
1. **Remix + Cloudflare Workers**: Modern Remix app running on Cloudflare Workers.
2. **Drizzle ORM + D1**: Database layer with Drizzle ORM and D1 (Cloudflare's SQLite).
3. **Database Migration Example**: Example migration for a `users` table.
4. **Authentication**: Google login via Cloudflare's native authentication service.
5. **Cloudflare R2 Bucket**: Pre-configured storage bucket with example GET/PUT code.
6. **TailwindCSS**: Pre-installed and configured.
7. **Framer Motion**: Pre-installed and ready for use.
8. **Zod**: Pre-installed for schema validation.
9. **Wrangler**: Project bootstrapped with Wrangler, using Cloudflare's official templates as a base.
10. **Easy Spin-Up**: Usable as a template via `npx create-*` style command.
11. **Bun**: Uses Bun as the JavaScript runtime and package manager for all scripts and dependency management.
12. **Mise**: Uses Mise as the toolchain/version manager for Node, Bun, and other dependencies.

## Base Template
- Forked from [`a-bishop/remix-cloudflare-starter`](https://github.com/a-bishop/remix-cloudflare-starter), which includes Remix, Cloudflare Workers, D1, Drizzle ORM, and Google Auth.

## Non-Goals
- Not a full-featured app; only minimal working examples for each integration.
- No custom UI beyond basic scaffolding.

## Constraints
- Must be deployable to Cloudflare Workers.
- Should use the latest stable versions of all dependencies.
- Should be easily forkable and customizable.
- Must use Bun for all package management and runtime scripts.
- Must use Mise for toolchain management.

## CSS & TailwindCSS Integration (2025-04-16)

### Approach
- We use Vite as the build tool for Remix, Bun, and ESM compatibility.
- All global styles (TailwindCSS, Radix UI themes, etc.) are imported in `app/styles/tailwind.css` and loaded via a top-level side-effect import in `app/root.tsx`.
- No `links` function or `cssBundleHref` logic is used; Vite injects CSS automatically in dev and build.

### Rationale
- The old Remix CSS bundle approach (`cssBundleHref`, `<Links />`, etc.) is not compatible with ESM+Bun+Vite.
- Vite is the recommended solution for modern Remix projects, providing HMR and seamless CSS injection.

### Migration Notes
- If migrating from a classic Remix setup, remove all `cssBundleHref` and `<Links />` logic from `app/root.tsx`.
- Import all global styles at the top of `app/root.tsx`:
  ```ts
  import "~/styles/tailwind.css";
  import "../../public/styles/vendor/radix-themes.css";
  ```
- Radix UI theme CSS is copied to `public/styles/vendor/radix-themes.css` for global availability.

### Result
- Styles are injected by Vite in dev and build. HMR works out of the box. No manual `<link>` tags needed for CSS.
