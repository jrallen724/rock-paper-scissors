let playerScore = 0;
let computerScore = 0;
let winner = ''

const imageChoice = document.querySelectorAll('.imageChoice');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const result = document.querySelector('h2');


function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        result.textContent = 'Tie Game';
        return;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore ++;
        result.textContent = 'You won this round!';
        return 'You win!';
    } else {
        computerScore ++;
        result.textContent = 'You lost this round.';
        return 'You loose!';
    }
}

function updateScores () {
    player.textContent = `Player: ${playerScore}`;
    computer.textContent = `Computer: ${computerScore}`;
}

function checkWinner() {
    if (playerScore > 4 || computerScore > 4) {
        result.textContent = 'Game Over';
        return;
    }
}

imageChoice.forEach((choice) => {
    choice.addEventListener('click', () => {
        checkWinner();
        playRound(choice.id, getComputerChoice());
        updateScores();
    });
});