function selection(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[min_idx] > arr[j]) {
        min_idx = j;
      }
    }

    let temp;
    temp = arr[i];
    arr[i] = arr[min_idx];
    arr[min_idx] = temp;
  }
}

let arr = [13, 1, 35, 64, 10, 43, 9];
selection(arr);

console.log(...arr);
