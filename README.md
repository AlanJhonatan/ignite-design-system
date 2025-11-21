# Ignite Design System

This monorepo contains a design system with tokens, React components and documentation powered by Storybook.

**Overview**
- **Purpose**: provide reusable design tokens and React components for applications.
- **Workspaces**: managed with `npm` workspaces (`packages/*`).
- **Orchestration**: build/dev scripts use `turbo` at the repository root.

**Repository structure**
- `packages/docs` — documentation and Storybook (pages, stories, helper components).
- `packages/react` — React components (exports in `src/index.tsx`).
- `packages/tokens` — design tokens (colors, spacing, fonts, etc.).
- `packages/eslint-config`, `packages/ts-config` — shared configs.

**Quick Start**
From the repository root:

```fish
# install dependencies
npm install

# run all dev scripts in parallel (turbo)
npm run dev
```

Run only the Storybook (inside the `docs` package):

```fish
cd packages/docs
npm run dev
# Storybook will be available at http://localhost:6006
```

Build all packages (root):

```fish
npm run build
```

Build Storybook:

```fish
cd packages/docs
npm run build
```

**How to import the packages locally**
When using workspaces locally (or after publishing):

```js
import { Button } from '@zizao/react'
import { colors, space } from '@zizao/tokens'
```

Quick example using Stitches (already configured):

```tsx
import { styled } from '@zizao/react'

const MyBox = styled('div', {
  background: '$gray800',
  padding: '$4',
})
```

**Available tokens**
- `colors` — defined in `packages/tokens/src/colors.ts` (e.g. `$gray100`, `$ignite500`).
- `space` — spacing scale (e.g. `$4`, `$8`).
- `fontSizes`, `fontWeights`, `fonts`, `lineHeights`, `radii`

**Build & publishing**
- The `@zizao/react` package uses `tsup` to generate `dist` (ESM + CJS + `.d.ts`).
- Versioning/publishing uses `changesets` (root scripts):
  - `npm run version-packages` (`changeset version`)
  - `npm run release` (build + `changeset publish`) — note the current script filters out `docs` from publishing.

**Important notes**
- Some tooling dependencies (Storybook, Vite, tsup/esbuild) may show vulnerabilities on audits. Updates can introduce breaking changes — review before upgrading.
- `packages/react` uses `@stitches/react` for theming and consumes tokens from `@zizao/tokens`.

