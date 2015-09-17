/* global describe, it, expect, before */
var fixture = require('../support/fixture')
var build = require('../support/build')
var data

describe('fixture/layouts-jade:', function () {
  build(fixture('layouts-jade'))

  before(function () {
    data = fixture.file('layouts-jade/public/index.html')
  })

  it('parses title', function () {
    expect(data).toInclude('<title>Hello</title>')
  })

  it('parses contents', function () {
    expect(data).toInclude('Hola mundo')
  })
})
