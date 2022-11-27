// 11.10. EXERCISES: More on Functions
// 11.10.1. Practice Your Skills
// A. Create an anonymous function and set it equal to a variable. Your function should:
//    a. If passed a number, return the tripled value.
//    b. If passed a string, return the string "ARRR!"
//    c. If NOT passed a number or string, return the data unchanged.
//    d. Build your function here, and be sure to test it.
let secretFunction = (secret) => {
    if (typeof secret === "number") {
        return secret * secret * secret;
    } else if (typeof secret === "string") {
        return "ARRR!";
    } else {
        return secret;
    }
}

console.log(secretFunction(4));
// B. Add to your code! Use your function and the map method to change the array ['Elocution', 21, 'Clean teeth', 100] as follows:
let arr = ['Elocution', 21, 'Clean teeth', 100];
//    a.Triple all the numbers.
//    b. Replace the strings with "ARRR!"
//    c. Print the new array to confirm your work.
console.log(secretFunction(arr.map(secretFunction)));

// 11.10.2. Raid a Shuttle
let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

function checkFuel(level) {
   if (level > 100000){
      return 'green';
   } else if (level > 50000){
      return 'yellow';
   } else {
      return 'red';
   }
}

function holdStatus(arr){
   if (arr.length < 7) {
      return `Spaces available: ${7 - arr.length}`;
   } else if (arr.length > 7){
      return `Over capacity by ${arr.length - 7} items.`
   } else {
      return "Full";
   }
}

// C. First, steal some fuel from the shuttle:
//    a. Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. 
//       This will be the fuel level on the shuttle.
//    b. You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT 
//       changing the color returned by the checkFuel function.
//    c. Once you figure out how much fuel to pump out, return that value.
//    d. Decide where to best place your function call to gather our new fuel.
let mandatoryFuelCheck = (fuel) => {
    let siphon;
    
    while (fuelLevel > 100101) {
        fuelLevel -= 100;
        siphon += 100;
    }
    return siphon;
}

mandatoryFuelCheck(fuelLevel);

console.log("Fuel level: "+ checkFuel(fuelLevel));
console.log("Hold status: "+ holdStatus(cargoHold));

// D. Next, liberate some of that glorious cargo.
//    a. Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.
//    b. You need to swipe two items from the cargo hold. Choose well. Stealing water ain't gonna get us rich. Put the swag into a new array and 
//       return it from the function.
//    c. The cargo hold has better security than the fuel tanks. It counts how many things are in storage. You need to replace what you steal 
//       with something worthless. The count MUST stay the same, or you'll get caught and thrown into the LaunchCode brig.
//    d. Don't get hasty, matey! Remember to test your function.
let cargoCheck = (cargo) => {
    swipedCargo = [];

    if (cargo.includes("gold")) {
        swipedCargo.push("gold");
        swipedCargo.push("AE-35 unit");
        cargo.splice(4, 1, "gold crumbs");
        cargo.splice(6, 1, "AE-35 Box");
    }
    return swipedCargo;
}

// E.Finally, you need to print a receipt for the accountant. Don't laugh! That genius knows MATH and saves us more gold than you can imagine.
//    a. Define a function called irs that can take fuelLevel and cargoHold as arguments.
//    b. Call your anonymous fuel and cargo functions from within irs.
//    c. Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."
function irs(fuel, cargo) {
    cargo = cargoCheck(cargoHold);
    return console.log(`Raided ${fuel}kg of fuel from the tanks, and stole ${cargo[0]} and ${cargo[1]} from the cargo hold.`);
}

irs(fuelLevel, cargoHold);