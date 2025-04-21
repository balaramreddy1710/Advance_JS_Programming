function sortByAge(people) {
  return people.sort((a, b) => a.age - b.age);
}

// Example usage
const people = [
  { name: "Lea", age: 19 },
  { name: "Bob", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 20 },
];
console.log(sortByAge(people));
