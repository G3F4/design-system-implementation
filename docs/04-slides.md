# Slides Plan

> This document describes every slide in the presentation, organized by module.
> Each slide is marked as THEORY (lecture content) or EXERCISE (hands-on instruction).
> The presentation serves as both a lecture guide AND a self-paced reference for participants.

---

## Module 0: Setup & Welcome (5 min)

### Slide 0.1 — Title
- **Type:** THEORY
- **Content:** Workshop title, presenter name, date
- **Title:** "Design Systems: From Tokens to Components"
- **Subtitle:** "Building consistent UI across projects and technologies"

### Slide 0.2 — Agenda
- **Type:** THEORY
- **Content:** Numbered list of all modules with time estimates
- **Visual:**
```
  Today's agenda:

  1. What is a Design System?             10 min
  2. The Dashboard Project                  5 min
  3. Building the Button component         20 min
  4. Building the Card component           12 min
  5. Design Tokens — theory                 7 min
  6. Adding tokens to our project          10 min
  7. Typography                             8 min  [STRETCH]
  8. Light / Dark mode                     10 min  [STRETCH]
  9. Summary & What's Next                  5 min
```

### Slide 0.3 — Prerequisites
- **Type:** THEORY
- **Content:** Checklist
- **Visual:**
```
  Before we start, make sure you have:

  [x] Node.js installed (v18 or higher)
      Verify: node --version
  [x] A code editor (VS Code recommended)
  [x] A terminal / command line
  [x] Git installed
      Verify: git --version
```

### Slide 0.4 — Setup Instructions
- **Type:** EXERCISE
- **Content:** Step-by-step clone + install + dev server
- **Visual:**
```
  SETUP

  1. Clone the repository
     git clone <repo-url>
     cd ds-workshop

  2. Install dependencies
     npm install

  3. Start the dev server
     npm run dev

  4. Open http://localhost:3000

  You should see an empty page with "Dashboard" text.
  Raise your hand if you have any issues.
```

---

## Module 1: What is a Design System? (10 min)

### Slide 1.1 — Definition
- **Type:** THEORY
- **Content:** What a Design System is (and is not)
- **Visual:**
```
  A Design System is...

    A collection of reusable components, guided by clear standards,
    that can be assembled together to build any number of applications.

  A Design System is NOT...

    x  Just a component library
    x  Just a style guide
    x  Just a Figma file

  It IS the full ecosystem:
    Design principles + Tokens + Documentation + Components + Tooling
```

### Slide 1.2 — Why Design Systems Matter
- **Type:** THEORY
- **Content:** Three key benefits
- **Visual:**
```
  Why?

  1. CONSISTENCY
     Every app looks and feels the same

  2. EFFICIENCY
     Build once, use everywhere

  3. SCALABILITY
     10 teams, 50 apps — still consistent
```

### Slide 1.3 — The DS Pipeline
- **Type:** THEORY
- **Content:** The core architecture diagram
- **Visual:**
```
  ┌──────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────┐
  │  Design  │     │     CSS      │     │  Framework   │     │   App    │
  │  Tokens  │────▶│ Components   │────▶│  Components  │────▶│ Projects │
  │          │     │ (Reference)  │     │   (React,    │     │          │
  │ colors   │     │              │     │  Vue, etc.)  │     │ Dashboard│
  │ spacing  │     │ button.css   │     │              │     │ Website  │
  │ fonts    │     │ card.css     │     │ Button.jsx   │     │ Portal   │
  │ radii    │     │ typo.css     │     │ Card.jsx     │     │          │
  └──────────┘     └──────────────┘     └──────────────┘     └──────────┘
       │                  │                    │                   │
       ▼                  ▼                    ▼                   ▼
   Controlled by      Technology           Technology          Business
   UI/UX team         agnostic             specific            specific
```

### Slide 1.4 — Dependency Graph
- **Type:** THEORY
- **Content:** How one DS serves many projects
- **Visual:**
```
                        ┌─────────────────┐
                        │  Design Tokens  │
                        │  (single source │
                        │   of truth)     │
                        └────────┬────────┘
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
                    ▼            ▼            ▼
            ┌────────────┐ ┌─────────┐ ┌──────────┐
            │ CSS Impl.  │ │ iOS     │ │ Android  │
            │ (web ref.) │ │ Impl.   │ │ Impl.    │
            └──────┬─────┘ └─────────┘ └──────────┘
                   │
         ┌─────────┼─────────┐
         │         │         │
         ▼         ▼         ▼
    ┌─────────┐┌────────┐┌─────────┐
    │  React  ││  Vue   ││ Svelte  │
    │ Comps.  ││ Comps. ││ Comps.  │
    └────┬────┘└───┬────┘└────┬────┘
         │         │          │
    ┌────┼────┐    │     ┌────┼────┐
    │    │    │    │     │         │
    ▼    ▼    ▼    ▼     ▼         ▼
  ┌───┐┌───┐┌───┐┌───┐┌───┐    ┌───┐
  │App││App││App││App││App│    │App│
  │ 1 ││ 2 ││ 3 ││ 4 ││ 5 │    │ 6 │
  └───┘└───┘└───┘└───┘└───┘    └───┘
```

