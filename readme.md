# promise-synchronizer

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer)
[![npm](https://img.shields.io/npm/dt/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer)
[![npm](https://img.shields.io/npm/dm/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer)

[![Build Status](https://img.shields.io/travis/fisker/promise-synchronizer.svg?style=flat-square)](https://travis-ci.org/fisker/promise-synchronizer)
[![Code Coverage](https://img.shields.io/coveralls/github/fisker/promise-synchronizer.svg?style=flat-square)](https://coveralls.io/github/fisker/promise-synchronizer)
[![MIT License](https://img.shields.io/npm/l/promise-synchronizer.svg?style=flat-square)](https://github.com/fisker/promise-synchronizer/blob/master/license)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> synchronize promise

## Install

```bash
yarn add promise-synchronizer
```

## Usage

### Wrap async functions

```js
import sync from 'promise-synchronizer'

const asyncFunction = async () => 'Fulfilled'

asyncFunction()

// -> Promise { 'Fulfilled' }

const syncFunction = sync(asyncFunction)

syncFunction()
// -> 'Fulfilled'
```

### Wait for promises

```js
import sync from 'promise-synchronizer'

const promiseWillFulfill = Promise.resolve('Fulfilled')
sync(promiseWillFulfill)
// -> Fulfilled

const promiseWillReject = Promise.reject(new Error('Rejected'))
sync(promiseWillReject)
// -> Uncaught Error: Reject
```

Use `try-catch`

```js
import sync from 'promise-synchronizer'

try {
  console.log(sync(promise)) // Fulfilled
} catch (error) {
  console.error(error) // Rejected
}
```
