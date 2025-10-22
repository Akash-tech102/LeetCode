/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var digits = String(n).split('').map(Number);
    var sum = 0;
    var product = 1;
    
    for (var i = 0; i < digits.length; i++) { 
        sum += digits[i];
        product *= digits[i];
            }
    return product - sum;
  };
   
