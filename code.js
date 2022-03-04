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

let playerWin = 0;
let compWin = 0;

function gamePlay(select) {
    let playerSelection = select;
    let computerSelection = computerPlay();
    
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log("You chose: " + playerSelection);
    console.log("The computer chose: " + computerSelection);

    if(playerSelection == computerSelection) {
        console.log("You Tied! " + playerSelection + " is the same as " + computerSelection);
        console.log("Player Wins: " + playerWin);
        console.log("Computer Wins: " + compWin);

        const prevText = document.querySelectorAll('.created');
        prevText.forEach(created => {
            created.remove();
        });

        let text = document.createElement('h2');
        text.innerHTML = "You Tied! " + playerSelection + " is the same as " + computerSelection;
        text.className = "created";

        let player = document.createElement('h3');
        player.innerHTML = "Your Score: " + playerWin;
        player.className = "created";

        let comp = document.createElement('h3');
        comp.innerHTML = "Computer's Score: " + compWin;
        comp.className = "created";

        let box = document.getElementById("finalText");
        box.appendChild(text);
        box.appendChild(player);
        box.appendChild(comp);
        
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You Lost! " + computerSelection + " beats " + playerSelection);
        compWin++;
        console.log("Player Wins: " + playerWin);
        console.log("Computer Wins: " + compWin);

        const prevText = document.querySelectorAll('.created');
        prevText.forEach(created => {
            created.remove();
        });

        let text = document.createElement('h2');
        text.innerHTML = "You Lost! " + computerSelection + " beats " + playerSelection;
        text.className = "created";

        let player = document.createElement('h3');
        player.innerHTML = "Your Score: " + playerWin;
        player.className = "created";

        let comp = document.createElement('h3');
        comp.innerHTML = "Computer's Score: " + compWin;
        comp.className = "created";

        let box = document.getElementById("finalText");
        box.appendChild(text);
        box.appendChild(player);
        box.appendChild(comp);
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You Lost! " + computerSelection + " beats " + playerSelection);
        compWin++;
        console.log("Player Wins: " + playerWin);
        console.log("Computer Wins: " + compWin);

        const prevText = document.querySelectorAll('.created');
        prevText.forEach(created => {
            created.remove();
        });

        let text = document.createElement('h2');
        text.innerHTML = "You Lost! " + computerSelection + " beats " + playerSelection;
        text.className = "created";

        let player = document.createElement('h3');
        player.innerHTML = "Your Score: " + playerWin;
        player.className = "created";

        let comp = document.createElement('h3');
        comp.innerHTML = "Computer's Score: " + compWin;
        comp.className = "created";

        let box = document.getElementById("finalText");
        box.appendChild(text);
        box.appendChild(player);
        box.appendChild(comp);
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You Lost! " + computerSelection + " beats " + playerSelection);
        compWin++;
        console.log("Player Wins: " + playerWin);
        console.log("Computer Wins: " + compWin);

        const prevText = document.querySelectorAll('.created');
        prevText.forEach(created => {
            created.remove();
        });

        let text = document.createElement('h2');
        text.innerHTML = "You Lost! " + computerSelection + " beats " + playerSelection;
        text.className = "created";

        let player = document.createElement('h3');
        player.innerHTML = "Your Score: " + playerWin;
        player.className = "created";

        let comp = document.createElement('h3');
        comp.innerHTML = "Computer's Score: " + compWin;
        comp.className = "created";

        let box = document.getElementById("finalText");
        box.appendChild(text);
        box.appendChild(player);
        box.appendChild(comp);
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        playerWin++;
        console.log("Player Wins: " + playerWin);
        console.log("Computer Wins: " + compWin);

        const prevText = document.querySelectorAll('.created');
        prevText.forEach(created => {
            created.remove();
        });

        let text = document.createElement('h2');
        text.innerHTML = "You Win! " + playerSelection + " beats " + computerSelection;
        text.className = "created";

        let player = document.createElement('h3');
        player.innerHTML = "Your Score: " + playerWin;
        player.className = "created";

        let comp = document.createElement('h3');
        comp.innerHTML = "Computer's Score: " + compWin;
        comp.className = "created";

        let box = document.getElementById("finalText");
        box.appendChild(text);
        box.appendChild(player);
        box.appendChild(comp);
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        playerWin++;
        console.log("Player Wins: " + playerWin);
        console.log("Computer Wins: " + compWin);

        const prevText = document.querySelectorAll('.created');
        prevText.forEach(created => {
            created.remove();
        });

        let text = document.createElement('h2');
        text.innerHTML = "You Win! " + playerSelection + " beats " + computerSelection;
        text.className = "created";

        let player = document.createElement('h3');
        player.innerHTML = "Your Score: " + playerWin;
        player.className = "created";

        let comp = document.createElement('h3');
        comp.innerHTML = "Computer's Score: " + compWin;
        comp.className = "created";

        let box = document.getElementById("finalText");
        box.appendChild(text);
        box.appendChild(player);
        box.appendChild(comp);
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        playerWin++;
        console.log("Player Wins: " + playerWin);
        console.log("Computer Wins: " + compWin);

        const prevText = document.querySelectorAll('.created');
        prevText.forEach(created => {
            created.remove();
        });

        let text = document.createElement('h2');
        text.innerHTML = "You Win! " + playerSelection + " beats " + computerSelection;
        text.className = "created";

        let player = document.createElement('h3');
        player.innerHTML = "Your Score: " + playerWin;
        player.className = "created";

        let comp = document.createElement('h3');
        comp.innerHTML = "Computer's Score: " + compWin;
        comp.className = "created";

        let box = document.getElementById("finalText");
        box.appendChild(text);
        box.appendChild(player);
        box.appendChild(comp);
    }
}