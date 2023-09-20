/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  let ans =[]
  let n = nums.length 
  console.log(n)
  for(let i=0;i<n;i++){
        ans[i] = nums[i]
      ans[i+n] = nums[i]
    
  }  
  return ans
};