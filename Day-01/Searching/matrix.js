function searchUnsorted2D(matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [-1, -1];
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === target) {
        return [row, col];
      }
    }
  }

  return [-1, -1];
}

const matrix = [
  [3, 12, 9, 5],
  [7, 1, 6, 8],
  [4, 10, 2, 11],
];
console.log(searchUnsorted2D(matrix, 6));
console.log(searchUnsorted2D(matrix, 13));
