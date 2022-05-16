/* Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by 
Earth as a string, s , determine how many letters of the SOS message have been changed by radiation.

Example
s = 'SOSTOT'

The original message was SOSSOS. Two of the message's characters were changed in transit.
Function Description
Complete the marsExploration function in the editor below.
marsExploration has the following parameter(s):
    string s: the string as received on Earth

Returns
int: the number of letters changed during transmission


Sample Input
SOSSPSSQSSOR

Sample Output
3
 */

function marsExploration(s) {
    var n = s.length;
    var r = "SOS".repeat(n / 3);
    var count = 0;

    for (var i = 0; i < n; i++) {
        if (s[i] !== r[i]) {
            count++;
        }
    }

    return count;
}


console.log(marsExploration('SOSSPSSQSSOR'));