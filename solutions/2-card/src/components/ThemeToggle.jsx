/* ==============================================
   THEME TOGGLE — PRE-FILLED [STRETCH]
   Participants do NOT need to edit this file.
   Used in Module 8 (Light/Dark Mode).
   ============================================== */

import { useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <button
      onClick={toggle}
      style={{
        padding: '8px 16px',
        borderRadius: '4px',
        border: '1px solid #e5e7eb',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: '14px',
      }}
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}
