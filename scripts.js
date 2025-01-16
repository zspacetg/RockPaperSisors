"use strict";
// set the score and variables
let humanScore = 0,
    computerScore = 0,
    humanChoice,
    computerChoice;

//gets human choice
function getHumanChoice() {
    humanChoice = prompt("Draw rock, paper or scissors")
    return humanChoice
}

//generate computer choice
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


//function to start the road getting both choices
function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        return "Computer wins this round!";
    } else {
        humanScore++;
        return "Human wins this round!";
    }
}



//Function to play the game
function playGame() {

    for (let i = 0; i <= 5; i++) {
        //recalls functions and assign them to variables
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        //starts the round
        playRound(humanSelection, computerSelection);

        //Checks the winner of the game
        if (i === 5 && computerScore > humanScore) {
            return "Computer wins the game!";
        } else if (i === 5 && humanScore > computerScore) {
            return "Human wins the game!";
        } else { }

    }

}

playGame();
