import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// En GitHub Pages el sitio vive en /<repo-name>/ salvo que el repo sea <usuario>.github.io
// Cambia VITE_BASE_PATH en el workflow de CI o en .env.local si es necesario.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  base: process.env.VITE_BASE_PATH ? `/${process.env.VITE_BASE_PATH}/` : '/',
})
