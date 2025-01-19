# microCMS Baseline Implementation for Nuxt3 + Vuetify3 Starter
Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup Project

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Setup Environment Variables
Create .env file at project root, and write your project information like below.
```
MICROCMS_API_ENDPOINT=<MICROCMS_API_ENDPOINT>
MICROCMS_SERVICE_DOMAIN=<MICROCMS_SERVICE_DOMAIN>
MICROCMS_API_KEY=<MICROCMS_API_KEY>

SITE_TITLE=<Your site title, used at meta info>
META_DESCRIPTION=<Your site description, used at meta info>
META_OG_URL=<Your production site url, used at meta info>
META_TWITTER_ID=<Your X(twitter) id, used at meta info>

PAGE_LIMIT=<Post Count Per Page, recommended: 6>
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Generate Static Pages for production:

```bash
# npm
npm run generate

# pnpm
pnpm generate

# yarn
yarn generate

# bun
bun run generate
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
