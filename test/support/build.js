var Metalsmith = require('metalsmith')

module.exports = function build (path, options) {
  before(function () {
    this.ms = new Metalsmith(path)
      .source('./src')
      .destination('./public')
      .use(require('../../lib')(options))
  })

  before(function (done) {
    this.ms.build(function (err) {
      if (err) throw err
      done()
    })
  })
}

