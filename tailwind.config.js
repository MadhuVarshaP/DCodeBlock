/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        justina: ["VTF Justina GEO", "sans-serif"],
        proxon: ["Proxon", "sans-serif"]
      },
      textShadow: {
        purple: "0 0 8px rgba(176, 38, 255, 0.6)"
      }
    }
  },
  plugins: []
};
