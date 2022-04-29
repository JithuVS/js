/*
Sample Input
STDIN               Function
-----               --------
8 5                 n = 8, t = 5
2 3 1 2 3 2 3 3     width = [2, 3, 1, 2, 3, 2, 3, 3]
0 3                 cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]
4 6
6 7
3 5
0 7

Sample Output
1
2
3
2
1
*/

function serviceLane(width, cases) {
    let minWidth = [];
    for(let i = 0; i < cases.length; i++){
        let sliced = width.slice(cases[i][0],cases[i][1] + 1);
        minWidth.push(Math.min(...sliced));
    }
    return minWidth;
}

let result = serviceLane([2,3,2,3,2,3,3], [[0,3],[6,7],[3,5],[0,7]]);
console.log(result);