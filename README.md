# promise-synchronizer
synchronize promise

[![npm](https://img.shields.io/npm/v/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer) 
[![npm](https://img.shields.io/npm/dt/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer) 
[![npm](https://img.shields.io/npm/dm/promise-synchronizer.svg?style=flat-square)](https://www.npmjs.com/package/promise-synchronizer)

## usage

    $ npm i -g promise-synchronizer

```
var promise = new Promise();
promise
  .then(function(value){
    ...
  })
  .catch(function(reason){
    ...
  });

var promiseSynchronizer = require('promise-synchronizer');
console.log(promiseSynchronizer(promise));
```
