# Design System - Component Definitions (Tokenized)

> Version WITH design tokens. All values reference CSS custom properties.
> This is the target state after Module 6 — participants refactor hardcoded values to tokens.

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

| Class           | Purpose                        |
|-----------------|--------------------------------|
| `.btn`          | Base styles                    |
| `.btn--primary` | Filled + bordered variant      |
| `.btn--secondary` | Bordered variant (no fill)   |
| `.btn--tertiary` | Filled variant (no border)    |
| `.btn--sm`      | Small size                     |
| `.btn--md`      | Medium size (default)          |
| `.btn--lg`      | Large size                     |
| `.btn:hover`    | Hover state (pseudo-class)     |
| `.btn:disabled` | Disabled state (pseudo-class)  |

### Design Specs

| Property          | Primary                         | Secondary                       | Tertiary                        |
|-------------------|---------------------------------|---------------------------------|---------------------------------|
| Background        | `--color-primary`               | `transparent`                   | `--color-primary`               |
| Text color        | `--color-on-primary`            | `--color-primary`               | `--color-on-primary`            |
| Border            | 1px solid `--color-primary`     | 1px solid `--color-primary`     | none                            |
| Border radius     | `--radius-sm`                   | `--radius-sm`                   | `--radius-sm`                   |
| Hover background  | `--color-primary-hover`         | `--color-primary/10`            | `--color-primary-hover`         |
| Disabled opacity  | 0.5                             | 0.5                             | 0.5                             |

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
  │  ┌────────────────────────┐  │ <-- padding: --spacing-lg
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

| Class            | Purpose                         |
|------------------|---------------------------------|
| `.card`          | Base styles (padding, radius)   |
| `.card--elevated`| Shadow variant (default)        |
| `.card--outlined`| Border variant                  |
| `.card:hover`    | Hover state (optional)          |
| `.card__title`   | Header/title area               |
| `.card__content` | Main content area               |
| `.card__footer`  | Footer area (holds actions)     |

### Design Specs

| Property          | Elevated                        | Outlined                         |
|-------------------|---------------------------------|----------------------------------|
| Background        | `--color-surface`               | `transparent`                    |
| Border            | `none`                          | `1px solid --color-border`       |
| Box shadow        | `--shadow-sm`                   | `none`                           |
| Border radius     | `--radius-md`                   | `--radius-md`                    |
| Padding           | `--spacing-lg`                  | `--spacing-lg`                   |
| Hover shadow      | `--shadow-md`                   | `none`                           |
| Hover bg          | unchanged                       | `--color-surface/50`             |

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

| Variant  | Font size          | Weight                   |
|----------|--------------------|--------------------------|
| h1       | `--font-size-xl`   | `--font-weight-bold`     |
| h2       | `--font-size-lg`   | `--font-weight-medium`   |
| h3       | `--font-size-md`   | `--font-weight-medium`   |
| body     | `--font-size-md`   | `--font-weight-regular`  |
| caption  | `--font-size-xs`   | `--font-weight-regular`  |

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
