/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  const numFrequency = {}; 
  let goodPairs = 0; 
  for (const num of nums) {
    if (numFrequency[num]) {
      goodPairs += numFrequency[num];
      numFrequency[num]++;
    } else {
      numFrequency[num] = 1;
    }
  }
  
  return goodPairs;
};