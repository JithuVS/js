/*Promise.allSettled will return a single promise when all the promises are successfully executed. 
It does not depend if the promises are resolved, or rejected.*/

const letsBuildSettled = function (promises = []) {
  return new Promise((resolve, reject) => {
    let results = [];
    promises.forEach((promise) => {
      promise
        .then((value) => {
          results.push({ status: "fulfilled", value: value });
          if (promises.length === results.length) resolve(results);
        })
        .catch((err) => {
          results.push({ status: "rejected", reason: `${err}` });
          if (promises.length === results.length) resolve(results);
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

var d = letsBuildSettled([a, b, c]);
d.then((result) => console.log(result));
