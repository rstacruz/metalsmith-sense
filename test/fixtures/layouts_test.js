/* global describe, it, expect */
var fixture = require('../support/fixture')
var build = require('../support/build')
var data

describe('fixture/layouts:', function () {
  build(fixture('layouts'))

  before(function () {
    data = fixture.file('layouts/public/index.html')
  })

  it('parses title', function () {
    expect(data).toInclude('<title>Hello</title>')
  })

  it('parses contents', function () {
    expect(data).toInclude('Hola mundo')
  })
})
