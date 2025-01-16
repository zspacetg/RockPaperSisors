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
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}`)
        console.log("It's a tie!");
    } else if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}`)
        console.log("Computer wins this round!");
    } else {
        humanScore++;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}`)
        console.log("You win this round!");
    }
}



//Function to play the game
function playGame() {

    let i;

    for (i = 0; i < 5; i++) {
        //logs the current score
        console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);

        //Assign functions to variables and calls them every time a round starts
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        //starts the round
        playRound(humanSelection, computerSelection);

    }

    //Checks the winner of the game


    if (i === 5 && computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else if (i === 5 && humanScore > computerScore) {
        console.log("Human wins the game!");
    } else {
        console.log("It's a tie!");
    }


}

