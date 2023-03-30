function getComputerChoice () {
    let num = Math.floor(Math.random() * 3);
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
    let choose = prompt('Rock paper scissors shoot!');
    let playerChoice = choose.toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    console.log('Player chooses ' + playerSelection + ' and computer chooses ' + computerSelection);
    if (playerSelection === computerSelection) {
        return 'Tie game. Try again.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win!';
    } else {
        return 'You loose!'
    }
}

function game (num) {
    let userScore = 0;
    let computerScore = 0;
    while (num > 0) {
        if (playRound(getPlayerChoice(), getComputerChoice()) === 'You win!') {
            userScore += 1;
            num --;
        } else if(playRound(getPlayerChoice(), getComputerChoice()) === 'You loose!') {
            computerScore += 1;
            num --;
        }
    }
}

game (5);
