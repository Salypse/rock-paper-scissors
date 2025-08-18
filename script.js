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