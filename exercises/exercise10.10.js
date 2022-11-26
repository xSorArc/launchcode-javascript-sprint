// 10.10. EXERCISES: Functions
// 10.10.1. Rectangles
// a. Write a function makeLine(size) that returns a line with exactly size hashes.
const prompt = require('prompt-sync') ({sigint: true});

function makeLine(size, char = "#") {
    let line = "";

    for (let i = 0; i < size; i ++) {
        line += char;
    }
    return console.log(line);
}

// b. Write a function called makeSquare(size) that returns a size by size string of hashes. The function should NOT print each row of the square.
//    Instead, it must return a single string that contains the entire shape.
function makeSquare(size, char = "#") {
   let square = makeRectangle(size, size, char);
   return square.trim();
}
// makeSquare(5);

// c. Write a function makeRectangle(width, height) that returns a rectangle with the given width and height. Use makeLine function to do this.
function makeRectangle(width, height, char = "#") {
    rectangle = "";

    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width, char);  
       }

    return rectangle;
}
// makeRectangle(3, 5);

// d. Now, go back and rewrite makeSquare to use makeRectangle.

// 10.10.2. Triangles
// e. Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, with the given height. 
// Use your makeLine function to do this.
function makeDownwardStairs(height, char = "#") {
    let stairs = "";

    for (let i = 0; i < height; i++) {
        console.log(stairs += char);
    }
}
// makeDownwardStairs(4);

// f. Write a function makeSpaceLine(numSpaces, numChars) that returns a line with exactly the specified number of spaces, followed by the 
// specified number of hashes, followed again by numSpaces more spaces.
function makeSpaceLine(numSpaces, numChars) {
    let line = "";
    let space = "";
    let char = "#";

    for (let i = 0; i < numSpaces; i++) {
        space += " ";
    }

    for (let j = 0; j < numChars; j++) {
        char += "#";
    }    
    line = console.log(space + char + space);
    return line;
}
// makeSpaceLine(3, 5);

// g. Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.
function makeIsoscelesTriangle(height, char = "#") {
    let triangle = "";

    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1, char) + '\n');
    }
    return triangle;
}
    // TIP:
    // Consider the top line of the triangle to be level 0, the next to be line 1, and so on. Then line i is a space-line with 
    // height - i - 1 spaces and 2 * i + 1 hashes.

// 10.10.3. Diamonds
// h. Write a function makeDiamond(height) that returns a diamond where the triangle formed by the top portion has the given height.
function makeDiamond(height, char = '#') { 
    let triangle = makeIsoscelesTriangle(height, char);
    let reversed = triangle.split('').reverse().join('');
    let diamond = (triangle.trimEnd() + reversed);
    
    return diamond;
  }
    // TIP: Consider what happens if you create a triangle and reverse it using our reverse function.

// 10.10.4. Bonus Mission
// Refactor your functions so that they take a single character as a parameter, and draw the shapes with that character instead of always 
// using '#'. Make the new parameter optional, with default value '#'.