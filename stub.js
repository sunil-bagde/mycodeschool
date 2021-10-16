const { expect } = require("../assert");

function nameOfFuction(nums) {
    return nums;
}
const nums = [2, 7, 4, 1, 5, 3];
const result = nameOfFuction(nums, nums.length);
console.log("result", result);
expect(nums, [1, 2, 3, 4, 5, 7]);
