function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "^":
    case "%":
      return true;
  }
}

function pre(exp) {
  let st = [];
  for (let i = 0; i < exp.length; i++) {
    if (isOperator(exp[i])) {
      let op1 = st.pop();
      let op2 = st.pop();

      let temp = exp[i] + op2 + op1;
      st.push(temp);
    } else {
      st.push(exp[i] + "");
    }
  }
  return st.pop();
}

let exp = "ABC/-AK/L-*";
console.log(pre(exp));
