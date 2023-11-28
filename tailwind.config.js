/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gibson: ["Gibson", "sans-serif"],
        dairyMilk: ["DairyMilk", "sans-serif"],
      },
      textColor: {
        purple: "#340073",
        yellow: "#e3b364",
        error: "#ff0000",
      },
      backgroundColor: {
        yellow: "#e3b364",
        purple: "#340073",
      },
      borderColor: {
        yellow: "#e3b364",
      },
      gridTemplateRows: {
        customRows: "3fr 7fr",
        sideBarRows: "1fr 8fr 1fr",
      },
    },
  },
  plugins: [],
};
