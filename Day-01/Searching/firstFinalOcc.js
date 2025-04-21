function firstFinal(arr, n) {
  function binarySearch(find) {
    let left = 0,
      right = arr.length - 1,
      res = -1;
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (arr[mid] === n) {
        res = mid;

        if (find) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (arr[mid] > n) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return res;
  }

  let first = binarySearch(true);
  let last = binarySearch(false);
  return [first, last];
}

console.log(firstFinal([2, 3, 3, 4, 5, 6, 6, 7], 2));
