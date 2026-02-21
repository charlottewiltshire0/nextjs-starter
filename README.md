# Next.js Starter — Ready-to-use Boilerplate

A Next.js starter template packed with features to get you building quickly:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Husky + lint-staged (pre-commit hooks)
- ESLint & Prettier
- PostCSS
- Modern UI components and primitives
- Opinionated folder structure and example components

This repository is a practical boilerplate so you can focus on building instead of setup.

---

## Quick links

- Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- Shadcn UI: https://ui.shadcn.com

## Getting started

1. Install dependencies

```bash
bun install
# or
pnpm install
# or
npm install
# or
yarn
```

2. Run the development server

```bash
bun run dev
# or
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser.

## Built-in scripts

- bun run dev — Run Next.js in development (hot reload)
- bun run build — Build the production application
- bun run start — Start the production server after build
- bun run lint — Run ESLint across the project
- bun run format — Run Prettier to format code
- bun run prepare — Husky installation (runs on install)

## Project structure

- app/ — Next.js App Router routes and layouts
- components/ — Reusable UI components and primitives
- lib/ — Utilities, config, and site metadata
- public/ — Static assets
- app/globals.css — Global styles and Tailwind base
- next.config.ts, tsconfig.json — Project configuration

## Contributing

Contributions and improvements are welcome — open issues or PRs.

## License

MIT
