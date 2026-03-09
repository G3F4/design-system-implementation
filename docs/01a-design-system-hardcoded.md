# Design System - Component Definitions (Hardcoded CSS)

> Version WITHOUT design tokens. All values are raw CSS.
> This is the starting point — participants first build components with hardcoded values,
> then refactor to tokens in Module 6.

---

## Overview

Our Design System contains 3 components:

| Component  | Priority | Variants                        | States                  |
|------------|----------|---------------------------------|-------------------------|
| Button     | CORE     | primary, secondary, tertiary    | default, hover, disabled|
| Card       | CORE     | elevated, outlined              | default, hover          |
| Typography | STRETCH  | h1, h2, h3, body, caption       | default               |

---

## Button

### Variants x States

```
                    PRIMARY               SECONDARY              TERTIARY

                    border + bg           border only            bg only
                    white text            primary text           white text
                    primary border        primary border         no border

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

  DISABLED          ┌───────────┐         ┌ ─ ─ ─ ─ ─┐          ▁▁▁▁▁▁▁▁▁▁▁
                    │▒▒▒▒▒▒▒▒▒▒▒│           Action               ▒▒▒▒▒▒▒▒▒▒▒
                    │▒ Action ▒▒│         │           │         ▒▒ Action ▒▒▒
                    │▒▒▒▒▒▒▒▒▒▒▒│                                ▒▒▒▒▒▒▒▒▒▒▒
                    └───────────┘         └ ─ ─ ─ ─ ─┘          ▔▔▔▔▔▔▔▔▔▔▔
                    faded bg + border      faded border          faded bg
                    opacity: reduced       opacity: reduced      opacity: reduced
                    cursor: not-allowed    cursor: not-allowed   cursor: not-allowed
```

### Sizes

```
  SMALL                 MEDIUM (default)      LARGE
  ┌─────────┐          ┌───────────┐         ┌─────────────┐
  │ Action  │          │  Action   │         │   Action    │
  └─────────┘          └───────────┘         └─────────────┘
  py:4px px:8px         py:8px px:16px        py:12px px:24px
  font: 12px            font: 14px            font: 16px
```

### CSS Class Naming

| Class              | Purpose                        |
|--------------------|--------------------------------|
| `.btn`             | Base styles                    |
| `.btn--primary`    | Filled + bordered variant      |
| `.btn--secondary`  | Bordered variant (no fill)     |
| `.btn--tertiary`   | Filled variant (no border)     |
| `.btn--sm`         | Small size                     |
| `.btn--md`         | Medium size (default)          |
| `.btn--lg`         | Large size                     |
| `.btn:hover`       | Hover state (pseudo-class)     |
| `.btn:disabled`    | Disabled state (pseudo-class)  |

### Design Specs

| Property          | Primary                         | Secondary                       | Tertiary                        |
|-------------------|---------------------------------|---------------------------------|---------------------------------|
| Background        | `#2563eb`                       | `transparent`                   | `#2563eb`                       |
| Text color        | `#ffffff`                       | `#2563eb`                       | `#ffffff`                       |
| Border            | `1px solid #2563eb`             | `1px solid #2563eb`             | `none`                          |
| Border radius     | `4px`                           | `4px`                           | `4px`                           |
| Hover background  | `#1d4ed8`                       | `rgba(37, 99, 235, 0.1)`       | `#1d4ed8`                       |
| Disabled opacity  | `0.5`                           | `0.5`                           | `0.5`                           |

---

## Card

### Variants x States

```
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
```

### Anatomy

```
  ┌──────────────────────────────┐
  │  ┌────────────────────────┐  │ <-- padding: 24px
  │  │  HEADER                │  │
  │  │  .card__title          │  │
  │  ├────────────────────────┤  │
  │  │                        │  │
  │  │  CONTENT               │  │
  │  │  .card__content        │  │
  │  │                        │  │
  │  ├────────────────────────┤  │
  │  │  FOOTER                │  │
  │  │  .card__footer         │  │
  │  └────────────────────────┘  │
  └──────────────────────────────┘
```

### CSS Class Naming

| Class             | Purpose                         |
|-------------------|---------------------------------|
| `.card`           | Base styles (padding, radius)   |
| `.card--elevated` | Shadow variant (default)        |
| `.card--outlined` | Border variant                  |
| `.card:hover`     | Hover state (optional)          |
| `.card__title`    | Header/title area               |
| `.card__content`  | Main content area               |
| `.card__footer`   | Footer area (holds actions)     |

### Design Specs

| Property          | Elevated                                                | Outlined                         |
|-------------------|---------------------------------------------------------|----------------------------------|
| Background        | `#ffffff`                                               | `transparent`                    |
| Border            | `none`                                                  | `1px solid #e5e7eb`             |
| Box shadow        | `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.06)` | `none`                        |
| Border radius     | `8px`                                                   | `8px`                            |
| Padding           | `24px`                                                  | `24px`                           |
| Hover shadow      | `0 4px 6px rgba(0,0,0,0.1)`                            | `none`                           |
| Hover bg          | unchanged                                               | `rgba(255,255,255,0.5)`         |

---

## Typography

### Variants (scale)

```
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
            Regular paragraph text for descriptions
            font-size: 1rem  |  weight: 400

  CAPTION   ██████████
            Small label text
            font-size: 0.75rem  |  weight: 400
```

### Alignment

```
  LEFT                 CENTER               RIGHT
  Aligned left         Aligned center       Aligned right
```

### CSS Class Naming

| Class             | Purpose                                |
|-------------------|----------------------------------------|
| `.typo`           | Base styles (font-family, line-height) |
| `.typo--h1`       | Heading 1                              |
| `.typo--h2`       | Heading 2                              |
| `.typo--h3`       | Heading 3                              |
| `.typo--body`     | Body text (default)                    |
| `.typo--caption`  | Small caption text                     |
| `.typo--center`   | Center aligned                         |
| `.typo--right`    | Right aligned                          |

### Design Specs

| Variant  | Font size   | Weight | Font family              |
|----------|-------------|--------|--------------------------|
| h1       | `2rem`      | `700`  | `system-ui, sans-serif`  |
| h2       | `1.5rem`    | `600`  | `system-ui, sans-serif`  |
| h3       | `1.25rem`   | `600`  | `system-ui, sans-serif`  |
| body     | `1rem`      | `400`  | `system-ui, sans-serif`  |
| caption  | `0.75rem`   | `400`  | `system-ui, sans-serif`  |

---

## Naming Convention Summary

All components follow BEM-inspired naming:

```
  .component                    Block (base)
  .component--variant           Modifier (variant/size)
  .component__element           Element (child part)
  .component:state              Pseudo-class (hover, disabled, focus)
```

Examples:
```
  .btn                          block
  .btn--primary                 variant modifier
  .btn--lg                      size modifier
  .btn:hover                    state
  .btn:disabled                 state

  .card                         block
  .card--outlined               variant modifier
  .card__title                  child element
  .card__content                child element
  .card__footer                 child element
```
