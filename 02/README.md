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
