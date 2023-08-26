// variable & tipe data
let todo2 = "eating salad" // string
let age2 = 12 // number
let isEaten2 = true // boolean

console.log(todo2, age2, isEaten2)

todo2 = "eating steak"
age2 = 13
isEaten2 = false

console.log(todo2, age2, isEaten2)

const todo = "eating salad"
const age = 12
const isEaten = false

console.log(todo, age, isEaten)

// todo = "eating steak" // will error here
// age = 13 // will error here
// isEaten = false // will error here

console.log(todo, age, isEaten)

// addiotinal boolean
let isBigger = 9 > 5 // true
let isBigger2 = 8 > 20 // false
let isSmaller = 1 < 5 // true
let isSmaller2 = 1 < -9 // false

console.log(isBigger, isBigger2, isSmaller, isSmaller2)

// naming variable
let myNumber = "drink meal" // x
let my_number = "drink meal" // x
let isDrinken = "yes"  // x
// let 1day = "monday" // x will error here
// ...etc

/* -------------------------------------------------------------------------------------------- */

// aritmatika (+ - * /)
const result1 = 1 + 1 // 2
const result2 = 5 - 2 // 3
const result3 = 5 * 2 // 10
const result4 = 12 / 3 // 4
const result5 = 6 % 2 // 0
const result6 = 7 % 2 // 1

console.log(result1, result2, result3, result4, result5, result6)

/* -------------------------------------------------------------------------------------------- */

// conditional & algoritma

/*
true -> pass
false -> not pass
*/

let number1 = 5
let number2 = 10

if (number1 > number2) {
  console.log("Number1 is bigger than Number2")
}

if (number1 < number2) {
  console.log("Number2 is bigger than Number1")
}

if (number1 > number2) {
  console.log("Number1 is bigger than Number2")
} else {
  console.log("Number2 is bigger than Number1")
}

/*
true && true -> pass
true && false-> not pass
false && false -> not pass
*/

let myAge = 17
let canDriving = true

if (myAge >= 17 && canDriving === true) {
  console.log("pass")
} else {
  console.log("not pass")
}

/* -------------------------------------------------------------------------------------------- */

// looping and conditional looping

for(let i = 1; i <= 10; i++) {
  console.log(i)
}

for(let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even")
  }
  if (i % 2 === 1) {
    console.log(i + " is odd")
  }
}

// filter for even numbers
for(let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

/* -------------------------------------------------------------------------------------------- */

// function

function calculate(operation, number1, number2) {
  if(operation === "add") {
    return number1 + number2
  } else if (operation === "minus") {
    return number1 - number2
  } else if (operation === "multiply") {
    return number1 * number2
  } else if (operation === "divide") {
    return number1 / number2
  } else {
    return "error"
  }
}

const result = calculate("multiply", 22,8)
console.log(result)

function alternativeCalculate(operation, number1, number2) {
  switch(operation){
    case "add":
      return number1 + number2
    case "minus":
      return number1 - number2
    case "multiply":
      return number1 * number2
    case "divide":
      return number1 / number2
    default:
      return "error"
  }
}

const alternativeResult = alternativeCalculate("multiply", 22,8)
console.log(alternativeResult)