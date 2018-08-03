var words = ["marth", "fox", "captain falcon", "jigglypuff", "falco", "sheik", "ice climbers", "peach", "luigi", "mario", "ganondorf", "dr mario", "mewtwo"];
var images = []
var wins = 0;
var losses = 0;
var guessesLeft = 7;
var guesses = [];


document.onkeyup = function(event){

    var computerGuess = function(array){
        return array[(Math.floor(Math.random() * array.length))];
    };

}
