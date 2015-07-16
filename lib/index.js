module.exports = plugin
var ware = require('ware')

function plugin () {
  var stack = ware()
    .use(require('metalsmith-sass')())
    .use(require('metalsmith-autoprefixer')())
    .use(require('metalsmith-markdown')())

  return function (files, metalsmith, done) {
    stack.run(files, metalsmith, done)
  }
}

/*
 * metalsmith api:
 *
 *     m = Metalsmith(path)
 *
 * properties:
 *
 *     .source()
 *     .destination()
 *     .concurrency()
 *     .clean()
 *     .frontmatter()
 *     .ignore(['index.md'])
 *     .metadata()
 *     .metadata().development
 *
 * methods:
 *
 *     .path('src/index.md')
 *     .build(fn)
 *
 * internal:
 *
 *     .run(files, plugins)
 *     .writeFile('xx', 'data')
 */
