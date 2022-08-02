/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    
    extend: {
      colors: {
        "light": "#f5f7fb",
        "alt-light": "#d7dbe2",
        "dark": "#767f8d",
        "alt-dark": "#3c4758",
      },
    },
  },
  plugins: [],
};
