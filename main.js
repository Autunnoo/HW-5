// #1

function getRandomArray(length = 15, min = 1, max = 100) {
  let resul = [];
  for (let i = 0; i < length; i++) {
    resul.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
      return resul;
    }

console.log(getRandomArray());


// #3 

function getAverage (...numbers) {
  const numbersInQwe = numbers.filter(qweNumber => Number.isInteger(qweNumber));
  return numbersInQwe.reduce((accumulator, item) => accumulator + item, 0) / numbersInQwe.length;
}

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// #4

function getMediannn (...number){
  const median = number.filter(elem => Number.isInteger(elem)).sort((a, b) => a - b);
  return median[(number.length - 1) / 2];
}

console.log(getMediannn(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


// #5

function filterEvenNumbers(...numbers) {
  return numbers.filter(num => num % 2 !== 0)
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));


// #6

function countPositiveNumbers(...numbers) {
  return numbers.filter(num => num > 0).length
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

// #7

function getDividedByFive(...numbers) {
  return numbers.filter(num => num % 5 === 0)
}

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));