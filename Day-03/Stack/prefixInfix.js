function isOperator(c) {
  switch (c) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "^":
    case "%":
      return true;
  }
  return false;
}

function infix(s) {
  let stack = [];
  let l = s.length;

  for (let i = l - 1; i >= 0; i--) {
    let c = s[i];
    if (isOperator(c)) {
      let op1 = stack[stack.length - 1];
      stack.pop();
      let op2 = stack[stack.length - 1];
      stack.pop();

      let temp = "(" + op1 + c + op2 + ")";
      stack.push(temp);
    } else {
      stack.push(c + "");
    }
  }
  return stack[stack.length - 1];
}

let exp = "*-A/BC-/AKL";
console.log(infix(exp));
