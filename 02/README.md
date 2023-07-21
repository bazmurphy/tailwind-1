This plugin will auto arrange the class list order so when we run prettier it will organise the class list for us.

```
npm i -D prettier-plugin-tailwindcss
```

`package.json`

```
  "scripts": {
    "tailwind": "npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch",
    "prettier": "npx prettier --write **/*.html"
  },
```

Extending the `theme`

```
theme: {
  extend: {
    // we can add custom font colors text-papayawhip
    colors: {
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
```
