const korkerulet = (a) => {
  return 2 * a * Math.PI;
};

const korterulet = (radius) => {
  return Math.pow(radius, 2) * Math.PI;
};

const haromszogkerulet = (a, b, c) => {
  if (b == null || c == null) {
    return 'Nincs elég érték a háromszög kiszámitásához.';
  } else {
    if (a + b < c || a + c < b || c + b < a) {
      return 'Nem létező háromszöget adtál meg.';
    } else {
      return a + b + c;
    }
  }
};

const haromszogterulet = (a, m) => {
  return a * m / 2;
};

const teglalapkerulet = (a, b) => {
  if (b != null) {
    return 2 * (a + b);
  } else {
    return 4 * a;
  }
};

const teglalapterulet = (a, b) => {
  if (b != null) {
    return a * b;
  } else {
    return a * a;
  }
};

const teglatestfelszin = (a, b, c) => {
  if (b != null && c != null) {
    return 2 * (a * b + a * c + b * c);
  } else if (a != null && b === null && c === null) {
    return 6 * Math.pow(a, 2);
  } else {
    return 'Nincs elég megadott érték';
  }
};

const teglatestterfogat = (a, b, c) => {
  if (b != null && c != null) {
    return a * b * c;
  } else if (a != null && b === null && c === null) {
    return Math.pow(a, 3);
  } else {
    return 'Nincs elég megadott érték';
  }
};

const gombfelszin = (a) => {
  return 4 * Math.PI * Math.pow(a, 2);
};

const gombterfogat = (a) => {
  return (4 * Math.PI * Math.pow(a, 2)) / 3;
};

let calc = (mycallback, ...params) => {
  return mycallback(...params);
};

console.log(calc(korkerulet, 3));
console.log(calc(korterulet, 4));
console.log(calc(haromszogkerulet, 3, 1, 1));
console.log(calc(haromszogterulet, 4, 5));
console.log(calc(teglalapkerulet, 3, 6));
console.log(calc(teglalapterulet, 5, 7));
console.log(calc(teglatestfelszin, 4));
console.log(calc(teglatestterfogat, 5));
console.log(calc(gombfelszin, 5));
console.log(calc(gombterfogat, 5));
