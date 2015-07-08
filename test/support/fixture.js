var path = require('path')
var fs = require('fs')

module.exports = fixture

function fixture (name) {
  return path.join(__dirname, '../../fixtures', name)
}

fixture.file = function (name, fname) {
  var fpath = path.join(fixture(name), fname)
  return fs.readFileSync(fpath, 'utf-8')
}
