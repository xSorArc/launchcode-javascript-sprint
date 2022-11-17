// EXERCISES 5.6: Booleans and Conditionals
// A. Declare and initialize the following variables for our space shuttle

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
const crewStatus = spaceSuitsOn && shuttleCabinReady
const computerStatusCode = 200;
const shuttleSpeed = 15000;

// B. Examine the code below. What will be printed to the console?
// Use the value of engineIndicatorLight defined above to answer this question. ANSWER: "engines are off"

/* if (engineIndicatorLight === "green") {
      console.log("engines have started");
   } else if (engineIndicatorLight === "green blinking") {
      console.log("engines are preparing to start");
   } else {
      console.log("engines are off"); 
   } */

// C. Write conditional expressions to satisfy the safety rules.
// Use the variables defined from the table above to satisfy the rules listed below.
console.log("Part C:\n");

   if (crewStatus) {                                                    // a.
    console.log("Crew Ready");
   } else {
    console.log("Crew Not Ready");
   }

   if (computerStatusCode === 200) {                                    // b.
    console.log("Please stand by. Computer is rebooting.");
   } else if (computerStatusCode === 400) {
    console.log("Success! Computer online.");
   } else {
    console.log("ALERT: Computer offline!");
   }

   if (shuttleSpeed === 17500) {                                        // c.
    console.log("ALERT: Escape velocity reached!");
   } else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
   } else {
    console.log("Stable speed");
   }

// D. PREDICT
// Do these code blocks produce the same result? Answer Yes or No.

/* if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
} 

  if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
} */

// E. Monitor the shuttle's fuel status.
// Implement the checks below using if / else if / else statements. Order is important when working with conditionals, and the checks below 
// are NOT written in the correct sequence. Please read ALL of the checks before coding and then decide on the best order for the conditionals.
console.log("\nPart E:\n");
let fuelLevel = 21000;
let engineTemperature = 1200;

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === 'red blinking') {
    console.log('ENGINE FAILURE IMMINENT!');
  } else if (fuelLevel > 20000 && engineTemperature <= 2500) {   //a
    console.log('Full tank. Engines good.');
  } else if (fuelLevel > 10000 && engineTemperature <= 2500) {   //b
    console.log('Fuel level above 50%. Engines good.');
  } else if (fuelLevel > 5000 && engineTemperature <= 2500) {    //c
    console.log('Fuel level above 25%. Engines good.');
  } else if (fuelLevel <= 5000 || engineTemperature > 2500) {    //d
    console.log('Check fuel level. Engines running hot.');
  } else {                                                       //f
    console.log('Fuel and engine status pending...');
  }

// 6. Final bit of fun!
// The shuttle should only launch if the fuel tank is full and the engine check is OK. However, let's establish an override command to ignore 
// any warnings and send the shuttle into space anyway!
console.log("\nPart 6:\n");
let commandOverride = false;

if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOverride === true) {
    console.log("Cleared to launch!");
} else {
    console.log("Launch scrubbed!");
}