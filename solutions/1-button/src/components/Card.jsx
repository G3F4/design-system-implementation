/* ==============================================
   CARD — React Component
   EXERCISE 4B
   ============================================== */

import '../design-system/css/card.css'

/**
 * Card component — a thin wrapper around card.css
 *
 * @param {Object} props
 * @param {'elevated'|'outlined'} props.variant - Card variant
 * @param {string} props.title - Card title
 * @param {React.ReactNode} props.children - Card content
 * @param {React.ReactNode} [props.footer] - Footer content (buttons, etc.)
 */
export function Card({ variant = 'elevated', title, children, footer }) {
  // TODO (Module 4 — Exercise 4B):
  //   Return the following structure:
  //   <div className="card card--{variant}">
  //     <div className="card__title">  {title}    </div>
  //     <div className="card__content"> {children} </div>
  //     <div className="card__footer">  {footer}   </div>
  //   </div>

  return null
}
