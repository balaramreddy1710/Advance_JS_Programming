const obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === "string") return "STRING!";
    if (hint === "number") return 999;
    return "DEFAULT";
  },
};

console.log(String(obj));
console.log(Number(obj));
console.log(obj + "");
