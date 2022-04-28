/*Function Description
Complete the equalizeArray function in the editor below.
equalizeArray has the following parameter(s):
int arr[n]: an array of integers

Returns
int: the minimum number of deletions required

Input Format
The first line contains an integer n, the number of elements in arr.
The next line contains n space-separated integers arr[i].

Sample Input
STDIN       Function
-----       --------
5           arr[] size n = 5
3 3 2 1 3   arr = [3, 3, 2, 1, 3]

Sample Output
2 

Explanation
Delete arr[2] = 2 and arr[3] = 1 to leave arr = [3,3,3]. This is minimal.
The only other options are to delete 4 elements to get an array of either [1] or [2].*/

function equalizeArray(arr) {
    let counter = {};
    let maxCount = 0;
    for(let i = 0; i < arr.length; i++){
        counter[arr[i]] = (counter[arr[i]] || 0 ) + 1;
        if(counter[arr[i]] > maxCount){
          maxCount = counter[arr[i]];  
        }
    }
    return arr.length - maxCount;
}

equalizeArray([3, 3, 2, 1, 3]);