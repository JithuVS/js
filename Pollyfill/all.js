// pollyfill for promise.all

const letsBuildAll = function (promises) {
  var count = promises.length;
  var resolvedCount = 0;
  var results = new Array(count).fill(false);

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((x) => {
          results[index] = x;
          resolvedCount += 1;
          if (resolvedCount === count) {
            resolve(results);
          }
        }, reject)
        .catch((error) => {
          reject(error);
        });
    });
  });
};

var a = new Promise((resolve) =>
  setTimeout(() => {
    resolve(3);
  }, 200)
);
var b = new Promise((resolve) => resolve(9));
var c = new Promise((resolve) => resolve(5));
var d = letsBuildAll([a, b, c]);
d.then((res) => console.log(res));
