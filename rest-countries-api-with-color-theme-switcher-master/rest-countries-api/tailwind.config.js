/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    theme: {
      colors: {
        "dark-blue-dm": "hsl(209, 23%, 22%)",
        "darker-blue-dm": "hsl(207, 26%, 17%)",
        "darker-blue-lm": "hsl(200, 15%, 8%)",
        "dark-gray-lm": "hsl(0, 0%, 52%)",
        "lighter-gray": "hsl(0, 0%, 98%)",
        "white": "hsl(0, 0%, 100%)",
      },
    },
    plugins: [],
  },
};
