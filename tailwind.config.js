/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,jsx,mdx}", "./components/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#f8f7f4",
        foreground: "#111111"
      }
    }
  },
  plugins: []
};

module.exports = config;
