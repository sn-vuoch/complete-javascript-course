// Lecture: Values and Variables
const country = "Cambodia";
const continent = "Asia";
let population = 17850000;
console.log(country, continent, population);

// Lecture: Data Types
let isIsland = true;
const language = "Khmer";
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);

// Lecture: Basic Operators
let peopleLive = population / 2;
console.log(peopleLive);

population++;
console.log(population);

let finlandPopulation = 6000000;
console.log(finlandPopulation > population);

let populationAverage = 33000000;
console.log(population < populationAverage);

const description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

// Lecture: Strings and Template literals
console.log(`${description}`);

// Lecture: Making decisions if else statement
if (population > populationAverage) {
  console.log("Portugal's population is above average.");
} else {
  console.log("Portugal's population is 22 million below average");
}
