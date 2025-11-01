// Coding Challenge #1
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;
// let markWeight = 95;
// let markHeight = 1.88;
// let johnWeight = 85;
// let johnHeight = 1.76;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;

// console.log("Mark BMI: ", markBMI);
// console.log("John BMI: ", johnBMI);
// console.log("Mark is higher BMI than John: ", markHigherBMI);

// Coding Challenge #2
let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI})`);
}
