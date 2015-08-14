module.exports = plugin
var ware = require('ware')

function plugin (options) {
  if (!options) options = {}

  var stack = ware()
    .use(require('./filters/register_partials')())
    .use(require('metalsmith-ignore')([
      '**/_*.{styl,scss,sass}'
    ]))
    .use(require('metalsmith-sass')())
    .use(require('metalsmith-autoprefixer')())
    .use(require('metalsmith-markdown')())
    .use(require('metalsmith-in-place')({
      engine: 'handlebars',
      pattern: '*.html'
    }))
    .use(require('metalsmith-in-place')({
      engine: 'jade',
      pattern: '*.jade'
    }))
    .use(require('./filters/rename_extensions')({
      from: '.jade',
      to: '.html'
    }))
    .use(require('metalsmith-layouts')({
      engine: options.engine || 'handlebars'
    }))

  return function sense (files, metalsmith, done) {
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
