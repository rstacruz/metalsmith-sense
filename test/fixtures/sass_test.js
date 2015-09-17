/* global describe, it, expect, before */
var fixture = require('../support/fixture')
var build = require('../support/build')
var data

describe('fixture/sass:', function () {
  build(fixture('sass'))

  before(function () {
    data = fixture.file('sass/public/style.css')
    data = data.replace(/\s/g, '') // normalize whitespace
  })

  it('parses sass', function () {
    expect(data).toInclude('div{color:blue')
  })

  it('prefixes', function () {
    expect(data).toInclude('-webkit-transform:scale(0.5)')
  })
})
