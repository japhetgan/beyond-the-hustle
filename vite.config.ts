import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/beyond-the-hustle/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: '127.0.0.1',
  },
}))
