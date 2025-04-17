function bubbleSort(arr, n) {
  let i, j, temp;
  let flag;
  for (i = 0; i < n - 1; i++) {
    flag = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (flag == false) {
      break;
    }
  }
}

// Driver program
var arr = [64, 34, 25, 12, 22, 11, 90];
var n = arr.length;
bubbleSort(arr, n);
console.log("Sorted array: ");
console.log(...arr);
