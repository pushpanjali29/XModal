/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          grayLight: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
    plugins: [],
  };