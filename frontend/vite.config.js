import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure PDFs (resume, future case-study exports) are treated as
  // static assets — imported as a bundled/hashed URL, not inlined or
  // parsed as code.
  assetsInclude: ['**/*.pdf'],
   base: '/PortfolioUi/',
})



