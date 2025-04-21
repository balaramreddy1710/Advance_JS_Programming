// function sort012(arr) {
//   let low = 0,
//     mid = 0,
//     high = arr.length - 1;

//   while (mid <= high) {
//     if (arr[mid] === 0) {
//       [arr[low], arr[mid]] = [arr[mid], arr[low]];
//       low++;
//       mid++;
//     } else if (arr[mid] === 1) {
//       mid++;
//     } else {
//       // arr[mid] === 2
//       [arr[mid], arr[high]] = [arr[high], arr[mid]];
//       high--;
//     }
//   }

//   return arr;
// }

// console.log(...sort012([0, 2, 1, 2, 0, 1, 0]));

function sort012(arr) {
  let z = 0;
  let o = 0;
  let t = 0;
  for (let i of arr) {
    if (i == 0) {
      z++;
    } else if (i == 1) {
      o++;
    } else {
      t++;
    }
  }
  let ans = "";
  ans += "0".repeat(z);
  ans += "1".repeat(o);
  ans += "2".repeat(t);

  const sortedArr = ans.split("").map(Number);
  console.log(sortedArr);
}

sort012([0, 2, 1, 2, 0, 1, 0]);
