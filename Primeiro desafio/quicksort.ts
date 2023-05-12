function quicksort(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  quick(arr3, 0, arr3.length - 1);
  return arr3;
}
function quick(arr, start, end) {
  //caso base
  if (start >= end) {
    return;
  }

  const pointer = rearrange(arr, start, end);
  quick(arr, start, pointer - 1);
  quick(arr, pointer + 1, end);
}

// organizar o lado esquerdo e direito do pivô
function rearrange(arr, start, end) {
  //último elemento para ser o pivô
  const pivot = arr[end];
  let pointer = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      swap(arr, pointer, i);
      pointer++;
    }
  }
  // colocar o pivô no meio;
  swap(arr, pointer, end);
  return pointer;
}

// trocar de posição no array
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let arr1 = [-1, 10, 8, 31];
let arr2 = [3, 6, 15];

console.log(quicksort(arr1, arr2));
