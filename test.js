import test from 'ava'
import promiseSynchronizer from './'

test('resolved', t => {
  t.is(promiseSynchronizer(Promise.resolve('resolved')), 'resolved')
})

test('reject', t => {
  t.throws(
    function() {
      return promiseSynchronizer(Promise.reject(new TypeError('rejected')))
    },
    TypeError,
    'rejected'
  )
})

test('rejcet in catch', t => {
  t.throws(
    function() {
      return promiseSynchronizer(
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
      return promiseSynchronizer(
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
      var x = promiseSynchronizer(Promise.reject(new TypeError('rejected')))
    } catch (_) {}
  })
})
