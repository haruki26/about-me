import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      zenKurenaido: ['Zen Kurenaido', 'sans-serif'],
      kosugiMaru: ['Kosugi Maru', 'sans-serif'],
    }
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
    themes: ["dark"]
  }
}
