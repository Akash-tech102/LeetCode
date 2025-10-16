/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const b = s.trim().split(" ");
    let lastWord = b[b.length - 1];
   return lastWord.length;
};
console.log(lengthOfLastWord);