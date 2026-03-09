# Dashboard Project

> This document describes the target application participants will build during the workshop: a simple metrics dashboard.

---

## Wireframe

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

---

## Component Decomposition

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
│   ┌─ CARD ──────────────────────┐  ┌─ CARD ────────────────┐ │
│   │  ...                        │  │  ...                   │ │
│   └─────────────────────────────┘  └────────────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Components identified

```
  Components found in the wireframe:
  ├── Typography  (h1, h2, body)     ── headings, values, descriptions
  ├── Button      (primary)          ── card actions, theme toggle
  └── Card        (elevated)         ── metric containers
```

---

## Dashboard Layout Specification

### Header

| Element          | Component          | Details                            |
|------------------|--------------------|------------------------------------|
| Page title       | Typography (h1)    | "Dashboard" or similar             |
| Theme toggle     | Button (secondary) | Switches light/dark mode [STRETCH] |

### Content Grid

| Property         | Value                           |
|------------------|---------------------------------|
| Layout           | CSS Grid, 2 columns             |
| Gap              | `--spacing-lg`                  |
| Responsive       | Not required (workshop scope)   |

### Cards (x4)

Each card represents a metric. Example data:

| Card # | Title          | Value    | Action       |
|--------|----------------|----------|--------------|
| 1      | Total Users    | 12,847   | View Details |
| 2      | Revenue        | $48,352  | View Details |
| 3      | Active Sessions| 1,423    | View Details |
| 4      | Error Rate     | 2.4%     | View Details |

### Card Anatomy (applied to dashboard)

```
  ┌──────────────────────────────┐
  │                              │
  │  [Typography h2]             │  "Total Users"
  │  Card Title                  │
  │                              │
  │  [Typography body]           │  "12,847"
  │  Metric Value                │
  │                              │
  │  [Button]                    │  "View Details"
  │  Action                      │
  │                              │
  └──────────────────────────────┘
```

---

## Build Progression

The dashboard is built incrementally across workshop modules:

### After Module 3 (Button)

```
  ┌──────────────────────────────────────────┐
  │                                          │
  │   [ Primary Button ]  [ Secondary Btn ]  │
  │                                          │
  │   Buttons visible on page, no layout.    │
  │                                          │
  └──────────────────────────────────────────┘
```

### After Module 4 (Card + layout)

```
  ┌──────────────────────────────────────────────────┐
  │                                                  │
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
  │                                                  │
  └──────────────────────────────────────────────────┘
```

### After Module 6 (Tokens)

Same visual appearance, but all hardcoded values replaced with CSS variables.
Changing `--color-primary` in one place updates all buttons and accents.

### After Module 7 [STRETCH] (Typography)

```
  ┌──────────────────────────────────────────────────┐
  │                                                  │
  │  Dashboard            (proper h1 styling)        │
  │                                                  │
  │  ┌──────────────────┐  ┌──────────────────┐      │
  │  │  Total Users     │  │  Revenue         │  (h2)│
  │  │  12,847          │  │  $48,352         │(body)│
  │  │     [ View ]     │  │     [ View ]     │      │
  │  └──────────────────┘  └──────────────────┘      │
  │  ...                                             │
  └──────────────────────────────────────────────────┘
```

### After Module 8 [STRETCH] (Light/Dark)

```
  LIGHT                                DARK
  ┌─────────────────────────┐         ┌─────────────────────────┐
  │ ░░░░░░░░░░░░░░░░░░░░░░░ │         │ ████████████████████████│
  │ ░  Dashboard           ░ │         │ █  Dashboard           █│
  │ ░  ┌───────┐ ┌───────┐ ░ │         │ █  ┌───────┐ ┌───────┐ █│
  │ ░  │░░░░░░░│ │░░░░░░░│ ░ │         │ █  │▓▓▓▓▓▓▓│ │▓▓▓▓▓▓▓│ █│
  │ ░  └───────┘ └───────┘ ░ │         │ █  └───────┘ └───────┘ █│
  │ ░░░░░░░░░░░░░░░░░░░░░░░ │         │ ████████████████████████│
  └─────────────────────────┘         └─────────────────────────┘
  white bg, dark text                  dark bg, light text
```


