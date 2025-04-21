function printTriangle(A, n) {
  if (n < 1) return [];

  const temp = new Array(n - 1);
  for (let i = 0; i < n - 1; i++) {
    temp[i] = A[i] + A[i + 1];
  }

  const result = printTriangle(temp, n - 1);

  const row = A.slice(0, n)
    .map((num, i) => (i === n - 1 ? `${num} ` : `${num}, `))
    .join("");

  console.log(row);

  result.push(row);
  return result;
}

const A = [1, 2, 3, 4, 5];
const n = A.length;
if (n === 0) {
  console.log("Empty array");
} else {
  printTriangle([...A], n);
}
