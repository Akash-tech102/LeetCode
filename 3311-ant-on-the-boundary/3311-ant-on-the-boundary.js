/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums)
 {
    let currentposition = 0;
    let boundaryreturns = 0;
    for (let el of nums) 
    {
        currentposition += el;
        
        if (currentposition === 0)
         {
            boundaryreturns++;
        }
    }
    
    return boundaryreturns;
};