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

```js
import sync from 'promise-synchronizer'

const promise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve('SUCCESS')
  } else {
    reject(new Error('FAILURE'))
  }
})

let result

try {
  result = sync(promise) // SUCCESS
} catch (error) {
  console.error(error) // FAILURE
}
```

## License

MIT © [fisker Cheung](https://github.com/fisker)
