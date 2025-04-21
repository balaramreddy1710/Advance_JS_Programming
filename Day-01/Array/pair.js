function countPairs(arr, target) {
  const set = new Set(),
    seen = new Set();
  for (let num of arr) {
    if (set.has(target - num)) seen.add([num, target - num].sort().toString());
    set.add(num);
  }
  return seen.size;
}

let arr = [5, 8, 2, 5];
let target = 10;
console.log(countPairs(arr, target));
