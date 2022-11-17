// 7.9 EXERCISES: Strings
// Part 1
// 1) The length method returns how many characters are in a string. However, the method will NOT give us the length of a number.
// a. Use type conversion to print the length (number of digits) of an integer.
// b. Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
console.log("Part 1:\n");
const num = String(123.45);
console.log(`"num" has ${num.length - 1} digits but a length of ${num.length}\n`);

// c. Modify your code to print out the length of a decimal value EXCLUDING the period. What if num could be EITHER an integer or a decimal?
//    Add an if/else statement so your code can handle both cases. 
if (num.includes(".")) {
    console.log(num.length - 1);
} else {
    console.log(num.length);
}

// Part 2
// 1) Remember, strings are immutable. Consider a string that represents a strand of DNA: " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT
//    There are some typos in the string that we would like to fix:
// a. Use the trim() method to remove the leading and trailing whitespace, and then print the results.
console.log("\nPart 2:\n");
let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
console.log(`Trimmed version of dna: "${dna.trim()}"`);

// b. Change all of the letters in the dna string to UPPERCASE and print the result.
console.log(`Uppercase version of dna: "${dna.toUpperCase()}"`);

// c. Note that if you try console.log(dna) after applying the methods, the original, flawed string is displayed. To fix this, you need to 
//    reassign the changes back to dna. Apply these fixes so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.
dna = dna.trim().toUpperCase();
console.log(`Fixed version of dna: "${dna}"\n`);

// 2) Let's use string methods to do more work on the DNA strand:
// a. Replace the sequence 'GCT' with 'AGG', and then print the altered strand.
if (dna.includes("GCT")) {
    dna = dna.replace("GCT", "AGG");
    console.log(dna);
}

// b. Look for the sequence 'CAT' with indexOf(). If found print, 'CAT found', otherwise print, 'CAT NOT found'.
if (dna.indexOf("CAT")) {
    console.log("CAT found");
} else {
    console.log("CAT NOT found");
}

// c. Use slice() to print out the fifth set of 3 characters (called a codon) from the DNA strand.
console.log(`5th codon of "dna" is ${dna.slice(16, 19)}.`);

// d. Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dna.length} characters long.`);

// e. Just for fun, apply methods to dna and use another template literal to print, 'taco cat'.
console.log(`${dna.slice(4, 7).toLowerCase()}o${dna.slice(40, 43).toLowerCase()} `);

// Part 3
// 1) If we want to turn the string 'JavaScript' into 'JS', we might try .remove(). Unfortunately, there is no such method in JavaScript. 
//    However, we can use our cleverness to achieve the same result.
// a. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'.
console.log("\nPart 3:\n");
const js = "JavaScript";
let string = "title case";
console.log(`We can use concatenation to get "${js.slice(0, 1) + js.slice(4, 5)}" from "JavaScript.`);

// b. Without using slice(), use method chaining to accomplish the same thing.
// c. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`We can use concatenation to get "${js[0] + js[4]}" from "JavaScript. (without .slice())\n`);

// 2) Some programming languages (like Python) include a title() method to return a string with Every Word Capitalized. JavaScript has no title() 
//    method, but that won't stop us! Use the string methods you know to print 'Title Case' from the string 'title case'.
string = string.replace("t", "T").replace("c", "C");
console.log(string);