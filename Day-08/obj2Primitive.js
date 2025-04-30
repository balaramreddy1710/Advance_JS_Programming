const obj = {
  toString() {
    return "hello";
  },
  valueOf() {
    return 123;
  },
};

console.log(String(obj));
console.log(Number(obj));
console.log(obj + 1);
