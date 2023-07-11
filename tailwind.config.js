/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      opacity: {
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        50: "0.5",
      },
      colors: {
        yellow: "#e8d33f",
        lime: "#f0fd71",
        yes: "#081c15",
        button: "#ced4da",
        cardbg: "#f9fcff",
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
        card: "linear-gradient(90deg, #fcecfe, #fbf6e7, #e6fcf5)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
