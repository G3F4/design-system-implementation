# Boilerplate - Project Structure

> This document describes the folder structure, tooling, and pre-filled vs TODO content for the workshop boilerplate repository.

---

## Architecture Overview

```
  ┌─────────────────────────────────────────────────────────────────┐
  │                    SINGLE VITE REACT PROJECT                    │
  │                                                                 │
  │   Folder separation mimics real package boundaries.             │
  │   Relative imports between folders.                             │
  │   Entry point: src/dashboard/ (Vite root)                       │
  │                                                                 │
  │  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐  │
  │  │  tokens/ │───▶│   css/   │───▶│  comps/  │───▶│dashboard/│  │
  │  │          │    │          │    │          │    │          │  │
  │  │variables │    │button.css│    │Button.jsx│    │index.html│  │
  │  │  .css    │    │card.css  │    │Card.jsx  │    │main.jsx  │  │
  │  │          │    │typo.css  │    │Typo.jsx  │    │Dashboard │  │
  │  └──────────┘    └──────────┘    └──────────┘    │  .jsx    │  │
  │                                                   └──────────┘  │
  │  tokens/        css/           components/     (vite root)    │
  │                                                                 │
  └─────────────────────────────────────────────────────────────────┘
```

---

## Folder Structure

```
ds-workshop/
├── docs/                               # Workshop documentation (this file, etc.)
│   ├── 01a-design-system-hardcoded.md
│   ├── 01b-design-system-tokens.md
│   ├── 02-dashboard-project.md
│   ├── 03-boilerplate.md
│   └── 04-slides.md
│
├── package.json                        # Dependencies: react, react-dom, vite [PRE-FILLED]
├── vite.config.js                      # Root: src/dashboard             [PRE-FILLED]
│
├── src/
│   ├── design-system/
│   │   ├── tokens/
│   │   │   └── variables.css           # CSS custom properties                [TODO - Module 6]
│   │   │
│   │   └── css/
│   │       ├── button.css              # Button CSS implementation            [TODO - Module 3]
│   │       ├── card.css                # Card CSS implementation              [TODO - Module 4]
│   │       └── typography.css          # Typography CSS implementation        [TODO - Module 7] [STRETCH]
│   │
│   ├── components/
│   │   ├── Button.jsx                  # React Button wrapper                 [TODO - Module 3]
│   │   ├── Card.jsx                    # React Card wrapper                   [TODO - Module 4]
│   │   ├── Typography.jsx              # React Typography wrapper             [TODO - Module 7] [STRETCH]
│   │   └── ThemeToggle.jsx             # Theme switch                         [PRE-FILLED] [STRETCH]
│   │
│   └── dashboard/                      # APPLICATION ENTRY POINT (Vite root)
│       ├── index.html                  # HTML shell with <div id="root">      [PRE-FILLED]
│       ├── main.jsx                    # createRoot + renders <Dashboard />   [PRE-FILLED]
│       ├── Dashboard.jsx               # Dashboard page                       [PARTIAL - shell with TODOs]
│       └── dashboard.css               # Dashboard grid layout                [PRE-FILLED]
```

---

## Vite Configuration

Configured in `vite.config.js` — participants never touch this file.

### Root setting

Vite uses `src/dashboard/` as its root directory. This means:
- `index.html` lives in `src/dashboard/` (not project root)
- `main.jsx` lives in `src/dashboard/` (not `src/`)
- The dashboard IS the application — everything else are libraries it consumes

### Imports

All imports use standard relative paths. Since Vite root is `src/dashboard/`,
files in `dashboard/` import from sibling folders using `../`:

```
  In a component file (e.g., src/components/Button.jsx):

    import '../design-system/css/button.css'

  In the dashboard (e.g., src/dashboard/Dashboard.jsx):

    import { Button } from '../components/Button'
    import { Card } from '../components/Card'

  In main.jsx (src/dashboard/main.jsx):

    import '../design-system/tokens/variables.css'
```

