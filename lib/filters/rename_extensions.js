var extname = require('path').extname

/*
 * renames `a.jade` to `a.html`.
 *
 *     .use(plugin({ from: '.jade', to: '.html' })
 */

function plugin (options) {
  return function (files, ms, done) {
    Object.keys(files).forEach(function (fname) {
      var ext = extname(fname)
      if (ext === options.from) {
        var base = fname.substr(0, fname.length - ext.length)
        files[base + options.to] = files[fname]
        delete files[fname]
      }
    })

    done()
  }
}

module.exports = plugin
