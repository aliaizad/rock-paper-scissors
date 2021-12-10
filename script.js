
// Write a function that randomly chooses between rock, paper and scissors;
function computerPlay () {
    let handSigns = ['rock', 'paper', 'scissors'];
    let computerSelection = handSigns[Math.floor(Math.random()*handSigns.length)];
    return computerSelection;
}
// Write a function that compares the player's hand and the computer's hand && also outputs the result.
function playRound () {
    playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return ("Please check your input!");
    } else if (playerSelection === computerSelection) {
        return(`Computer plays ${computerSelection}. It is a draw`);
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return(`Computer plays ${computerSelection}. You win, ${playerSelection} beats ${computerSelection}!`);
    } else {
        return(`Computer plays ${computerSelection}. You lose, ${computerSelection} beats ${playerSelection}!`);
    }    
}
//write a function that plays the game five times.
function game() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
}