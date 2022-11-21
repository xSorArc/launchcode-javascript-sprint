// EXERCISES: Loops
// 9.9.1. for Practice
// 1) Construct for loops that accomplish the following tasks:
// a. Print the numbers 0 - 20, one number per line.
console.log("Part 1:\n");
for (let i = 0; i <= 20; i++) {
    console.log(i);
}

// b. Print only the ODD values from 3 - 29, one number per line.
for (let i = 3; i <= 29; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// c. Print the EVEN numbers 12 down to -14 in descending order, one number per line.
for (let i = 12; i >= -14; i--) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// d. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
for (let i = 50; i >= 20; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// 2) Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42]
// a. Print each element of the array to a new line.
console.log("\nPart 2:\n");
const str = "LaunchCode";
const arr = [1, 5, "LC101", "blue", 42];

for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
}

// b. Print each character of the string---in reverse order---to a new line.
let output = "";

for (let i = 0; i < str.length; i++) {
    output = str[i] + output;
    console.log(output);
}

// 3) Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
// a. Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
// b. In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.
console.log("\nPart 3:\n");
const arr2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
const evens = [];
const odds = [];

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 == 0) {
        evens.push(arr2[i]);
    } else {
        odds.push(arr2[i]);
    }
}

// c. Print the arrays to confirm the results. Print evens first. Example: console.log(evens);
console.log(`EVENS: ${evens}.`);
console.log(`ODDS: ${odds}.`);

// 9.9.2. while Practice
// Define three variables for the LaunchCode shuttle---one for the starting fuel level, another for the number of astronauts aboard, and the 
// third for the altitude the shuttle reaches.
// 4) Construct while loops to do the following:
// a. Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive value > 5000 but < 30000.
console.log("\nPart 4:\n");
const prompt = require('prompt-sync') ({sigint: true});
let input = Number(prompt("Please enter the starting fuel level: "));
let fuelLevel;
let numOfAstronauts;
let shuttleAltitude = 0;

while (input < 5000 || input > 30000) {
    input = Number(prompt("Please enter the starting fuel level: "));
}

fuelLevel = input;
console.log(`Fuel level: ${fuelLevel}`);

// b. Use a 2nd loop to query user for number of astronauts (7 max). Validate by having the loop continue until the user enters an int(1 - 7).
let input2 = Number(prompt("Please enter the number of astronauts (1-7): "));

while (input2 < 1 || input2 > 7) {
    input2 = Number(prompt("Please enter the number of astronauts (1-7): "));
}

numOfAstronauts = input2;
console.log(`Number of astronauts: ${numOfAstronauts}`);

// c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each
//    astronaut aboard. Also, increase the altitude by 50 kilometers. (Hint: The loop should end when there is not enough fuel to boost the crew
//    another 50 km, so the fuel level might not reach 0).
while (fuelLevel > 0) {
    fuelLevel -= (numOfAstronauts * 100);
    shuttleAltitude += 50;
    // console.log(`The flight has increased to an altitude of ${shuttleAltitude}km and has ${fuelLevel}kg of fuel remaining.`);
}

// 5) After the loops complete, output the result with the phrase, The shuttle gained an altitude of ___ km.
// a. If the altitude is 2000 km or higher, add "Orbit achieved!"
// b. Otherwise add, "Failed to reach orbit."
console.log("\nPart 5:\n");
if (shuttleAltitude >= 2000) {
    console.log("Orbit achieved!");
} else {
    console.log("Failed to reach orbit.");
}