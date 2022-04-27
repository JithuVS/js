/* Function Description

Complete the repeatedString function in the editor below.
repeatedString has the following parameter(s):
s: a string to repeat
n: the number of characters to consider

Returns
int: the frequency of a in the substring

Input Format
The first line contains a single string, .
The second line contains an integer, .

For  of the test cases,
Sample Input
aba
10

Sample Output
7

Explanation 0
The first  letters of the infinite string are abaabaabaa. Because there are  a's, we return .*/

function repeatedString(s, n) {
    let fracNumber = Math.trunc(n / s.length);
    let reminder = n % s.length;
    let counter = 0;

    for (let index = 0; index < s.length; index++) {
        if (s[index] === 'a') {
            counter++;
        }
    }
    counter = counter * fracNumber;
    for (let index = 0; index < reminder; index++) {
        if (s[index] === 'a') {
            counter++;
        }
    }
    return counter;
}

console.log(repeatedString('aba',10));