import test from 'ava'
import sync from './'

test('resolved', t => {
  t.is(sync(Promise.resolve('resolved')), 'resolved')
})

test('primitive value as well', t => {
  t.is(sync('resolved'), 'resolved')
})

test('reject', t => {
  t.throws(
    function() {
      return sync(Promise.reject(new TypeError('rejected')))
    },
    TypeError,
    'rejected'
  )
})

test('rejcet in catch', t => {
  t.throws(
    function() {
      return sync(
        Promise.reject(new TypeError('rejected')).catch(function(err) {
          return Promise.rejcet(err)
        })
      )
    },
    TypeError,
    'rejected'
  )
})

test('throw in catch', t => {
  t.throws(
    function() {
      return sync(
        Promise.reject(new TypeError('rejected')).catch(function(err) {
          throw err
        })
      )
    },
    TypeError,
    'rejected'
  )
})

test('try catch', t => {
  t.notThrows(function() {
    try {
      var x = sync(Promise.reject(new TypeError('rejected')))
    } catch (_) {}
  })
})

test('reject not return', t => {
  let value = 'orignal'
  try {
    value = sync(Promise.reject(new TypeError('rejected')))
  } catch (_) {}
  t.is(value, 'orignal')
})
