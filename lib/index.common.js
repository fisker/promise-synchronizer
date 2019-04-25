'use strict'

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var deasync = require('deasync')
var isThenable = _interopDefault(require('p-is-promise'))

function sync(promise) {
  if (!isThenable(promise)) {
    return promise
  }

  let resolved = false
  let rejected = false
  let result
  let error

  promise.then(
    value => {
      resolved = true
      result = value
    },
    reason => {
      rejected = true
      error = reason
    }
  )

  deasync.loopWhile(() => !resolved && !rejected)

  if (rejected) {
    throw error
  }

  return result
}

module.exports = sync
//# sourceMappingURL=index.common.js.map
