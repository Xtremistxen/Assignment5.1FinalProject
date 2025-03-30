function RPS()
{
    var player1 = Math.ceil(Math.random() *4)
    // This will generate a random number 1-4
    var player2 = Math.ceil(Math.random() *4)
    var player3 = Math.ceil(Math.random() *4)
    var player4 = Math.ceil(Math.random() *4)

    var rockImg = "Images/Rock.jpg";
    var paperImg = "Images/Paper.jpg";
    var scissorsImg = "Images/Scissors.jpg";
    var ringImg = "Images/Ring.jpg"; // Added the ring the ultimate weapon looses over everything

    
    // This Helper function is alot better than my previous repetitive code I had before allowing me to assignImage to the players much cleaner form of code
    function assignImage(player, playerImgElementId) 
    {
      if (player == 1) 
         {
          document.getElementById(playerImgElementId).src = rockImg;
         }  
      else if (player == 2) 
         {
          document.getElementById(playerImgElementId).src = paperImg;
         } 
      else if (player == 3) 
         {
          document.getElementById(playerImgElementId).src = scissorsImg;
         } 
      else if (player == 4) 
         {
          document.getElementById(playerImgElementId).src = ringImg;
         }
  }

  assignImage(player1, "Player1img");
  assignImage(player2, "Player2img");
  assignImage(player3, "Player3img");
  assignImage(player4, "Player4img");

function checkWinner(playerA, playerB) // This will check for a tie with same img
{
  // New rule that the ring looses to everything since it always gets away
  if (playerA === 4)
  {
   return 2; // PlayerA otherwords will loose and playerB will win
  }
  else if (playerB === 4)
  {
    return 1; // Opposite of above
  }

  // This is the normal rock, paper scissors rules
  if ((playerA === 1 && playerB === 3) 
  || (playerA === 2 && playerB === 1) 
  || (playerA === 3 && playerB === 2))
  {
   return 1;
  }

  return 2;
}
 // This will determine the winners
var winners = [];


  // Since we now have more than two players we needed a way to check which player wins between the 1-4 players
  // This will check player 1 vs player 2 and so on with the list below
  if (checkWinner(player1, player2) === 1) winners.push("Player 1");
  else if (checkWinner(player1, player2) === 2) winners.push("Player 2");

  if (checkWinner(player1, player3) === 1) winners.push("Player 1");
  else if (checkWinner(player1, player3) === 2) winners.push("Player 3");

  if (checkWinner(player1, player4) === 1) winners.push("Player 1");
  else if (checkWinner(player1, player4) === 2) winners.push("Player 4");

  if (checkWinner(player2, player3) === 1) winners.push("Player 2");
  else if (checkWinner(player2, player3) === 2) winners.push("Player 3");

  if (checkWinner(player2, player4) === 1) winners.push("Player 2");
  else if (checkWinner(player2, player4) === 2) winners.push("Player 4");

  if (checkWinner(player3, player4) === 1) winners.push("Player 3");
  else if (checkWinner(player3, player4) === 2) winners.push("Player 4");

   // Determine the result message
   var resultMessage = "";

   if (winners.length === 0) {
       resultMessage = "It's a Draw!"; // No winners, all tied
   } else 
   {
    if (winners.length === 1) 
      {
        resultMessage = winners[0] + " Wins!";
      } 
    else 
      {
         resultMessage = winners.join(", ") + " Win!";
      }
   }

   // Display the final result
   document.getElementById("finalResult").innerHTML = resultMessage;
}
