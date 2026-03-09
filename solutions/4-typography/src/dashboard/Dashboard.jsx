/* ==============================================
   DASHBOARD — Main application page
   EXERCISE 7C — SOLUTION (with Typography)
   ============================================== */

import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Typography } from '../components/Typography'

// TODO (Module 8 — Exercise 8B) [STRETCH]:
//   Import ThemeToggle from '../components/ThemeToggle'

export function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <Typography variant="h1">Dashboard</Typography>

        {/* TODO (Module 8 — Exercise 8B) [STRETCH]:
            Add <ThemeToggle /> here */}
      </header>

      <div className="dashboard__grid">
        <Card
          title={<Typography variant="h2">Total Users</Typography>}
          footer={<Button variant="primary" size="sm">View Details</Button>}
        >
          <Typography variant="body">12,847</Typography>
          <Typography variant="caption">+12% from last month</Typography>
        </Card>

        <Card
          title={<Typography variant="h2">Revenue</Typography>}
          footer={<Button variant="primary" size="sm">View Details</Button>}
        >
          <Typography variant="body">$48,352</Typography>
          <Typography variant="caption">+8% from last month</Typography>
        </Card>

        <Card
          title={<Typography variant="h2">Active Sessions</Typography>}
          footer={<Button variant="primary" size="sm">View Details</Button>}
        >
          <Typography variant="body">1,423</Typography>
          <Typography variant="caption">Live right now</Typography>
        </Card>

        <Card
          title={<Typography variant="h2">Error Rate</Typography>}
          footer={<Button variant="primary" size="sm">View Details</Button>}
        >
          <Typography variant="body">2.4%</Typography>
          <Typography variant="caption">-0.5% from last week</Typography>
        </Card>
      </div>
    </div>
  )
}
