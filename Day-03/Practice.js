let arr = [10, 1, 2, 5, 12, 9];
let n = 4;

function max(arr) {
  let max = -Infinity;

  for (let i of arr) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}

for (let i = 0; i < n - 1; i++) {
  arr = arr.filter((a) => a != max(arr));
}

console.log(max(arr));
