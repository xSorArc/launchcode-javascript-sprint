// 4.9 EXERCISES: Data and Variables
// A. Declare and assign variables

const shuttleName = "Determination";    // Shuttle name
const shuttleSpeed = 17500;             // Shuttle speed
const distanceToMars = 225000000;       // Distance to Mars
const distanceToMoon = 384400;          // Distance to Moon
const mpk = 0.621;                      // Miles per kilometer

// B. Print out the type of each variable

console.log("Part B:\n");
console.log("'shuttleName' is a " + typeof(shuttleName) + ".");
console.log("'shuttleSpeed' is a " + typeof(shuttleSpeed) + ".");
console.log("'distanceToMars' is a " + typeof(distanceToMars) + ".");
console.log("'distanceToMoon' is a " + typeof(distanceToMoon) + ".");
console.log("'mpk' is a " + typeof(mpk) + ".\n");

// C. Calculate a space mission!

const milesToMars = distanceToMars * mpk;
const hoursToMars = milesToMars / shuttleSpeed;
const daysToMars = hoursToMars / 24;
const roundedMarsTrip = Math.floor(daysToMars * 100) / 100;

// D. Print out the results of your calculations
console.log("Part D:\n")
// console.log(`${shuttleName} will take ${daysToMars} days to reach Mars.`);
console.log(`${shuttleName} will take ${roundedMarsTrip} days to reach Mars.\n`);

// E. Now calculate a trip to the Moon
const milesToMoon = distanceToMoon * mpk;
const hoursToMoon = milesToMoon / shuttleSpeed;
const daysToMoon = hoursToMoon / 24;
const roundedMoonTrip = Math.floor(daysToMoon * 100) / 100;

console.log("Part E:\n");
// console.log(`${shuttleName} will take ${daysToMoon} days to reach the Moon.`);
console.log(`${shuttleName} will take ${roundedMoonTrip} days to reach the Moon.`);
