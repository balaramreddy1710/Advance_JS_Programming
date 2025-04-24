function balance(str) {
  let st = [];
  let pairs = { ")": "(", "]": "[", "}": "{", ">": "<" };
  let open = Object.values(pairs);
  let close = Object.keys(pairs);
  for (let i of str) {
    if (open.includes(i)) {
      st.push(i);
    } else if (close.includes(i)) {
      if (st.pop() !== pairs[i]) {
        return false;
      }
    }
  }

  if (st.length !== 0) return false;

  let char = str.replace(/[(){}<>\[\]]/g, "");
  let reverse = char.split("").reverse().join("");
  return char == reverse;
}

let str = "({abba})";
console.log(balance(str));

console.log(balance("([]aa)"));
