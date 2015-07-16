var Metalsmith = require('metalsmith')

module.exports = function build (path, options) {
  global.before(function () {
    this.ms = new Metalsmith(path)
      .source('./src')
      .destination('./public')
      .use(require('../../lib')(options))
  })

  global.before(function (done) {
    this.ms.build(function (err) {
      if (err) throw err
      done()
    })
  })
}

