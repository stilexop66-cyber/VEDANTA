/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Body copy
        sans: ['Urbanist'],
        // Headings
        serif: ['"Playfair Display"'],
      },
    },
  },
  plugins: [],
};
