function quickSort(a, start, end) {}

function quickSort(a) {
    if (a == null) return a;
    quickSort(a, 0, a.length - 1);
    return a;
}
quickSort;

const nums = [2, 7, 4, 1, 5, 3];
const result = quickSort(nums);
console.log("result", result);
