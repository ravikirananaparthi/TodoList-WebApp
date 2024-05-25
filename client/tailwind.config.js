/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#64748b",
        accent: "#22d3ee",
      },
    },
  },
  plugins: [],
};
