/**
 * @param {number} num
 * @return {number}
 */
   var countEven = function(num) {
    
    const getDigitSum = (n) => {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    };
    
    let digitSum = getDigitSum(num);
    
    if (digitSum % 2 === 0) {
        return Math.floor(num / 2);
    } else {
        return Math.floor((num - 1) / 2);
    }
};
