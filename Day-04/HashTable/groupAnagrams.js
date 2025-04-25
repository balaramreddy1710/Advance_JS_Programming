function groupAnagrams(arr) {
  let map = {};
  for (let ch of arr) {
    let key = ch.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(ch);
  }
  return Object.values(map);
}

let arr = ["bat", "tab", "cat", "act"];
console.log(groupAnagrams(arr));
