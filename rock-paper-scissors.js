//function for computer to pick the three choices "rock,paper,scissors" randomly
function getComputerChoice() {
    let comp = Math.floor(Math.random() * 3) + 1;

    if (comp === 1){
        return "rock";
        
    } else if (comp === 2){
        return "paper";
    } else {
         return "scissors";
    }
    
}


//function to get human input
function getHumanChoice() { 
    const userChoice = prompt("Rock, Paper , Scissors?");
    return userChoice.toLocaleLowerCase();
}

function playGame() {
    // Declare score variables inside playGame
    let humanScore = 0;
    let computerScore = 0;

    // Define playRound inside playGame
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            return "Human wins!";
        } else {
            return "Computer wins!";
        }
    }

    // Loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice); // Run playRound and get the result
        // Log each round's choices and result
        console.log(`Round ${i + 1}`);
        console.log("Human chose:", humanChoice);
        console.log("Computer chose:", computerChoice);
        console.log("Result:", result);

        // Update scores based on result
        if (result === "Human wins!") {
            humanScore += 1;
        } else if (result === "Computer wins!") {
            computerScore += 1;
        }

        console.log(`Round ${i + 1}: ${result}`);
    }

    // Declare overall winner after 5 rounds
    if (computerScore > humanScore) {
        console.log("You lose the game.");
    } else if (computerScore < humanScore) {
        console.log("You win the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();



