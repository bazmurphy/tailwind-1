/** @type {import('tailwindcss').Config} */
module.exports = {
  // if there is a class that isn't mentioned in the html but is mentioned in a JS file
  // then we need to tell it to also look at the JS files so they are included in the built
  // this is more implicit:
  // content: ["./build/**/*.{html,js}"],
  // this is more explicit:
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        // we can add custom font colors text-papayawhip
        papayawhip: {
          light: "#fef4e4",
          DEFAULT: "#ffefd5",
          dark: "#fee5bc",
        },
      },
      // we add our custom media query
      screens: {
        // the width has to be a minimum of 3 to 2
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        // the height has to be 2x the width
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
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
  plugins: ["prettier-plugin-tailwindcss"],
};
