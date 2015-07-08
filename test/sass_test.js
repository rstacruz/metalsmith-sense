/* global describe, it, expect */
var Metalsmith = require('metalsmith')
var fixture = require('./support/fixture')
var ms, data

describe('sass', function () {
  before(function () {
    ms = new Metalsmith(fixture('sass'))
      .source('./src')
      .destination('./public')
      .use(require('../lib')())
  })

  before(function (done) {
    ms.build(function (err) {
      if (err) throw err
      done()
    })
  })

  before(function () {
    data = fixture.file('sass', 'public/style.css')
  })

  it('works', function () {
  })

  it('parses sass', function () {
    expect(data).toInclude('div{color:blue')
  })

  it('prefixes', function () {
    expect(data).toInclude('-webkit-transform:scale(0.5)')
  })
})
