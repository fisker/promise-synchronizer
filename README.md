# promise-synchronizer [![Travis](https://img.shields.io/travis/fisker/promise-synchronizer.svg?style=flat-square)](https://travis-ci.org/fisker/promise-synchronizer)

synchronize promise

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer)
[![npm](https://img.shields.io/npm/dt/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer)
[![npm](https://img.shields.io/npm/dm/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer)

## install
```sh
$ npm i promise-synchronizer
```
OR

```sh
$ yarn add promise-synchronizer
```


## usage
```js
const sync = require('promise-synchronizer')

const resolved = Promise.resolve('SUCCESS')
const rejected = Promise.reject(new Error('FAILURE'))

let success = sync(resolved) // SUCCESS

try {
  let result = sync(rejected)
} catch (err) {
  console.error(err) // FAILURE
}

```
## license
MIT © [fisker Cheung](https://github.com/fisker)
