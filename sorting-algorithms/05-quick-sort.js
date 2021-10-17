/*
- Its practical means most lang implemented
- D&C
- pick pivot and | partition around pivot
- Key in this algo is partition pick pivot put < smaller in left
and > greater in right part. in linear time.
*/
const { expect } = require("../assert");
// let learn partition
 function swap(arr,i,j) {
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j]= temp;
 }
function partition(arr,low,high) {
 let pivot = arr[high];
 let i = low-1;
 for(let j = low; j <= high-1;j++) {
   if(arr[j] < pivot) {
     i++;
      swap(arr,i,j)
   }
 }
  swap(arr, i + 1, high);
  return (i + 1)
}
let arr = [10, 80, 30, 90, 40, 50, 70];

function quickSort(arr,  low,  high)
{
    if (low < high) {
      let pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);// 0 -> mid-1 (pivot)
      quickSort(arr, pi + 1, high); // > pivot still at end
    }
}
quickSort(arr,0,arr.length-1)

expect(arr, [10, 30, 40, 50,70, 80,90]);
/* 2nd*/
let input2 = [50, 23, 9, 18, 61, 32]
quickSort(input2,0,input2.length-1)
expect(input2,[9,18,23,32,50,61])
