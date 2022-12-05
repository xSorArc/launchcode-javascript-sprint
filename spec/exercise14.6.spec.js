const solution = require("../exercises/exercise14.6.js");

describe("Chapter14 Exercises solution", () => {

    // num is less than 5
    it("returns 'num is less than 5' when num < 5.", () => {
        expect(solution.checkFive(3)).toEqual("3 is less than 5.");
    })

    // num is greater than 5
    it("returns 'num is greater than 5' when num > 5.", () => {
        expect(solution.checkFive(7)).toEqual("7 is greater than 5.");
    })

    // num is equal to 5
    it("returns 'num is equal to 5' when num < 5.", () => {
        expect(solution.checkFive(5)).toEqual("5 is equal to 5.");
    })

    ////////////////////////////////////////////////////////////////

    //players tie
    it("returns 'TIE! when player1 and player2 are the same", () => {
        expect(solution.whoWon("rock", "rock")).toEqual("TIE!");
    })

    //player2 wins with 'paper'
    it("returns 'Player 2 wins!' when player1 = 'rock' && player2 = 'paper'", () => {
        expect(solution.whoWon("rock", "paper")).toEqual("Player 2 wins!");
    })

    //player2 wins with 'scissors'
    it("returns 'Player 2 wins!' when player1 = 'paper' && player2 = 'scissors'", () => {
        expect(solution.whoWon("paper", "scissors")).toEqual("Player 2 wins!");
    })
    //player2 wins with 'rock'
    it("returns 'Player 2 wins!' when player1 = 'scissors' && player2 = 'rock'", () => {
        expect(solution.whoWon("scissors", "rock")).toEqual("Player 2 wins!");
    })
});