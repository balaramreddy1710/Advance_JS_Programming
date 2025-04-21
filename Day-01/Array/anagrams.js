function groupAnagrams(words) {
  const map = {};
  for (let word of words) {
    const sorted = word.split("").sort().join("");
    if (!map[sorted]) map[sorted] = [];
    map[sorted].push(word);
  }
  return Object.values(map);
}

let a = ["tan", "eat", "tea", "ate", "bat", "tab"];
console.log(groupAnagrams(a));
