alert("The category is Presidents");

//set up my variables
var word = ["WASHINGTON", "ADAMS", "LINCOLN", "OBAMA", "BUSH", "KENNEDY", "POLK", "CARTER", "BUCHANNAN", "MADISON", "JACKSON"];
var currWord = Math.floor(Math.random()*word.length);
var currEvent = "";
var guessesLeft= 7;
var correctGuessArray= [];
var incorrectGuessArray= [];
var blank = "__&nbsp;";
var winCount = 0;

//add event listener
document.addEventListener("keypress", game);

var answer = word[currWord];

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
			function what(){
				document.getElementById("guesses").innerHTML = guessesLeft;
				};
			what();
		}
	}
	if(correctGuessArray.join("") == answer){
		alert("You win!");
		document.location.reload();
 	}

	if(incorrectGuessArray.length == 7){
 		alert("You Lose!");
 		document.location.reload();
 	}
 }