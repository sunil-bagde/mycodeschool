const { expect } = require("../assert");
function countingSort(array, size) {
    let output = [];
    // find the largest element
    let max = array[0];
    for (let i = 1; i < size; i++) {
        max = Math.max(array[i], max);
    }
    // Initialize count array with all zeros.
    let count = [];
    for (let i = 0; i <= max; ++i) {
        count[i] = 0;
    }

    // store the count of each element;

    for (let i = 0; i < size; i++) {
        count[array[i]]++;
    }

    // cumulative count
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
    //
    for (let i = size - 1; i >= 0; i--) {
        output[count[array[i]] - 1] = array[i];
        count[array[i]]--;
    }
    // copy to array (origin)
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
