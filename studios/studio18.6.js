// 18.6 STUDIO: Classes
// PART 1
// Declare a class called CrewCandidate with a constructor that takes three parameters---name, mass, and scores. 
// Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        return this.scores.push(newScore);
    }

    average() { 
        let sum = 0;
        let numOfScores = 0;

        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
            numOfScores++;
        }
        return Math.round((sum / numOfScores) * 10) / 10;
    }
    
    passedTest() {
        let avg = this.average();
        let status = "";

        if(avg >= 90) {
            status = "Accepted";
        } else if (avg >= 80) {
            status = "Reserve";
        } else if (avg >= 70) {
            status = "Probationary";
        } else {
            status = "Rejected";
        }
        return `${this.name} earned an average test score of ${avg}% and has a status of ${status}.`
    }
} 
// Create objects for the following candidates:
// Bubba Bear has a mass of 135 kg and test scores of 88, 85, and 90.
// Merry Maltese has a mass of 1.5 kg and test scores of 93, 88, and 97.
// Glad Gator has a mass of 225 kg and test scores of 75, 78, and 62.

const candidate1 = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
const candidate2 = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
const candidate3 = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

// Use console.log for each object to verify that your class correctly assigns the key/value pairs.
// console.log(candidate1);

// 18.6.3. PART 2 - Add First Class Method
// As our candidates complete more tests, we need to be able to add the new scores to their records.
// Create an addScore method in CrewCandidate. The function must take a new score as a parameter. Code this function OUTSIDE of 
// constructor. (If you need to review the syntax, revisit Assigning Class Methods).
// When passed a score, the function adds the value to this.scores with the push array method.
// Test out your new method by adding a score of 83 to Bubba's record, then print out the new score array with objectName.scores
// candidate1.addScore(83);
// console.log(candidate1.scores);

// 18.6.4. PART 3 - Add More Methods
// Now that we can add scores to our candidates' records, we need to be able to evaluate their fitness for our astronaut program. 
// Let's add two more methods to CrewCandidate. One to average the test scores & one to indicate if the candidate should be admitted.
// 18.6.4.1. Calculating the Test Average
// Add an average() method outside constructor. The function does NOT need a parameter.
// To find the average, add up the entries from this.scores, then divide the sum by the number of scores.
// To make the average easier to look at, round it to 1 decimal place, then return the result from the function.
// Verify your code by evaluating and printing Merry's average test score (92.7).
// console.log(candidate2.average());

// 18.6.4.2. Determining Candidate Status
// Candidates with averages at or above 90% are automatically accepted to our training program. Reserve candidates average 
// between 80 - 89%, while probationary candidates average between 70 - 79%. Averages below 70% lead to a rejection notice.
// Add a status() method to CrewCandidate. Return a string (Accepted, Reserve, Probationary, or Rejected) depending on average.
// The status method requires the average test score, which can be called as a parameter OR from inside the function. That's correct - 
// methods can call other methods inside a class! Just remember to use the this keyword.
// Once status has a candidate's average score, evaluate that score, and return the appropriate string.
// Test the status method on each of the three candidates. Use a template literal to 
// print out '___ earned an average test score of ___% and has a status of ___.'

console.log(candidate1.passedTest());
console.log(candidate2.passedTest());
console.log(candidate3.passedTest());

// 18.6.5. Part 4 - Play a Bit
// Use the three methods to boost Glad Gator's status to Reserve or higher. How many tests will it take to reach Reserve status? 
// How many to reach Accepted? Remember, scores cannot exceed 100%.
// Tip: Rather than adding one score at a time, could you use a loop?