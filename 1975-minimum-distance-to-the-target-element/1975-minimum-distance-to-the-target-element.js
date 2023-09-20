/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let mindistance = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            const currentDistance = Math.abs(i - start);
            mindistance = Math.min(currentDistance, mindistance);
        }
    }

    return mindistance;
};
