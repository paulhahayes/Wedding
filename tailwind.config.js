/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        bs: "8px 8px 0px #000000",
        bsl: "4px 4px 0px #fff",
      },
    },
  },

  plugins: [],
};
