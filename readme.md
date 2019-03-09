# promise-synchronizer

[![Travis](https://img.shields.io/travis/fisker/promise-synchronizer.svg?style=flat-square)](https://travis-ci.org/fisker/promise-synchronizer)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer)
[![npm](https://img.shields.io/npm/dt/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer)
[![npm](https://img.shields.io/npm/dm/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer)

synchronize promise

## install

```bash
npm i promise-synchronizer
```

OR

```bash
yarn add promise-synchronizer
```

## usage

```js
const sync = require("promise-synchronizer")

const promise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("SUCCESS")
  } else {
    reject(new Error("FAILURE"))
  }
})

let result

try {
  result = sync(promise) // SUCCESS
} catch (err) {
  console.error(err) // FAILURE
}
```

## license

MIT © [fisker Cheung](https://github.com/fisker)
