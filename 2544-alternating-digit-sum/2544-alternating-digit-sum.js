/**
 * @param {number} n
 * @return {number}
 */
  var alternateDigitSum = function(n) {
  let dig = String(n).split("").map(Number);
  let sum = 0;

  for (let i = 0; i < dig.length; i++) {
    if (i % 2 !== 0) {
      dig[i] = -dig[i];  
    }
  }

  for (let num of dig) {
    sum += num; 
  }

  return sum;
};
