/* ==============================================
   BUTTON — React Component
   EXERCISE 3B
   ============================================== */

import '../design-system/css/button.css'

/**
 * Button component — a thin wrapper around button.css
 *
 * @param {Object} props
 * @param {'primary'|'secondary'|'tertiary'} props.variant - Button variant
 * @param {'sm'|'md'|'lg'} [props.size] - Button size (default: 'md')
 * @param {React.ReactNode} props.children - Button label
 * @param {Function} [props.onClick] - Click handler
 * @param {boolean} [props.disabled] - Disabled state
 */
export function Button({ variant = 'primary', size = 'md', children, onClick, disabled }) {
  // TODO (Module 3 — Exercise 3B):
  //   Return a <button> element with:
  //   - className:  'btn btn--${variant} btn--${size}'
  //   - onClick:    passed through
  //   - disabled:   passed through
  //   - children:   rendered inside

  return null
}
