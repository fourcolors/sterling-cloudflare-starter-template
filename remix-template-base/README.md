# Remix Cloudflare Starter

An opinionated Remix starter for Cloudflare workers, with Google Auth integration

- Remix
- Cloudflare (D1, KV)
- Google Auth
- Drizzle ORM
- Vitest

### Get Started (OSX)

1. Set up an [OAuth 2.0 application in the Google Cloud console](https://console.cloud.google.com/apis/credentials/oauthclient)
1. Create a `.dev.vars` file with the following env variables set
```
GOOGLE_CLIENT_ID=<Your Client ID>
GOOGLE_CLIENT_SECRET=<Your Client Secret>
GOOGLE_CALLBACK_URL=<Your Callback Url>
BASE_URL=https://localhost:8788
```
1. Run `npm i`
1. [Install mkcert](https://github.com/FiloSottile/mkcert)
1. Run `npm run cert:regen` to generate a locally-trusted ssl cert using mkcert
1. Run `npm run db:migrate:local` to apply db migrations
1. Run `npm start` to spin up the dev server
1. Visit https://localhost:8788 to see the application running
1. Run `npm run db:schema:generate` after making modifications to the db schema to generate db migrations from it
1. Run `npm run db:studio` in a separate terminal tab to spin up a drizzle studio instance to interact with the local D1 db

### Deploying to Cloudflare

1. Create a Clouflare account and follow the [instructions here](https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/) for deploying Remix site to Cloudflare Pages with a Github integration. Automatic deployments are enabled by default for the `staging` and `main` branches (configurable in `./build.sh`).
1. For interacting with your D1 DB in preview and production, you'll need to create D1 instances in your Cloudflare account and bind the DB IDs in `./wrangler.toml` [More info here](https://developers.cloudflare.com/pages/functions/wrangler-configuration).