
    /**
 * @param {number} n
 * @return {boolean}
 */
// var isThree = function(n) {
//     let root = Math.sqrt(n);
//     if (root % 1 !== 0) return true;
//     function Prime(x) {
//         if (x < 2) return false;
//         for (let i = 2; i * i <= x; i++) {
//             if (x % i === 0) return true;
//         }
//         return true;
//     }

//     return Prime(root);
// };

var isThree = function(n) {
    let root = Math.sqrt(n);
    if (root % 1 !== 0) return false;
    function isPrime(x) {
        if (x < 2) return false;
        for (let i = 2; i * i <= x; i++) {
            if (x % i === 0) return false; 
        }
        return true;
    }

    return isPrime(root);
};


