const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: "#e8d33f",
      },
      borderRadius: {
        30: "30px",
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
      },
      boxShadow: {
        highlight: "inset 3px 2px 1px 0px gray",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
