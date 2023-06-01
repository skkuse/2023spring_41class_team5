module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_600: "#797979",
        teal_A700: "#00b68a",
        teal_A700_01: "#00b58a",
        gray_700: "#555555",
        gray_400: "#b5b5b5",
        gray_500: "#9b9b9b",
        blue_gray_100: "#d9d9d9",
        blue_700: "#3368dc",
        blue_700_01: "#0471d3",
        red_A200: "#ff4f69",
        gray_900: "#202020",
        amber_A200: "#ffda45",
        cyan_300: "#49e7ec",
        yellow_A200: "#faff16",
        black_900: "#000000",
        white_A700_01: "#fbfffd",
        gray_500_01: "#a6a6a6",
        pink_800: "#ab1f65",
        blue_gray_900_01: "#353535",
        blue_gray_900: "#303030",
        deep_orange_400: "#ff8142",
        white_A700: "#ffffff",
        gray_700_01: "#606060",
      },
      fontFamily: {
        dnfbitbitotf: ['DNFBitBit', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
