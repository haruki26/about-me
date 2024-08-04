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
      "text-blur-out": "text-blur-out 0.2s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
      "fade-in-bottom": "fade-in-bottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
      "fade-in-fwd": "fade-in-fwd 1.0s cubic-bezier(0.550, 0.085, 0.680, 0.530)   backwards",
      "fade-out-bck": "fade-out-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
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
      },
      "fade-in-bottom": {
        "0%": {
          transform: "translateY(50px)",
          opacity: "0"
        },
        to: {
        transform: "translateY(0)",
        opacity: "1"
        }
      },
      "fade-in-fwd": {
        "0%": {
          transform: "translateZ(-80px)",
          opacity: "0"
        },
        to: {
        transform: "translateZ(0)",
        opacity: "1"
        }
      },
      "fade-out-bck": {
        "0%": {
          transform: "translateZ(0)",
          opacity: "1"
        },
        to: {
          transform: "translateZ(-80px)",
          opacity: "0"
        }
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
    themes: ["dark", "synthwave"]
  }
}