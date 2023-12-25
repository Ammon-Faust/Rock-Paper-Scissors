//Computer's random choice for game
        function getComputerChoice() {
            let randomNumber = Math.floor(Math.random() * 3)
            switch (randomNumber) {
                case  0:
                    return 'ROCK'
                case 1:
                    return 'PAPER'
                case 2:
                    return 'SCISSORS'
            }
        }
        //User input for a round with win/lose conditions
        let playerscore = 0;
        let computerscore = 0;

        function round(playerSelection, computerSelection) {
            console.log(playerSelection, computerSelection)
            if (playerSelection === computerSelection) {
                return `It's A Tie`;
            }
            if (
                (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
                (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
                (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
            ) {
                playerscore ++;
                return 'You Win';
            }
            if (
                (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
                (computerSelection === 'PAPER' && playerSelection=== 'ROCK') ||
                (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
            ) {
                computerscore ++;
                return 'You Lose';
            }
        }

        //Scoreboard up to 5
        function gamescore() {
            if (playerscore >= 5 && computerscore < 5) {
                console.log("You win!")
            } else {
                console.log("You lose")
            }
        }

        //Game function to add score
        
        /* function game() {
            for (let i = 0; i < 5; i++) {
                const playerSelection = prompt(
                    "Rock, Paper, Or Scissors "
                ).toUpperCase();
                console.log("You choose " + playerSelection);

                if (["ROCK", "PAPER", "SCISSORS"].includes(playerSelection)) {
                    const computerSelection = getComputerChoice();
                    console.log("Computer choose " + computerSelection);
                    console.log(round(playerSelection, computerSelection));
                } else {
                    console.log("Invalid Input, please choose rock, paper or scissors.");
                }
            }

            gamescore();
        }

        game();

        */






const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => round('ROCK'));
paperButton.addEventListener("click", () => round('PAPER'));
scissorsButton.addEventListener("click", () => round('SCISSORS'));
