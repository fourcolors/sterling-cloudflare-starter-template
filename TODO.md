# Cloudflare Remix Starter Template - TODO

## Initial Setup
- [x] Research and select base Cloudflare template (Remix + D1 + Drizzle + Google Auth)
- [x] Update requirements to use Bun (runtime & package manager) and Mise (toolchain manager)
- [ ] Add Mise config file (`.mise.toml`) specifying Bun, Node, and any other required tools
- [ ] Remove `package-lock.json` and `node_modules` if present
- [ ] Add Bun config (`bunfig.toml`) as needed
- [ ] Install dependencies with Bun
- [ ] Ensure all scripts work with Bun
- [ ] Bootstrap project with Wrangler using [`a-bishop/remix-cloudflare-starter`](https://github.com/a-bishop/remix-cloudflare-starter)

## Database (D1 + Drizzle)
- [ ] Audit Drizzle ORM setup
- [ ] Configure Drizzle with D1 (if needed)
- [ ] Add example migration for `users` table

## Authentication
- [ ] Verify Cloudflare authentication integration
- [ ] Set up Google login provider
- [ ] Add example login/logout UI

## Storage (R2 Bucket)
- [ ] Set up R2 bucket via Wrangler/config
- [ ] Add example code for GET/PUT to bucket

## Frontend Tooling
- [ ] Install and configure TailwindCSS (verify or add)
- [ ] Install Framer Motion
- [ ] Install Zod

## Examples & Boilerplate
- [ ] Add example of Drizzle query (e.g., create user)
- [ ] Add example of file upload/download to R2
- [ ] Add example of Zod schema validation

## Documentation
- [ ] Write clear README with usage instructions
- [ ] Document all example code and integrations

## Template Packaging
- [ ] Ensure template works with `bun create-*` command
- [ ] Test template spin-up from scratch
