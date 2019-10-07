let hints = [{h: "Jennifer Anniston played 'Rachel' in this show", a: "Friends"}, 
{h: "This show featured acts from Amanda Bines, Nick Cannon, and Kenan & Kel", a: "All That"}, 
{h: "Pikachu", a: "Pokemon"}, 
{h: "Seth McFarlane created this hit series in 1999", a: "Family Guy"},
{h: "Mr. Feeny was the famed teacher in this show", a: "Boy Meets World"},
{h: "Twin sisters Tia and Tamara", a: "Sister Sister"}
];


let userAnswer = [];
console.log(userAnswer);
let userGuess = [];
let remainGuess = 10;
let hintIndex = 0;
let wins = 0;
let loss = 0;

//let randomHint

//console.log(hints[5].a);

let userWordGuess = document.querySelector("#userWordGuess");
let typedGuesses = document.querySelector("#typedGuesses");
let myHints = document.querySelector("#hints");
let numberOfWins = document.querySelector("#numberOfWins");
let numberOfLosses = document.querySelector("#numberOfLosses");
let guessRemain = document.querySelector("#remainGuess");



// userWordGuess.textContent = userInput;
// typedGuesses.textContent = userGuess;
// numberOfWins.textContent = wins;
// numberOfLosses.textContent = loss;
// hints.textContent = "Hint!: " + hints[hintIndex].h;


// function initialGame() {
//     if (hintIndex <= hints.length - 1) {
//             document.querySelector("#hints").innerHTML = "Hint!: " + hints[hintIndex].h;
//     }   if (wins === 0 && loss === 0 && userGuess === " ") {    

//     }
// }
// initialGame();

// // function restartGame() {
// //     if () {

// //     }
// // }

// // Function for hints that are being given.
// function wordGen() {
    let randomNum = Math.floor(Math.random() * hints.length);
       
        let randomWord = hints[randomNum].a;
            console.log(randomWord);
            
        let randomHint = hints[randomNum].h;
            console.log(randomHint);

//}
//wordGen();
//     let splitString = hintIndex.split

//     if (hintIndex <= hints.length - 1) {
//         document.querySelector("#hints").innerHTML = "Hint!: " + hints[hintIndex].h;

//         //console.log(hints);
//     }   else {
//     document.querySelector("#hints").innerHTML = "Thamks For Playing!";
//     document.querySelector("#result").innerHTML = "Final Results!";


// };
//renderHints();

// //Function for updated wins.
// function updateWins() {
//     document.querySelector("#numberOfWins").innerHTML = wins;
// };
// updateWins();

// //Function for updated losses.
// function updateLoss() {
//     document.querySelector("#numberOfLosses").innerHTML = loss;
// };
// updateLoss();

// let x = "abcd";
// console.log(x);
// console.log(x.indexOf("c"));
// console.log(x.indexOf("a"));
// console.log(x.indexOf("z"));

//Onkeypress function.
document.onkeypress = function (event) {
    let userInput = event.key.toLowerCase();
    console.log(event.key);

    for (let i = 0; i < randomWord.length; i++) {
        if (userInput === randomWord[i].toLowerCase()) {
            userAnswer.push(userInput); 
            console.log(userAnswer);
            console.log("user input equals randomWord");
        } 
    }

    if (randomWord.indexOf(userInput) === -1) {
        userGuess.push(userInput);
        remainGuess--;
        console.log(userGuess);
    }
    

}
    // if (hintIndex === hints.length) {
    //     return true;
    // }

//     let userInput = event.key.toLowerCase();

    //let userInput = addEventListener("input", matchInput).toLowerCase(hints[hintIndex].a);

    // if (userInput === hints[hintIndex].a) {
    //     document.querySelector("#correct").innerHTML = "CORRECT!"; 
    //     wins++;
    //     updateWins();
    // } else {
    //     userTyped();
    //}
//}

// function matchInput() {
//     if (userInput.value === hints[hintIndex].a) {
//         document.querySelector("#correct").innerHTML = "CORRECT!"; 
//         wins++;
//         updateWins();
//     }

// }

// //Function for updated user typed guesses.
// function userTyped() {
//     if (userAnswer !== hints[hintIndex].a); 
//     document.querySelector("#typedGuesses").innerHTML = userGuess;
// }
// userTyped();

// initialGame();
// renderHints();
// updateWins();
// updateLoss();


/*for (let i = 0; i < hint.length; i++){
    userAnswer[i] = "_";
    console.log(userAnswer[i].a)

    let remainLet = hint.length;
    //console.log(remainLet)
}
}*/

document.querySelector("#hints").innerHTML = "Hint!: " + randomHint;
document.querySelector("#typedGuesses").innerHTML =  userGuess;
document.querySelector("#userWordGuess").innerHTML = userAnswer;

