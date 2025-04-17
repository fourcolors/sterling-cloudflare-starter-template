# Sterling Cloudflare Remix Starter Template

## Quick Start

1. **Install dependencies:**
   ```sh
   bun install
   ```
2. **Start development server:**
   ```sh
   bun run dev
   ```
   - Runs Vite with HMR, TailwindCSS, and Radix UI integration.

3. **Production build:**
   ```sh
   bun run build
   bun run start
   ```

## Stack
- [Remix](https://remix.run/) (Cloudflare adapter)
- [Vite](https://vitejs.dev/) (dev/build tooling)
- [Bun](https://bun.sh/) (package manager/runtime)
- [TailwindCSS v4+](https://tailwindcss.com/)
- [Radix UI](https://radix-ui.com/)
- [Cloudflare D1](https://developers.cloudflare.com/d1/)
- [Drizzle ORM](https://orm.drizzle.team/)

## Configuration Notes
- All config files use `.cjs` for ESM compatibility: `postcss.config.cjs`, `tailwind.config.cjs`.
- All global styles are imported at the top of `app/root.tsx`.
- See `PRD.md` for full requirements, migration notes, and rationale.

## Clean Up
- All legacy configs/scripts removed. Use only the commands above for best results.

---

MIT License
