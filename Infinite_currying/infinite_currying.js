// Infinite  currying for add function
function add(a){
    return function(b){
        if(b) return add(a + b);
        return a;
    }
}

console.log(add(4)(5)(6)());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function curry(fn) {
    return function curried(...args){
        return (fn.length <= args.length) ? fn.call(this, ...args) : (...more) => curried(...args, ...more);
    }
}

const sum = (a, b, c) => a + b + c;
const curried = curry(sum);

console.log(curried(2)(3)(5));
console.log(curried(2,3)(5));
console.log(curried(2,3,5));
