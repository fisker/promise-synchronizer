import {loopWhile} from 'deasync'
import isThenable from 'p-is-promise'

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

  loopWhile(() => !resolved && !rejected)

  if (rejected) {
    throw error
  }

  return result
}

export default sync
//# sourceMappingURL=index.mjs.map
