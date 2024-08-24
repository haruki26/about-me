import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES
      ? "about-me"
      : "./",
  plugins: [
    TanStackRouterVite(),
    viteReact(),
  ],
})
