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

  var promiseResolved = false
  var promiseRejected = false
  var promiseValue
  var promiseReason

  Promise.resolve(promise).then(
    function(value) {
      promiseResolved = true
      return (promiseValue = value)
    },
    function(reason) {
      promiseRejected = true
      return (promiseReason = reason)
    }
  )

  deasync.loopWhile(function() {
    return !promiseResolved && !promiseRejected
  })

  if (promiseResolved) {
    return promiseValue
  }

  throw promiseReason
}

module.exports = promiseSynchronizer
