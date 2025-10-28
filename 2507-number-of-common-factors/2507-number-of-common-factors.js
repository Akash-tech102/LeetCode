/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }


    let g = gcd(a, b);
    let count = 0;
    for (let i = 1; i * i <= g; i++) {
        if (g % i === 0) {
            count++;
            if (i !== g / i) count++; 
        }
    }

    return count;
};
