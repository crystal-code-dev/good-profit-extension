/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        "3xs": ["0.5rem", { lineHeight: "0.625rem" }],
      },
      colors: {
        brand: {
          DEFAULT: "#4C75F2",
          600: "#3c5af2",
        },
        orange: {
          DEFAULT: '#FE872F',
        },
        grey: {
          100: "#d5d6d7",
          500: "#8e8f90",
          600: '#3c414a',
          800: "#30353c",
          900: "#1e2127"
        },
      },
      keyframes: {
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
}
