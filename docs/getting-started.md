# Getting started

* Put stuff into `src/`, they will be copied into `public/`
* `*.hbs` will be compiled using Handlebars
* `*.jade` will be complied using Jade
* `*.sass` and `*.scss` will be complied using Sass
* `*.css` will be vendor-prefixed

## Quick start guide

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
