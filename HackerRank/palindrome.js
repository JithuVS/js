
/* James found a love letter that his friend Harry has written to his girlfriend. James is a prankster, so he decides to meddle with the letter. 
He changes all the words in the letter into palindromes.

To do this, he follows two rules:
He can only reduce the value of a letter by 1, i.e. he can change d to c, but he cannot change c to d or d to b.
The letter a may not be reduced any further.
Each reduction in the value of any letter is counted as a single operation. Find the minimum number of operations required to convert a given string into a palindrome.

Example s = cde
The following two operations are performed: cde → cdd → cdc. Return .

Function Description
Complete the theLoveLetterMystery function in the editor below.
theLoveLetterMystery has the following parameter(s)
string s: the text of the letter

Returns
int: the minimum number of operations

Input Format
The first line contains an integer , the number of queries.
The next  lines will each contain a string .

Sample Input
STDIN   Function
-----   --------
4       q = 4
abc     query 1 = 'abc'
abcba
abcd
cba

Sample Output
2
0
4
2

*/

function theLoveLetterMystery(s) {
    let string = s;
    let reverse = s.split('').reverse().join('');
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (reverse.charCodeAt(i) > string.charCodeAt(i)) {
            count += reverse.charCodeAt(i) - string.charCodeAt(i);
        }
    }
    return count;
}


console.log(theLoveLetterMystery("abc"));
console.log(theLoveLetterMystery("abcba"));
console.log(theLoveLetterMystery("abcd"));
console.log(theLoveLetterMystery("cba"));