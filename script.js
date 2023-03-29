function getComputerChoice () {
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    switch(num) {
       case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
        default:
            console('There seems to be and error') 
            break;
    }   
}

function getPlayerChoice () {
    let choice = prompt('Rock paper scissors shoot!').toLowerCase;
    console.log('player choice: ' + choice);
    return choice;
}

function playRound(playerSelection, computerSelection) {

}
