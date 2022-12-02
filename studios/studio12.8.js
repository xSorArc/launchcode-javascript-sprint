// 12.8. STUDIO: Objects & Math
// In the exercises, you created objects to store data about the candidates for our animal astronaut corps. You must create code to:
// A. Select the crew.
// B. Perform critical mission calculations.
// C. Determine the fuel required for launch.
let idNumbers = [291, 414, 503, 599, 796, 890];

let candidateA = {
    'name':'Gordon Shumway',
    'species':'alf',
    'mass':90,
    'o2Used':function(hrs){return 0.035*hrs},
    'astronautID':414
  };
  let candidateB = {
    'name':'Lassie',
    'species':'dog',
    'mass':19.1,
    'o2Used':function(hrs){return 0.030*hrs},
    'astronautID':503
  };
  let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'o2Used':function(hrs){return 0.022*hrs},
    'astronautID':796
  };
  let candidateD = {
    'name':'Paddington',
    'species':'bear',
    'mass':31.8,
    'o2Used':function(hrs){return 0.047*hrs},
    'astronautID':291
  };
  let candidateE = {
    'name':'Pete',
    'species':'tortoise',
    'mass':417,
    'o2Used':function(hrs){return 0.010*hrs},
    'astronautID':599
  };
  let candidateF = {
    'name':'Hugs',
    'species':'ball python',
    'mass':2.3,
    'o2Used':function(hrs){return 0.018*hrs},
    'astronautID':890
  };
  
  let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// 12.8.1. Select the Crew
// 12.8.1.1. Randomly Select ID Numbers
// Each candidate was assigned an ID number, which is stored in the candidate's data file and in the idNumbers array.
// 1) Write a selectRandomEntry function to select a random entry from the idNumbers array. Review the Combining Math Methods section if you 
//    need a reminder on how to do this.
// 2) Call the function three times to select three ID numbers. Store these selections in a new array, making sure to avoid repeated numbers. 
//    No animal can be selected more than once!
let threeEntries= [];

const selectRandomEntry = (arr) => {
    let candidate = arr[Math.floor(Math.random() * arr.length)];
    return candidate;
}

while (threeEntries.length < 3) {
    let candidateId = selectRandomEntry(idNumbers);

    if (!threeEntries.includes(candidateId)) {
        threeEntries.push(candidateId);
    } 
}

// console.log(threeEntries);

// 12.8.1.2. Build a crew Array
// Design a function that takes two arrays as parameters. These hold the randomly selected ID numbers and the candidate objects. 
// Use one or more loops to check which animals hold the lucky ID numbers. They will be going on the space mission! Store these animals in a crew 
// array, and then return that array.
// Use a template literal to print, '____, ____, and ____ are going to space!' Fill in the blanks with the names of the selected animals.
let crewArray = [];

const crewSelection = (selected, candidates) => {
    selectRandomEntry(selected);

        for (let i = 0; i < candidates.length; i++) {
            if (threeEntries.includes(candidates[i].astronautID)) {
                crewArray.push(candidates[i]);
            }
        }
    return crewArray;
}

crewSelection(idNumbers, animals);
console.log(`${crewArray[0].name}, ${crewArray[1].name}, and ${crewArray[2].name} are going to space!\n`);

// 12.8.2. Orbit Calculations
// 1) Spacecraft orbits are not circular, but we will assume that our mission is special. The animals will achieve a circular orbit with an 
//    altitude of 2000 km.
//    a. Define a function that returns the circumference (C = 2πr) of the orbit. Round the circumference to an integer.
const spacecraftOrbit = (radius) => {
    return Math.round(2 * Math.PI * radius);
}

