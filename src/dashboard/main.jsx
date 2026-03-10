import { createRoot } from 'react-dom/client'
import { Dashboard } from './Dashboard'
import '../design-system/tokens/variables.css'
import './dashboard.css'

createRoot(document.getElementById('root')).render(<Dashboard />)
