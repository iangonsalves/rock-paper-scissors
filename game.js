
//global variables
var humanScore = 0;
var computerScore = 0;

/**
 * Generates the scoring and choices of the game per round for display.
 * @param {*} humanChoice  choice of the user.
 * @param {*} computerChoice randomly generated choice of computer.
 */
function playRound(humanChoice, computerChoice){
   
    if(humanScore === 5  || computerScore ===5){
        getFinalResult();
    } else {
        updateChoices(humanChoice, computerChoice);

        const roundOutcomeText=  getRoundOutcomeText(humanChoice,computerChoice);
        const roundOutcomeTextColor = (roundOutcomeText.includes("You win")) ? 'green' : 'red' ;

        updateRoundOutcomeDisplay(roundOutcomeText, roundOutcomeTextColor);
        updateScoreDisplay();
    }
}

/**
 * Used to reset all game content for a new game.
 */
function resetGame(){
    humanScore = 0;
    computerScore = 0;

    updateScoreDisplay();

    const choiceElements = ['player_choice', 'computer_choice'];
    const outcomeElement = document.getElementById('outcome_text');

    choiceElements.forEach(choiceId => {
        document.getElementById(choiceId).textContent = 'Null';
    });

    outcomeElement.textContent = 'Result: Null';

}

/**
 * Returns randomly generated computer choice.
 * @returns computer choice
 */
function getComputerChoice(){
    var choices = ["rock", "paper", "scissors"];
    var randomChoiceNumber = Math.floor(Math.random()*choices.length);
    return choices[randomChoiceNumber];
}

/**
 * Logic to obtain the round winner, loser or tie.
 * @param {*} humanChoice choice to be evaluated.
 * @param {*} computerChoice choice to be evaluated.
 * @returns the text to be displayed based on round outcome.
 */
function getRoundOutcomeText(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "Result: It's a draw! " ;
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            return `Result: You win! ${humanChoice} beats ${computerChoice}`;
        }

    else {
        computerScore++;
        return `Result: You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

//HELPER FUNCTIONS
/**
 * Updates the Display choices.
 * @param {*} humanChoice to be displayed.
 * @param {*} computerChoice to be displayed.
 */
function updateChoices(humanChoice, computerChoice){
    document.getElementById("player_choice").textContent = humanChoice.toUpperCase();
    document.getElementById("computer_choice").textContent = computerChoice.toUpperCase();
}

/**
 * Updates the scores based on the round winner.
 */
function updateScoreDisplay(){
    document.getElementById("player_score").textContent = humanScore;
    document.getElementById("computer_score").textContent = computerScore;
}

/**
 * Updates the Display for round outcome.
 * @param {*} roundOutcomeText the text used to be updated.
 * @param {*} roundOutcomeTextColor the color of text to be updated.
 */
function updateRoundOutcomeDisplay(roundOutcomeText, roundOutcomeTextColor){
    const roundOutcomeInfo = document.getElementById("outcome_text");
    roundOutcomeInfo.textContent = roundOutcomeText;
    roundOutcomeInfo.style.color = roundOutcomeTextColor;
}

/**
 * Updates the final outcome based on game winner(first to 5 points).
 */
function getFinalResult(){
    if( humanScore  === 5 && computerScore !==5 ){
        document.getElementById("outcome_text").textContent = "Game Over : Congratulations, You win!";
    } else{
        document.getElementById("outcome_text").textContent = "Game Over : Unfortunately, Computer wins."
       
    }
}

//DOM content to update game.
const gameButtons = document.querySelector(".button_container");
const resetButton = document.getElementById("reset_button");

gameButtons.addEventListener('click', function (event) {
    switch (event.target.id || event.target.parentElement.id) {
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
    }

});

resetButton.addEventListener("click", resetGame);
