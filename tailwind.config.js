/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#ffc300",
          light: "#ffcf33",
          dark: "#e6b000",
        },
      },
      fontFamily: {
        michroma: ["Michroma", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        // Custom responsive breakpoints for small devices
        max320: "320px",
        max375: "374px",
      },
    },
  },
  plugins: [],
};
