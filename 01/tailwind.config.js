/** @type {import('tailwindcss').Config} */
module.exports = {
  // we navigate from the config file to find all .html files in the build directory
  content: ["./build/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
