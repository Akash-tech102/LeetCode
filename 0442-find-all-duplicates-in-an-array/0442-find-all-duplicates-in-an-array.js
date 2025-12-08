/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];
    let mapped = new Map();
    for (let i of nums){
        if (mapped[i]){
            result.push(i)
        }else{
            mapped[i]=true 
        }
    }
    return result 
     
};