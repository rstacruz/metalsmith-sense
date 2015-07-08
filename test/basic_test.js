/* global describe, it, expect */
var Metalsmith = require('metalsmith')
var ms 

describe('my project', function () {
  beforeEach(function () {
    ms = new Metalsmith(__dirname + '/../fixtures/sass')
      .source('./src')
      .destination('./public')
      .use(require('../lib')())
  })

  it('works', function (done) {
    ms.build(function (err) {
      if (err) throw err
      done()
    })
  })
})
