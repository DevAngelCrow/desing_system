/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js.ts.jsx,tsx}", "./storybook/**/*.{js.ts.jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6E75A8",
        primaryHover: "#5A6198",
        secondary: "#65BFA6",
        bgBasePrimary: "#FFFFFF",
        bgBaseSecondary: "#F5F6FA",
        primaryText: "#1E1E1E",
        secondaryText: "#5C5C5C"
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

