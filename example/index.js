var Metalsmith = require('metalsmith')

var app = Metalsmith(__dirname)
  .source('./src')
  .destination('./public')
  .use(require('metalsmith-sense'))

if (module.parent) {
  module.exports = app
} else {
  app.build(function (err) {
    if (err) throw err
  })
}
