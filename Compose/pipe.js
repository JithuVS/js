/*Pipe works the exact same way as Compose, the only difference is that instead of executing arguments from right to left, 
  it executes them from left to right, we can implement a Pipe function like this:
*/

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((res, fn) => fn(res), x);


const multiply20 = (price) => price * 20;
const divide10 = (price) => price / 10;
const normalizePrice = (price) => price.toFixed(2);

console.log(pipe(multiply20, divide10, normalizePrice)(20));