/*
 * Adds `filename` metadata tag. Useful for jade
 */

function plugin (options) {
  return function (files, ms, done) {
    Object.keys(files).forEach(function (fname) {
      var file = files[fname]
      if (!file.filename) file.filename = ms.path(fname)
    })

    done()
  }
}

module.exports = plugin
