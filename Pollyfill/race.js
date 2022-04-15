/* Promise.race is quite different from Promise.any. Promise.race is all about understanding which of the 
promises finished first. Here, we look for both successful or rejected promises. That means, the first 
promise to get rejected or successfully completed will be returned as the result*/

const letsBuildRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve, reject).catch((errors) => reject(errors));
    });
  });
};

var a = new Promise((resolve) =>
  setTimeout(() => {
    resolve(3);
  }, 200)
);
var b = new Promise((resolve, reject) => resolve(9));
var c = new Promise((resolve) => reject(5));

var d = letsBuildRace([a, b, c]);
d.then((result) => console.log(result));
