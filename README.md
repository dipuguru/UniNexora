# UniNexora website redesign — Vue CLI

A Vue 3 single-page website built with Vue CLI 5 and Vue Router 4.

## Requirements
- Node.js 18 or newer (Node.js 20 LTS recommended)
- npm 9 or newer

## Install and run
Open a terminal in this project directory and run:

```bash
npm install
npm run serve
```

Then open the local URL printed by Vue CLI (normally http://localhost:8080/).

## Production build

```bash
npm run build
```

The production website is generated in `dist/`.

## Design notes
- The supplied UniNexora logo asset is retained without recoloring or editing.
- The site uses a dark navy / teal / cyan palette with light sections for contrast.
- The hero artwork is stored locally in `src/assets/images/`.
- ESLint is intentionally not installed, so the missing ESLint configuration error cannot block Vue CLI compilation.

## Important
This is a front-end redesign starter based on the page sections included in this project. Connect verified production contact details, forms, analytics, and any original backend integrations before deployment.
