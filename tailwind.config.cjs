/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,svelte}"],
  theme: {
    extend: {},
    colors: {
      "primary-1": "hsl(259, 100%, 65%)",
      "primary-2": "hsl(0, 100%, 67%)",

      "neutral-1": "hsl(0, 0%, 100%)",
      "neutral-2": "hsl(0, 0%, 94%)",
      "neutral-3": "hsl(0, 0%, 86%)",
      "neutral-4": "hsl(0, 1%, 44%)",
      "neutral-5": "hsl(0, 0%, 8%)",
    },
    fontFamily: {
      sans: "Poppins",
    },
  },
  plugins: [],
};
