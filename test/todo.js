describe('to do', function () {
  describe('css', function () {
    it('Process Sass via libsass', done)
    it('Compress CSS in production, and produce source maps in development')
    it('Enable autoprefixer', done)
  })

  describe('html', function () {
    it('Markdown support', done)
    it('Templates', done)
    it('Jade templates support', done)
    it('Jade templates support - test')
    it('Handlebars templates support', done)
    it('Jade pages support', done)
    it('Handlebars pages support')
    it('Jade partials', done)
    it('Jade partials - test')
    it('Handlebars partials', done)
  })

  describe('js', function () {
    it('`require()` support via Browserify')
    it('ES6 transpiling support via Babel')
    it('Compress JavaScript in production')
  })
})

function done () {
}

/*
bfy:

.use(require('metalsmith-bfy'))

browserify/bfy.js:

```
var browserify = require('browserify')
var babelify = require('babelify')

module.exports = function (files) {
  return browserify(files)
    .transform(babelify)
}
```
*/
