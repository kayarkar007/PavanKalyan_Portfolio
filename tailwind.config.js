/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        michroma: ["Michroma", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        // Custom responsive breakpoints for small devices
        max320:  "320px" ,
        max375: "374px" 
      },
    },
  },
  plugins: [],
};
