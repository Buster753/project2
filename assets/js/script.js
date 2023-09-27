const playerScoreBoard = document.getElementById("playerScore");
const computerScoreBoard = document.getElementById("computerScore");

let choices = ["rock", "paper", "scissor", "lizard", "spock"];

let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const lizard = document.getElementById("lizard")
const spock = document.getElementById("spock")

const gameTitle = document.getElementById("gameTitle");

rock.addEventListener("click", function() {
    result("rock")
});
scissor.addEventListener("click", function () {
    result("paper");
});
paper.addEventListener("click", function () {
    result("scissor");
});
lizard.addEventListener("click", function () {
    result("lizard");
});
spock.addEventListener("click", function () {
    result("spock");
});

function randomComputer() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function result(pChoice) {
    let cChoice = randomComputer();
    if (pChoice === cChoice) {
        gameTitle.innerHTML = pChoice + " Does not beat " + cChoice + "<br>" + "     It is a Tie!"
    }
    else if (
        (pChoice === "rock" && cChoice === "scissor") ||
        (pChoice === "rock" && cChoice === "lizard") ||
        (pChoice === "paper" && cChoice === "rock") ||
        (pChoice === "paper" && cChoice === "spock") ||
        (pChoice === "scissor" && cChoice === "paper") ||
        (pChoice === "scissor" && cChoice === "lizard") ||
        (pChoice === "lizard" && cChoice === "spock") ||
        (pChoice === "lizard" && cChoice === "paper") ||
        (pChoice === "spock" && cChoice === "scissor") ||
        (pChoice === "spock" && cChoice === "rock")
    ) {
        gameTitle.innerHTML = pChoice + " beats " + cChoice + "<br>" + "      You Win!"
        playerScore++;
        playerScoreBoard.innerHTML = "Player: " + playerScore;
        
    } else {
        gameTitle.innerHTML = pChoice + " gets beaten by " + cChoice + "<br>" + "      You Lose!"
        computerScore++;
        computerScoreBoard.innerHTML = "Computer: " + computerScore;
        
    }
}