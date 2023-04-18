/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// TO BUILD: npx tailwindcss -i ./src/main.css -o ./prod/main.css --watch