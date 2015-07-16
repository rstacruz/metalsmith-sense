/* global describe, it, expect */
var fixture = require('../support/fixture')
var build = require('../support/build')
var data

describe('fixture/partials-ip:', function () {
  build(fixture('partials-ip'))

  it('parses partials', function () {
    data = fixture.file('partials-ip/public/index.html')
    expect(data).toInclude('Hola\nworld')
  })
})
