function firstUniq(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }

  for (let k of arr) {
    if (freq[k] == 1) return k;
  }
  return -1;
}

let arr = "aabbcd";
console.log(firstUniq(arr));
