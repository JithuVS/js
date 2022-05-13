/*In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of 
the wanted reshaped matrix.The reshaped matrix should be filled with all the elements of the original matrix in the same 
row-traversing order as they were. If the reshape operation with given parameters is possible and legal, output the new 
reshaped matrix; Otherwise, output the original matrix.

Example1
---------
| 1 | 2 |      ----------------
--------- ==>  | 1 | 2 | 3 | 4 |
| 3 | 4 |      ----------------
---------
Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
*/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

 var matrixReshape = function(nums, row, col) {
    const m = nums.length, n = nums[0].length;
    if (m * n !== row * col) return nums;  // checks if there are elements to match row * col. 
    const res = [];
    for (let i = 0; i < m * n; i++) {
        let r = Math.floor(i / col);   
        if (!res[r]) res.push([]); 
        res[r].push(nums[Math.floor(i / n)][i % n]);
    }
    return res;
};

// var matrixReshape = function (nums, r, c) {
//   var arr = nums.flat();
//   if (r * c != arr.length) return nums;

//   var res = [];
//   while (arr.length) res.push(arr.splice(0, c));
//   return res;
// };


let result = matrixReshape([[1,2],[3,4]], 1, 4);
console.log(result);