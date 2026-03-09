/* ==============================================
   BUTTON — React Component
   EXERCISE 3B — SOLUTION
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
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
