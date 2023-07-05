const {
  default: gradient,
} = require("@material-tailwind/react/theme/components/timeline/timelineIconColors/gradient");
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
        yes: "#081c15",
        button: "#ced4da",
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
      backgroundImage: {
        greenGradient: "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)",
        redGradient: "linear-gradient(315deg, #972239 0%, #db6885 74%)",
        blueGradient:
          "linear-gradient(319deg, #fce055 0%, #256eff 37%, #46237a 100%)",
        neutralGradient: "linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
