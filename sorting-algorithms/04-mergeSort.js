const { expect } = require("../assert");

function merge(a, start, mid, end) {
    let result = [];
    let i = start;
    let j = mid + 1;
    let resultPos = 0;
    while (i <= mid && j <= end) {
        if (a[i] <= a[j]) result[resultPos++] = a[i++];
        else result[resultPos++] = a[j++];
    }
    // flush remaining elements into result
    while (i <= mid) result[resultPos++] = a[i++];
    while (j <= end) result[resultPos++] = a[j++];
    // copy result into a
    for (let k = 0; k < result.length; k++) a[start + k] = result[k];
}
function mergeSort(a, start, end) {
    if (start >= end) return;
    let mid = start + ((end - start) >> 1);
    mergeSort(a, start, mid);
    mergeSort(a, mid + 1, end);
    merge(a, start, mid, end);
}
function mergeSortMain(a) {
    if (a == null || a.length == 0) {
        return a;
    }
    mergeSort(a, 0, a.length - 1);
    return a;
}
expect(mergeSortMain([2, 1, 5, 3, 8, 7, 6]), [1, 2, 3, 5, 6, 7, 8]);
expect(mergeSortMain([4, 8, 7, 2, 11, 1, 3]), [1, 2, 3, 4, 7, 8, 11]);

//Other with JS array built in functions

function merge1(left, right) {
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
function mergeSort1(nums) {
    if (nums.length < 2) {
        return nums;
    }
    let l = nums.length;
    let middle = Math.floor(l / 2);
    let leftPart = nums.slice(0, middle);
    let rightPart = nums.slice(middle, l);
    return merge1(mergeSort1(leftPart), mergeSort1(rightPart));
}
const nums = [2, 7, 4, 1, 5, 3];
const result = mergeSort1(nums);
console.log("result", result);