---

## Pre-filled vs TODO Content

### Fully pre-filled (participants do NOT touch)

| File                          | What it contains                                                          |
|-------------------------------|---------------------------------------------------------------------------|
| `package.json`                | Dependencies (react, react-dom, vite, @vitejs/plugin-react)               |
| `vite.config.js`              | Plugin config + root: src/dashboard                                   |
| `src/dashboard/index.html`    | Basic HTML shell with `<div id="root">`                                   |
| `src/dashboard/main.jsx`      | `createRoot` + renders `<Dashboard />`+ imports global token CSS          |
| `src/dashboard/dashboard.css` | CSS Grid layout for the dashboard (2-column grid)                         |
| `ThemeToggle.jsx`             | Working theme toggle component (sets `data-theme` on `<html>`) [STRETCH]  |

### Skeleton with TODOs (participants fill in)

Each file has:
- File header comment explaining what the file is for
- Exercise number reference (e.g., "EXERCISE 3A")
- Commented-out class selectors (CSS) or function scaffolding (JSX)
- TODO comments with hints about what to add
- Expected property names/values mentioned in comments

### File content strategy

**CSS files** (e.g., `button.css`):
- Empty selectors with comments describing what properties to add
- Hints include actual values for the first exercise (Module 3)
- Later exercises (Module 4+) have less detailed hints (building independence)

**JSX files** (e.g., `Button.jsx`):
- Import statement for corresponding CSS already written
- Props destructured in function signature with JSDoc types
- Empty function body with TODO comment
- Hints about className construction and JSX structure

**Dashboard.jsx**:
- Basic component shell with return statement
- Empty grid container
- Comments marking where to add components at each module stage

---

## Dependencies

### package.json (pre-configured)

| Package                    | Purpose                   |
|----------------------------|---------------------------|
| `react`                    | UI library                |
| `react-dom`                | React DOM renderer        |
| `vite`                     | Dev server + bundler      |
| `@vitejs/plugin-react`     | JSX transform for Vite    |

No other dependencies. Deliberately minimal.

### Scripts

| Script      | Command          | Purpose                                |
|-------------|------------------|----------------------------------------|
| `dev`       | `vite`           | Start dev server (only command needed)   |
| `build`     | `vite build`     | Production build (not used in workshop)  |

Note: Vite root is set to `src/dashboard` in `vite.config.js`, so `npm run dev` serves
from that directory automatically. Participants just run `npm run dev` — no extra flags.

---

## Setup Instructions (for participants)

```
  Step 1:  Verify Node.js is installed
           node --version          (should be 18+ or 20+)

  Step 2:  Clone the repository
           git clone <repo-url>
           cd ds-workshop

  Step 3:  Install dependencies
           npm install

  Step 4:  Start the dev server
           npm run dev

   Step 5:  Open browser
           http://localhost:3000

  Expected: You should see an empty page with "Dashboard" text.
  If you see this, you're ready for the workshop.
```

---

## Solutions Strategy

Two approaches (pick one):

### Option A: Separate branch per module

```
  main              ── boilerplate (starting point)
  solution/module-3 ── after Button implementation
  solution/module-4 ── after Card implementation
  solution/module-6 ── after tokenization
  solution/module-8 ── after light/dark mode              [STRETCH]
  solution/final    ── complete workshop result
```

### Option B: Single solutions folder in main branch

```
  solutions/
  ├── module-3/
  │   ├── button.css
  │   └── Button.jsx
  ├── module-4/
  │   ├── card.css
  │   └── Card.jsx
  ├── module-6/
  │   └── variables.css
  ├── module-8/
  │   └── variables.css       (with light/dark tokens)   [STRETCH]
  └── final/
      └── ... (all files)
```

Recommendation: Option A (branches) — keeps solutions hidden from participants, and instructor can quickly checkout any state to demonstrate or help debug.
