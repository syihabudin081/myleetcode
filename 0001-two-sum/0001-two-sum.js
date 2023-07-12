/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = []
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        let result = nums[i] + nums[j]
        if(result == target ){
            arr.push(i)
            arr.push(j)
            return arr
        }
    }
}



};