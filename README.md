# Word-Guess-Game

Try to guess the randomly chosen Super Smash Bros. character!

* You only have a certain number of guesses to figure out which character is hidden!
* Powered by Bootstrap and Javascript

## Getting Started

Follow the deployed project link below to play the game!

### Deployed Project Link
<!-- make a link to the deployed site -->
 
[Word Guess Game](https://sajeelmalik.github.io/Word-Guess-Game/)


### Image Preview of Word Guess Game
<!-- take a picture of the image and add it into the readme  -->
[Word Guess Game Preview]( "Super Smash Bros. Challenge")

## Prerequisites

The page can be run from any browser, preferably on Google Chrome!


## Technology Used

* **HTML5**
* **CSS3** 
* **Javascript** - the primary scripting logic powering the game
* [**Bootstrap CDN v4.1.0**](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - the open-source web styling framework used
* [**Google Fonts**](https://fonts.google.com/) - an interactive library of licensed fonts 

# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

Object-oriented programming often proves to be a well-suited mechanism for repetitive tasks. An example of such an implementation is displayed below:

```
var game = {

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

```

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
* object-driven functions drastically simplify game code and allow for more robust applications. There is still much, much more to learn in this space, especially in optimizing and cleaning up written code 



## Authors

* **Sajeel Malik** - *Initial work* - [GitHub](https://github.com/sajeelmalik)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
