// 12.7. EXERCISES: Objects & Math
// 12.7.1. Part 1: Create More Objects
// Based on the two object literals provided in the starter code, create new object literals for three more animals:
let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    move: function() {return Math.round(Math.random() * 10);}
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    move: function() {return Math.round(Math.random() * 10);}
};

let superChimpTwo = {
    name:"Brad",
    species:"Chimpanzee",
    mass: 11,
    age: 6,
    move: function() {return Math.round(Math.random() * 10);}
}

let superDog = {
    name: "Leroy",
    species: "Beagle",
    weight: 14,
    age: 5,
    move: function() {return Math.round(Math.random() * 10);}
}

let tardiB = {
    name: "Almina",
    species: "Tardigrade",
    weight: 0.0000000001,
    age: 1,
    move: function() {return Math.round(Math.random() * 10);}
}

// 12.7.1.1. Add a New Property
// For each animal, add a property called astronautID. Each astronautID should be assigned a number between 1 and 10 (including 10). 
// However, no crew members should have the same ID.
superChimpOne.astronautID = 1;
salamander.astronautID = 2;
superChimpTwo.astronautID = 3;
superDog.astronautID = 4;
tardiB.astronautID = 5;

// 12.7.1.2. Add a Method
// Add a move method to each animal object. The move method will select a random number of steps from 0 to 10 for the animal to take. 
// The number can be 0 as well as 10.
superChimpOne.move()

// 12.7.1.3. Store the Objects
// Create a crew array to store all of the animal objects.
let crewArray = [superChimpOne, salamander, superChimpTwo, superDog, tardiB];

// 12.7.2. Part 2: Crew Reports
// Upper management at the space base wants us to report all of the relevant information about the animal astronauts.
// Define a crewReports function to accomplish this. When passed one of the animal objects, the function returns a template literal with 
// the following string: '____ is a ____. They are ____ years old and ____ kilograms. Their ID is ____.'
// Fill in the blanks with the name, species, age, mass, and ID for the selected animal.
function crewReports(obj) {
    return console.log(`${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.astronautID}.`);
}

crewReports(superChimpOne);
// 12.7.3. Part 3: Crew Fitness
// Before these animal astronauts can get ready for launch, they need to take a physical fitness test. Define a fitnessTest function that 
// takes an array as a parameter.
// Within the function, race the five animals together by using the move method. An animal is done with the race when they reach 20 steps or 
// greater. Store the result as a string: '____ took ____ turns to take 20 steps.' Fill in the blanks with the animal’s name and race result.
// Create a new array to store how many turns it takes each animal to complete the race.
// Return the array from the function, then print the results to the console (one animal per line).
function fitnessTest(arr) {
    let results = [], numSteps, turns;

    for (let i = 0; i < arr.length; i++) {
        numSteps = 0;
        turns = 0;

        while (numSteps < 20) {
            numSteps += arr[i].move();
            turns++;
        }
        results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`)
    }
    return results;
}
console.log(fitnessTest(crewArray));