function frequency(arr) {
  return arr.reduce(function (acc, val) {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}

let arr = [1, 2, 1, 3, 2, 4, 3, 5];
console.log(frequency(arr));
