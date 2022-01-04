module.exports = {
  content: [],
  purge: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}
