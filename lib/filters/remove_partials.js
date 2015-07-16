var basename = require('path').basename
var extname = require('path').extname

/*
 * removes files such as _variables.scss from the render queue.
 */

function plugin () {
  return function (files, ms, done) {
    Object.keys(files).forEach(function (fname) {
      var base = basename(fname)
      var ext = extname(fname)

      if (isCSS(ext) && base.substr(0, 1) === '_') {
        delete files[fname]
      }
    })

    done()
  }
}

function isCSS (ext) {
  return ext === '.scss' ||
    ext === '.sass' ||
    ext === '.styl'
}

module.exports = plugin
