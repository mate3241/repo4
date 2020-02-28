const feladat1 = (n) => {
  let array = [];
  for (let i = 0; i < array.length; i++) {
    array.push(0);
  }
  return array;
}

const feladat3 = (array) => {
  let evenNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbers++;
    }
  }
  return evenNumbers;
}
