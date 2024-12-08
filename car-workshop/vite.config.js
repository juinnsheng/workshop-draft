import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/workshop-draft/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
})
