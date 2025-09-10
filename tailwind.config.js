/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        commonWhite: "rgba(250,250,250,1)",
        homePageBackground: "rgba(237, 233, 254, 1)",
        homePageText: "rgba(79,79,79,1)",
        ccgcBlue: "rgba(54, 138, 156, 1)",
        ccgcBlueLight: "rgba(54, 138, 156, 0.1)",
        light: {
          100: "#D6C6FF",
          200: "#A8B5DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",
        },
        accent: "#ABBBFF",
      },
      fontSize: {},
    },
  },
  plugins: [],
};
