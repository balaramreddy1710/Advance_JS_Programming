class Calculator {
  #log(message) {
    console.log(`[LOG]: ${message}`);
  }

  add(a, b) {
    const result = a + b;
    this.#log(`Adding ${a} + ${b} = ${result}`);
    return result;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));
