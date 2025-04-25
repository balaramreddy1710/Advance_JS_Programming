function dup(arr) {
  let seen = {};
  let res = [];
  for (let ch of arr) {
    if (seen[ch]) res.push(ch);
    else seen[ch] = true;
  }
  return res;
}

let arr = [1, 2, 3, 4, 2, 4];
console.log(dup(arr));
