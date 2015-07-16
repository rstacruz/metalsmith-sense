/* global describe, it, expect */
var fixture = require('../support/fixture')
var build = require('../support/build')

describe('fixture/jade-ip:', function () {
  build(fixture('jade-ip'))

  it('works', function () {
    expect(fixture.file('jade-ip/public/about.html'))
      .toInclude('<h1>this is jade</h1>')
  })

  it('works with frontmatter', function () {
    expect(fixture.file('jade-ip/public/frontmatter.html'))
      .toInclude('<h1>this is jade with frontmatter</h1>')
  })

  it('leaves html alone', function () {
    expect(fixture.file('jade-ip/public/index.html'))
      .toInclude('h1 this is not jade')
  })
})
