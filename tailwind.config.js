/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        justina: ["VTF Justina GEO", "sans-serif"],
        proxon: ["Proxon", "sans-serif"]
      }
    }
  },
  plugins: []
};
