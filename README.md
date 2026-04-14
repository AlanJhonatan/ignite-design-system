# 🚀 Ignite Design System

A robust, type-safe Design System featuring design tokens, React components, and automated documentation. Built as a monorepo for maximum scalability and performance.

[![npm version](https://img.shields.io/npm/v/@zizao/react.svg)](https://www.npmjs.com/package/@zizao/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🏗️ Architecture

This repository is managed as an **npm monorepo** using **TurboRepo** for optimized task execution and **Changesets** for automated versioning and publishing.

- **`@zizao/tokens`**: Core design tokens (colors, spacing, fonts, etc.).
- **`@zizao/react`**: Component library built with **Stitches** and **Radix UI**.
- **`@zizao/docs`**: Documentation site and interactive playground powered by **Storybook**.
- **`@zizao/eslint-config` / `@zizao/ts-config`**: Shared development configurations.

---

## 🛠️ Tech Stack

- **Framework**: [React 18+](https://reactjs.org/)
- **Styling**: [Stitches](https://stitches.dev/) (CSS-in-JS)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Primitives**: [Radix UI](https://www.radix-ui.com/) (Accessible components)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/)
- **Build System**: [TurboRepo](https://turbo.build/repo)
- **Bundler**: [tsup](https://tsup.egoist.dev/) (esbuild-powered)
- **Documentation**: [Storybook 7](https://storybook.js.org/)
- **Versioning**: [Changesets](https://github.com/changesets/changesets)

---

## ✨ Features

### 🎨 Design Tokens
Fully configurable tokens for:
- **Colors**: Custom palette with primary brand colors.
- **Typography**: Fonts, font sizes, font weights, and line heights.
- **Layout**: Spacing scale, border radii, and breakpoints.

### 🧩 Components
Accessible and highly customizable React components:
- **Layout**: `Box`, `Text`, `Heading`
- **Actions**: `Button`
- **Forms**: `TextInput`, `TextArea`, `Checkbox`
- **Display**: `Avatar`, `MultiStep`

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- `npm` (Workspaces support)

### Installation
Clone the repository and install dependencies:
```bash
npm install
```

### Development
Run all packages in parallel (TurboRepo):
```bash
npm run dev
```
- **Storybook**: [http://localhost:6006](http://localhost:6006)

### Build
Generate production-ready bundles:
```bash
npm run build
```

---

## 📦 Usage

### Importing Components
```tsx
import { Button, Text } from '@zizao/react'

export function App() {
  return (
    <Button variant="primary">
      <Text size="sm">Click Me</Text>
    </Button>
  )
}
```

### Using Tokens
```tsx
import { colors, space } from '@zizao/tokens'

const myStyle = {
  backgroundColor: colors.ignite500,
  padding: space[4],
}
```

---

## 🚢 Publishing

This project uses **Changesets** for automated versioning.

1. Create a changeset: `npm run changeset`
2. Update versions: `npm run version-packages`
3. Publish to npm: `npm run release`

---

## 📄 License
Distributed under the **MIT License**. See `LICENSE` for more information.

---

> Built with ❤️ as part of hours studying from Rocketseat contents.
