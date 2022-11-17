// 6.8 EXERCISES: Debugging
// Imagine we are running a space station. Your job is to evaluate the station's code and fix any errors. The lives of the crew rest 
// squarely upon your shoulders.

// DIRECTIONS
// 1) Launch the shuttle only if the fuel, crew and computer all check out OK.
// 2) If a check fails, print that information to the console and scrub the launch.
// 3) If all checks are successful, print a countdown to launch in the console.

// 6.8.1. Debugging Practice
// A. Fix syntax errors first. Run the following code as-is and read the error message. Fix the mistake, and then re-run the code to check it.
console.log("Part A:\n");
let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

// B. The next block of code hides two syntax errors. Run the code as-is to find the mistakes.
console.log("\nPart B:\n");
let crewStatus = true;
let computerStatus = 'green';

if (crewStatus && computerStatus === 'green') {
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
   console.log("Fed parrot...");
   console.log("Ignition...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}

// C. Fix runtime errors next. Remember to examine the error message for clues about what is going wrong. Pay close attention to any line numbers 
// mentioned in the message - these will help you locate and repair the mistake in the code.
console.log("\nPart C:\n");

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

// D. Arrr! Did we mention your crew are space pirates? Now find and fix the runtime error in a longer code sample.
console.log("\nPart D:\n");
fuelLevel = 27000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (launchReady) {
   console.log("10, 9, 8...");
   console.log("Fed parrot...");
   console.log("6, 5, 4...");
   console.log("Ignition...");
   console.log("3, 2, 1...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}

// E. Solve logic errors last. Logic errors do not generate warning messages or prevent the code from running, but the program still does not
//  work as intended. (Refer to debugging logic errors if ye need to review).
console.log("\nPart E:\n");
launchReady = false;
fuelLevel = 17000;
crewStatus = true;
computerStatus = 'green';
let fuelReady = false;
    // a. First, run this sample code as-is and examine the output.

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
   fuelReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady && fuelReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...\nLiftoff!');
} else {
   console.log('Launch scrubbed.');
}