//Randomly choose rps option for the computer
function getComputerChoice() {
    let computerChoice = Math.random()

    if (computerChoice < 0.33) {
        return "rock"
    }
    else if (computerChoice >0.33 && computerChoice < 0.66) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

//Get the players rps choice
function getPlayerChoice() {
    playerInput = prompt("Choose Rock, Paper, or Scissors")
    return playerInput.toLowerCase()
}

let playerScore = 0
let computerScore = 0

//Play round of rps using player and computer choices
function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log("Draw")
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        playerScore += 1
        return console.log("You win!")
    }
    else if (computerChoice == "rock" && playerChoice == "scissors") {
        computerScore += 1
        return console.log("Computer wins!")
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        playerScore += 1
        return console.log("You win!")
    }
    else if (computerChoice == "paper" && playerChoice == "rock") {
        computerScore += 1
        return console.log("Computer wins!")
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        playerScore += 1
        return console.log("You win!")
    }
    else if (computerChoice == "scissors" && playerChoice == "paper") {
        computerScore += 1
        return console.log("Computer wins!")
    }

    finishRound()
}


//Player and computer get new choices after each round
function finishRound() {
    playerChoice = getPlayerChoice()
    computerChoice = getComputerChoice()
}


const playerChoice = getPlayerChoice()
const computerChoice = getComputerChoice()
