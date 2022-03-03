function computerPlay() {
    let selection = Math.round(Math.random() * 2);
    
    if(selection == 0) {
        return "Rock";
    }
    else if (selection == 1) {
        return "Paper";
    }
    else if (selection == 2) {
        return "Scissors";
    }
}

function gameLoop() {

    let playerWin = 0;
    let compWin = 0;

    for(let i = 0; i < 5; i++) {
        let winner = gamePlay();

        if(winner == 1) 
        {
            compWin++;
            console.log("Player Wins: " + playerWin);
            console.log("Computer Wins: " + compWin);
        }
        else if(winner == 2) 
        {
            playerWin++;
            console.log("Player Wins: " + playerWin);
            console.log("Computer Wins: " + compWin);
        }
        else if(winner == 0) {
            console.log("Player Wins: " + playerWin);
            console.log("Computer Wins: " + compWin);
        }
    }
}

function gamePlay() {
    let playerSelection = prompt("Make your selection of Rock, Paper, or Scissors: ");
    let computerSelection = computerPlay();
    
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log("You chose: " + playerSelection);
    console.log("The computer chose: " + computerSelection);

    if(playerSelection == computerSelection) {
        console.log("You Tied! " + playerSelection + " is the same as " + computerSelection);
        return 0;
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You Lost! " + computerSelection + " beats " + playerSelection);
        return 1;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You Lost! " + computerSelection + " beats " + playerSelection);
        return 1;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You Lost! " + computerSelection + " beats " + playerSelection);
        return 1;
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        return 2;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        return 2;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        return 2;
    }
}

gameLoop();
console.log("Game Ended, refresh to play again!");