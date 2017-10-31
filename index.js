var deasync = require('deasync')

function promiseSynchronizer(promise) {
  var promiseResolved = false
  var promiseRejected = false
  var promiseValue
  var promiseReason

  promise.then(
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
