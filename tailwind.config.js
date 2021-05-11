module.exports = {
  mode: "jit",
  purge: {
    // TODO: Enable for reduction
    enabled: false,
    content: ["./src/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
