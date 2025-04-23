function prec(c) {
  if (c === "^") return 3;
  else if (c === "/" || c === "*") return 2;
  else if (c === "+" || c === "-") return 1;
  else return -1;
}

function Prefix(s) {
  let st = [];
  let res = "";

  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    if (/[a-zA-Z0-9]/.test(c)) {
      res += c;
    } else if (c === "(") {
      st.push("(");
    } else if (c === ")") {
      while (st.length && st[st.length - 1] !== "(") {
        res += st.pop();
      }
      st.pop();
    } else {
      while (st.length && prec(c) <= prec(st[st.length - 1])) {
        res += st.pop();
      }
      st.push(c);
    }
  }
  while (st.length) {
    res += st.pop();
  }
  return res;
}

let s = "a+b*c-d";
console.log(Prefix(s));
