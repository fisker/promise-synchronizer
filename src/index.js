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
