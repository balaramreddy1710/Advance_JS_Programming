function longestUniqueSubstring(s) {
  let set = new Set(),
    start = 0,
    maxLen = 0;
  for (let end = 0; end < s.length; end++) {
    while (set.has(s[end])) {
      set.delete(s[start]);
      start++;
    }
    set.add(s[end]);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}

const a = "abcabcbb";
console.log(longestUniqueSubstring(a)); // Output: 3
