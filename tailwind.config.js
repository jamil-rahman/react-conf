const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  c_yellow: "#FFC93E",
  c_brown: "#725114",
  c_blue: "#111D5E",
  c_navy: "#0A142F",
  c_gray: "rgba(10, 20, 47, 0.8)",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
      fontSize:{
        'sm': '12px',
        'base': '16px',
        'lg': '20px',
        'xl': '48px',
        '2xl': '140px',
      }
      
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};

