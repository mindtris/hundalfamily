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
          400: "#ffb703",
        },
      },
    },
  },
  plugins: [],
};
