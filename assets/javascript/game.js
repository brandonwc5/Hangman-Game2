alert("The category is Presidents");

//set up my variables
var word = ["WASHINGTON", "ADAMS", "LINCOLN", "OBAMA", "BUSH", "KENNEDY", "POLK", "CARTER", "BUCHANNAN", "MADISON", "JACKSON"];
var currWord = Math.floor(Math.random()*word.length);
var answer = word[currWord];
var currEvent = "";
var guessesLeft= 7;
var correctGuessArray= [];
var incorrectGuessArray= [];
var blank = "__&nbsp;";
var winCount = 0;
var lossCount = 0;

function reset(){
	currWord = Math.floor(Math.random()*word.length);
	guessesLeft= 7;
	correctGuessArray= [];
	incorrectGuessArray= [];
	blank = "__&nbsp;";
	answer = word[currWord];
	document.getElementById("correctGuess").innerHTML = correctGuessArray;

	for(i=0; i<answer.length;i++){
		correctGuessArray.push(blank);
		console.log(answer);
	}
}
//add event listener
document.addEventListener("keypress", game);

console.log(answer);

//create a blank space in an array for every letter in answer
for(i=0; i<answer.length;i++){
	correctGuessArray.push(blank);
}

function game(e){
	//make user guess uppercase and don't let them use non-letters
	var userLetter = e.key.toUpperCase();
	userLetter = userLetter.replace(/[^A-Za-z]+$/, '');

	//move user guess to correct/incorrect areas
	if(answer.indexOf(userLetter)>-1){
		for(i=0; i<answer.length; i++){
			if(userLetter == answer[i]){
				correctGuessArray[i] = userLetter;
				document.getElementById("correctGuess").innerHTML = correctGuessArray.join("");
			}
		}
	} else {
		//Push incorrect letter to corresponding array only if it is not in that array already
		while(incorrectGuessArray.indexOf(userLetter)<0) {
			incorrectGuessArray.push(userLetter); 
			document.getElementById("wrong").innerHTML = incorrectGuessArray.join("");
			guessesLeft--;
			document.getElementById("guesses").innerHTML = guessesLeft;
		}
	}
	if(correctGuessArray.join("") == answer){
		winCount++;
		document.getElementById("winCount").innerHTML = winCount;
		reset();
		alert("You win! Press any letter for a new game!");
	};

	if(incorrectGuessArray.length == 7){
		lossCount++;
		document.getElementById("lossCount").innerHTML = lossCount;
		reset();
 		alert("You Lose! Press any letter for a new game!");
 	}
 }