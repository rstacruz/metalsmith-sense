/* global describe, it, expect, before */
var fixture = require('../support/fixture')
var build = require('../support/build')
var data

describe('fixture/markdown:', function () {
  build(fixture('markdown'))

  before(function () {
    data = fixture.file('markdown/public/index.html')
  })

  it('parses plain markdown', function () {
    expect(data).toInclude('<h1>Hello world</h1>')
  })

  it('parses markdown attributes (markdown-it-attrs)', function () {
    expect(data).toMatch(/<h2 class=['"]myclass['"]>H2 with class/)
  })
})
