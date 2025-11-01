/*
let js = "amazing";
if (js === "amazing") alert("JavaScript is Fun");

10 + 90 + 10 - 8 * 5;
console.log(10 + 90 + 10 - 8 * 5);

let firstName = "Srin";
let lastName = "Naravuoch";
let age = 20;

console.log(firstName + lastName);

let myFirstJob = "Cashier";
let myCurrentJob = "Grab driver";
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof "Srin");
console.log(typeof 1.9);
console.log(typeof null);
console.log(typeof 10000);
*/

/*
let salary = 1000;
salary = 1150;
console.log(salary);

const birthDate = 2005;
// birthDate = 2006; Can't re-assign value to constant variable.
console.log(birthDate);

var age = 20;
age = 21;
console.log(age);
*/

// Arithmetic operators
// const now = 2025;
// const ageVuoch = now - 2005;
// const ageMorokot = now - 2006;
// console.log(ageVuoch, ageMorokot);
// console.log(ageVuoch * 2, ageVuoch / 5, 4 ** 3);
// 4 ** 3 means 4 is the power of 3 == 4 * 4 * 4

// const firstName = "Srin";
// const lastName = "Naravuoch";
// console.log(firstName + " " + lastName);

// Assignment operators
// let x = 10 + 5; // 15
// x += 20; // x = x + 20 = 35
// x *= 2; // x = x * 2 = 70
// x++; // x = x + 1 = 71
// x--;
// x--; // x = x - 1 = 69
// console.log(x);

// Comparison operators
// console.log(ageVuoch > ageMorokot); // >, <, >=, <=
// console.log(ageMorokot >= 18);

// let isEligible = ageMorokot >= 18;
// console.log(isEligible);
// console.log(now - 2005 > now - 2006); // Why JavaScript can calculate which one should go first, and which one should go late. Because of operator precedence.

// const averageAge = (ageVuoch + ageMorokot) / 2; // If I don't use (), the result will be wrong because JavaScript calculate ageMorokot / 2 first then sum with ageVuoch.
// console.log(averageAge);

// String and Template literal
// const fullName = "Srin Naravuoch";
// const job = "Programmer";
// const birthDate = 2005;
// const currentDate = 2025;

// const vuoch =
//   "I'm " +
//   fullName +
//   ", a " +
//   (currentDate - birthDate) +
//   " years old " +
//   job +
//   ".";
// console.log(vuoch);
// const vuochNew = `I'm ${fullName}, a ${
//   currentDate - birthDate
// } years old ${job}.`;
// console.log(vuochNew);

// console.log(`Just a regular string ...`);
// console.log(
//   "This is a\n\
// multiple\n\
// line strings."
// );
// console.log(`This is a
// multiple
// line strings.`);

// Taking Decisions if else statements
// const age = 10;

// if (age >= 18) {
//   console.log(`You can start driving license 🚙`);
// } else {
//   const yearLeft = 18 - age;
//   console.log(`You're a young. Wait another ${yearLeft} years left :)`);
// }

// const birthDate = 1990;
// let century;
// if (birthDate <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// Type conversion
inputType = "1990";
console.log(Number(inputType), "1990");
console.log(Number(inputType) + 10);

console.log(Number("Vuoch"));
console.log(typeof NaN);

// Type coercion
console.log("I'm " + 20 + " years old.");
console.log(2 + 9 + "45"); // "1145"
console.log("5" - 4 - "10"); // -9
console.log("5" + 4 + "1" - 50); // 541 - 50 = 491
