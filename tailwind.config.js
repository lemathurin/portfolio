/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightMode: {
          background: "#FDFDFC",
          text: "#1D211C",
        },
        darkMode: {
          background: "#18181A",
          text: "#EDEEF0",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        instrument: ["var(--font-instrument)"],
        editorialNew: ["var(--font-editorialnew)"],
      },
    },
  },
  plugins: [],
};
