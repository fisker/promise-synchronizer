import {loopWhile} from 'deasync'
import isPromise from 'p-is-promise'

function sync(promise) {
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
    (reason) => {
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
