```
npx tailwind init
```

```
Created Tailwind CSS config file: tailwind.config.js
```

`tailwing.config.js`

We specify which files to read from:

```
  content: ["./build/*.html"],
```

`input.css`

Tailwind compiles the CSS from the input.css file
And then creates it for us inside the /build/ directory where we tell it to
It pull in everything that Tailwind defines and then we can also define our own css classes underneath

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

We tell it where the `input.css` file is and where to build the `style.css` output file

```
npx tailwindcss -i ./src/input.css -o ./build/css/style.css
```

But instead of having to do this constantly, we can put it in watch mode

```
npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch
```
