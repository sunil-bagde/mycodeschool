const { expect } = require("../assert");
function countingSort(array, size) {
    // find max element
    let max = array[0];
    for (let i = 0; i < size; i++) {
        max = Math.max(array[i], max);
    }
    //create auxiliary array with default 0 value
    let count = [];
    for (let i = 0; i <= max; i++) {
        count[i] = 0;
    }
    // count each element
    for (let i = 0; i < size; i++) {
        count[array[i]]++;
    }
    // Store the cummulative count of each array
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
    let output = [];

    for (let i = size - 1; i >= 0; i--) {
        output[count[array[i]] - 1] = array[i];
        count[array[i]]--;
    }
    for (let i = 0; i < size; i++) {
        array[i] = output[i];
    }
}
let input = [4, 2, 2, 8, 3, 3, 1];
countingSort(input, input.length);
expect(input, [1, 2, 2, 3, 3, 4, 8]);
/**/
let arr = [10, 80, 30, 90, 40, 50, 70];
countingSort(arr, arr.length);
expect(arr, [10, 30, 40, 50, 70, 80, 90]);
/**/
let input2 = [50, 23, 9, 18, 61, 32];
countingSort(input2, input2.length);
expect(input2, [9, 18, 23, 32, 50, 61]);
