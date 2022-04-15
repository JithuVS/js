//Promise.any waits for any one of the Promises to be successfully resolved. If all the promises are rejected, 
//it would reject the Promise, or successfully send an error.

const letsBuildAny = function (promises) {
  let errors = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch((error) => {
        errors.push(error);
        if (errors.length == promises.length) reject(errors);
      });
    });
  });
};

var a = new Promise((resolve) =>
  setTimeout(() => {
    resolve(3);
  }, 200)
);
var b = new Promise((resolve, reject) => reject(9));
var c = new Promise((resolve) => resolve(5));

var d = letsBuildAny([a, b, c]);
d.then((result) => console.log(result));
