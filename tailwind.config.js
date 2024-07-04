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
    },
    animation: {
      "text-focus-in": "text-focus-in 0.2s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
      "text-blur-out": "text-blur-out 0.2s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both"
    },
    keyframes: {
      "text-focus-in": {
        "0%": {
          filter: "blur(12px)",
          opacity: "0"
        },
        to: {
          filter: "blur(0)",
          opacity: "1"
        }
      },
      "text-blur-out": {
        "0%": {
          filter: "blur(.01)"
        },
        to: {
          filter: "blur(12px) opacity(0%)"
        }
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
    themes: ["dark", "synthwave"]
  }
}