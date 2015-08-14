# Using npm modules in sass

You can use CSS packages distributed via npm. For example to use [normalize.css], you can install it via `npm install`:

[normalize.css]: https://www.npmjs.com/package/normalize.css

```sh
npm install --save normalize.css
```

Locate the main CSS file (in this case, normalize.css) and include it using a relative path. You can omit the extension.

```scss
// src/assets/style.scss
@import '../../node_modules/normalize.css/normalize';
```

For Bootstrap-sass (`npm install --save bootstrap-sass`), you can use:

```scss
@import '../../node_modules/bootstrap-sass/assets/stylesheets/bootstrap';
```
