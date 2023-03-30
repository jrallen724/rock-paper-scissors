function getComputerChoice () {
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    switch(num) {
       case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            console('There seems to be and error') 
            break;
    }   
}

function getPlayerChoice () {
    let choice = prompt('Rock paper scissors shoot!').toLowerCase();
    console.log('player choice: ' + choice);
    return choice;
}

function playRound(playerSelection, computerSelection) {
    console.log('You chose ' + playerSelection + ' and the computer chose ' + computerSelection + '.')
    if (playerSelection === computerSelection) {
        return 'Tie game.Try again';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win!';
    } else if (playerSelection === 'scissors' && computerSelection === 'pap er') {
        return 'You win!';
    } else {
        return 'You loose!'
    }
}

/* game (num) {
    let playerCount = 0;
    let computerCount = 0;
    
    while (playerCount < num || computerCount < num) {}
} */

playRound(getPlayerChoice(), getComputerChoice());