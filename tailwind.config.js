/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        tech: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0c4a6e',
          dark: '#050b14',
          accent: '#38bdf8',
          purple: '#a855f7',
          neon: '#10b981',
          alert: '#ef4444',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        type: 'type 2s steps(40, end)',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spin 15s linear infinite',
        'spin-reverse-slow': 'spin 20s linear infinite reverse',
        'grid-flow': 'gridFlow 20s linear infinite',
        glitch: 'glitch 1s linear infinite',
        scanline: 'scanline 3s linear infinite',
        shimmer: 'shimmer 1s linear infinite',
        scan: 'scan 2s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gridFlow: {
          '0%': { transform: 'translateY(0) rotateX(60deg)' },
          '100%': { transform: 'translateY(40px) rotateX(60deg)' },
        },
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scan: {
          '0%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(260px)' },
        },
      },
    },
  },
  plugins: [],
}
