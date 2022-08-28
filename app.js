// pick out all important elements using id


// get element by id allows us to select elements by id
const computerChoiceDisplay = document.getElementById('computer-choice');

const userChoiceDisplay = document.getElementById('user-choice');

const resultDisplay = document.getElementById("result");



// querySelectorAll allows us to select all similar elements.
// in this case, select all button elements.
const possibleChoices = document.querySelectorAll('button');

// informal tests
// console.log(possibleChoices);
// console.log(computerChoice.parentElement.textContent);
// console.log(userChoice.parentElement.textContent);
// console.log(result.parentElement.textContent);

let userChoice;
let computerChoice;
let result;


// adding a click event listener to each of the button
possibleChoices.forEach(choice => {
    // whenever we click on the button, save the clicked button
    // id to userChoice, as the id has the same value as the 
    // textContent for the buttons
    choice.addEventListener('click', (c) => {
        userChoice = c.target.id;
        userChoiceDisplay.textContent = userChoice;
        // generage a computer choice
        generateComputerChoice();
        getResult();
    })
})

function generateComputerChoice() {
    // Math.floor allows us to round down
    // Math.random() generates random numbers from 0 - 1.
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    let answers = Array.from(possibleChoices);

    computerChoice = answers[randomNumber-1].textContent;

    computerChoiceDisplay.textContent = computerChoice;
}


function getResult() {

    if (computerChoice === userChoice) {
        result = "It's a draw";

    } else if (computerChoice === 'rock' && userChoice === 'papers') {
        result = "you win!";

    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "you lost!";

    } else if (computerChoice === 'papers' && userChoice === 'scissors') {
        result = 'you win!';

    } else if (computerChoice === 'papers' && userChoice === 'rock') {
        result = 'you lose!';

    } else if (computerChoice === 'scissors' && userChoice == 'rock') {
        result = "you win!";

    } else if (computerChoice === 'scissors' && userChoice == 'papers') {
        result = 'you lose!';

    } else {
        result = "I don't know which type of witchcraft is this!";
    }

    resultDisplay.textContent = result;

}
