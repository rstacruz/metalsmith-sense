var stack = require('./helpers/make_stack')
var ware = require('ware')

var plugin = stack(function sense (options) {
  return ware()
    .use(plugin.layout(options))
    .use(plugin.css(options))
    .use(plugin.js(options))
})

plugin.css = stack(function senseCss (options) {
  return ware()
    .use(require('metalsmith-ignore')([
      '**/_*.{styl,scss,sass}'
    ]))
    .use(require('metalsmith-sass')())
    .use(require('metalsmith-autoprefixer')())
})

plugin.layout = stack(function senseLayout (options) {
  return ware()
    .use(require('./filters/register_partials')())
    .use(require('metalsmith-markdown')())
    .use(require('metalsmith-in-place')({
      engine: 'handlebars',
      pattern: '*.hbs'
    }))
    .use(require('metalsmith-in-place')({
      engine: 'jade',
      pattern: '*.jade'
    }))
    .use(require('./filters/rename_extensions')({
      from: '.jade',
      to: '.html'
    }))
    .use(require('./filters/rename_extensions')({
      from: '.hbs',
      to: '.html'
    }))
    .use(require('metalsmith-layouts')({
      engine: options.engine || 'handlebars'
    }))
})

plugin.js = stack(function senseJs (options) {
  return ware()
})

module.exports = plugin

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
