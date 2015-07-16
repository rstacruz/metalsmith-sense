/* global describe, it, expect */
var fixture = require('../support/fixture')
var build = require('../support/build')
var data

describe('sass', function () {
  build(fixture('sass'))

  before(function () {
    data = fixture.file('sass/public/style.css')
  })

  it('parses sass', function () {
    expect(data).toInclude('div{color:blue')
  })

  it('prefixes', function () {
    expect(data).toInclude('-webkit-transform:scale(0.5)')
  })
})
