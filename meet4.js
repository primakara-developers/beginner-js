// operand ANd & OR

/*
AND operand
true && true -> pass
true && false-> not pass
false && false -> not pass
*/

let myAge = 17;
let canDriving = true;

if (myAge >= 17 && canDriving === true) {
  console.log("PASS. Can create driving licence");
} else {
  console.log("NOT PASS. Can not create driving licence");
}

/*
OR operand
true || true -> pass
true || false-> pass
false || false -> not pass
*/

const age = 40;
const winElection = true;

if (myAge >= 40 || winElection === true) {
  console.log("PASS. Bisa jadi cawapres");
} else {
  console.log("NOT PASS. Belum bisa jadi cawapres");
}

/* -------------------------------------------------------------------------------------------- */

// advance calculation function

// fuction for multiple operator

function calculate(operation, number1, number2) {
  if (operation === "add") {
    return number1 + number2;
  } else if (operation === "minus") {
    return number1 - number2;
  } else if (operation === "multiply") {
    return number1 * number2;
  } else if (operation === "divide") {
    return number1 / number2;
  } else {
    return "error";
  }
}

const result = calculate("multiply", 22, 8);
console.log(result);

function alternativeCalculate(operation, number1, number2) {
  switch (operation) {
    case "add":
      return number1 + number2;
    case "minus":
      return number1 - number2;
    case "multiply":
      return number1 * number2;
    case "divide":
      return number1 / number2;
    default:
      return "error";
  }
}

const alternativeResult = alternativeCalculate("multiply", 22, 8);
console.log(alternativeResult);

const manyNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

console.log(sum(manyNumber));

function average(numbers) {
  return sum(numbers) / numbers.length;
}

console.log(average(manyNumber));

/* -------------------------------------------------------------------------------------------- */

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [45, 67, 89, 12, 34, 56, 78, 90, 23];
const numbers3 = [49, 62, 81, 11, 39, 52, 72, 93, 24, 42, 56, 78, 90, 23];

// fuction for filter even numbers

function filterEvenNumbers(numbers) {
  const tempEvenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      tempEvenNumbers.push(numbers[i]);
    }
  }
  return tempEvenNumbers;
}

const evenNumbers = filterEvenNumbers(numbers1);
console.log(evenNumbers);

// fuction for filter odd numbers

function filterOddNumbers(numbers) {
  const tempOddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      tempOddNumbers.push(numbers[i]);
    }
  }
  return tempOddNumbers;
}

const oddNumbers = filterOddNumbers(numbers1);
console.log(oddNumbers);
