module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Cal Sans', 'Inter', 'sans-serif'],
      serif: ['Crimson', 'Georgia', 'Garamond', 'serif'],
      mono: ['Ubuntu Mono', 'Cascadia Code', 'monospace']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
