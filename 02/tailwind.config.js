/** @type {import('tailwindcss').Config} */
module.exports = {
  // if there is a class that isn't mentioned in the html but is mentioned in a JS file
  // then we need to tell it to also look at the JS files so they are included in the built
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      // we add our custom media query
      screens: {
        // the width has to be a minimum of 3 to 2
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        // the height has to be 2x the width
        tallscreen: { raw: "(min-aspect-ratio: 2/3)" },
      },
      // we can add our own keyframes
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      // and add our own animation
      animation: {
        "open-menu": "open-menu 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
