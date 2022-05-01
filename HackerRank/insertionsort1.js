/*
Function Description
Complete the insertionSort1 function in the editor below.
insertionSort1 has the following parameter(s):
arr: an array of integers to sort

Returns
None: Print the interim and final arrays, each on a new line. No return value is expected.

Input Format
The first line contains the integer n, the size of the array arr.
The next line contains n space-separated integers arr[0]...arr[n-1].


Output Format
Print the array as a row of space-separated integers each time there is a shift or insertion.

Sample Input
5
2 4 6 8 3

Sample Output
2 4 6 8 8 
2 4 6 6 8 
2 4 4 6 8 
2 3 4 6 8 

Explanation
3 is removed from the end of the array.
In the 1st line 8 > 3, so 8 is shifted one cell to the right.
In the 2nd line 6 > 3, so 6 is shifted one cell to the right.
In the 3rd line 4 > 3, so 4 is shifted one cell to the right.
In the 4th line 2 < 3, so 3 is placed at position 1. */

function insertionSort1(arr) {
    let i = arr.length - 2;
    let key = arr[arr.length - 1];
    while (i >= 0 && key <= arr[i]){
        arr[i+1] = arr[i];
        console.log(arr.join(' '));
        i--;
    }
    arr[i+1] = key; 
    console.log(arr.join(' '));
}

console.log(insertionSort1([2,4,6,8,3]));
