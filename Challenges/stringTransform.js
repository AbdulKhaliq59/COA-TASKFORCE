/**
 * Transform a string based on its length.
 * @param {string} str - The input string to transfrom.
 * @returns {string} - The transformed string based on the specifies rules.
 */

function transformString(str) {
    let length = str.length;

    if (length % 15 === 0) {
        // If length is divisible by 15, reverse the string and then replace each character with its ASCII code.
        str = str.split('').reverse().join('');
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // If length is divible by 3, reverse the string.
        return str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // If length is divisible by 5 , replace each character with its ASCII code.
        return str.split('').map(char => char.charCodeAt(0)).join(' ')
    } else {
        return str
    }
}

//Example test cases
console.log(transformString("Pizza"));
console.log(transformString("Codec"))
console.log(transformString("Kigali"))
console.log(transformString("Africa"))