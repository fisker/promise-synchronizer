# promise-synchronizer
[![Travis](https://img.shields.io/travis/fisker/promise-synchronizer.svg?style=flat-square)](https://travis-ci.org/fisker/promise-synchronizer)

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
var sync = require('promise-synchronizer')

try {
  var result = sync(promise)
} catch (err) {
  console.error(err)
}
```
## license
MIT © [fisker Cheung](https://github.com/fisker)
