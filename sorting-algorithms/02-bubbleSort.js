function bubbleSort(nums) {
  for(let i = 0 ; i < nums.length  ; i++) {
    for (let j = i+1 ; j < nums.length; j++) {
        if( nums[i] > nums[j]) {
           let temp =  nums[i];
           nums[i] = nums[j]
           nums[j] = temp
        }
    }
  }
  return nums;
}
const nums = [2,7,4,1,5,3]
const result =  bubbleSort(nums, nums.length);
console.log("result", result);

