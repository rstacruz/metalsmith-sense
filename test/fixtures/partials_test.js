/* global describe, it, expect */
var fixture = require('../support/fixture')
var build = require('../support/build')
var data

describe('fixture/partials:', function () {
  build(fixture('partials'))

  it('parses partials', function () {
    data = fixture.file('partials/public/index.html')
    expect(data).toInclude('Hello\nworld')
  })
})
