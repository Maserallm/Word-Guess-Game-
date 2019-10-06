let hints = [{h: "Jennifer Anniston played 'Rachel' in this show", a: "Friends"}, 
{h: "This show featured acts from Amanda Bines, Nick Cannon, and Kenan & Kel", a: "All That"}, 
{h: "Pikachu", a: "Pokemon"}, 
{h: "Seth McFarlane created this hit series in 1999", a: "Family Guy"},
{h: "Mr. Feeny was the famed teacher in this show", a: "Boy Meets World"},
{h: "Twin sisters Tia and Tamara", a: "Sister Sister"}
];

let userWordGuess = document.querySelector("#userWordGuess");
let typedGuesses = document.querySelector("#typedGuesses");
let hints = document.querySelector("#hints");
let numberOfWins = document.querySelector("#numberOfWins");
let numberOfLosses = document.querySelector("#numberOfLosses");
let correct = document.querySelector("#correct");
let result = document.querySelector("#result");

userWordGuess.textContent = userInput;
typedGuesses.textContent = userGuess;
numberOfWins.textContent = wins;
numberOfLosses.textContent = loss;
hints.textContent = "Hint!: " + hints[hintIndex].h;

let wins = 0;
let loss = 0;
let userGuess = " ";
let userAnswer = [];
let hintIndex = 0;

function initialGame() {
    if (hintIndex <= hints.length - 1) {
            document.querySelector("#hints").innerHTML = "Hint!: " + hints[hintIndex].h;
    }   if (wins === 0 && loss === 0 && userGuess === " ") {    

    }
}
initialGame();

// function restartGame() {
//     if () {

//     }
// }

// Function for hints that are being given.
function renderHints() {
    let hintIndex = Math.floor(Math.random() * hints.length);
    let splitString = hintIndex.split

    if (hintIndex <= hints.length - 1) {
        document.querySelector("#hints").innerHTML = "Hint!: " + hints[hintIndex].h;

        //console.log(hints);
    }   else {
    document.querySelector("#hints").innerHTML = "Thamks For Playing!";
    document.querySelector("#result").innerHTML = "Final Results!";

}
};
renderHints();

//Function for updated wins.
function updateWins() {
    document.querySelector("#numberOfWins").innerHTML = wins;
};
updateWins();

//Function for updated losses.
function updateLoss() {
    document.querySelector("#numberOfLosses").innerHTML = loss;
};
updateLoss();

//Onkeypress function.
document.onkeypress = function (event) {
    if (hintIndex === hints.length) {
        return true;
    }
    // let userInput = addEventListener("input", matchInput).toLowerCase(hints[hintIndex].a);

    if (userInput === hints[hintIndex].a) {
        document.querySelector("#correct").innerHTML = "CORRECT!"; 
        wins++;
        updateWins();
    } else {
        userTyped();
    }
}

function matchInput() {
    if (userInput.value === hints[hintIndex].a) {
        document.querySelector("#correct").innerHTML = "CORRECT!"; 
        wins++;
        updateWins();
    }

}

//Function for updated user typed guesses.
function userTyped() {
    if (userAnswer !== hints[hintIndex].a); 
    document.querySelector("#typedGuesses").innerHTML = userGuess;
}
userTyped();

initialGame();
renderHints();
updateWins();
updateLoss();


/*for (let i = 0; i < hint.length; i++){
    userAnswer[i] = "_";
    console.log(userAnswer[i].a)

    let remainLet = hint.length;
    //console.log(remainLet)
}
}*/

