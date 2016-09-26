var deasync = require('deasync');

function wrapPromise(promise) {
  var originalThen = promise.then;
  var originalCatch = promise.catch;
  var wrappedPromise = promise
    .then(function(value) {
      wrappedPromise.state = 'fulfilled';
      wrappedPromise.value = value;
      return value;
    })
    .catch(function(reason) {
      wrappedPromise.state = 'rejected';
      wrappedPromise.error = reason;
      return reason;
    });
  wrappedPromise.state = 'padding';
  wrappedPromise.then = function() {
    return wrapPromise(originalThen.apply(this, arguments));
  };
  wrappedPromise.catch = function() {
    return wrapPromise(originalCatch.apply(this, arguments));
  };
  return wrappedPromise;
}

module.exports = function(promise) {
  var wrappedPromise = wrapPromise(promise);

  while(wrappedPromise.state === 'padding') {
    deasync.sleep(1);
  }

  return wrappedPromise;
}
