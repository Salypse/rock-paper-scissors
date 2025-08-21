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
        updatePlayerScore(playerScore)
        console.log("You win!")
    }
    else {
        computerScore++
        updateComputerScore(computerScore)
        console.log("Computer wins!")
    }
}

function updatePlayerScore(playerScore) {
    playerScoreText = document.querySelector(".playerScore");
    playerScoreText.textContent = `Player Score: ${playerScore}`;
}

function updateComputerScore(computerScore) {
    computerScoreText = document.querySelector(".computerScore");
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
}

const playerRockButton = document.querySelector("#playerRockButton");
playerRockButton.addEventListener("click", function (e) {
    playRound("rock", getComputerChoice())
})

const playerPaperButton = document.querySelector("#playerPaperButton");
playerPaperButton.addEventListener("click", function (e) {
    playRound("paper", getComputerChoice())
})

const playerScissorsButton = document.querySelector("#playerScissorsButton");
playerScissorsButton.addEventListener("click", function (e) {
    playRound("scissors", getComputerChoice())
})