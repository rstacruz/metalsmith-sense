var stack = require('./lib/helpers/make_stack')
var ware = require('ware')
var assign = require('object-assign')

module.exports = stack(function senseCss (options) {
  options.sass = assign({}, sassDefaults(), options.sass || {})

  return ware()
    // Remove _foo.sass (partials)
    .use(require('metalsmith-ignore')([
      '**/_*.{styl,scss,sass}'
    ]))
    .use(require('metalsmith-sass')(options.sass))
    .use(require('metalsmith-autoprefixer')())
})

/*
 * Private: sets sass default options
 */

function sassDefaults () {
  if (process.env.NODE_ENV !== 'production') {
    return {
      outputStyle: 'expanded',
      sourceMap: true,
      sourceMapContents: true
    }
  } else {
    return {
      outputStyle: 'compressed',
      sourceMap: false
    }
  }
}

