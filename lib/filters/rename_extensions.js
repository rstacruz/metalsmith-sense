var extname = require('path').extname

/*
 * renames `a.jade` to `a.html`.
 *
 *     .use(plugin({ from: '.jade', to: '.html' })
 *     .use(plugin({ from: /\.jade$/, to: '.html' })
 */

function plugin (options) {
  return function (files, ms, done) {
    Object.keys(files).forEach(function (fname) {
      var ext = extname(fname)
      if (options.from instanceof RegExp) {
        var newName = fname.replace(options.from, options.to)
        rename(fname, newName)
      } else if (ext === options.from) {
        var base = fname.substr(0, fname.length - ext.length)
        rename(fname, base + options.to)
      }
    })

    function rename (fname, newName) {
      if (newName === fname) return
      files[newName] = files[fname]
      delete files[fname]
    }

    done()
  }
}

module.exports = plugin
