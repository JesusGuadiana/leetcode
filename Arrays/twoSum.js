/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let numsMap = {};
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        
        if(complement in numsMap){
            return [numsMap[complement], i]
        }
            numsMap[nums[i]] = i
    }
};