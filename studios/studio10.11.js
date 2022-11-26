// 10.11. STUDIO: Functions
// 10.11.1. Reverse Characters
// 1) In the composing functions section, we examined a function that reverses the characters in a string using the split and join methods. 
//    Let's rebuild that function now.
// a) Define the function as reverseCharacters. Give it one parameter, which will be the string to reverse.
// b) Within the function, split the string into an array, then reverse the array.
// c) Use join to create the reversed string and return that string from the function.
// d) Below the function, define and initialize a variable to hold a string.
// e) Use console.log(reverseCharacters(myVariableName)); to call the function and verify that it correctly reverses the characters in the string.
// f) Optional: Use method chaining to reduce the lines of code within the function.
function reverseCharacters(str) {

    if (typeof str === "string") {
        str = str.split("").reverse().join("");
    } else if (typeof str === "number") {
        str = String(str);
        str = Number(str.split("").reverse().join(""));
    }
    return str
}

let word = "happy-go-lucky";
// console.log(reverseCharacters(word));
// console.log(reverseCharacters(1234));

// 10.11.2. Reverse Digits
// 2) The reverseCharacters function works great on strings, but what if the argument passed to the function is a number? Using 
//    console.log(reverseCharacters(1234)); results in an error, since split only works on strings (TRY IT). When passed a number, 
//    we want the function to return a number with all the digits reversed (e.g. 1234 converts to 4321 and NOT the string "4321").
// a) Add an if statement to reverseCharacters to check the typeof the parameter.
// b) If typeof is 'string', return the reversed string as before.
// c) If typeof is 'number', convert the parameter to a string, reverse the characters, then convert it back into a number.
// d) Return the reversed number.
// e) Be sure to print the result returned by the function to verify that your code works for both strings and numbers.

// 10.11.3. Complete Reversal
// 3) Now we are ready to finish our complete reversal process. Create a new function with one parameter, which is the array we want to change. 
// a) Define and initialize an empty array.
// b) Loop through the old array.
// c) For each element in the old array, call reverseCharacters to flip the characters or digits.
// d) Add the reversed string (or number) to the array defined in part 'a'.
// e) Return the final, reversed array.
// f) Be sure to print the results from each test case in order to verify your code.
function reverseArray(arr) {
    newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(reverseCharacters(arr[i]));
    }
    return newArr.reverse();
}

    let arr1 = ['apple', 'potato', 'Capitalized Words'];
    let arr2 = [123, 8897, 42, 1138, 8675309];
    let arr3 = ['hello', 'world', 123, 'orange'];

    // console.log(reverseArray(arr1));

// 10.11.4. Bonus Missions
// 4) Define a function with one parameter, which will be a string. The function must do the following:
// a) Have a clear, descriptive name like funPhrase.
// b) Retrieve only the last character from strings with lengths of 3 or less.
// c) Retrieve only the first 3 characters from strings with lengths larger than 3.
// d) Use a template literal to return the phrase We put the '___' in '___'. Fill the first blank with the modified string, and fill the 
//    second blank with the original string.
// e) Build your function at repl.it.
function funPhrase(str) {
    let newStr = "";

    if (str.length <= 3) {
        newStr = str[str.length];
    } else {
        newStr = (str[0] + str[1] + str[2]);
    }

    return console.log(`We put the ${newStr} in ${str}`);
}

// 5) Now test your function:
// f) Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
// g) Call your function and print the returned phrase.
let str = 'Functions rock!';
funPhrase(str);

// 6) The area of a rectangle is equal to its length x width.
// a) Define a function with the required parameters to calculate the area of a rectangle.
// b) The function should return the area, NOT print it.
function areaOfRectangle(length, width = length) {

    if (width === length) {
        let str = `The area is ${length * width}cm^2.`;
        return str;
    }
    return length * width;
}

// c) Call your area function by passing in two arguments - the length and width.
console.log(areaOfRectangle(2, 4));

// d) If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.
// e) Use a template literal to print, "The area is ____ cm^2."
// f) Code the area function at repl.it.
console.log(areaOfRectangle(20));