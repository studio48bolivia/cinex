import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { ink: '#1A1A1A', inkdeep: '#0E0E0E', bone: '#F4F1EB', archivo: '#6B5CE7', lab: '#0F6E56', reel: '#D85A30', comunidad: '#BA7517', laboratorio: '#0F6E56', festival: '#D85A30', surface: '#1A1A1A' },
      fontFamily: { sans: ['var(--font-inter)', 'system-ui', 'sans-serif'], mono: ['var(--font-mono)', 'ui-monospace', 'monospace'] },
    },
  },
  plugins: [],
}
export default config
