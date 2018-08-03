var words = ["marth", "fox", "captain falcon", "jigglypuff", "falco", "sheik", "ice climbers", "peach", "luigi", "mario", "ganondorf", "dr mario", "mewtwo", "bowser", "link", "zelda"];
var alphabet = "abcdefghijklmnopqrstuwxyz";

// initialize game variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

// arrays for hangman-styled displays
var blank = []
var images = []

// game object that defines main game functions
var game = {

    CPUGuess: words[(Math.floor(Math.random() * words.length))],

    // computerGuess: function(){
    //     return words[(Math.floor(Math.random() * words.length))];
    // },


    play: function(){
        for(var i = 0; i < this.CPUGuess.length; i++){
            blank.push("__");
        }
        document.getElementById("character").textContent = blank.join(" ");

    },

    restart: function(){
        guessesLeft = 9;
        guesses = [];
        wins = 0;
        losses = 0;
    }

};

game.play();

document.onkeyup = function(event){
    guess = event.key.toLowerCase();
    if(alphabet.indexOf(guess) > -1)
    {
        var winner = false;

        //minor test case to view the console's interpretation of computerGuess
        console.log(game.CPUGuess);

        if(guesses.includes(guess)){
            document.getElementById("message").textContent = "You've already guessed that letter!";

        }
        else if(game.CPUGuess.includes(guess)){
            guesses.push(guess);  
            guessesLeft--;
            
            document.getElementById("lettersString").textContent = guesses.join(", ");
            document.getElementById("guessesLeftString").textContent = guessesLeft;

        }
        else{
            guesses.push(guess);  
            guessesLeft--;
            document.getElementById("message").textContent = "You've already guessed that letter!";
        }
    }

    // alert user to stay within the bounds of the game
    else{
        alert("Type a letter to guess the word!");
    }
};
