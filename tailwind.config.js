/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // make sure your files are included
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};