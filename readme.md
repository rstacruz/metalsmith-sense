# metalsmith-sense

> A batteries-included distribution of metalsmith available as a plugin.

[![Status](https://travis-ci.org/rstacruz/metalsmith-battery.svg?branch=master)](https://travis-ci.org/rstacruz/metalsmith-battery "See test builds")

[Metalsmith] is a very useful static-site generator with almost all functionality provided by plugins. Most of the time, you will need the same set of functionality out of a site builder:

* CSS: compile using a modern pre-processor when needed. (*.sass, *.styl)
* CSS: don't worry about vendor prefixes. (autoprefixer)
* CSS: compress in production.
* HTML: compile from modern templating languages. (handlebars, jade)
* HTML: support for layout templates. (layouts/)
* HTML: support for partials. (partials/)
* JS: a reasonable build system.
* JS: transpile using modern babel.
* JS: compress in production.

[Metalsmith]: http://metalsmith.io/

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
