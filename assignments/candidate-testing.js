// ASSIGNMENT #1: Candidate Testing
// OK, staff, we received many applications for our astronaut training program, and we need to do an initial evaluation of the candidates. 
// Management needs you to create a quick quiz to help select the best candidates.

// Requirements
// 1. Ask the candidate (user) to enter their name
// 2. Use a loop to ask five questions, one at a time, to the candidate
// 3. Collect the candidate's answers
// 4. Check those answers for accuracy (case insensitive equality check)
// 5. Calculate the candidate's overall percentage
// 6. Determine if the candidate did well enough to enter our program (need >= 80% to pass)
// 7. Display the results.

// Take It Step by Step
// When starting any project, it's best to approach it as a series of smaller, testable parts. The goal is to get simple parts working first 
// and then expand the code in a systematic way. The following is NOT the only way to complete this assignment, but it provides a framework 
// for thinking through the project.

// Part 1: Minimum Viable Quiz
// 1.1 candidateName
// a. Ask for the candidate's name. Look for TODO 1.1a in the starter code. On the line below this TODO comment, define a variable called 
//    candidateName with an initial value of the empty string.
// b. Inside of the function askForName(), write code asking the user to enter their name into the program and store the value as candidateName.
// c. Look for TODO 1.1c. Underneath it, write a message to the console greeting the user using the name they just provided.
const prompt = require("prompt-sync") ({sigint: true});
const question = "Who was the first American woman in space? ";
const correctAnswer = "Sally Ride";
const questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
const correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateName = "";                                                      
let candidateAnswer = "";
let candidateAnswers = [];

function askForName() {
    let input = prompt("Please enter your name: ");                       
    candidateName = input;                                                   

    return candidateName;
}

// 1.2 Single Question Quiz
// a. Ask the user to answer a single quiz question. Define variables called question, correctAnswer, and candidateAnswer.
//    question should be initialized to the following string: "Who was the first American woman in space? ".

//                  TIP: Note the trailing space at the end of this string is required.
//                  correctAnswer should be initialized to "Sally Ride".
//                  candidateAnswer will initially be set to the empty string.

// b. Find TODO 1.2b. Using your question variable, display the question and prompt the candidate for their answer. Store their response in one 
//    of the variables you defined just above.
// c. Under TODO 1.2c, check the candidate's answer to see if it is correct. Provide basic feedback to the candidate, letting them know if their 
//    answer is correct or not.
function askQuestions() {
    let multiInput;

    for (let i = 0; i < questions.length; i++) { 
        multiInput = prompt(questions[i]);
        candidateAnswers.push(multiInput);
    }
}

// NOTE: Make sure your small app works properly before moving on to part 2.

// Part 2: Multiple Questions
// Now that your small app is working, expand it to deal with multiple questions. This time, you only have one TODO item in the starter code. 
// You will need to determine which lines need to be modified.
// 1. Define questions and correctAnswers variables as arrays. Use the table below to fill these arrays.
// 2. Replace your code from TODO 1.2b with a loop that programmatically asks each question in the array and stores the user's responses.
// 3. Replace the feedback from TODO 1.2c with a TL that displays each of the candidate's responses in addition to corresponding correct answers.

// Question	                                                                                        Answer
// Who was the first American woman in space?	                                                "Sally Ride"
// True or false: 5 kilometer == 5000 meters?	                                                "true"
// (5 + 3)/2 * 10 = ?	                                                                        "40"
// Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?	                "Trajectory"
// What is the minimum crew size for the ISS?	                                                "3"

// WARNING: Keep the questions and correct answers stored in this exact order.

// Part 3: Grade the Quiz
// Finally, calculate the candidate's score and print the results. There are no TODOs in this section, just be sure to only modify code that you 
// have written, or add code. Don't remove anything in the file that you haven't written. Doing so may cause your program to behave unexpectedly 
// and we might not be able to grade it!
function gradeQuiz(candidateAnswers) {
    let grade = 0;
    let status;

    console.log(`\nCandidate Name: ${candidateName}`);
    for (let i = 0; i < candidateAnswers.length; i++) {
        console.log(`${i+1}) ${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`);

        if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {                                  
        grade += 1;
        }
    }
    let result = grade / questions.length * 100;

    if (result >= 80) {
        status = "PASS";
    } else {
        status = "FAIL";
    }
    console.log(`>>> Overall Grade: ${result}% (${grade} of ${questions.length} responses correct) <<<\n>>> Status: ${status} <<< `)
    return result;
}
// Your task here is to:
// 1. Compare the candidate answers with the correct answers,
// 2. Calculate the candidate's score as a percentage,
// 3. Convey to the candidate if they have passed the quiz with an 80% or if they have failed.

// TIP: Checking for the correct answer should be case insensitive (e.g. "Orbit" is the same as "orbit").
// TIP: Somewhere below TODO 1.2c you should see a variable declaration for grade. Use this to calculate the candidate's score.
// TIP: To calculate the candidate's percentage, use the equation: (Number of Correct Answers) / (Number of Quiz Questions) * 100
function runProgram() {
    askForName();

    console.log(`Greetings, ${candidateName}!\n`);

    askQuestions();
    gradeQuiz(candidateAnswers);
}

runProgram();

module.exports = {
    candidateName: candidateName,
    question: question,
    correctAnswer: correctAnswer,
    candidateAnswer: candidateAnswer,
    questions: questions,
    correctAnswers: correctAnswers,
    candidateAnswers: candidateAnswers,
    gradeQuiz: gradeQuiz,
    runProgram: runProgram
}