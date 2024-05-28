
var humanScore = 0;
var computerScore = 0;

function playGame(humanChoice, computerChoice){
    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice) {
            console.log("It's a draw");
        }
    
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
            ) {
                console.log(`You win: ${humanChoice} beats ${computerChoice}`);
                humanScore++;
        }
    
        else {
            console.log(`You lose: ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        updateChoices(humanChoice, computerChoice);
    
        return `You: ${humanScore} \n Computer: ${computerScore}`;
    }

    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
        console.log(`Round ${i}/5 is complete. Scores are: You(${humanScore}) / Computer(${computerScore}).`)
    }

    
    if (humanScore > computerScore) {
        console.log(`Final Score: You won! You scored ${humanScore}/5 points!`);
    }
    else {
        var result =  (humanScore === computerScore) ? `Final Score: You drew ! Your score was ${humanScore}/5 points.` : `Final Score: You lost ! Your scored ${humanScore}/5 points.`;
        console.log(result);
    }

}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log("It's a draw");
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win: ${humanChoice} beats ${computerChoice}`);
            humanScore++;
    }

    else {
        console.log(`You lose: ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    updateChoices(humanChoice, computerChoice);

    // return `You: ${humanScore} \n Computer: ${computerScore}`;
}


//HELPER FUNCTIONS

function updateChoices(humanChoice, computerChoice){
    document.getElementById("player_choice").textContent = humanChoice.toUpperCase();
    document.getElementById("computer_choice").textContent = computerChoice.toUpperCase();
}







function getComputerChoice(){
    var choices = ["rock", "paper", "scissors"];
    var randomChoiceNumber = Math.floor(Math.random()*choices.length);
    return choices[randomChoiceNumber].toLowerCase();
}


// function getHumanChoice(){
//    var humanChoice = prompt("Please give us your option between Rock , Paper or Scissors").toLowerCase();

//    if( (humanChoice == "rock" )|| (humanChoice == "paper") || (humanChoice == "scissors")){
//     console.log("You chose " + humanChoice);
//     return humanChoice;
//    } else {
//     console.log("Option doesn't exist. Please choose again between Rock , Paper, Scissors");
//     return getHumanChoice();
//     }   
// }








const gameButtons = document.querySelector(".button_section");
if(gameButtons){
    console.log("Hello");
} else {
    console.log("Empty query no value");
}

gameButtons.addEventListener('click', function (event) {
    switch (event.target.parentElement.id) {
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
