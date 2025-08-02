import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/users': 'https://jsonplaceholder.typicode.com',
      '/users/:id': 'https://jsonplaceholder.typicode.com',
    },
  },
})
