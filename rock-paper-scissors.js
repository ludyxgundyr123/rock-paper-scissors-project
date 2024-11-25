const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.querySelector('.result p');
const humanScoreDisplay = document.querySelector('.human-score p');
const compScoreDisplay = document.querySelector('.comp-score p');

let humanScore = 0;
let computerScore = 0;

// Add event listeners to buttons
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

// Function for computer to randomly pick rock, paper, or scissors
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play one round of the game
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result;

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        result = "Human wins!";
        humanScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    // Update the DOM
    resultDisplay.textContent = result;
    humanScoreDisplay.textContent = `Human: ${humanScore}`;
    compScoreDisplay.textContent = `Computer: ${computerScore}`;

    // Check for game over
    if (humanScore === 5 || computerScore === 5) {
        resultDisplay.textContent = 
            humanScore === 5 ? "Congratulations, you win!" : "Computer wins the game!";
        disableButtons(); // Stop the game
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}
