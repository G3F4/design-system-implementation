/* ==============================================
   DASHBOARD — Main application page
   EXERCISE 3C — SOLUTION
   ============================================== */

import { Button } from '../components/Button'

// TODO (Module 4 — Exercise 4C):
//   import Card from '../components/Card'
//
// TODO (Module 7 — Exercise 7C) [STRETCH]:
//   import Typography from '../components/Typography'
//
// TODO (Module 8 — Exercise 8B) [STRETCH]:
//   import ThemeToggle from '../components/ThemeToggle'

export function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__title">Dashboard</h1>

        {/* TODO (Module 8 — Exercise 8B) [STRETCH]:
            Add <ThemeToggle /> here */}
      </header>

      <div className="dashboard__grid">
        <Button variant="primary">View Details</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="tertiary">Learn More</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
    </div>
  )
}
