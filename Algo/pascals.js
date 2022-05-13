/*
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] 
*/

var generate = function(numRows) {
    var arr = [];
    for (var i = 0; i < numRows; i++) {
        arr[i] = [];
        arr[i][0] = 1;
        for (var j = 1; j < i; j++) {
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
        }
        arr[i][i] = 1;
    }
    return arr;
};

console.log(generate(8));