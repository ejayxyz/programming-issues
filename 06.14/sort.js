const generateArray = (size) => {
  let tomb = [1];
  for (let i = 0; i < size; i++) {
    tomb[i] = Math.floor(Math.random() * 15) + 1;
  }

  return tomb;
};

const selectSort = (arr) => { // kiválasztásos rendezés
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
};

const insertionSort = (arr) => { // beszúrásos rendezés
  for (let i = 1; i < arr.length; i++) { // vizsgált elem
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
};

const bubbleSort = (arr) => { // buborékos rendezés
  let n = arr.length;
  for (let i = n - 1; i < 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

let k = generateArray(10);
console.log(k);

selectSort(k);
console.log(k);

insertionSort(k);
console.log(k);

bubbleSort(k);
console.log(k);
