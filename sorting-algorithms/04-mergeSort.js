const { expect } = require("../assert");

function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}
function mergeSort(nums) {
    if (nums.length < 2) {
        return nums;
    }
    let l = nums.length;
    let middle = Math.floor(l / 2);
    let leftPart = nums.slice(0, middle);
    let rightPart = nums.slice(middle, l);
    return merge(mergeSort(leftPart), mergeSort(rightPart));
}
const nums = [2, 7, 4, 1, 5, 3];
const result = mergeSort(nums);
console.log("result", result);
expect(result, [1, 2, 3, 4, 5, 7]);
