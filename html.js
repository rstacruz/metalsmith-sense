var stack = require('./lib/helpers/make_stack')
var ware = require('ware')
var assign = require('object-assign')

/*
 * Available options:
 *
 *     {
 *       sass: { ... },
 *       markdown: { ... }
 *     }
 */

module.exports = stack(function senseLayout (options) {
  var markdownOptions = assign({}, {
    html: true,
    typographer: true
  }, options.markdown || {})

  var markdown = require('metalsmith-markdownit')(markdownOptions)
  markdown.parser
    .use(require('markdown-it-attrs'))
    .use(require('markdown-it-decorate'))

  return ware()
    // Register handlebars partials
    .use(require('./lib/filters/register_partials')())
    // Add `filename` metadata tag
    .use(require('./lib/filters/add_filename')())
    // markdown-it (with stuff)
    .use(markdown)
    // Parse in place
    .use(require('metalsmith-in-place')({
      engine: 'handlebars', pattern: '*.hbs'
    }))
    .use(require('metalsmith-in-place')({
      engine: 'jade', pattern: '*.jade'
    }))
    // Rename to HTML
    .use(require('./lib/filters/rename_extensions')({
      from: '.jade', to: '.html'
    }))
    .use(require('./lib/filters/rename_extensions')({
      from: '.hbs', to: '.html'
    }))
    // TODO: allow both jade and handlebars layouts
    .use(require('metalsmith-layouts')({
      engine: options.engine || 'handlebars'
    }))
})
