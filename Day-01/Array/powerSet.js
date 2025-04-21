function powerSet(arr, index = 0, current = [], result = []) {
  if (index === arr.length) {
    result.push([...current]);
    return result;
  }

  current.push(arr[index]);
  powerSet(arr, index + 1, current, result);

  current.pop();
  powerSet(arr, index + 1, current, result);

  return result;
}

console.log(powerSet([1, 2]));
console.log(powerSet([1, 2, 3]));
