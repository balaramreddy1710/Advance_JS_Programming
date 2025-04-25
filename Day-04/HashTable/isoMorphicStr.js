function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  let mapS = {},
    mapT = {};
  for (let i = 0; i < s.length; i++) {
    let c1 = s[i],
      c2 = t[i];
    if (mapS[c1] != mapT[c2]) return false;
    mapS[c1] = i + 1;
    mapT[c2] = i + 1;
  }
  return true;
}

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
