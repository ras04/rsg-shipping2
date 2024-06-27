/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFFFFF',
          DEFAULT: '#4c1d95',
          dark: '#ff3841',
        },
        secondary: {
          light: '#f5f3f3',
          DEFAULT: '#e5d7ff',
          dark: '#162139',
        },
        customGreen: '#10B981', // Adding a single custom color
      },
    },
  },
  plugins: [],
}
