function countOccurrences(arr, target) {
  function binarySearch(findFirst) {
    let left = 0,
      right = arr.length - 1,
      result = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        result = mid;
        if (findFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }

  const first = binarySearch(true);
  const last = binarySearch(false);

  if (first === -1) return 0;

  return last - first + 1;
}

console.log(countOccurrences([1, 2, 2, 2, 3], 2));
console.log(countOccurrences([1, 2, 3, 4], 5));
