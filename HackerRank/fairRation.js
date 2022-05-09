/*
Sample Input 0

STDIN       Function
-----       --------
5           B[] size N = 5
2 3 4 5 6   B = [2, 3, 4, 5, 6]   

Sample Output 0
4

Explanation 0
The initial distribution is (2,3,4,5,6). The requirements can be met as follows:

Give 1 loaf of bread each to the second and third people so that the distribution becomes (2,4,5,5,6).
Give 1 loaf of bread each to the third and fourth people so that the distribution becomes (2,4,6,6,6).
Each of the N subjects has an even number of loaves after 4 loaves were distributed.

Sample Input 1
1 2

Sample Output 1
NO

Explanation 1
The initial distribution is (1,2). As there are only 2 people in the line, any time you give one person a loaf you must always give the other person a loaf. 
Because the first person has an odd number of loaves and the second person has an even number of loaves, no amount of distributed loaves will ever result in both 
subjects having an even number of loaves. */


function fairRations(B) {
    let count = 0;
     
    let sum = B.reduce((acc, curr)=>{
       return curr + acc; 
    },0)

    if(sum%2 == 1){
        return 'NO';
    }
    for(let i = 0; i < B.length; i++){
        if(B[i]%2 !== 0){
            B[i] += 1;
            B[i + 1] += 1;
            count = count + 2;
        }
    }
    return count; 
}

console.log(fairRations([2,3,4,5,6]));