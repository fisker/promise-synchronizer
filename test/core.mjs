import {expect} from 'chai'
import sync from '../src/index.mjs'

const rejectError = new Error('rejected')
const resolveValue = 'resolved'
const getRejectPromise = () => Promise.reject(rejectError)
const getResolvePromise = (value) => Promise.resolve(value || resolveValue)

describe('main', function () {
  it('should work with promise resolves with value', function () {
    expect(sync(getResolvePromise())).equal(resolveValue)
  })

  it('should work with promise resolves with promise', function () {
    expect(sync(getResolvePromise(getResolvePromise()))).equal(resolveValue)
  })

  it('should accept primitive value', function () {
    expect(sync(resolveValue)).equal(resolveValue)
  })

  it('should throw on reject promise', function () {
    expect(() => {
      sync(getRejectPromise())
    }).to.throw(rejectError)
  })

  it('should work with reject in catch', function () {
    const promise = getRejectPromise().catch(() => getRejectPromise())

    expect(() => {
      sync(promise)
    }).to.throw(rejectError)
  })

  it('should work with throw in catch', function () {
    expect(() => {
      sync(
        getRejectPromise().catch((error) => {
          throw error
        })
      )
    }).to.throw(rejectError)
  })

  it('should work with try/catch', function () {
    expect(() => {
      try {
        sync(getRejectPromise())
      } catch {}
    }).to.not.throw()
  })

  it('rejected value should not return', function () {
    let value = 'original'
    try {
      value = sync(getRejectPromise())
    } catch {}
    expect(value).equal('original')
  })

  it('should not throw promise already catched', function () {
    expect(() => sync(getRejectPromise().catch(() => {}))).to.not.throw()
  })

  it('promise resolves with function is sync too', function () {
    const asyncFunction = async () => 1
    const promise = Promise.resolve(asyncFunction)
    const resolvedValue = sync(promise)
    expect(resolvedValue).to.equal(asyncFunction)
  })
})
