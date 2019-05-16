var words = ["marth", "fox", "captainfalcon", "jigglypuff", "falco", "sheik", "iceclimbers", "peach", "luigi", "mario", "ganondorf", "drmario", "mewtwo", "bowser", "link", "zelda", "pikachu"];
var alphabet = "abcdefghijklmnopqrstuwxyz";

// initialize game variables
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guesses = [];
var correctLetters = 0;

// arrays for hangman-styled displays
var blank = []
var images = ["assets/images/marth.png", "assets/images/fox.png", "assets/images/falcon.png", "assets/images/jigglypuff.png", "assets/images/falco.png", "assets/images/sheik.png", "assets/images/iceclimbers.png", "assets/images/peach.png", "assets/images/luigi.png", "assets/images/mario.png", "assets/images/ganondorf.png", "assets/images/drmario.png", "assets/images/mewtwo.png", "assets/images/bowser.jpeg", "assets/images/link.png", "assets/images/zelda.png", "assets/images/pikachu.png"]

// game object that defines main game functions
var game = {

    // property that randomly chooses a word from the list of characters
    CPUGuess: words[(Math.floor(Math.random() * words.length))],

    play: function(){
        guessesLeft = this.CPUGuess.length + 4;
        for(var i = 0; i < this.CPUGuess.length; i++){
            blank.push("__");
        }
        document.getElementById("character").textContent = blank.join(" ");

    },

    update: function(){
        guesses.push(guess);  
        guessesLeft--;
        document.getElementById("lettersString").textContent = guesses.join(", ");
        document.getElementById("guessesLeftString").textContent = guessesLeft;
    },

    restart: function(){
        this.CPUGuess = words[(Math.floor(Math.random() * words.length))];
        guesses = [];
        blank = [];
        wins = 0;
        losses = 0;
        correctLetters = 0;
    }

};

game.play();

document.onkeyup = function(event){
    guess = event.key.toLowerCase();
    if(alphabet.indexOf(guess) > -1)
    {
        //minor test case to view the console's interpretation of computerGuess
        console.log(game.CPUGuess);

        if(correctLetters < game.CPUGuess.length){

            // checks if guess has already been made
            if(guessesLeft === 0){
                losses++;
                document.getElementById("message").textContent = "YOU LOSE!!!";
                document.getElementById("lossesString").textContent = losses;
                $("#char").html("<img id = 'charImage' src = " + images[words.indexOf(game.CPUGuess)]+" alt=" + game.CPUGuess + ">")
                game.restart();
                game.play();
            }
            
            else if(guesses.includes(guess)){
                document.getElementById("message").textContent = "You've already guessed that letter!";

            }

            // checks if guess is part of the computer's guess
            else if(game.CPUGuess.includes(guess)){

                // replaces blank location with correct guess, using while statement to check for multiple locations of a single letter
                var idx = game.CPUGuess.indexOf(guess);
                var indices = []
                while (idx != -1) {
                    indices.push(idx);
                    idx = game.CPUGuess.indexOf(guess, idx + 1);
                }
                for(var i = 0; i < indices.length; i++){
                    blank[indices[i]] = guess;
                }
                correctLetters += indices.length;
                
                document.getElementById("character").textContent = blank.join(" ");

                document.getElementById("message").textContent = "Correct!!!";

                // updates information on guesses 
                game.update();
                
            }
            else{

                document.getElementById("message").textContent = "WRONG! Come on! Show me your moves!";

                // updates information on guesses 
                game.update();
            
            }

        }
        else{
            game.update();
            document.getElementById("message").textContent = "YOU GOT IT!";
            $("#char").html("<img id = 'charImage' src = " + images[words.indexOf(game.CPUGuess)]+" alt=" + game.CPUGuess + ">")
            wins++;
            alert("YOU GOT IT! FALCOOON PUNNNCH!");
            document.getElementById("winsString").textContent = wins;
            game.restart();
            game.play();
        }

        
    }

};
