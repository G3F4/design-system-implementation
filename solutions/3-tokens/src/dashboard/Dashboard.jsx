/* ==============================================
   DASHBOARD — Main application page
   EXERCISE 4C — SOLUTION (with tokens)
   ============================================== */

import { Button } from '../components/Button'
import { Card } from '../components/Card'

// TODO (Module 7 — Exercise 7C) [STRETCH]:
//   import { Typography } from '../components/Typography'
//
// TODO (Module 8 — Exercise 8B) [STRETCH]:
//   import { ThemeToggle } from '../components/ThemeToggle'

export function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__title">Dashboard</h1>

        {/* TODO (Module 8 — Exercise 8B) [STRETCH]:
            Add <ThemeToggle /> here */}
      </header>

      <div className="dashboard__grid">
        <Card title="Total Users" footer={<Button variant="primary" size="sm">View Details</Button>}>
          12,847
        </Card>

        <Card title="Revenue" footer={<Button variant="primary" size="sm">View Details</Button>}>
          $48,352
        </Card>

        <Card title="Active Sessions" footer={<Button variant="primary" size="sm">View Details</Button>}>
          1,423
        </Card>

        <Card title="Error Rate" footer={<Button variant="primary" size="sm">View Details</Button>}>
          2.4%
        </Card>
      </div>
    </div>
  )
}
