# CSS support

## Writing CSS

Write your CSS as `.scss`, `.sass`, or `.styl` and they'll get compiled. For instance, `assets/style.scss` (in `src`) will be compiled to `assets/style.css` (in `public`).

## Autoprefixer support

Autoprefixer is supported out of the box.

## Including npm packages

Install them using npm. With `--save`, they will be saved into your package.json.

```
npm install --save bootstrap-sass
```

You can use npm packages by specifying their relative path from your source files.

```scss
// src/assets/style.scss
@import '../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap'
```

---