//    b. Define the missionDuration function to take three parameters - the number of orbits completed, the orbit radius, and the orbital speed. 
//       Set the default radius to 2000 km and the default orbital speed to 28000 km/hr.
//    c. Calculate how long it will take our animals to complete a certain number of orbits (time = distance/speed). Round the answer to 2 decimal
//       places, then return the result. For example, with the default radius and speed, 5 orbits will take about 2.24 hours.
//    d. Print, 'The mission will travel ____ km around the planet, and it will take ____ hours to complete.'
const missionDuration = (numOfOrbits, orbitRadius = 2000, orbitalSpeed = 28000) => {
  let distance = spacecraftOrbit(orbitRadius) * numOfOrbits;
  let time  = Math.round((distance * 100) / orbitalSpeed) / 100;

  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.\n`);

  return time;
}

// console.log(missionDuration(5));

// 2) Time for an excursion! Code an oxygenExpended function to accomplish the following:
//    a. The function should take a candidate object as a parameter and NOT the crew array.
// NOTE: When you call oxygenExpended, feel free to use your selectRandomEntry to pick the crew member to pass into the function.
//    b. The spacewalk will last for three orbits around the earth. Use missionDuration to calculate how many hours the spacewalk will take.
//    c. Use the candidate's o2Used method to calculate how much oxygen (O 2) they consume during the spacewalk. Round the answer to 3 decimal 
//       places.
//    d. Return the string, '__ will perform the spacewalk, which will last __ hours and require __ kg of oxygen.' Fill in the blanks with the 
//       animal's name, the spacewalk time, and the amount of O 2 used.
//    e. We should not restrict our mission to the default values for orbital radius and orbital speed. Refactor oxygenExpended to accept values 
//       for these items. Remember to include the values in the missionDuration call.
// selectRandomEntry(idNumbers);

const oxygenExpended = (candidate) => {
  let oxygen = Math.round(candidate.o2Used(missionDuration(3)) * 1000) / 1000;
    
  return `${candidate.name} will perform the spacewalk, which will last ${missionDuration(3)} hours and require ${oxygen} kg of oxygen.\n`;
}

// let candidate = selectRandomEntry(animals);
// console.log(oxygenExpended(candidate));

// 12.8.3. Bonus Missions
// 12.8.3.1. Conserve O2
// Instead of randomly selecting a crew member for the spacewalk, have your program select the animal with the smallest oxygen consumption.
const selectSmallestOxy = (arr) => {
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (smallest.o2Used(1) > arr[i].o2Used(1)) {
      smallest = arr[i];
    }
    
  }
  return smallest;
}

let candidate = selectSmallestOxy(animals);
console.log(oxygenExpended(candidate));

// 12.8.3.2. Fuel Required for Launch
// A general rule of thumb states that it takes about 9 - 10 kg of rocket fuel to lift 1 kg of mass into low-earth orbit (LEO). For our mission, 
// we will assume a value of 9.5 kg to calculate how much fuel we need to launch our crew into space.
// 1) Write a crewMass function that returns the total mass of the selected crew members rounded to 1 decimal place.
const crewMass = () => {
  let totalMass = 0;

  for (let i = 0; i < crewArray.length; i++) {
    totalMass += crewArray[i].mass;
  }
  return totalMass;
}

// 2) The mass of the un-crewed rocket plus the food and other supplies is 75,000 kg. Create a fuelRequired function to combine the rocket and 
//    crew masses, then calculate and return the amount of fuel needed to reach LEO.
// 3) Our launch requires a safety margin for the fuel level, especially if the crew members are cute and fuzzy. Add an extra 200 kg of fuel for 
//    each dog or cat on board, but only an extra 100 kg for the other species. Update fuelRequired to account for this, then round the final 
//    amount of fuel UP to the nearest integer.
// 4) Print 'The mission has a launch mass of ____ kg and requires ____ kg of fuel.' Fill in the blanks with the calculated amounts.
const fuelRequired = () => {
  const rocketMass = 75000;
  const totalMass = rocketMass + crewMass();
  let fuelNeeded = 9.5 * totalMass;

  for (let i = 0; i < crewArray.length; i++) {
    if (crewArray[i].species === "dog" || crewArray[i].species === "cat") {
      fuelNeeded += 200;
    } else {
      fuelNeeded += 100;
    }
  }
  fuelNeeded = Math.ceil(fuelNeeded);
  console.log(`The mission has a launch mass of ${totalMass} kg and requires ${fuelNeeded} kg of fuel.`);

  return fuelNeeded;
}

fuelRequired();