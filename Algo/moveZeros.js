/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let i=0;
    for(let j=0;j<nums.length;j++) {
        if(nums[j] !== 0) {
            const t = nums[j]
            nums[j] = nums[i]
            nums[i] = t
            i++;
        }
    }
    return nums;
};

let result = moveZeroes([4,2,4,0,0,3,0,5,1,0]);
console.log(result);

result = moveZeroes([2,1]);
console.log(result);

result = moveZeroes([0,1,0,3,12]);
console.log(result);