/* global describe, it, expect */
var fixture = require('../support/fixture')
var build = require('../support/build')

describe('fixture/jade-extends:', function () {
  build(fixture('jade-extends'))

  it('works', function () {
    expect(fixture.file('jade-extends/public/about.html'))
      .toInclude('<h1>this is jade</h1>')
  })

  it('honored layout', function () {
    expect(fixture.file('jade-extends/public/about.html'))
      .toInclude('<html>')
  })
})
