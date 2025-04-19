function binary(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (high >= low) {
    mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == k) {
      return `Found at ${mid + 1}`;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 7, 10];

let k = 10;

console.log(binary(arr, k));
