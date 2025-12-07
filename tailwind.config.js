import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pastel-mint': '#A8E6CF',
        'pastel-mint-dark': '#7BC9A8',
        'pastel-lavender': '#DCD6F7',
        'pastel-lavender-dark': '#B8B0D8',
        'pastel-peach': '#FFDAB9',
        'pastel-peach-dark': '#E8C4A0',
        'pastel-sky': '#B4D4E7',
        'pastel-sky-dark': '#8FB8D0',
        'pastel-rose': '#F5C6D6',
        'pastel-rose-dark': '#D9A8B8',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
