import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0D12',
          900: '#0F141B',
          850: '#141A22',
          800: '#1A222D',
          700: '#232D3A',
          600: '#374357',
          500: '#57687F',
        },
        paper: {
          100: '#F5F7F6',
          200: '#EBEFEE',
          300: '#DFE5E3',
        },
        copper: {
          300: '#E8AD7C',
          400: '#D68A55',
          500: '#C2733F',
          600: '#A15B2E',
        },
        teal: {
          300: '#8FE9DE',
          400: '#6FE0D4',
          500: '#4FD1C5',
          600: '#33A99E',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(143,233,222,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(143,233,222,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(79,209,197,0.15), 0 8px 30px rgba(0,0,0,0.35)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        traceIn: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
