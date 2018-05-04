var deasyncLoopWhile = require('deasync').loopWhile

function isThenable(obj) {
  return (
    obj !== null && typeof obj === 'object' && typeof obj.then === 'function'
  )
}

function sync(promise) {
  if (!isThenable(promise)) {
    return promise
  }

  var resolved = false
  var rejected = false
  var result
  var error

  promise.then(
    function(value) {
      resolved = true
      return (result = value)
    },
    function(reason) {
      rejected = true
      return (error = reason)
    }
  )

  deasyncLoopWhile(function() {
    return !resolved && !rejected
  })

  if (rejected) {
    throw error;
  }
  return result
}

module.exports = sync;
