// 8.5 EXERCISES: Arrays
// 1) Create an array called practiceFile with the following entry: 273.15. Use the push method to add the following elements to the array. 
//    Add items one at a time, then use a single push to add the items in part c. Print the array after each step to confirm the changes.
console.log("Part 1:\n")
const practiceFile = [273.15];

practiceFile.push(42);                      // a.
console.log(practiceFile);

practiceFile.push("hello");                 // b.
console.log(practiceFile);

practiceFile.push(false, -4.6, "87");       // c.
console.log(practiceFile);

// 2) push, pop, shift and unshift are used to add/remove elements from the beginning/end of an array. Bracket notation can be used to modify any 
//    element within an array. Starting with the cargoHold array write statements to do the following:
// a. Use bracket notation to replace 'slinky' in the array with 'space tether'. Print the array to confirm the change.
console.log("\nPart 2:\n");
const cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
cargoHold[5] = "space tether";
console.log(cargoHold);

// b. Remove the last item from the array with pop. Print the element removed and the updated array.
cargoHold.pop();
console.log(cargoHold);

// c. Remove the first item from the array with shift. Print the element removed and the updated array.
cargoHold.shift();
console.log(cargoHold);

// d. Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and '20 meters' to the array - the number at 
//    the start and the string at the end. Print the updated array to confirm the changes.
cargoHold.push("20 meters");
cargoHold.unshift(1138);
console.log(cargoHold);

// e. Use a template literal to print the final array and its length.
console.log(`\nThe final array is ${cargoHold}.\nWith a length of ${cargoHold.length}.`);

// 3) The splice method can be used to either add or remove items from an array. It can also accomplish both tasks at the same time. Review 
//    the splice appendix if you need a syntax reminder. Use splice to make the following changes to the final cargoHold array from exercise 2.
//    Be sure to print the array after each step to confirm your updates.
// a. Insert the string 'keys' at index 3 without replacing any other entries.
console.log("\nPart 3:\n");
cargoHold.splice(3, 0, "keys");
console.log(cargoHold);

// b. Remove 'instruction manual' from the array. (Hint: indexOf is helpful to avoid manually counting an index).
const spot = cargoHold.indexOf("instruction manual");
cargoHold.splice(spot, 1);
console.log(cargoHold);

// c. Replace the elements at indexes 2 - 4 with the items 'cat', 'fob', and 'string cheese'.
cargoHold.splice(2, 3, "cat", "fob", "string cheese");
console.log(cargoHold);

// 4) Some methods---like splice and push---alter the original array, while others do not.
// a. Print the result of concat on the two arrays. Does concat alter the original arrays? Verify by printing holdCabinet1 after the method.
console.log("\nPart 4:\n");
const holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
const holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

console.log("Concat: " + holdCabinet1.concat(holdCabinet2));
console.log("After concat: " + holdCabinet1);           // It does NOT alter arrays.

// b. Print a slice of two elements from each array. Does slice alter the original arrays?
console.log("Slice1: " + holdCabinet1.slice(0, 3));
console.log("Slice2: " + holdCabinet2.slice(0, 3));
console.log("After slice: " + holdCabinet1);            // It does NOT alter the arrays.

// c. reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log(holdCabinet1.reverse());                    // It DOES alter the array.
console.log(holdCabinet2.sort());                       // It DOES alter the array

// 5) The split method converts a string into an array, while the join method does the opposite.
// a. Try it! See what happens when you print str.split() vs. str.split('e') vs. str.split(' ') vs. str.split('').
console.log("\nPart 5:\n");
let str = 'In space, no one can hear you code.';
console.log(str.split());           // Splits the string by the argument inside the ().
console.log(str.split("e"));
console.log(str.split(" "));
console.log(str.split(""));

// b. See what happens when you print arr.join() vs. arr.join('a') vs. arr.join(' ') vs. arr.join(''). 
let arr = ['B', 'n', 'n', 5];       
console.log("\n" + arr.join());     // Joins the array by the argument inside the ().
console.log(arr.join("a"));
console.log(arr.join(" "));
console.log(arr.join(""));

// c. Do split or join change the original string/array? ANSWER: No. 
// d. The benefit is that we can take a string with delimiters (like commas) and convert it into a modifiable array. Try it! Alphabetize 
//    these hold contents: "water,space suits,food,plasma sword,batteries", and then combine them into a new string.
let holdContents = "water,space suits,food,plasma sword,batteries";
let newHold = holdContents.split(",").sort().join();
console.log(newHold);

// 6) Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.
// a. Define and initialize the following arrays, which hold the name, chemical symbol and mass for different elements:
console.log("\nPart 6:\n");
const element1 = ['hydrogen', 'H', 1.008];
const element2 = ['helium', 'He', 4.003];
const element26 = ['iron', 'Fe', 55.85];

// b. Define the array table, and use push(arrayName) to add each of the element arrays to it. Print table to see its structure.
let table = [];
table.push(element1, element2, element26);
console.log(table);  // try .toString() to see all the arrays.
// c. Use bracket notation to examine the difference between printing table[1] and table[1][1].
console.log("element2: " + table[1]);
console.log("symbol of element2: " + table[1][1]);

// d. Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log("mass of element1: " + table[0][2]);
console.log("name of element2: " + table[1][0]);
console.log("symbol of element26: " + table[2][1]);

// e. table is an example of a 2-dimensional array. The first "level" contains the element arrays, and the second level holds the 
//    name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let threeD = [[[]]];         
threeD[0].push('level1');
threeD[0][0].push('level2');
//threeD[0][0][0].push('level3');                     //ERROR: Doesn't work.
// console.log(threeD);