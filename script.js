let playerScore = 0
let computerScore = 0
let roundCount = 0

const infoText = document.querySelector(".infoText p")

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

//Play round of rps using player and computer choices
function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        updateInfoText("draw");
    }
    else if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper"
    ) {
        playerScore++
        updatePlayerScore(playerScore);
        updateInfoText("player");
    }
    else {
        computerScore++
        updateComputerScore(computerScore)
        updateInfoText("computer");
    }

    updateChoiceText(playerChoice, computerChoice);
    
    roundCount++;
    if (roundCount >= 5) {
        displayWinner(playerScore, computerScore)
        updatePlayerScore(playerScore = 0);
        updateComputerScore(computerScore = 0);
        roundCount = 0;
    }
}

function updateInfoText(winner) {
    switch (winner) {
        case "draw":
            infoText.textContent = "Draw!"
            break;
        case "player":
            infoText.textContent = "Player wins!"
            break;
        case "computer":
            infoText.textContent = "Computer wins!"
            break;
        default:
            infoText.textContent = "Choose an option to begin the game";
    }
}

function displayWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        infoText.textContent = "Game over. You win!!!"
    }
    else {
        infoText.textContent = "Game over. Computer wins!!!"
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

function updateChoiceText(playerChoice, computerChoice) {
    playerChoiceText = document.querySelector(".playerChoice");4
    computerChoiceText = document.querySelector(".computerChoice");

    playerChoiceText.textContent = `Your Choice: ${playerChoice}`;
    computerChoiceText.textContent = `Computer Choice: ${computerChoice}`;
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