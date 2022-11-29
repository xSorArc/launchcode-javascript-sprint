// UNIT TESTING PRACTICE YIKES!!!
const solution = require("../assignments/candidate-testing.js");

describe("Candidate Testing solution", function() {
   
    // PART 1
    it("candidateName is a string", function() {
        expect(typeof solution.candidateName).toBe("string");
    })

    // Test question is a string
    it("question is a string", function() {
        expect(typeof solution.question).toBe("string");
    })

    // Test question asks the right question
    it("question asks the right question", function() {
        expect(solution.question).toBe("Who was the first American woman in space? ");
    })

    // Test correctAnswer is a string
    it("correctAnswer is a string", function() {
        expect(typeof solution.correctAnswer).toBe("string");
    })

    // Test correctAnswer gives the correct answer
    it("correctAnswer gives the correct", function() {
        expect(solution.correctAnswer).toBe("Sally Ride");
    })

    // Test candidateAnswer is a string
    it("candidateAnswer is a string", function() {
        expect(typeof solution.candidateAnswer).toBe("string");
    })

    // Part 2
    // Test questions contain 5 questions
    it("questions contain 5 questions", function() {
        expect(solution.questions.length).toBe(5);
    })

    // Test questions contain the provided questions with trailing spaces
    it("questions contain the provided questions with trailing spaces", function() {
        // LC Testing uses ".toContain()" instead of checking each index.
        expect(solution.questions[0]).toBe("Who was the first American woman in space? ");
        expect(solution.questions[1]).toBe("True or false: 5 kilometer == 5000 meters? ");
        expect(solution.questions[2]).toBe("(5 + 3)/2 * 10 = ? ");
        expect(solution.questions[3]).toBe("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
        expect(solution.questions[4]).toBe("What is the minimum crew size for the ISS? ");
    })

    // Test correctAnswers contains 5 answers
    it("correctAnswers contain 5 questions", function() {
        expect(solution.correctAnswers.length).toBe(5);
    })

    // Test correctAnswers gives the correct answers
    it("correctAnswers gives the correct answers", function() {
        // LC Testing uses ".toContain()" instead of checking each index.
        expect(solution.correctAnswers[0]).toBe("Sally Ride");
        expect(solution.correctAnswers[1]).toBe("true");
        expect(solution.correctAnswers[2]).toBe("40");
        expect(solution.correctAnswers[3]).toBe("Trajectory");
        expect(solution.correctAnswers[4]).toBe("3");
    })

    // PART 3 
    // Test gradeQuiz returns a 0 for all wrong answers
    it("gradeQuiz returns a 0 for all wrong answers", function() {
        candidateAnswers = ["1", "2", "3", "4", "5"];
        expect(solution.gradeQuiz(candidateAnswers)).toBe(0);
    })

    // Test gradeQuiz returns 100 for all correct answers
    it("gradeQuiz returns 100 for all correct answers", function() {
        candidateAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
        expect(solution.gradeQuiz(candidateAnswers)).toBe(100);
    })

    // Test gradeQuiz returns 20 for a single correct answer
    it("gradeQuiz returns 20 for a single correct answer", function() {
        candidateAnswers = ["Sally Ride", "2", "3", "4", "5"];
        expect(solution.gradeQuiz(candidateAnswers)).toBe(20);
    })

    // Test gradeQuiz returns 40 for two correct answers
    it("gradeQuiz returns 40 for two correct answers", function() {
        candidateAnswers = ["Sally Ride", "true", "3", "4", "5"];
        expect(solution.gradeQuiz(candidateAnswers)).toBe(40);
    })

    // Test gradeQuiz returns 60 for three correct answers
    it("gradeQuiz returns 60 for three correct answers", function() {
        candidateAnswers = ["Sally Ride", "true", "40", "4", "5"];
        expect(solution.gradeQuiz(candidateAnswers)).toBe(60);
    })

    // Test gradeQuiz returns 80 for four correct answers
    it("gradeQuiz returns 80 for four correct answers", function() {
        candidateAnswers = ["Sally Ride", "true", "40", "4", "3"];
        expect(solution.gradeQuiz(candidateAnswers)).toBe(80);
    })

    // Test gradeQuiz is case insensitive
    it("gradeQuiz is case insensitive", function() {
        candidateAnswers = ["sally riDe", "TrUe", "40", "TrAjEctOry", "3"];
        expect(solution.gradeQuiz(candidateAnswers)).toBe(100);
    })
})