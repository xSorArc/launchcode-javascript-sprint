// 4.10 STUDIO: Data and Variables
// 4.10.2 Declare and initialize a variable for every data point listed below. Remember to account for the different data types.
const prompt = require('prompt-sync')({sigint: true});
const astronauts = Number(prompt("How many astronauts will take the trip? "));

const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
const astronautCount = astronauts;
const astronautStatus = "ready";
const averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const fuelTempCelsius = -225;
const fuelLevel = 100;
const weatherStatus = "clear";

// 4.10.3. Generate the LC04 Form
const dotLine = "-------------------------------------";

console.log(`${dotLine}
> LC04 - LAUNCH CHECKLIST
${dotLine}
Date: ${date}
Time: ${time}

${dotLine}
> ASTRONAUT INFO
${dotLine}
* count: ${astronautCount}
* status: ${astronautStatus}

${dotLine}
> FUEL DATA
${dotLine}
* Fuel temp celsius: ${fuelTempCelsius} C
* Fuel level: ${fuelLevel}%

${dotLine}
> MASS DATA
${dotLine}
* Crew mass: ${crewMassKg}kg
* Fuel mass: ${fuelMassKg}kg
* Shuttle mass: ${shuttleMassKg}kg
* Total mass: ${totalMassKg}kg

${dotLine}
> FLIGHT PLAN
${dotLine}
* weather: ${weatherStatus}

${dotLine}
> OVERALL STATUS
${dotLine}
* Clear for takeoff: YES`);