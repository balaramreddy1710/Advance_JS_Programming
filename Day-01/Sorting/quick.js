function partition(arr, low, high) {
  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j <= high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

let arr = [64, 34, 25, 12, 22, 11, 90];
quickSort(arr, 0, arr.length - 1);
console.log(...arr);
