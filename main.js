
const feladat1 = (n) => {
  let array = [];
  for (let i = 0; i < array.length; i++) {
    array.push(0);
  }
  return array;
};

function feladat2(number) { // min and max included 
  for (let i = 0; i < number.length; i++) {
    number[i] = Math.floor((Math.random() * 1000) + 1);
  }
};
// let randNum = new Array(5);
// console.log(genRandomNum(randNum));
// console.log(randNum);

const feladat3 = (array) => {
  let evenNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbers++;
    }
  }
  return evenNumbers;
};

const feladat5 = (array) => {
  array.sort((a, b) => { return a - b; });
  return array;
};

const feladat7 = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0 && i % 2 === 0) {
      count++;
    }
  }
  return count;
};

const feladat9 = (array) => {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

let feladat11 = (n) => {
  let i = 0;
  while (fibonacci(i) < n) {
    if (fibonacci(i + 1) === n);
    return i;
  }
  return false;
};

let fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(feladat11(4));
