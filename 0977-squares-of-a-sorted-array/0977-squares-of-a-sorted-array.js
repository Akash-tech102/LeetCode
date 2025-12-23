/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let result = new Array(n);

    let left = 0;
    let right = n - 1;
    let posittion = n - 1;

    while (left <= right) {
        let leftSq = nums[left] * nums[left];
        let rightSq = nums[right] * nums[right];

        if (leftSq > rightSq) {
            result[posittion] = leftSq;
            left++;
        } else {
            result[posittion] = rightSq;
            right--;
        }
        posittion--;
    }
    return result;
};
