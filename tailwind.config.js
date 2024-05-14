/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#1b1b1b",
      orange: "#ffa31a",
      grey: "#808080",
      "light-black": "#292929",
    },
    extend: {
      backgroundImage: {
        dot: "url('/assets/dot.png')",
        "hero-bg": "url('/assets/hero-bg.webp')",
        "overview-bg": "url('/assets/overview-bg.webp')",
        "footer-bg": "url('/assets/footer-bg.webp')",
        "product-bg": "url('/assets/product-bg.webp')",
      },
    },
  },
  plugins: [],
}
