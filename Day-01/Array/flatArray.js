function flattenArray(arr) {
  const result = [];

  function flatten(element) {
    if (!Array.isArray(element)) {
      result.push(element);
      return;
    }

    for (let item of element) {
      flatten(item);
    }
  }

  flatten(arr);
  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], [6]]));
