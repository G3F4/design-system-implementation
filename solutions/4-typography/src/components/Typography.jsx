/* ==============================================
   TYPOGRAPHY — React Component
   EXERCISE 7B — SOLUTION
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
  const tagMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    caption: 'span',
  }

  const Tag = tagMap[variant] || 'p'
  const className = `typo typo--${variant}${align ? ` typo--${align}` : ''}`

  return <Tag className={className}>{children}</Tag>
}
