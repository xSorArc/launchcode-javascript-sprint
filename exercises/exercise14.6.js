// 14.6 EXERCISES: Unit Testing
function checkFive(num){
    let result = '';
    if (num < 5){
       result = num + " is less than 5.";
    } else if (num === 5){
       result = num + " is equal to 5.";
    } else {
       result = num + " is greater than 5.";
    }
 
    return result;
 }

//  console.log(checkFive(3));

function whoWon(player1,player2){

   if (player1 === player2){
      return 'TIE!';
   }

   if (player1 === 'rock' && player2 === 'paper'){
      return 'Player 2 wins!';
   }

   if (player1 === 'paper' && player2 === 'scissors'){
      return 'Player 2 wins!';
   }

   if (player1 === 'scissors' && player2 === 'rock'){
      return 'Player 2 wins!';
   }

   return 'Player 1 wins!';
}

 module.exports = {
    checkFive: checkFive,
    whoWon: whoWon
 }