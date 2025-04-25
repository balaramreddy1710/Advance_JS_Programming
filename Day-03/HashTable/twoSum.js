function twoSum(arr, target) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (seen[complement] !== undefined) {
      return [seen[complement], i];
    }
    seen[arr[i]] = i;
  }
}

let arr = [2, 7, 11, 13];

console.log(twoSum(arr, 9));
