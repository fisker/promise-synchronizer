# promise-synchronizer
synchronize promise

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
var sync = require('promise-synchronizer');

var result

try {
  result = sync(promise)
} catch (err) {
  console.error(err)
}
```
