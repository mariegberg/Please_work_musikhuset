module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  daisyui: {
    themes: [],
  },
  theme: {},
  extend: {
    colors: {
      green: {
        1000: "#B4CF66",
      },
      blue: "#96A3EE",
      pink: "#FC7252",
      button: "#839C3A",
      buttonhover: "#77902A",
      yellow: "FFFF55",
      black: "000000",
      white: "ffffff",
    },
    fontFamily: {
      yrsa: ["yrsa", "serif"],
      worksans: ["work sans", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
