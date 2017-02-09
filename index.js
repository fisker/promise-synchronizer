var deasync = require('deasync');

function promiseSynchronizer(promise) {
  var promiseSettled = false;
  var promiseValue;

  promise
    .then(function(value) {
      promiseSettled = true;
      promiseValue = value;
      return value;
    });

  deasync.loopWhile(function(){
    return !promiseSettled;
  });

  return promiseValue;
}

module.exports = promiseSynchronizer;
