function inter(a1, a2) {
  let seen = new Set(a1);
  let res = new Set();
  for (let ch of a2) {
    if (seen.has(ch)) res.add(ch);
  }
  return Array.from(res);
}

console.log(inter([1, 2, 2, 1], [2, 2]));
console.log(inter([4, 9, 5], [9, 4, 9, 8]));
