/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
//      const numFrequency = {}; 
//   let goodPairs = 0; 
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (numFrequency[num]) {
//       goodPairs += numFrequency[num];
//       numFrequency[num]++;
//     } else {
//       numFrequency[num] = 1;
//     }
//   }
  
//   return goodPairs;
// };

const numfreq = {}
let count = 0

for(let i=0;i<nums.length;i++){
    let num = nums[i]
    if(numfreq[num]){
        count = count + numfreq[num]
        numfreq[num]++
    }else{
        numfreq[num] = 1
    }
}
return count
}