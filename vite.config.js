import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const base = process.env.SOLUTION
  ? `solutions/${process.env.SOLUTION}/src`
  : 'src'

export default defineConfig({
  root: path.resolve(__dirname, base, 'dashboard'),
  plugins: [react()],
  server: {
    port: 3000,
  },
})
