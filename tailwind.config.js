module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "architects-daughter": ['"Architects Daughter"', "sans-serif"],
      },
      colors: {
        amber: {
          400: "#fb8500",
        },
        blue: {
          400: "#023047",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
