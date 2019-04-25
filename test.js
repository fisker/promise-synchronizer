import test from 'ava'
import sync from './src'

const rejectError = new TypeError('rejected')

test('resolved', t => {
  t.is(sync(Promise.resolve('resolved')), 'resolved')
})

test('primitive value as well', t => {
  t.is(sync('resolved'), 'resolved')
})

test('reject', t => {
  t.throws(function() {
    return sync(Promise.reject(rejectError))
  }, TypeError)
})

test('reject in catch', t => {
  t.throws(function() {
    return sync(
      Promise.reject(rejectError).catch(error => Promise.reject(error))
    )
  }, TypeError)
})

test('throw in catch', t => {
  t.throws(function() {
    return sync(
      Promise.reject(rejectError).catch(function(error) {
        throw error
      })
    )
  }, TypeError)
})

test('try catch', t => {
  t.notThrows(function() {
    try {
      sync(Promise.reject(rejectError))
    } catch {}
  })
})

test('reject not return', t => {
  let value = 'orignal'
  try {
    value = sync(Promise.reject(rejectError))
  } catch {}
  t.is(value, 'orignal')
})

test('reject already catched', t => {
  t.notThrows(function() {
    return sync(Promise.reject(rejectError).catch(() => {}))
  })
})
