# Artisyn.io

## Find Artisans Near You

Artisyn is a decentralised protocol built on Stellar that connects local artisans with users through community-curated listings. Our platform creates a trustless ecosystem where skilled workers can be discovered, verified, and compensated securely without relying on centralised intermediaries.

Many artisans lack a platform to help them get noticed; meanwhile, numerous people would appreciate quality artisan recommendations—the kind we aim to provide. Our vision is to be the bridge connecting both worlds.

## Project

- 📱 **[App (Current)](https://github.com/artisyn-io/artisyn.io)**
- 📡 [Backend (API)](https://github.com/artisyn-io/artisyn-api)
- 📝 [Smart Contracts](https://github.com/artisyn-io/artisyn-contracts)
- 🖼️ [Figma Design](https://www.figma.com/design/sJH5KPGVZ170uyFGx8qR0y/Artisyn---Find-Artisans-Near-You)
- 📚 [API Documentation](https://artisyn.apidog.io)
- [![Telegram](https://core.telegram.org/img/favicon-16x16.png) Telegram Channel](http://t.me/@artisynGF)

## Contribution Guide

To contribute to this project, check out the available issues, find one you can resolve, make something awesome and open a pull request.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Sentry error tracking

This project includes optional Sentry integration to capture runtime errors and upload source maps during CI releases.

Setup:

- Add repository secrets in GitHub: `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, `SENTRY_PROJECT`.
- Configure `NEXT_PUBLIC_SENTRY_DSN` (client) and/or `SENTRY_DSN` (server) in your environment or deployment.
- The CI workflow `.github/workflows/sentry-release.yml` uploads source maps on push to `main`.

Local testing:

1. Install dependencies and build:
```bash
pnpm install
pnpm build
```
2. Set `SENTRY_RELEASE` before running source-map upload steps in CI. The workflow uses the git SHA by default.

Privacy & quota:

- `beforeSend` hooks in `sentry.client.config.js` and `sentry.server.config.js` are available to strip PII.
- Keep `SENTRY_TRACES_SAMPLE_RATE` low in production to limit performance tracing and quota usage.

