const num = 3;

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) !== n) {
    throw new Error("Must not be negative, and must be an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
  console.error("Error:", err.message);
} finally {
  diff = Date.now() - start;
}

console.log(result || "error occurred");
console.log(`Execution took ${diff}ms`);
