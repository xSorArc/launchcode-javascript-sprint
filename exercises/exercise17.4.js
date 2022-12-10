// 17.4. EXERCISES: Exceptions
// 17.4.1. Zero Division: Throw
// Write a function called divide that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.
// However, if denominator is zero you should throw the error, "Attempted to divide by zero."
const divide = (numerator, denominator) => {

    if (denominator === 0) {
        throw Error("Attempted to divide by zero.");
    }
    return numerator / denominator;
}

// divide(2, 0);

// 17.4.2. Test Student Labs
// A teacher has created a gradeLabs function that verifies if student programming labs work. This function loops over an array of 
// JavaScript objects that should contain a student property and runLab property.

// The runLab property is expected to be a function containing the student's code. The runLab function is called and the result is 
// compared to the expected result. If the result and expected result don't match, then the lab is considered a failure.
let studentLabs = [
    {
       student: 'Carly',
       runLab: function (num) {
          return Math.pow(num, num);
       }
    },
    {
       student: 'Erica',
       runLab: function (num) {
          return num * num;
       }
    }
 ];

 let studentLabs2 = [
    {
       student: 'Blake',
       myCode: function (num) {
          return Math.pow(num, num);
       }
    },
    {
       student: 'Jessica',
       runLab: function (num) {
          return Math.pow(num, num);
       }
    },
    {
       student: 'Mya',
       runLab: function (num) {
          return num * num;
       }
    }
 ];

//  Add a try/catch block inside of gradeLabs to catch an exception if the runLab property is not defined. If the exception is thrown, 
//  result should be set to the text "Error thrown".
function gradeLabs(labs) {
    for (let i=0; i < labs.length; i++) {
       try {
        let lab = labs[i];
        let result = lab.runLab(3);
        console.log(`${lab.student} code worked: ${result === 27}`);
       } catch (error) {
        result = console.log("Error thrown");
       }
       
    }
  }
 

 
//  gradeLabs(studentLabs);

 gradeLabs(studentLabs2);