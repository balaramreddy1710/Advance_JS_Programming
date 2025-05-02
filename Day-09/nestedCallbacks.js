function calc(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

console.log(calc(3, 4, add));
console.log(calc(3, 4, mul));
