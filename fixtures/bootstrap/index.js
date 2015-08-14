var Metalsmith = require('metalsmith')

var app = Metalsmith(__dirname)
  .use(require('../../lib'))

if (module.parent) {
  module.exports = app
} else {
  app.build(function (err) {
    if (err) throw err
  })
}
