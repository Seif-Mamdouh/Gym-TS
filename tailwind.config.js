// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        red: " #FF0000",
        "gray-20": "#DCE4F4",
        "gray-50": "#B4C7E9",
        "gray-100": "#8DA9DE",
        "gray-500": "#192957",
        "primary-100": "#FFEBF0",
        "primary-200": "#F4D5E4",
        "primary-300": "#E9BFD9",
        "primary-400": "#DEA9CE",
        "primary-500": "#D394C2",
        "primary-600": "#C97EBA",
        "primary-700": "#BE68AF",
        "primary-800": "#B352A3",
        "primary-900": "#A73C97",
        "secondary-400": "#FFD5B2",
        "secondary-500": "#FFC287",
        "secondary-600": "#FFAC5C",
        "secondary-700": "#FF9642",
        "secondary-800": "#FF8017",
        "secondary-900": "#FF6A00",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
