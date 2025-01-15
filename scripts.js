"use strict";

let humanScore = 0,
    computerScore = 0,
    humanChoice,
    computerChoice;

function getHumanChoice() {
    humanChoice = prompt("Draw rock, paper or scissors")
    return humanChoice
}

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


