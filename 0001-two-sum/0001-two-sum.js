/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const numMap = {}; // Membuat objek untuk menyimpan angka yang telah dilihat
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i; // Menyimpan angka dan indeksnya dalam objek
  }
  return null; // Jika tidak ada solusi
}
