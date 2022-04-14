// recursive
const r_flatten = (nested) => {
  const flat = [];
  const handleFlat = (array) => {
    let counter = 0;
    while (counter < array.length) {
      const val = array[counter];
      if (Array.isArray(val)) {
        handleFlat(val);
      } else {
        flat.push(val);
      }
      counter++;
    }
  };
  handleFlat(nested);
  return flat;
};
console.log('recursive', r_flatten([1, 2, [3, 4, [5, 6]]]));


//
// to enable deep level flatten use recursion with reduce and concat
let arr = [1, 2, [3, 4, [5, 6]]];
function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();
}
console.log('reduce concat', flatDeep(arr, Infinity));



// non recursive flatten deep using a stack
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
// also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  return res.reverse();
}
arr = [1, 2, [3, 4, [5, 6]]];
console.log('stack', flatten(arr));
// [1, 2, 3, 4, 5, 6]


//
//using generator
function* g_flatten(array, depth) {
  if (depth === undefined) {
    depth = 1;
  }
  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* g_flatten(item, depth - 1);
    } else {
      yield item;
    }
  }
}
arr = [1, 2, [3, 4, [5, 6]]];
const flattened = [...g_flatten(arr, Infinity)];
// [1, 2, 3, 4, 5, 6]
console.log('generators', flattened);


//using array.flat
const arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]
const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]
const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/* Flatten Array Holes */
const arr5 = [1, 2, , 4, 5];
arr5.flat();