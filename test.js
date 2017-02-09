var promiseSynchronizer = require('./');

var resolvePromise = new Promise(function(resolve) {
    global.setTimeout(function() {
      resolve('resolved');
    }, 1000);
  })
  .then(function(value) {
    return value;
  });

console.log('run');

var sp = promiseSynchronizer(resolvePromise);
console.log(sp);

console.log('after');
