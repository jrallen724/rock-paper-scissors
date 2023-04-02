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
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win!';
    } else {
        return 'You loose!'
    }
}

 function game (num) {
    let playerCount = 0;
    let computerCount = 0;
    
    while (playerCount < num && computerCount < num) {
        let result = playRound(getPlayerChoice(), getComputerChoice())
            if (result === 'You win!') {
                playerCount += 1;
            } else if (result ==='You loose!') {
                computerCount += 1;
            }
            console.log('Score - User: ' + playerCount + ' Computer : ' + computerCount);
    }
} 

game(5);