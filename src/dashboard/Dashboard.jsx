/* ==============================================
   DASHBOARD — Main application page
   This file is PARTIALLY pre-filled.
   You will add components here as you build them.
   ============================================== */

// -------------------------------------------------
// TODO (Module 3 — Exercise 3C):
//   Import Button from '../components/Button'
//
// TODO (Module 4 — Exercise 4C):
//   Import Card from '../components/Card'
//
// TODO (Module 7 — Exercise 7C) [STRETCH]:
//   Import Typography from '../components/Typography'
//
// TODO (Module 8 — Exercise 8B) [STRETCH]:
//   Import ThemeToggle from '../components/ThemeToggle'
// -------------------------------------------------

export function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__title">Dashboard</h1>

        {/* TODO (Module 8 — Exercise 8B) [STRETCH]:
            Add <ThemeToggle /> here */}
      </header>

      <div className="dashboard__grid">
        {/* TODO (Module 3 — Exercise 3C):
            Add a few Button components here to test them.
            Example:
              <Button variant="primary">View Details</Button>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary" disabled>Disabled</Button>
        */}

        {/* TODO (Module 4 — Exercise 4C):
            Replace the buttons above with 4 Card components:
              Card 1: title="Total Users"      content="12,847"
              Card 2: title="Revenue"          content="$48,352"
              Card 3: title="Active Sessions"  content="1,423"
              Card 4: title="Error Rate"       content="2.4%"
            Each card should have a Button in its footer.
        */}
      </div>
    </div>
  )
}
