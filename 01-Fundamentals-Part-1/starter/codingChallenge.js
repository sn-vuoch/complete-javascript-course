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

// Coding Challenge #3
const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;
const dolphinsAverageScore =
  (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);
if (dolphinsAverageScore > koalasAverageScore) {
  console.log("Dolphins team is winner");
} else if (dolphinsAverageScore === koalasAverageScore) {
  console.log("Both team are draw.");
} else {
  console.log("Koalas team is winner.");
}
