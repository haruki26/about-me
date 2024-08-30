import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV
  },
  plugins: [
    TanStackRouterVite(),
    viteReact(),
  ],
})
