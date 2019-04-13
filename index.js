const deasyncLoopWhile = require('deasync').loopWhile

function isThenable(object) {
  return (
    object !== null &&
    typeof object === 'object' &&
    typeof object.then === 'function'
  )
}

function sync(promise) {
  if (!isThenable(promise)) {
    return promise
  }

  let resolved = false
  let rejected = false
  let result
  let error

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
    throw error
  }
  return result
}

module.exports = sync
