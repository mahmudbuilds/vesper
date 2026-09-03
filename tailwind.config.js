/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#19191D',
        'cluely-blue': '#497EE9',
        'cluely-blue-light': '#749CFF',
        'cluely-gray': '#8C929D',
        'cluely-dark': '#19191D',
        'card-bg': '#F9FAFB',
        'periwinkle': '#DDE2EE',
        'periwinkle-dark': '#BBC5DD',
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glass-inner': '1.899px 1.77px 8.174px 0 rgba(255, 255, 255, 0.13) inset, 1.007px 0.939px 4.087px 0 rgba(255, 255, 255, 0.13) inset',
        'pill-inner': '0 0 0 1px rgba(207, 226, 255, 0.24), 0 -0.5px 0 0 rgba(255, 255, 255, 0.8)',
        'hud-glow': '0 20px 50px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15)',
        'button-inset': '0 0.7px 0 0 #AFB3C4 inset',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
