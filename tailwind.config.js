/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'od-bg': 'var(--color-bg)',
        'od-surface': 'var(--color-surface)',
        'od-card': 'var(--color-card)',
        'od-gold': 'var(--color-gold)',
        'od-gold-light': 'var(--color-gold-light)',
        'od-gold-muted': 'var(--color-gold-muted)',
        'od-ivory': 'var(--color-ivory)',
        'od-ivory-muted': 'var(--color-ivory-muted)',
        'od-border': 'var(--color-border)',
        'od-error': 'var(--color-error)',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.2em',
      },
      boxShadow: {
        luxe: '0 20px 60px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
}

