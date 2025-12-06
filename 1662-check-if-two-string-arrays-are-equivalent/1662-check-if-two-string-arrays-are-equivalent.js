/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let concated= word1.concat(word2);
  let full=word1.join("");
  let full2=word2.join("");
  if (full==full2){
    return true;
  }
  else{
    return false;
  }
};