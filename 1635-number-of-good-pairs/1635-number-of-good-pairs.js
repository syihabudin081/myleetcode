/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
     const numFrequency = {}; 
  let goodPairs = 0; 
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numFrequency[num]) {
      goodPairs += numFrequency[num];
      numFrequency[num]++;
    } else {
      numFrequency[num] = 1;
    }
  }
  
  return goodPairs;
};