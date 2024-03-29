


const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const finalResult = document.getElementById("finalResult");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "TIE"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    finalResult.textContent = result;

    switch(result){
        case "YOU WIN":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "Player" : "Computer";
        finalResult.textContent = `Game Over! ${winner} wins!`;
    
        if (confirm("Play again?")) {
          playerScore = 0;
          computerScore = 0;
          playerScoreDisplay.textContent = playerScore;
          computerScoreDisplay.textContent = computerScore;
          finalResult.textContent = "Choose your move!";
        }
      }
    
}
