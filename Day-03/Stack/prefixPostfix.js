function post(s) {
  let stack = [];

  let operators = new Set(["+", "-", "*", "^", "/", "%"]);

  s = s.split("").reverse().join("");

  for (let i of s) {
    if (operators.has(i)) {
      let a = stack.pop();
      let b = stack.pop();

      let temp = a + b + i;
      stack.push(temp);
    } else {
      stack.push(i);
    }
  }
  return stack;
}

let s = "*-A/BC-/AKL";
console.log(...post(s));
