let userScore = 0;
let computerScore = 0;

function setScore (newUser,newComputer) {
    userScore = newUser;
    computerScore = newComputer;
};

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
    };               
};

function playRound (playerSelection) {
    // converts player selection to lowercase
    let playerLower = playerSelection.toLowerCase();
    let computerSelection = computerPlay()
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
        };
    };
};

function endGame (userScore, computerScore) {
    const messageContainer = document.querySelector('#messages');
    const message = document.querySelector('#message');
    const scores = document.querySelector('#scores');

    let winnerStatement = `Congrats! You win! The final score was ${userScore} to ${computerScore}.`;
    let loserStatement = `You lose! The final score was ${userScore} to ${computerScore}.`;
    let outcome
    if (userScore>computerScore) {
        outcome = winnerStatement;
    } else {
        outcome = loserStatement;
    };

    let againMessage = document.createElement('h2');
    againMessage.textContent='Choose rock, paper, or scissors to play again.'
   
    message.textContent = outcome;
    messageContainer.appendChild(againMessage);
    scores.textContent = '';

    setScore(0,0);
};

function createDisplay (userValue, computerValue) {
    const scores = document.querySelector('#scores');
    let userLabel = document.createElement('h3');
    let computerLabel = document.createElement('h3');
    let uScore = document.createElement('div');
    let compScore = document.createElement('div');

    userLabel.classList.add('score-labels');
    userLabel.textContent = 'User Score';

    computerLabel.classList.add('score-labels');
    computerLabel.textContent = 'Computer Score';

    uScore.textContent = userValue;
    compScore.textContent = computerValue;

    uScore.id ='user-score';
    compScore.id='computer-score';

    userLabel.appendChild(uScore);
    computerLabel.appendChild(compScore);

    scores.appendChild(userLabel);
    scores.appendChild(computerLabel);
}

function checkResult (round) {
    const message = document.querySelector('#message');
    const messageContainer = document.querySelector('#messages');
    const userDisplay = document.querySelector('#user-score');
    const computerDisplay = document.querySelector('#computer-score');

    if (messageContainer.childNodes[3]!=null) {
        messageContainer.removeChild(messageContainer.childNodes[3])
    };
    // checks result. If not lose, plus 1 to score, console log win statement. Else, console log lose statement.
    if (round.search("lose!")==-1 && round.search("tie.")==-1 ) {
        userScore++;
    } else if (round.search("win!")==-1 && round.search("tie.")==-1) {
        computerScore++;
    };

    if (userDisplay===null) {
        createDisplay(userScore, computerScore);
        message.textContent = round;
    } else {
        message.textContent = round;
        userDisplay.textContent = userScore;
        computerDisplay.textContent = computerScore;
    }
    
    if (userScore>=5 | computerScore>=5) {
        endGame(userScore,computerScore);
    }
};

let choices = document.querySelectorAll('.choice');

for (i=0; i<choices.length; i++){
    choices[i].addEventListener('click', function (e) {
        userInput = e.target.id;
        round = playRound(userInput);
        checkResult(round);
    });
};