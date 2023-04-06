let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}

function getPlayerChoice () {
    let choice = prompt('Rock paper scissors shoot!').toLowerCase();
    console.log('player choice: ' + choice);
    return choice;
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    console.log('You chose ' + playerSelection + ' and the computer chose ' + computerSelection + '.')
    if (playerSelection === computerSelection) {
        return 'Tie game.Try again';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore ++;
        return 'You win!';
    } else {
        computerScore ++;
        return 'You loose!';
    }
}

 function game (num) {
    
    while (playerScore < num && computerScore < num) {
        let result = playRound(getPlayerChoice(), getComputerChoice())
            if (result === 'You win!') {
                playerScore += 1;
            } else if (result ==='You loose!') {
                computerScore += 1;
            }
            console.log('Score - User: ' + playerScore + ' Computer : ' + computerScore);
    }
} 

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', playRound(button.value)));

//game(5);
