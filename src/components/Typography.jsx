/* ==============================================
   TYPOGRAPHY — React Component  [STRETCH]
   EXERCISE 7B
   ============================================== */

import '../design-system/css/typography.css'

/**
 * Typography component — a thin wrapper around typography.css
 *
 * @param {Object} props
 * @param {'h1'|'h2'|'h3'|'body'|'caption'} props.variant - Typography variant
 * @param {'left'|'center'|'right'} [props.align] - Text alignment
 * @param {React.ReactNode} props.children - Text content
 */
export function Typography({ variant = 'body', align, children }) {
  // TODO (Module 7 — Exercise 7B) [STRETCH]:
  //   1. Pick the right HTML element based on variant:
  //      h1/h2/h3  -->  <h1>, <h2>, <h3>
  //      body      -->  <p>
  //      caption   -->  <span>
  //   2. Apply className: `typo typo--${variant}`
  //      If align is provided, also add `typo--${align}`
  //   3. Render children inside

  return null
}
