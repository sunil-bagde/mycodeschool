const { expect } = require("../assert");
/*
selection sort 

 7 2 4 1 5 3
     A
7 | 2 4 1 5 3

*/
function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let currentVal = nums[i];
        let currentIndex = i;

        while (currentIndex > 0 && nums[currentIndex - 1] > currentVal) {
            nums[currentIndex] = nums[currentIndex - 1];
            currentIndex--;
        }
        nums[currentIndex] = currentVal;
    }

    return nums;
}
const nums = [2, 7, 4, 1, 5, 3];
const result = insertionSort(nums, nums.length);
console.log("result", result);
expect(result, [1, 2, 3, 4, 5, 7]);