### Slide 1.5 — CSS as the Universal Layer
- **Type:** THEORY
- **Content:** Why CSS is the reference implementation for web
- **Visual:**
```
  One CSS implementation, many framework wrappers

                  button.css
                  card.css
                  typography.css
                       │
            ┌──────────┼──────────┐
            │          │          │
            ▼          ▼          ▼
       Button.jsx  Button.vue  Button.svelte
       (React)     (Vue)       (Svelte)

  The CSS is the source of truth.
  Each framework component is a thin wrapper
  that applies the correct CSS classes.
```

### Slide 1.6 — Workshop Scope
- **Type:** THEORY
- **Content:** What we will (and won't) cover today
- **Visual:**
```
  TODAY we will:

    [x] Build a CSS component library (button, card)
    [x] Wrap CSS in React components
    [x] Use components to build a dashboard
    [x] Add design tokens (CSS variables)
    [x] Implement typography               [STRETCH]
    [x] Implement light/dark theming       [STRETCH]

  We will NOT cover (but will mention):

    [ ] Figma integration
    [ ] Style Dictionary / token processors
    [ ] npm publishing / monorepo setup
    [ ] Testing / Storybook
    [ ] Mobile implementations (iOS/Android)
```

---

## Module 2: The Dashboard Project (5 min)

### Slide 2.1 — Wireframe
- **Type:** THEORY
- **Content:** Dashboard wireframe
- **Visual:**
```
  ┌──────────────────────────────────────────────────────────────┐
  │                                                              │
  │   Dashboard Title                          [ Toggle Theme ]  │
  │                                                              │
  ├──────────────────────────────────────────────────────────────┤
  │                                                              │
  │   ┌──────────────────────────┐  ┌──────────────────────────┐ │
  │   │  Card Title              │  │  Card Title              │ │
  │   │                          │  │                          │ │
  │   │  Some metric value       │  │  Some metric value       │ │
  │   │  or description text     │  │  or description text     │ │
  │   │                          │  │                          │ │
  │   │              [ Button ]  │  │              [ Button ]  │ │
  │   └──────────────────────────┘  └──────────────────────────┘ │
  │                                                              │
  │   ┌──────────────────────────┐  ┌──────────────────────────┐ │
  │   │  Card Title              │  │  Card Title              │ │
  │   │                          │  │                          │ │
  │   │  Some metric value       │  │  Some metric value       │ │
  │   │  or description text     │  │  or description text     │ │
  │   │                          │  │                          │ │
  │   │              [ Button ]  │  │              [ Button ]  │ │
  │   └──────────────────────────┘  └──────────────────────────┘ │
  │                                                              │
  └──────────────────────────────────────────────────────────────┘
```

### Slide 2.2 — Decomposition
- **Type:** THEORY
- **Content:** Identifying components on the wireframe
- **Visual:**
```
  ┌──────────────────────────────────────────────────────────────┐
  │                                                              │
  │   [TYPOGRAPHY h1] Dashboard Title    [BUTTON] Toggle Theme   │
  │                                                              │
  ├──────────────────────────────────────────────────────────────┤
  │                                                              │
  │   ┌─ CARD ──────────────────────┐  ┌─ CARD ────────────────┐ │
  │   │  [TYPOGRAPHY h2] Title      │  │  [TYPOGRAPHY h2]      │ │
  │   │                             │  │                        │ │
  │   │  [TYPOGRAPHY body]          │  │  [TYPOGRAPHY body]     │ │
  │   │  metric value               │  │  metric value          │ │
  │   │                             │  │                        │ │
  │   │               [BUTTON]      │  │              [BUTTON]  │ │
  │   └─────────────────────────────┘  └────────────────────────┘ │
  │                                                              │
  └──────────────────────────────────────────────────────────────┘

  Components identified:
  ├── Typography  (h1, h2, body)
  ├── Button      (primary, secondary)
  └── Card        (elevated)
```

### Slide 2.3 — Project Structure
- **Type:** THEORY
- **Content:** Show folder structure and explain layers
- **Visual:**
```
  Project structure                        DS Pipeline mapping

  ds-workshop/
  └── src/
      ├── design-system/
      │   ├── tokens/                 <--  LAYER 1: Design Tokens
      │   │   └── variables.css              (CSS custom properties)
      │   │
      │   └── css/                    <--  LAYER 2: CSS Components
      │       ├── button.css                 (reference implementation)
      │       ├── card.css                   (technology agnostic)
      │       └── typography.css
      │
      ├── components/                 <--  LAYER 3: React Components
      │   ├── Button.jsx                    (framework-specific wrapper)
      │   ├── Card.jsx
      │   ├── Typography.jsx
      │   └── ThemeToggle.jsx
      │
      └── dashboard/                  <--  LAYER 4: Application (Vite root)
          ├── index.html                    (HTML shell)
          ├── main.jsx                      (entry point)
          ├── Dashboard.jsx                 (business-specific usage)
          └── dashboard.css
```

### Slide 2.4 — What We Will Build
- **Type:** THEORY
- **Content:** How folders map to pipeline + build order
- **Visual:**
```
  ┌─────────────────────────────────────────────────────────────────┐
  │                    WHAT WE WILL BUILD TODAY                     │
  │                                                                 │
  │  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐  │
  │  │  tokens/ │───▶│   css/   │───▶│  comps/  │───▶│dashboard/│  │
  │  │          │    │          │    │          │    │          │  │
  │  │variables │    │button.css│    │Button.jsx│    │Dashboard │  │
  │  │  .css    │    │card.css  │    │Card.jsx  │    │  .jsx    │  │
  │  │          │    │typo.css  │    │Typo.jsx  │    │          │  │
  │  └──────────┘    └──────────┘    └──────────┘    └──────────┘  │
  │                                                                 │
  │     Module 6        Module 3-4      Module 3-4     Module 3-4  │
  │                                                                 │
  │  <-------- changes flow left to right -------->                 │
  │  Change a token --> all CSS updates --> all components update   │
  └─────────────────────────────────────────────────────────────────┘
```

---

## Module 3: Button Component (20 min)

### Slide 3.1 — Button Spec
- **Type:** THEORY
- **Content:** Visual reference for what we are building (variant x state matrix)
- **Visual:**
```
  BUTTON COMPONENT — Variants x States

                    PRIMARY               SECONDARY              TERTIARY

                    border + bg           border only            bg only
                    white text            primary text           white text

  DEFAULT           ┌───────────┐         ┌───────────┐          ▁▁▁▁▁▁▁▁▁▁▁
                    │███████████│         │           │         ░░░░░░░░░░░░░
                    │█ Action ██│         │  Action   │         ░░ Action ░░░
                    │███████████│         │    ───    │         ░░░░░░░░░░░░░
                    └───────────┘         └───────────┘          ▔▔▔▔▔▔▔▔▔▔▔

  HOVER             ┌───────────┐         ┌───────────┐          ▁▁▁▁▁▁▁▁▁▁▁
                    │▓▓▓▓▓▓▓▓▓▓▓│         │░░░░░░░░░░░│         ▓▓▓▓▓▓▓▓▓▓▓▓▓
                    │▓ Action ▓▓│         │░ Action  ░│         ▓▓ Action ▓▓▓
                    │▓▓▓▓▓▓▓▓▓▓▓│         │░░░░───░░░░│         ▓▓▓▓▓▓▓▓▓▓▓▓▓
                    └───────────┘         └───────────┘          ▔▔▔▔▔▔▔▔▔▔▔
                    darker bg              subtle bg fill        darker bg
                    cursor: pointer        cursor: pointer       cursor: pointer

  DISABLED          ┌───────────┐         ┌ ─ ─ ─ ─ ─┐           ▁▁▁▁▁▁▁▁▁▁▁
                    │▒▒▒▒▒▒▒▒▒▒▒│         │          │          ▒▒▒▒▒▒▒▒▒▒▒▒▒
                    │▒ Action ▒▒│         │  Action  │          ▒▒▒ Action ▒▒
                    │▒▒▒▒▒▒▒▒▒▒▒│         │          │          ▒▒▒▒▒▒▒▒▒▒▒▒▒
                    └───────────┘         └ ─ ─ ─ ─ ─┘           ▔▔▔▔▔▔▔▔▔▔▔
                    faded bg + border      faded border          faded bg
                    cursor: not-allowed    cursor: not-allowed   cursor: not-allowed

  SIZES

  SMALL                 MEDIUM (default)      LARGE
  ┌─────────┐          ┌───────────┐         ┌─────────────┐
  │ Action  │          │  Action   │         │   Action    │
  └─────────┘          └───────────┘         └─────────────┘
  py:4px px:8px         py:8px px:16px        py:12px px:24px
  font: 12px            font: 14px            font: 16px
```

### Slide 3.2 — CSS Refresher: BEM & Useful Properties
- **Type:** THEORY
- **Content:** Quick CSS refresher before the exercise
- **Visual:**
```
  CSS REFRESHER

  Naming convention (BEM):
  - .btn                  = Block (the component itself)
  - .btn--primary         = Modifier (a variant of the block)
  - .btn:hover            = State (CSS pseudo-class)

  Useful CSS properties for buttons:
  padding, background-color, color, border, border-radius,
  font-size, cursor, opacity, transition

  General tips:
  - Use "cursor: pointer" to indicate clickability
  - Use "transition" to make hover feel smooth
  - Disabled buttons typically lower opacity and change cursor
```

### Slide 3.3 — Exercise 3A: Button CSS
- **Type:** EXERCISE
- **Content:** Open-ended exercise — participants style the button freely
- **Visual:**
```
  EXERCISE 3A — Button CSS

  Open: src/design-system/css/button.css

  Create styles for the following selectors.
  Use the spec from the previous slide as a visual reference.
  Choose your own colors, spacing, and sizes!

  Selectors to implement:
  ────────────────────────────────────

  .btn {                        /* Base styles */
    border-radius: ...;
    cursor: ...;
    transition: ...;
  }

  .btn--primary {               /* Filled + bordered variant */
    background-color: ...;
    color: ...;
    border: ...;
  }

  .btn--secondary {             /* Bordered variant (no fill) */
    background-color: ...;
    color: ...;
    border: ...;
  }

  .btn--tertiary {              /* Filled variant (no border) */
    background-color: ...;
    color: ...;
    border: ...;
  }

  .btn--sm {                    /* Small size */
    padding: ...;
    font-size: ...;
  }

  .btn--md {                    /* Medium size (default) */
    padding: ...;
    font-size: ...;
  }

  .btn--lg {                    /* Large size */
    padding: ...;
    font-size: ...;
  }

  .btn:hover {                  /* Hover feedback */
    background-color: ...;
  }

  .btn:disabled {               /* Disabled state */
    opacity: ...;
    cursor: ...;
  }
```

### Slide 3.4 — Exercise 3B: Button React Component
- **Type:** EXERCISE
- **Content:** Instructions to implement Button.jsx
- **Visual:**
```
  EXERCISE 3B — Button React Component

  Open: src/components/Button.jsx

  This component is a thin wrapper around button.css.

  The component should:
  1. Import the CSS:     import '../design-system/css/button.css'
  2. Accept props:       variant ('primary'|'secondary'|'tertiary')
                         size ('sm'|'md'|'lg'), default 'md'
                         children (button label text)
                         onClick (click handler)
                         disabled (boolean)
  3. Return a <button> element with:
     - className:  'btn btn--{variant} btn--{size}'
     - onClick:    passed through
     - disabled:   passed through
     - children:   rendered inside

  Key concept:
  ┌──────────────────────────────────────────┐
  │  CSS does ALL the styling.               │
  │  React only applies the right classes.   │
  │  The component is a THIN WRAPPER.        │
  └──────────────────────────────────────────┘
```

### Slide 3.5 — Exercise 3C: Use Button in Dashboard
- **Type:** EXERCISE
- **Content:** Add Button to the dashboard
- **Visual:**
```
  EXERCISE 3C — Use Button in Dashboard

  Open: src/dashboard/Dashboard.jsx

  1. Import Button from '../components/Button'
  2. Add a few buttons to the page:
     - One primary button labeled "View Details"
     - One secondary button labeled "Cancel"
     - One disabled primary button

  Check your browser — you should see styled buttons.
```

### Slide 3.6 — Checkpoint
- **Type:** THEORY
- **Content:** Pause. Verify everyone is caught up.
- **Visual:**
```
  CHECKPOINT — Module 3

  You should now see styled buttons on your page.

  What we built:

    button.css  ──>  Button.jsx  ──>  Dashboard.jsx
    (styling)        (wrapper)        (usage)

  Key takeaway:
  The CSS is the source of truth.
  Button.jsx knows NOTHING about colors or padding.
  It only knows which CSS classes to apply.
```

---

## Module 4: Card Component (12 min)

### Slide 4.1 — Card Spec
- **Type:** THEORY
- **Content:** Visual reference for Card component (variant x state matrix)
- **Visual:**
```
  CARD COMPONENT — Variants x States

                    ELEVATED                          OUTLINED

  DEFAULT           ┌────────────────────┐            ┌────────────────────┐
                    │░░░░░░░░░░░░░░░░░░░░│            │                    │
                    │░  Card Title      ░│            │  Card Title        │
                    │░  Content         ░│            │  Content           │
                    │░  Footer          ░│            │  Footer            │
                    │░░░░░░░░░░░░░░░░░░░░│            │                    │
                    └────────────────────┘            └────────────────────┘
                    background: surface               background: transparent
                    box-shadow: subtle                 border: solid
                    border: none                       box-shadow: none

  HOVER             ┌────────────────────┐            ┌────────────────────┐
                    │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│            │░░░░░░░░░░░░░░░░░░░░│
                    │▒  Card Title      ▒│            │░ Card Title       ░│
                    │▒  Content         ▒│            │░ Content          ░│
                    │▒  Footer          ▒│            │░ Footer           ░│
                    │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│            │░░░░░░░░░░░░░░░░░░░░│
                    └────────────────────┘            └────────────────────┘
                    box-shadow: stronger               subtle bg fill

  Anatomy:
  ┌──────────────────────────────┐
  │  .card__title                │  Header
  ├──────────────────────────────┤
  │  .card__content              │  Main content
  ├──────────────────────────────┤
  │  .card__footer               │  Actions
  └──────────────────────────────┘
```

### Slide 4.2 — Exercise 4A: Card CSS
- **Type:** EXERCISE
- **Content:** Open-ended exercise — participants style the card freely
- **Visual:**
```
  EXERCISE 4A — Card CSS

  Open: src/design-system/css/card.css

  Create styles for the following selectors.
  Use the spec from the previous slide as a visual reference.

  Selectors to implement:
  ────────────────────────────────────

  .card {                       /* Base styles */
    padding: ...;
    border-radius: ...;
    background-color: ...;
  }

  .card--elevated {             /* Shadow variant */
    box-shadow: ...;
  }

  .card--outlined {             /* Border variant */
    border: ...;
  }

  .card__title {                /* Title area */
    font-size: ...;
    font-weight: ...;
    margin-bottom: ...;
  }

  .card__content {              /* Content area */
    font-size: ...;
    color: ...;
    margin-bottom: ...;
  }

  .card__footer {               /* Footer area (holds actions) */
    display: ...;
    justify-content: ...;
    gap: ...;
  }
```

### Slide 4.3 — Exercise 4B: Card React Component
- **Type:** EXERCISE
- **Content:** Implement Card.jsx
- **Visual:**
```
  EXERCISE 4B — Card React Component

  Open: src/components/Card.jsx

  The component should:
  1. Import '../design-system/css/card.css'
  2. Accept props:   variant ('elevated'|'outlined')
                     title (string)
                     children (content)
                     footer (React node — buttons, etc.)
  3. Return structure:
     <div class="card card--{variant}">
       <div class="card__title">  {title}    </div>
       <div class="card__content"> {children} </div>
       <div class="card__footer">  {footer}   </div>
     </div>
```

### Slide 4.4 — Exercise 4C: Dashboard Layout
- **Type:** EXERCISE
- **Content:** Build the grid of cards
- **Visual:**
```
  EXERCISE 4C — Build the Dashboard

  Open: src/dashboard/Dashboard.jsx

  1. Import Card from '../components/Card'
  2. Create 4 cards in the grid container:

     Card 1:  title="Total Users"     content="12,847"   footer=Button
     Card 2:  title="Revenue"         content="$48,352"  footer=Button
     Card 3:  title="Active Sessions" content="1,423"    footer=Button
     Card 4:  title="Error Rate"      content="2.4%"     footer=Button

  The grid layout is already set up in dashboard.css.
  Just place your Cards inside the grid container.
```

### Slide 4.5 — Checkpoint
- **Type:** THEORY
- **Content:** Verify progress
- **Visual:**
```
  CHECKPOINT — Module 4

  Your dashboard should look like this:

  ┌──────────────────────────────────────────────────┐
  │  ┌──────────────────┐  ┌──────────────────┐      │
  │  │  Total Users     │  │  Revenue         │      │
  │  │  12,847          │  │  $48,352         │      │
  │  │     [ View ]     │  │     [ View ]     │      │
  │  └──────────────────┘  └──────────────────┘      │
  │  ┌──────────────────┐  ┌──────────────────┐      │
  │  │  Sessions        │  │  Error Rate      │      │
  │  │  1,423           │  │  2.4%            │      │
  │  │     [ View ]     │  │     [ View ]     │      │
  │  └──────────────────┘  └──────────────────┘      │
  └──────────────────────────────────────────────────┘

  Two layers done:  CSS --> React --> Dashboard
  Next: tokens!
```

---

## Module 5: Design Tokens — Theory (7 min)

### Slide 5.1 — The Problem
- **Type:** THEORY
- **Content:** Why hardcoded values are problematic
- **Visual:**
```
  THE PROBLEM

  "The client wants a different shade of blue."

  Where is #2563eb used?

    button.css:     background: #2563eb      <-- here
    button.css:     color: #2563eb           <-- here
    button.css:     border: 1px solid #2563eb <-- here
    card.css:       ... maybe here too?
    typography.css: ... and here?

  Find all. Replace all. Hope you didn't miss any.

  Now imagine 50 files across 3 projects...
```

### Slide 5.2 — What Are Design Tokens
- **Type:** THEORY
- **Content:** Definition of design tokens
- **Visual:**
```
  DESIGN TOKENS

  Tokens are named design decisions.

  Instead of:    #2563eb
  We say:        "primary color"

  Instead of:    8px
  We say:        "small spacing"

  Instead of:    4px
  We say:        "small border radius"

  A token is a NAME for a VALUE.
  Change the value in one place — it updates everywhere.
```

### Slide 5.3 — Token Categories
- **Type:** THEORY
- **Content:** Types of tokens
- **Visual:**
```
  TOKEN CATEGORIES

  COLOR        --color-primary, --color-surface, --color-text
  SPACING      --spacing-sm, --spacing-md, --spacing-lg
  TYPOGRAPHY   --font-size-sm, --font-size-md, --font-size-lg
  RADIUS       --radius-sm, --radius-md, --radius-lg
  SHADOWS      --shadow-sm, --shadow-md, --shadow-lg
```

### Slide 5.4 — Token Hierarchy
- **Type:** THEORY
- **Content:** Three levels of tokens
- **Visual:**
```
  TOKEN HIERARCHY

  GLOBAL TOKENS              SEMANTIC TOKENS           COMPONENT TOKENS
  (raw values)               (intent/meaning)          (specific usage)

  --blue-500: #2563eb   -->  --color-primary  ---->   --btn-bg-primary
  --blue-600: #1d4ed8   -->  --color-primary-hover -> --btn-bg-primary-hover
  --gray-100: #f3f4f6   -->  --color-surface  ---->   --card-bg
  --gray-800: #1f2937   -->  --color-text     ---->   --btn-text, --card-text

  --space-4:  0.25rem   -->  --spacing-sm     ---->   --btn-padding-y
  --space-8:  0.5rem    -->  --spacing-md     ---->   --btn-padding-x

  --radius-4: 4px       -->  --radius-sm      ---->   --btn-radius
  --radius-8: 8px       -->  --radius-md      ---->   --card-radius
```

### Slide 5.5 — CSS Custom Properties
- **Type:** THEORY
- **Content:** The simplest form of tokens
- **Visual:**
```
  CSS CUSTOM PROPERTIES — the simplest token format

  Define once:
  ┌───────────────────────────────────┐
  │  :root {                          │
  │    --color-primary: #2563eb;      │
  │    --spacing-md:    16px;         │
  │    --radius-sm:     4px;          │
  │  }                                │
  └───────────────────────────────────┘

  Use everywhere:
  ┌───────────────────────────────────┐
  │  .btn--primary {                  │
  │    background: var(--color-primary);│
  │    padding: var(--spacing-md);    │
  │    border-radius: var(--radius-sm);│
  │  }                                │
  └───────────────────────────────────┘

  This is what we will implement next.
```

### Slide 5.6 — Real World Token Pipeline
- **Type:** THEORY
- **Content:** What happens in production (just awareness, not practice)
- **Visual:**
```
  IN THE REAL WORLD

  ┌───────┐    ┌──────────┐    ┌─────────────────┐    ┌────────────┐
  │ Figma │───>│  JSON    │───>│ Style Dictionary│───>│ CSS vars   │
  │       │    │  tokens  │    │ (processor)     │    │ iOS vars   │
  │       │    │          │    │                 │    │ Android    │
  └───────┘    └──────────┘    └─────────────────┘    └────────────┘

  Designers change tokens in Figma
  --> JSON exported automatically
  --> Style Dictionary converts to platform-specific formats
  --> CSS, iOS, Android all update

  Today we skip the tooling and write CSS variables directly.
  The concept is identical.
```

---

## Module 6: Adding Tokens (10 min)

### Slide 6.1 — Exercise 6A: Define Tokens
- **Type:** EXERCISE
- **Content:** Create the token file
- **Visual:**
```
  EXERCISE 6A — Define Design Tokens

  Open: src/design-system/tokens/variables.css

  Define the following CSS custom properties inside :root { }

  COLORS
  ────────────────────────────────────
  --color-primary:        #2563eb
  --color-primary-hover:  #1d4ed8
  --color-secondary:      transparent
  --color-surface:        #ffffff
  --color-background:     #f3f4f6
  --color-text:           #1f2937
  --color-border:         #e5e7eb
  --color-on-primary:     #ffffff

  SPACING
  ────────────────────────────────────
  --spacing-xs:           4px
  --spacing-sm:           8px
  --spacing-md:           16px
  --spacing-lg:           24px
  --spacing-xl:           32px

  RADIUS
  ────────────────────────────────────
  --radius-sm:            4px
  --radius-md:            8px

  TYPOGRAPHY
  ────────────────────────────────────
  --font-family:          system-ui, sans-serif
  --font-size-xs:         0.75rem
  --font-size-sm:         0.875rem
  --font-size-md:         1rem
  --font-size-lg:         1.5rem
  --font-size-xl:         2rem
  --font-weight-regular:  400
  --font-weight-medium:   600
  --font-weight-bold:     700

  SHADOWS
  ────────────────────────────────────
  --shadow-sm:            0 1px 3px rgba(0,0,0,0.12),
                          0 1px 2px rgba(0,0,0,0.06)
  --shadow-md:            0 4px 6px rgba(0,0,0,0.1)
```

### Slide 6.2 — Exercise 6B: Refactor Button CSS
- **Type:** EXERCISE
- **Content:** Replace hardcoded values with token references
- **Visual:**
```
  EXERCISE 6B — Refactor button.css to use tokens

  Open: src/design-system/css/button.css

  Replace hardcoded values with var(--token-name):

  BEFORE                              AFTER
  ──────────────────                  ──────────────────
  background: #2563eb         -->     background: var(--color-primary)
  color: #ffffff              -->     color: var(--color-on-primary)
  padding: 8px 16px           -->     padding: var(--spacing-sm) var(--spacing-md)
  border-radius: 4px          -->     border-radius: var(--radius-sm)
  font-size: 14px             -->     font-size: var(--font-size-sm)
  font-size: 12px             -->     font-size: var(--font-size-xs)
  font-size: 16px             -->     font-size: var(--font-size-md)
  border: 1px solid #2563eb   -->     border: 1px solid var(--color-primary)
  color: #2563eb              -->     color: var(--color-primary)
```

### Slide 6.3 — Exercise 6C: Refactor Card CSS
- **Type:** EXERCISE
- **Content:** Same for card.css
- **Visual:**
```
  EXERCISE 6C — Refactor card.css to use tokens

  Open: src/design-system/css/card.css

  Replace hardcoded values with var(--token-name):

  BEFORE                              AFTER
  ──────────────────                  ──────────────────
  padding: 24px               -->     padding: var(--spacing-lg)
  border-radius: 8px          -->     border-radius: var(--radius-md)
  background: #ffffff         -->     background: var(--color-surface)
  box-shadow: 0 1px 3px...    -->     box-shadow: var(--shadow-sm)
  border: 1px solid #e5e7eb   -->     border: 1px solid var(--color-border)
  color: #1f2937              -->     color: var(--color-text)
```

### Slide 6.4 — Exercise 6D: Test Token Changes
- **Type:** EXERCISE
- **Content:** Change a token value and observe
- **Visual:**
```
  EXERCISE 6D — Experience the power of tokens

  Open: src/design-system/tokens/variables.css

  Try changing these values and watch the dashboard update:

  1. Change --color-primary from #2563eb to #dc2626 (red)
     --> Watch ALL buttons change color instantly

  2. Change --radius-sm from 4px to 20px
     --> Watch all buttons become pill-shaped

  3. Change --spacing-lg from 24px to 48px
     --> Watch all cards get more padding

  Change them back when you are done.
```

### Slide 6.5 — Checkpoint
- **Type:** THEORY
- **Content:** Reflect on what just happened
- **Visual:**
```
  CHECKPOINT — Module 6

  You changed ONE variable.
  EVERY component that uses it updated automatically.

  This is the core value of tokenization.

  What we've built so far:

  tokens/variables.css  -->  css/button.css  -->  Button.jsx  -->  Dashboard
                         -->  css/card.css    -->  Card.jsx    -->
```

---

## Module 7: Typography (8 min) [STRETCH]

### Slide 7.1 — Typography Spec
- **Type:** THEORY
- **Content:** Typography scale reference
- **Visual:**
```
  TYPOGRAPHY COMPONENT

  H1        ████████████████████████████
            Dashboard Overview
            font-size: 2rem  |  weight: 700

  H2        ██████████████████████
            Card Title
            font-size: 1.5rem  |  weight: 600

  H3        ████████████████
            Section Header
            font-size: 1.25rem  |  weight: 600

  BODY      ████████████████████████████████████
            Regular paragraph text
            font-size: 1rem  |  weight: 400

  CAPTION   ██████████
            Small label text
            font-size: 0.75rem  |  weight: 400
```

### Slide 7.2 — Exercise 7A: Typography CSS
- **Type:** EXERCISE
- **Content:** Open-ended exercise — participants build a type scale
- **Visual:**
```
  EXERCISE 7A — Typography CSS

  Open: src/design-system/css/typography.css

  Create a typography scale with these selectors.
  Tokens are already defined — use var(--token-name) directly!

  Selectors to implement:
  ────────────────────────────────────

  .typo {                       /* Base styles */
    font-family: ...;               /* hint: var(--font-family) */
    line-height: ...;
  }

  .typo--h1 {                   /* Largest heading */
    font-size: ...;                  /* hint: var(--font-size-xl) */
    font-weight: ...;                /* hint: var(--font-weight-bold) */
  }

  .typo--h2 {                   /* Section heading */
    font-size: ...;
    font-weight: ...;
  }

  .typo--h3 {                   /* Sub-section heading */
    font-size: ...;
    font-weight: ...;
  }

  .typo--body {                 /* Default body text */
    font-size: ...;
    font-weight: ...;
  }

  .typo--caption {              /* Small label/caption text */
    font-size: ...;
    font-weight: ...;
  }

  Use the spec from the previous slide as size reference.
```

### Slide 7.3 — Exercise 7B: Typography React Component
- **Type:** EXERCISE
- **Content:** Implement Typography.jsx
- **Visual:**
```
  EXERCISE 7B — Typography React Component

  Open: src/components/Typography.jsx

  Props:   variant ('h1'|'h2'|'h3'|'body'|'caption')
           align ('left'|'center'|'right')
           children

  Render the appropriate HTML element:
    h1/h2/h3  -->  <h1>, <h2>, <h3>
    body      -->  <p>
    caption   -->  <span>
```

### Slide 7.4 — Exercise 7C: Use Typography in Dashboard
- **Type:** EXERCISE
- **Content:** Replace raw text with Typography component
- **Visual:**
```
  EXERCISE 7C — Add Typography to Dashboard

  1. Add a page title:  <Typography variant="h1">Dashboard</Typography>
  2. In each Card, use Typography for the title and content
  3. Add a caption below each metric value
```

### Slide 7.5 — Checkpoint
- **Type:** THEORY
- **Content:** Verify typography is applied

---

## Module 8: Light / Dark Mode (10 min) [STRETCH]

### Slide 8.1 — How Theming Works
- **Type:** THEORY
- **Content:** CSS custom properties + data attributes
- **Visual:**
```
  HOW THEMING WORKS

  CSS custom properties can be scoped to selectors.
  We use a data attribute on <html> to switch token sets.

  ┌─────────────────────────────────────────────┐
  │  :root, [data-theme="light"] {              │
  │    --color-bg:        #ffffff               │
  │    --color-surface:   #f3f4f6               │
  │    --color-text:      #1f2937               │
  │  }                                          │
  │                                             │
  │  [data-theme="dark"] {                      │
  │    --color-bg:        #111827               │
  │    --color-surface:   #1f2937               │
  │    --color-text:      #f9fafb               │
  │  }                                          │
  └─────────────────────────────────────────────┘

  <html data-theme="light">  -->  light tokens active
  <html data-theme="dark">   -->  dark tokens override

  Components DO NOT CHANGE. Only tokens change.
```

### Slide 8.2 — Exercise 8A: Add Dark Theme Tokens
- **Type:** EXERCISE
- **Content:** Restructure variables.css for theming
- **Visual:**
```
  EXERCISE 8A — Add Dark Mode Tokens

  Open: src/design-system/tokens/variables.css

  Restructure your tokens:

  1. Wrap existing tokens in :root, [data-theme="light"] { ... }

  2. Add a [data-theme="dark"] block with these overrides:

     DARK MODE VALUES
     ────────────────────────────────────
     --color-primary:        #3b82f6
     --color-primary-hover:  #60a5fa
     --color-surface:        #1f2937
     --color-background:     #111827
     --color-text:           #f9fafb
     --color-border:         #374151
     --color-on-primary:     #ffffff

     Spacing, radius, fonts stay the same — no need to repeat them.
```

### Slide 8.3 — Exercise 8B: Wire Up Theme Toggle
- **Type:** EXERCISE
- **Content:** Connect the pre-built ThemeToggle
- **Visual:**
```
  EXERCISE 8B — Add Theme Toggle to Dashboard

  Open: src/dashboard/Dashboard.jsx

  1. Import ThemeToggle:
      import { ThemeToggle } from '../components/ThemeToggle'

  2. Place it in the dashboard header area, next to the title.

  The ThemeToggle component is pre-built. It sets the
  data-theme attribute on <html> when clicked.

  Click the toggle — your entire dashboard should switch
  between light and dark mode.
```

### Slide 8.4 — Checkpoint
- **Type:** THEORY
- **Content:** Observe what happened (and what didn't change)
- **Visual:**
```
  CHECKPOINT — Module 8

  LIGHT                                DARK
  ┌─────────────────────────┐         ┌─────────────────────────┐
  │ ░░░░░░░░░░░░░░░░░░░░░░░ │         │ ████████████████████████│
  │ ░  Dashboard           ░ │        │ █  Dashboard           █│
  │ ░  ┌───────┐ ┌───────┐ ░ │        │ █  ┌───────┐ ┌───────┐ █│
  │ ░  │░░░░░░░│ │░░░░░░░│ ░ │        │ █  │▓▓▓▓▓▓▓│ │▓▓▓▓▓▓▓│ █│
  │ ░  └───────┘ └───────┘ ░ │        │ █  └───────┘ └───────┘ █│
  │ ░░░░░░░░░░░░░░░░░░░░░░░ │         │ ████████████████████████│
  └─────────────────────────┘         └─────────────────────────┘

  Key observation:
  - button.css   — did NOT change
  - card.css     — did NOT change
  - Button.jsx   — did NOT change
  - Card.jsx     — did NOT change

  Component CSS and React wrappers are theme-agnostic.
  Only token values changed. This is the power of Design Tokens.
```

---

## Module 9: Summary & What's Next (5 min)

### Slide 9.1 — What We Built
- **Type:** THEORY
- **Content:** Full pipeline recap
- **Visual:**
```
  WHAT WE BUILT TODAY

  ┌──────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────┐
  │  Design  │    │     CSS      │    │    React     │    │Dashboard │
  │  Tokens  │───>│  Components  │───>│  Components  │───>│   App    │
  │          │    │              │    │              │    │          │
  │ [x] vars │    │ [x] button   │    │ [x] Button   │    │ [x] grid │
  │ [x] light│    │ [x] card     │    │ [x] Card     │    │ [x] cards│
  │ [x] dark │    │ [x] typo     │    │ [x] Typo     │    │ [x] theme│
  │          │    │              │    │              │    │          │
  └──────────┘    └──────────────┘    └──────────────┘    └──────────┘
```

### Slide 9.2 — What We Simplified
- **Type:** THEORY
- **Content:** Gap between workshop and production
- **Visual:**
```
  WHAT WE SIMPLIFIED

  Workshop                          Production
  ────────────────────────          ────────────────────────
  CSS vars in one file              Figma --> JSON --> Style Dictionary
  Folders in one project            Separate npm packages (monorepo)
  No build for CSS                  Build pipeline for each package
  No tests                          Unit tests + Visual regression
  No documentation                  Storybook + usage docs
  No versioning                     Semantic versioning + changelogs
  No CI/CD                          Automated publishing pipeline
```

### Slide 9.3 — Tools & Resources
- **Type:** THEORY
- **Content:** Links and tools for further learning
- **Visual:**
```
  TOOLS & RESOURCES

  Token management:
  - Style Dictionary        https://amzn.github.io/style-dictionary
  - Figma Tokens plugin     https://tokens.studio

  Component development:
  - Storybook               https://storybook.js.org
  - Chromatic               https://www.chromatic.com

  Real Design Systems (open source):
  - Material UI (Google)    https://mui.com
  - Polaris (Shopify)       https://polaris.shopify.com
  - Primer (GitHub)         https://primer.style
  - Carbon (IBM)            https://carbondesignsystem.com
  - Lightning (Salesforce)  https://lightningdesignsystem.com
```

### Slide 9.4 — Key Takeaways
- **Type:** THEORY
- **Content:** Three things to remember
- **Visual:**
```
  KEY TAKEAWAYS

  1. SEPARATE CONCERNS
     Tokens --> CSS --> Components --> Apps
     Each layer has a single responsibility.

  2. CSS IS THE CONTRACT
     Write styles once in CSS.
     Framework components are thin wrappers.
     One CSS, many frameworks.

  3. TOKENS GIVE YOU CONTROL
     Centralize design decisions.
     Change once, update everywhere.
      Enable theming with zero component changes.
```

### Slide 9.5 — Q&A
- **Type:** THEORY
- **Content:** Questions slide
- **Visual:**
```
  QUESTIONS?

  Thank you for participating!
```
