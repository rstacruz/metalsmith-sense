describe('coding style', function () {
  this.timeout(5000)

  it('lib conforms to standard', require('mocha-standard').files([
    '*.js',
    'lib/**/*.js'
  ]))

  it('tests conform to standard', require('mocha-standard').files([
    'test/**/*.js'
  ], {
    global: ['describe', 'it', 'before', 'beforeEach', 'after', 'afterEach', 'xdescribe', 'xit']
  }))
})
