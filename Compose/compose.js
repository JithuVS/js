/* what we are doing is that using the spread operator we are transforming the arguments (our functions) into an array
   and return a new function that takes an argument “X” that will be used as the initial value of the accumulator of our 
   reduceRight function. We are basically executing every function passed as an argument from right to left with the 
   result of the previous one */

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((res, fn) => fn(res), x);


const multiply20 = (price) => price * 20;
const divide10 = (price) => price / 10;
const normalizePrice = (price) => price.toFixed(2);

console.log(compose(multiply20, divide10, normalizePrice)(20));