/* global describe, it, expect */
var fixture = require('../support/fixture')
var build = require('../support/build')
var data

describe('fixture/bootstrap:', function () {
  build(fixture('bootstrap'))

  before(function () {
    data = fixture.file('bootstrap/public/style.css')
  })

  it('parses bootstrap', function () {
    expect(data).toInclude('Bootstrap v3')
  })
})
