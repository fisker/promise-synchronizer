# promise-synchronizer
synchronize promise

[![npm](https://img.shields.io/npm/v/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer)
[![npm](https://img.shields.io/npm/dt/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer)
[![npm](https://img.shields.io/npm/dm/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer)

## install

    $ npm i -g promise-synchronizer

## usage
```js
var promiseSynchronizer = require('promise-synchronizer');

var promiseValue

try {
  promiseValue = promiseSynchronizer(promise)
} catch (err) {
  console.error(err)
}
```
