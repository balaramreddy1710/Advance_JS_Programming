const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

console.log(person.name);
console.log(person.age);
console.log(person.city);

person.country = "USA";

delete person.city;

console.log(person);

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();
