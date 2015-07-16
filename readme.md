# metalsmith-battery

A batteries-included distribution of metalsmith available as a plugin.

[![Status](https://travis-ci.org/rstacruz/metalsmith-battery.svg?branch=master)](https://travis-ci.org/rstacruz/metalsmith-battery "See test builds")

CSS:

- [x] Process Sass via libsass
- [ ] Compress CSS in production, and produce source maps in development
- [x] Enable autoprefixer

Templates:

- [x] Markdown support
- [x] Templates
- [ ] Jade templates support
- [x] Handlebars templates support
- [x] Jade pages support
- [ ] Handlebars pages support
- [ ] Jade partials
- [x] Handlebars partials

JavaScript:

- [ ] `require()` support via Browserify
- [ ] ES6 transpiling support via Babel
- [ ] Compress JavaScript in production

<br>

## Quick start

Easy:

```
curl http://whatever | sh -
```

Hard mode:

```js
npm init
npm install --save metalsmith metalsmith-battery metalsmith-start
```

```js
// metalsmith.json
{
  "source": "./src",
  "destination": "./public",
  "plugins": "{
    "../../lib": {}
  }
}
```

```js
// package.json
{
  ...
  "scripts": {
    "build": "metalsmith",
    "start": "metalsmith-start"
  }
}
```

Run:

``` sh
npm run build    # build output (production)
npm run start    # start server (development)
```
