// 28.7 EXERCISES: TypeScript
// Part 1: Declare Variables with Type
// const spacecraftName: String = 'Determination'; 
// const speedMph: number = 17500;
import { SpaceLocation } from "./SpaceLocation";

const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;
// const milesPerKilometer: number = 0.621;

// Part 2: Print days to Mars
// 1) Declare and assign these variables. 
//      a. Remember: variable declarations in TypeScript include the type!
//      b. milesToMars is a number with the value of kilometersToMars * milesPerKilometer.
// const milesToMars: number = kilometersToMars * milesPerKilometer;

//      c. hoursToMars is a number with the value of milesToMars / speedMph.
// const hoursToMars: number = milesToMars / speedMph;

//      d. daysToMars is a number with the value of hoursToMars / 24.
// const daysToMars: number = hoursToMars / 24;

// 2) Write a console.log statement that prints out the days to Mars.
//      a. Use template literal syntax and the variables ${spacecraftName} and ${daysToMars}.
//      *** MOVED TO LINE 58 ***

// 3) Use the terminal in VSCode to compile your .ts file, 
//    then use the command node parts1-5.js to run the JavaScript file created during the build process.

// IN TERMINAL TYPE:
//         tsc ts/parts1-5.ts     - Compiles JS file to run with node
//        node ts/parts1-5.js     - Pay attention to the file type (js)

//Part 3: Create a Function
// 1) define a function that calculates the days it would take to travel to a location.
//      a. Function name getDaysToLocation
//      b. kilometersAway must be a number.
//      c. Returns the number of days to a location.
//          - Use the same calculations as in Part 2.1.
//          - In the function, make the variable names generic. Use milesAway & hoursToLocation instead of milesToMars & hoursToMars.
//          - The function should declare that it returns a number.

// 2) Print out the days to Mars.
//      a. Move the output statement from part 2 below your new function.
//      b. Refactor the template literal to use ${getDaysToLocation(kilometersToMars)} and ${spacecraftName}.
// console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);

// 3) Print out the days to the Moon.
//      a. Add another output statement and template literal using ${getDaysToLocation(kilometersToTheMoon)} and ${spacecraftName}.
//      b. Use the terminal in VSCode to recompile your .ts file, then run the parts1-5.js file again.
// console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToTheMoon)} days to get to Mars.`);

// Part 4: Create a Spacecraft Class
// Organize getDaysToLocation and the variables for name, speed, and miles per kilometer by moving them into a class.
// 1) Define a class named Spacecraft.
//      a. Properties
//          - milesPerKilometer: number = 0.621;
//          - name: string;
//          - speedMph: number;
//      b. Constructor
//          - name is the first parameter and it MUST be a string.
//          - speedMph is the second parameter and it MUST be a number.
//          - Sets the class properties using this.name and this.speedMph.
class Spacecraft {
    name: string;
    speed: number;
    mpk: number = 0.621;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }

    getDaysToLocation(kilometersAway: number): number {                    
        let milesAway: number = kilometersAway * this.mpk;
        let hoursToLocation: number = milesAway / this.speed; 
    
        return hoursToLocation / 24;                                            
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
}

// *** NOTE: Once you complete the constructor, be sure to remove the variables you defined in part1 
//          (spacecraftName, milesPerKilometer, and speedMph. ***

// 2) Move the function getDaysToLocation, defined in Part 3, into the Spacecraft class.
//      a. Remember to place the function after the constructor.
//      b. Update the function to reference the class properties this.milesPerKilometer and this.speedMph.

// 3) Create an instance of the Spacecraft class.
//      a. let spaceShuttle = new Spacecraft('Determination', 17500);
const spaceShuttle = new Spacecraft("Determination", 17500);

// 4) Print out the days to Mars.
//      a. Use template literals, ${spaceShuttle.getDaysToLocation(kilometersToMars)} and ${spaceShuttle.name}.
// console.log(`It would take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);

// 5) Print out the days to the Moon.
//      a. Use template literals, ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} and ${spaceShuttle.name}.
// console.log(`It would take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);

// 6) Use the terminal in VSCode to recompile your .ts file, then run the .js file again.

// Part 5: 
// 5) Replace the earlier console.log statements by using the class instance to print out the days to Mars and the Moon.
console.log(spaceShuttle.printDaysToLocation(new SpaceLocation("Mars", kilometersToMars)));
console.log(spaceShuttle.printDaysToLocation(new SpaceLocation("Moon", kilometersToTheMoon)));