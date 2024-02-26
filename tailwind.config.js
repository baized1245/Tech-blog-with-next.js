/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  daisyui: {
    themes: [],
  },

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        dark: '#232A3C',
        medium: '293245',
      },
    },
  },
  plugins: [require('daisyui')],
}
