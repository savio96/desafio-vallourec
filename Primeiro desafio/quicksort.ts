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

const Caso1 = { arr1: [-1, 10, 8, 31], arr2: [3, 6, 15] };
const Caso2 = { arr1: [-8, 30, 78, 5], arr2: [1, -3, 36] };
const Caso3 = { arr1: [2, -50, 10, -30], arr2: [9, 2, 76, 70] };

console.log("Caso 1 ::", quicksort(Caso1["arr1"], Caso1["arr2"]));
console.log("Caso 2 ::", quicksort(Caso2["arr1"], Caso2["arr2"]));
console.log("Caso 3 ::", quicksort(Caso3["arr1"], Caso3["arr2"]));
