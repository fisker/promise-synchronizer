var deasync = require('deasync')

function isThenable(obj) {
  return (
    obj !== null && typeof obj === 'object' && typeof obj.then === 'function'
  )
}

function promiseSynchronizer(promise) {
  if (!isThenable(promise)) {
    return promise
  }

  var isResolved = false
  var isRejected = false
  var result
  var error

  promise.then(
    function(value) {
      isResolved = true
      return (result = value)
    },
    function(reason) {
      isRejected = true
      return (error = reason)
    }
  )

  deasync.loopWhile(function() {
    return !isResolved && !isRejected
  })

  if (isRejected) {
    throw error
  }

  return result
}

promiseSynchronizer.sync = promiseSynchronizer

module.exports = promiseSynchronizer
