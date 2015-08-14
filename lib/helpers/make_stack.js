function makeStack (name, fn) {
  return function stack (options) {
    if (!options) options = {}

    var stack = fn(options)

    var middleware = function (files, metalsmith, done) {
      stack.run(files, metalsmith, done)
    }

    middleware.name = name
    return middleware
  }
}

module.exports = makeStack
