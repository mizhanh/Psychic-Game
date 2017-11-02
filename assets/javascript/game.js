//Declare variables
// ====================================================
var wins= 0;
var losses= 0;
//var userGuess;
var lives = 5;
var remainLives = 0;
var letter;
var wrongLetter = [];
var computerPick = null;

//list of letters
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var choiceIndex = 0;

//=======================================================

//Functions
//========================================================
function selectLetter() {
	//Coomputer select a letter from list
	var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];	
		console.log(computerPick);
	if (choiceIndex <= (computerChoices.length -1)) {
		  letter = computerPick;
	}
}

function updateScore() {
	document.querySelector("#wins").innerHTML = "Wins: " + wins;
	document.querySelector("#losses").innerHTML = "Losses: " + losses;	
}

function livesRemain() {
	remainLives = lives;
	document.querySelector("#remainingLives").innerHTML = "Remaining Lives: " + remainLives;
    document.querySelector("#guessedLetters").innerHTML = "Guessed Letters so far: " + wrongLetter;
}

function reset() {
	lives = 5;
	wrongLetter = [];
	livesRemain();
	selectLetter();
}

//========================================================

//Start game
//========================================================

selectLetter();
updateScore();
livesRemain();

document.onkeyup = function(event) {
	 
	 var userGuess = event.key;
	 	livesRemain();

	if (userGuess === letter && lives >= 0) {
		wins++;
		alert("You Win! Let's play again!");
		reset();		
				
	} else if (userGuess !== computerPick && lives > 0) {
			wrongLetter.push(userGuess);
			lives--;
			remainLives = lives;
			livesRemain();
		
			if (lives == 0) {
				losses++;
				alert("Sorry you loss! Let's play again!");	
				reset();				
			}
		updateScore();
    }	
};

		
		
			
