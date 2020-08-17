import {expect} from 'chai'
import sync from '../src'

describe('main', function () {
  it('should work with function', function () {
    const syncVersion = sync(function (v) {
      return Promise.resolve(v)
    })
    expect(syncVersion).to.be.a('function')
    expect(syncVersion(2)).to.equal(2)
  })

  it('should work with arrow functions too', function () {
    const syncVersion = sync(async (v) => v)
    expect(syncVersion).to.be.a('function')
    expect(syncVersion(3)).to.equal(3)
  })

  it('should work with Promise too', function () {
    const syncVersion = sync(async (v) => v)
    expect(syncVersion(Promise.resolve('x'))).to.equal('x')
  })

  it('should be able to return Error', function () {
    const syncVersion = sync(async (v) => v)
    const error = new Error('error')
    expect(syncVersion(error)).to.equal(error)
  })

  it('should throw on reject promise', function () {
    const error = new Error('error')
    expect(() => {
      sync(async (v) => {
        throw error
      })()
    }).to.throw(error)
    expect(() => {
      sync((v) => {
        throw error
      })()
    }).to.throw(error)
    expect(() => {
      sync(async (v) => {
        return Promise.reject(error)
      })()
    }).to.throw(error)
  })

  it('should not run function return from promise', function () {
    const fn = (v) => v
    const promise = Promise.resolve(fn)
    expect(sync(promise)).to.equal(fn)
    expect(sync(promise)(2)).to.equal(2)
  })
})
