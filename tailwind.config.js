module.exports = {
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
  plugins: [require("@tailwindcss/forms")],
};
