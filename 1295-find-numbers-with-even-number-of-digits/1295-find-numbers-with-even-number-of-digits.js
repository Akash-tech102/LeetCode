/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let splitted = nums.map(num=>String(num).split(""));
    let count = 0;
    for(let element of splitted){
        if (element.length % 2 == 0){
            count++;
             

        }
    }
    return count;
   
};