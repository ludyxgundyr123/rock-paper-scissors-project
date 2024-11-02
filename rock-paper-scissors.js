//function for computer to pick the three choices "rock,paper,scissors" randomly
function getComputerChoice() {
    let comp = Math.floor(Math.random() * 3) + 1;

    if (comp === 1){
        return "Rock";
        
    } else if (comp === 2){
        return "Paper";
    } else {
         return "Scissors";
    }
    
}


//function to get human input
function getHumanChoice() { 
    const userChoice = prompt("Rock, Paper , Scissors?");
    return userChoice.toLocaleLowerCase();
}



let humanScore = 0;
let computerScore = 0;

//function to pit the humanchoice and computerchoice against each other to determine the winner
function playRound(humanChoice,computerChoice){
    

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
//store result of function playround() in variable result
let result = playRound(humanSelection,computerSelection);
//algorithm to increment human score and computer score based on value of result
if (result === "Human wins!" ){
    humanScore += 1;
}else if (result === "Computer wins!" ){
    computerScore += 1;
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Human chose:", humanSelection);
console.log("Computer chose:", computerSelection);
console.log(playRound(humanSelection, computerSelection));
console.log(playRound(humanSelection,computerSelection));




