var stack = require('./lib/helpers/make_stack')
var ware = require('ware')

module.exports = stack(function sense (options) {
  return ware()
    .use(require('./html')(options))
    .use(require('./sass')(options))
})
