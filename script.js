// Brief the user about the game;
alert("Rock, paper, scissors!")
// // Make a variable that prompt the user for an answer;
let userInput = prompt("Rock, paper or scissors?");
userInput = userInput.toLowerCase();
// Make a variable or a function that randomly chooses between rock, paper and scissors;
let handSigns = ['rock', 'paper', 'scissors'];
let compInput = handSigns[Math.floor(Math.random()*handSigns.length)];
// Compare the user's variable with the computer's variable;
if (userInput != "rock" && userInput != "paper" && userInput != "scissors") {
    alert ("Please check your answer!");
} else if (userInput === compInput) {
    alert(`Computer plays ${compInput}`);
    alert("It is a draw");
} else if (userInput === "rock" && compInput === "scissors" || userInput === "scissors" && compInput === "paper" || userInput === "paper" && compInput === "rock") {
    alert(`Computer plays ${compInput}`);
    alert(`You win, ${userInput} beats ${compInput}!` );
} else {
    alert(`Computer plays ${compInput}`);
    alert(`You lose, ${compInput} beats ${userInput}!`)
}

// Output the result based on the comparison;