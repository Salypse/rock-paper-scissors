//Randomly choose rps option for the computer
function getComputerChoice() {
    let computerChoice = Math.random()

    if (computerChoice < 0.33) {
        return "rock"
    }
    else if (computerChoice < 0.66) {
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
        return console.log("Draw")
    }
    else if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper"
    ) {
        playerScore++
        console.log("You win!")
    }
    else {
        computerScore++
        console.log("Computer wins!")
    }
}


//Player and computer get new choices after each round
function makeNewChoice() {
    playerChoice = getPlayerChoice()
    computerChoice = getComputerChoice()
}


//let playerChoice = getPlayerChoice()
//let computerChoice = getComputerChoice()

//Play full game of rps or 5 rounds 
function playGame() {
}

playGame()