/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        dm_sans: ["DM Sans", "sans-serif"],
        work_sans: ["Work Sans", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        primary: "#141414",
      },
    },
  },
  plugins: [],
};
