function computerPlay () {
    // generates random number
    let random = Math.floor(Math.random()*3)+1;

    // conditional to determine rock paper or scissors
    switch (random) {
        case 1:
            return "paper";
            break;
        case 2:
            return "rock";
            break;
        case 3:
            return "scissors";
            break;
    }               
}

function playRound (playerSelection, computerSelection) {
    // converts player selection to lowercase
    let playerLower = playerSelection.toLowerCase();

    // conditional checks player selection against computer selection
    // returns win or lose
    if (computerSelection==playerLower) {
        return `It's a tie! You both chose ${computerSelection}.`;
    } else if (computerSelection=="paper") {
        switch (playerLower) {
            case "rock":
                return "You lose! Paper covers rock.";
                break;
            case "scissors":
                return "You win! Scissors cut paper!";
                break;
        }
    } else if (computerSelection=="rock") {
        switch (playerLower) {
            case "paper":
                return "You win! Paper covers rock!";
                break;
            case "scissors":
                return "You lose! Rock breaks scissors.";
                break;
        }
    } else if (computerSelection=="scissors") {
        switch (playerLower) {
            case "paper":
                return "You lose! Scissors cut paper.";
                break;
            case "rock":
                return "You win! Rock breaks scissors!";
                break;
        }
    }
}    

// determines winner of game
function winnerTest (userScore, computerScore) {
    // winner statement
    let winnerStatement = `Congrats! You win! Your final score was ${userScore}.`;

    // loser statement
    let loserStatement = `You lose! Your final score was ${userScore}.`;

    // if score is >2, return winner statement with score. if not, return loser statement with score.
    if (userScore>computerScore) {
        return winnerStatement;
    } else if (userScore < computerScore) {
        return loserStatement;
    } else {
        return `It's a tie. Your score was ${userScore}.`
    };
};  

// plays 5 rounds of the game
function game () {
    // iteration counter
    let counter

    // total score
    let userScore = 0
    let computerScore = 0

    // loop plays game 5 times
    for (counter=0; counter<5; counter++) {
        // user answer and computer answer
        let userInput = prompt("Choose what to play: Rock, Paper, or Scissors:");
        let computerInput = computerPlay();

        // plays 1 round
        let round = playRound(userInput,computerInput);

        // checks result. If not lose, plus 1 to score, console log win statement. Else, console log lose statement.
        if (round.search("lose!")==-1 && round.search("tie.")==-1 ) {
            userScore++;
            console.log(round);
            console.log(userScore)
            console.log(computerScore)
        } else if (round.search("win!")==-1 && round.search("tie.")==-1) {
            computerScore++;
            console.log(round);
            console.log(userScore)
            console.log(computerScore)
        } else {
            console.log(round);
            console.log(userScore)
            console.log(computerScore)
        };
    };

    console.log(winnerTest(userScore,computerScore));
    
}     