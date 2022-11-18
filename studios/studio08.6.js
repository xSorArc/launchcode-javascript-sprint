// 8.6 STUDIO: Strings and Arrays
// 8.6.1. String Modification: Use string methods to convert a word into pseudo-pig latin.
// a. Remove the first three characters from a string and add them to the end. Ex: 'LaunchCode' becomes 'nchCodeLau'. Use a template literal 
//    to print the original and modified string in a descriptive phrase.
console.log("Part 1:\n");
let str = "LaunchCode";
const prompt = require('prompt-sync')({sigint: true});

// b. Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
// c. Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. 
//    Also, the template literal should note the error.
// let input = Number(prompt("Please enter the number of letters that will be relocated: "));  

// if (input > str.length) {                                                                               // c.
//     console.log(`Input exceeds length of string: ${input}. Value set to 3.`);
//     input = 3;
// } else {
//     let str2 = str.slice(input, str.length) + str.slice(0, input);                                      // a. & b.
//     console.log(`Original: ${str}, Modified: ${str2}.`);
// }

// 8.6.2. Array and String Conversion
// The split and join methods convert back and forth between strings and arrays. Use delimiters as reference points to split a string into an 
// array, then modify the array and convert it back to a printable string.
// a. For a given string, use the includes method to check to see if the words are separated by commas (,), semicolons (;), or just spaces.
// b. Use the reverseCommas() function to code the following. If the string uses commas to separate the words, split it into an array, reverse 
//    the entries, and then join the array into a new comma-separated string. For example, "up,to,code,fun" becomes "fun,code,to,up".
console.log("\nPart 2:\n");
let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

function reverseCommas() {
    let output;

    for (let i = 0; i < strings.length; i++) {
        if (strings[i].includes(",") && !strings[i].includes(", ")) {
            output = strings[i].split(",").reverse().join(",");
            console.log(output);
        }
    }
}
reverseCommas();

// c. Use the semiDash() function to code the following. If the string uses semicolons to separate the words, split it into an array, 
//    alphabetize the entries, and then join the array into a new hyphen-separated string. For example, "up;to;code;fun" becomes "code-fun-to-up".
function semiDash() {
    let output;

    for (let i = 0; i < strings.length; i++) {
        if (strings[i].includes(";")) {
            output = strings[i].split(";").sort().join(";");
            console.log(output);
        }
    }
}
semiDash();

// d. Use the reverseSpace() function to code the following. If the string uses spaces to separate the words, split it into an array, reverse 
//    alphabetize the entries, and then join the array into a new space-separated string. For example, "to code up fun" becomes "up to fun code".
function reverseSpace() {
    let output;

    for (let i = 0; i < strings.length; i++) {
        if (strings[i].includes(" ") && !strings[i].includes(", ")) {
            output = strings[i].split(" ").sort().reverse().join(" ");
            console.log(output);
        }
    }
}
reverseSpace();

// e. Use the commaSpace() function to code the following. Consider: What if the string uses 'comma spaces' (, ) to separate the list? 
//    Modify your code to produce the same result as part "b", making sure that the extra spaces are NOT part of the final string.
function commaSpace() {
    let output;

    for (let i = 0; i < strings.length; i++) {
        if (strings[i].includes(", ")) {
            output = strings[i].split(", ").reverse().join(",");
            console.log(output);
        }
    }
}
commaSpace();

// 8.6.3. Bonus Mission: Multi-dimensional Arrays. Arrays can store other arrays!
// a. The cargo hold in our shuttle contains several smaller storage spaces. Use split to convert the following strings into four cabinet arrays. 
//    Alphabetize the contents of each cabinet.
console.log("\nBONUS\n");
let food ="water bottles, meal packs, snacks, chocolate";
let equipment = "space suits, jet packs, tool belts, thermal detonators";
let pets = "parrots, cats, moose, alien eggs";
let sleepAids = "blankets, pillows, eyepatches, alarm clocks";

let cabinetArr1 = food.split(",").sort();
let cabinetArr2 = equipment.split(",").sort();
let cabinetArr3 = pets.split(",").sort();
let cabinetArr4 = sleepAids.split(",").sort();

// b. Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(cabinetArr1, cabinetArr2, cabinetArr3, cabinetArr4);
console.log(cargoHold);
// c. Query the user to select a cabinet (0-3) in the cargoHold.
let input = Number(prompt("Please select a cabinet (0-3)"));

// d. Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, 
//    print an error message instead.
if (input < 3) {
    console.log(`You've selected cabinet${input}: ${cargoHold[input]}`);
} else { 
    console.log(`ERROR: Invalid input(${input})!`);
}

// e. Bonus to the Bonus: Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the includes method
//    to check if the cabinet contains the selected item, then print "Cabinet ____ DOES/DOES NOT contain ____."
let input2 = prompt("Please select an item: ");

if (cargoHold[input].includes(input2)) {
    console.log(`Cabinet${input} DOES contain ${input2}.`);
} else {
    console.log(`Cabinet${input} DOES NOT contain ${input2}.`);
}