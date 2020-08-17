import {loopWhile} from 'deasync'
import isPromise from 'p-is-promise'

function syncFunction(asyncFunction) {
  return function (...functionArguments) {
    return sync(asyncFunction(...functionArguments))
  }
}

function sync(promise) {
  if (typeof promise === 'function') {
    return syncFunction(promise)
  }

  if (!isPromise(promise)) {
    return promise
  }

  let resolved = false
  let rejected = false
  let result
  let error

  promise.then(
    (value) => {
      resolved = true
      result = value
    },
    (rejectedError) => {
      rejected = true
      error = rejectedError
    }
  )

  loopWhile(() => !resolved && !rejected)

  if (rejected) {
    throw error
  }

  return result
}

export default sync
