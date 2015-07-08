module.exports = plugin
var ware = require('ware')

function plugin () {
  var stack = ware()
    .use(require('metalsmith-sass')())
    .use(require('metalsmith-autoprefixer')())

  return function (files, metalsmith, done) {
    stack.run(files, metalsmith, done)
  }
}
