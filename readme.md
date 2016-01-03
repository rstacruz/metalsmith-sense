# metalsmith-sense

> A batteries-included distribution of metalsmith available as a plugin.

[![Status](https://travis-ci.org/rstacruz/metalsmith-sense.svg?branch=master)](https://travis-ci.org/rstacruz/metalsmith-sense "See test builds")

[Metalsmith] is a very useful static-site generator with almost all functionality provided by plugins. Most of the time, you will need the same set of functionality out of a site builder:

* CSS (`metalsmith-sense/css`):
  * compile using a modern pre-processor when needed. (*.sass, *.styl)
  * don't worry about vendor prefixes. (autoprefixer)
  * compress in production.
* HTML (`metalsmith-sense/html`):
  * compile from modern templating languages. (handlebars, jade)
  * support Markdown.
  * allow HTML classes with [markdown-it-decorate](https://www.npmjs.com/package/markdown-it-decorate).
  * support for layout templates. (layouts/)
  * support for partials. (partials/)

Compatible with Metalsmith 2.x.

[Documentation →](doc/)

<br>

## Quick start

```js
npm init
npm install --save metalsmith metalsmith-sense metalsmith-start
wget "https://raw.githubusercontent.com/rstacruz/metalsmith-sense/master/example/metalsmith.js" -O metalsmith.js
```

Update `package.json`:

```js
...
"scripts": {
  "prepublish": "node metalsmith.js",
  "start": "metalsmith-start"
}
```

Make your first page:

```js
mkdir src
echo "Hello there." > src/index.html
```

Run:

``` sh
npm start           # start server (development)
npm run prepublish  # build output (production)
```

[Documentation →](doc/)

[Metalsmith]: http://metalsmith.io/
