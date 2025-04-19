function search(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return `${key} found at ${i + 1}`;
    }
  }
  return -1;
}

let arr = [3, 12, 32, 13, 5, 24, 23, 65, 54];
let k = 65;

let ans = search(arr, k);

console.log(ans);
