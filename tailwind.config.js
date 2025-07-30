/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lacquer: ["Lacquer", "system-ui"],
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
};
