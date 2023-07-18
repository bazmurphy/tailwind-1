/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      // we add our custom media query
      screens: {
        // the width has to be a minimum of 3 to 2
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        // the height has to be 2x the width
        tallscreen: { raw: "(min-aspect-ratio: 1/2)" },
      },
    },
  },
  plugins: [],
};
