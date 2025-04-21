function sortByScoreAndName(students) {
  return students.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score;
    }
    return a.name.localeCompare(b.name);
  });
}

// Example usage
const students = [
  { name: "Alice", score: 85 },
  { name: "David", score: 90 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 85 },
];
console.log(sortByScoreAndName(students));
