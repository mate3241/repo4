
const feladat1 = (n) => {
  let array = [];
  for (let i = 0; i < array.length; i++) {
    array.push(0);
  }
  return array;
};

function feladat2(number) { 
  for (let i = 0; i < number.length; i++) {
    number[i] = Math.floor((Math.random() * 1000) + 1);
  }
};

const feladat3 = (array) => {
  let evenNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbers++;
    }
  }
  return evenNumbers;
};

function feladat4(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      newArray.push(i);
    }
  }
  return newArray;
};
// let array = [1, 3, 5, 8, 5, 2, 3];
// console.log(feladat4(array));

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
