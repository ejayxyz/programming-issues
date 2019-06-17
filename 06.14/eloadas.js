/*
let name = 'feri';

const hello = (name) => {
  let c = 'cica';
  console.log('hello', name);
};

hello('géza');
console.log(name);
*/

const fgv = (k) => {
  k = 5;
  console.log(k);
};
let a = 10;
fgv(a);
console.log(a);

const generateArray = (arr, size) => {
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 11));
  }
};

let b = [];
generateArray(b, 10);
console.log(b);
