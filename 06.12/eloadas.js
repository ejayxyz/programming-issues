/* let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
arr[0] = 10;
console.log(arr);
console.log('Tömb mérete:', arr.length);
arr.push(100);
console.log(arr);
let x = arr.pop();
console.log('Kitörölt elem:', x);
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  arr[i] = 0;
}
console.log(arr);
*/

const generateArray = (a) => {
  let tomb = [1];
  for (let i = 0; i < a; i++) {
    tomb[i] = Math.floor(Math.random() * 11) + 1;
  }

  return tomb;
};

const sumArray = (arr) => {
  let sm = 0;
  for (let i = 0; i < arr.length; i++) {
    sm += arr[i];
  }
  return sm;
};

const mulArray = (arr) => {
  let mult = 1;
  for (let i = 0; i < arr.length; i++) {
    mult = mult * arr[i]; // mult *= arr[i];
  }
  return mult;
};

const countElement = (a, arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (a === arr[i]) {
      count += 1;
    }
  }
  return count;
};

const maxArray = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

const minArray = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const containsElement = (a, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (a === arr[i]) {
      return true;
    }
  }
  return false;
};

const indexOfElement = (a, arr) => {
  let i = 0;
  while (i < arr.length && arr[i] != a) {
    i++;
  }
  if (i < arr.length) {
    return i;
  } else {
    return -1;
  }
};

const copy2xArray = (arr, emptyarr) => {
  for (let i = 0; i < arr.length; i++) {
    emptyarr[i] = arr[i] * 2;
  }
  return emptyarr;
};

const selectEven = (arr) => {
  let b = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      b[j] = arr[i];
      j++;
    }
  }
  return b;
};

const selectEvenOdd = (arr, b, c) => {
  let j = 0; // b index
  let k = 0; // c index
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      b[j] = arr[i];
      j++;
    } else {
      c[k] = arr[i];
      k++;
    }
  }
};

const intersectionArray = (arr1, arr2) => {
  let b = [];
  let k = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        b[k] = arr1[i];
        k++;
        break;
      }
    }
  }
  return b;
};

let b = [];
let c = [];
let emptyarr = [];
let tarolt = generateArray(5);
let k = generateArray(5);

console.log(tarolt);
console.log('Összeg: ', sumArray(tarolt));
console.log('Szorzat:', mulArray(tarolt));
console.log('Ennyiszer van 1:', countElement(1, tarolt));
console.log('Maximum:', maxArray(tarolt));
console.log('Maximum:', minArray(tarolt));
console.log('Előfordul a 2?', containsElement(2, tarolt));
console.log('A 2 indexe:', indexOfElement(2, tarolt));
console.log('A tömb kétszerese:', copy2xArray(tarolt, emptyarr));
console.log('A páros számok:', selectEven(tarolt));
selectEvenOdd(tarolt, b, c);
console.log('Páros elemek', b);
console.log('Páratlan elemek', c);
console.log('Metszet:', intersectionArray(tarolt, k));
