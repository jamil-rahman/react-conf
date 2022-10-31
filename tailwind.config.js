const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  c_yellow: "#FFC93E",
  c_brown: "#725114",
  c_blue: "#111D5E",
  c_navy: "#0A142F",
  c_gray: "rgba(10, 20, 47, 0.8)",
  c_border: "rgba(217, 217, 217, 0.5)",
  c_white: "rgba(251, 251, 251, 1)",
  c_background: "rgb(255,252,246)",
  c_brown: {
    100: "rgba(114, 81, 20, 1)",
    200: "rgba(139, 111, 59, 1)",
  },
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
      fontSize: {
        sm: "12px",
        base: "16px",
        lg: "20px",
        xl: "48px",
        "2xl": "140px",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
