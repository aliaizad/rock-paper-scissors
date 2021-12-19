
// Write a function that randomly chooses between rock, paper and scissors;
function computerPlay () {
    let handSigns = ['rock', 'paper', 'scissors'];
    let computerSelection = handSigns[Math.floor(Math.random()*handSigns.length)];
    return computerSelection;
}
//write a function that writes the result into the page
function writeResults(inp1, inp2, inp3) {
    round.textContent = `You played ${inp1}, computer played ${inp2}. ${inp3}`;
}
//write a function that alters the DOM based on the scores
function showScore (userScore, compScore) {
    score.textContent = `Your points: ${userScore}\nComputer points: ${compScore}`;
}
// Write a function that compares the player's hand and the computer's hand && also outputs the result.
function playRound () {
    computerSelection = computerPlay();
    let result;
    if (playerSelection === computerSelection) {
        result = 'It is a draw!';
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        result = `You win this round, ${playerSelection} beats ${computerSelection}!`;
        userScore++;
    } else {
        result = `You lose this round, ${computerSelection} beats ${playerSelection}!`;
        compScore++;
    }
    writeResults(playerSelection, computerSelection, result);
    showScore(userScore, compScore);
    if (compScore === 5) {
        outcome.textContent = 'Computer have 5 points, you lose!\nClick any button to start again.';
        userScore = 0;
        compScore = 0;
    } else if (userScore === 5) {
        outcome.textContent = 'You have 5 points, you win!\nClick any button to start again.';
        userScore = 0;
        compScore = 0;
    } 
}

let playerSelection;
let userScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('button');
const round = document.querySelector('#round');
const score = document.querySelector('#score');
const outcome = document.querySelector('#outcome');
buttons.forEach(button => button.addEventListener('click', e => {
    outcome.textContent = '';
    playerSelection = e.target.id;
    playRound();
}));

  

