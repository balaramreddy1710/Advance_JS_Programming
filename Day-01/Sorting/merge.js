function merge(arr, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const L = new Array(n1);
  const R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }

  for (let i = 0; i < n2; i++) {
    R[i] = arr[mid + 1 + i];
  }

  let i = 0;
  j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    if (L[i] < R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    k++;
    i++;
  }

  while (j < n2) {
    arr[k] = R[j];
    k++;
    j++;
  }
}

function mergeSort(arr, left, right) {
  if (left >= right) return;

  const mid = Math.floor(left + (right - left) / 2);

  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

const arr = [12, 11, 13, 5, 6, 7];

mergeSort(arr, 0, arr.length - 1);

console.log(...arr);
