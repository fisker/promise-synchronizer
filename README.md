# sync-promise
synchronize promise

[![npm](https://img.shields.io/npm/v/sync-promise.svg?style=flat-square)](https://www.npmjs.com/package/sync-promise) 
[![npm](https://img.shields.io/npm/dt/sync-promise.svg?style=flat-square)](https://www.npmjs.com/package/sync-promise) 
[![npm](https://img.shields.io/npm/dm/sync-promise.svg?style=flat-square)](https://www.npmjs.com/package/sync-promise)

## usage

    $ npm i -g sync-promise

```
var promise = new Promise();
promise
  .then(function(value){
    ...
  })
  .catch(function(reason){
    ...
  });

var syncPromise = require('sync-promise');
console.log(syncPromise(promise).value);
```
