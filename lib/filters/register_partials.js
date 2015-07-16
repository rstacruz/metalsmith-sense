var Handlebars = require('handlebars')
var fs = require('fs')
var readdir = require('readdir-plus')

/*
 * Registers handlebars partials
 */

function plugin (options) {
  if (!options) options = {}
  var partials = options.partials || 'partials'
  var extension = options.extension || '.html'
  var register = options.via || Handlebars.registerPartial.bind(Handlebars)

  return function (files, ms, done) {
    var root = ms.path(partials)
    try {
      fs.statSync(root)
    } catch (e) {
      return done()
    }

    readdir(root, { recursive: true }, function (err, files) {
      if (err) return done(err)

      files.forEach(function (file) {
        if (file.extension !== extension) return
        var data = fs.readFileSync(file.path, 'utf-8')
        register(file.name, data)
        register(file.basename, data)
      })

      done()
    })
  }
}

module.exports = plugin
