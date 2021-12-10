// Brief the user about the game;
alert("Rock, paper, scissors!")
// // Make a variable that prompt the user for an answer;
let userInput = prompt("Rock, paper or scissors?");
userInput = userInput.toLowerCase;
// Make a variable or a function that randomly chooses between rock, paper and scissors;
let handSigns = ['rock', 'paper', 'scissors'];
let compInput = handSigns[Math.floor(Math.random()*handSigns.length)];
// Compare the user's variable with the computer's variable;

// Output the result based on the comparison;