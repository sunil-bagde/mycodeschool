/*
https://en.wikipedia.org/wiki/Selection_sort
*/

function selectionSort(nums, n) {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    let temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
  }
  return nums;
}
const nums = [2, 7, 4, 1, 5, 3];
const result = selectionSort(nums, nums.length);
console.log("result", result);
/*
 2 5 3 6 4 9
 2 5 3 6 4 9
 2,3,5,6,4,9
 2,3,5,4,6,9
 2,3,4,5,6,9
*/
