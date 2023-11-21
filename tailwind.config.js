/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gibson: ["Gibson", "sans-serif"],
        dairyMilk: ["DairyMilk", "sans-serif"],
      },
      backgroundImage: {
        mainBackground: "url(src/assets/PartyImages/BG.jpg)",
        heroCelebrationsBG: "url(src/assets/PartyImages/CelebrationsBG.png)",
      },
    },
  },
  plugins: [],
};
