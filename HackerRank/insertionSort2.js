/* Function Description
Complete the insertionSort2 function in the editor below.
insertionSort2 has the following parameter(s):

int n: the length of arr
int arr[n]: an array of integers

Prints
At each iteration, print the array as space-separated integers on its own line.

Input Format
The first line contains an integer, n , the size of arr.
The next line contains n space-separated integers arr[i].

Output Format
Print the entire array on a new line at every iteration.

Sample Input
STDIN           Function
-----           --------
6               n = 6
1 4 3 5 6 2     arr = [1, 4, 3, 5, 6, 2]

Sample Output
1 4 3 5 6 2 
1 3 4 5 6 2 
1 3 4 5 6 2 
1 3 4 5 6 2 
1 2 3 4 5 6 

Explanation
Skip testing 1 against itself at position 0. It is sorted.
Test position 1 against position 0:4 > 1, no more to check, no change.
Print arr
Test position 2 against positions 1 and 0:
3 < 4, new position may be 1. Keep checking.
3 > 1, so insert 3 at position 1 and move others to the right.
Print arr
Test position 3 against positions 2,1,0 (as necessary): no change.
Print arr
Test position 4 against positions 3,2,1,0: no change.
Print 
Test position 5 against positions 4,3,2,1,0, insert 2 at position 1 and move others to the right.
Print arr
*/

function insertionSort2(n, arr) {
    // Write your code here
    let i, j;
    for(i = 1; i < arr.length; i++){
        let current = arr[i];
        for(j = i-1; j>=0 && arr[j] > current; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = current;
        console.log(...arr);
    }
}