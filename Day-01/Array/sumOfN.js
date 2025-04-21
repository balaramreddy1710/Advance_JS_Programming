function arraySum(arr, index = 0) {
  if (index >= arr.length) return 0;

  return arr[index] + arraySum(arr, index + 1);
}

console.log(arraySum([1, 2, 3, 4, 5]));
