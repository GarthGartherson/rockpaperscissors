const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const computerScoreboard = document.querySelector('.computer-score')
const playerScoreboard = document.querySelector('.player-score')
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');
const startButton = document.querySelector('.start-game')
let resetButton = document.querySelector('.reset-game')
const playerOptions = document.querySelectorAll('.button-choice')
let playerScore=0;
let computerScore=0;

resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    result.innerText = ''
    computerScoreboard.innerText = ''
    playerScoreboard.innerText = ''
    playerChoice.innerText = ''
    computerChoice.innerText = ''
})

function playRound(playerPrompt){
    const choiceArray = ['rock', 'paper', 'scissors'];
    let computerRandom = choiceArray[(Math.floor(Math.random() * 3))];   

    if(computerScore === 5){
        result.innerText = ('Computer Wins!')
        return;
    }
    
    if(playerScore === 5){
        result.innerText = ('Player Wins!')
        return;
    } 

    playerChoice.innerText = playerPrompt
    computerChoice.innerText = computerRandom

    if(playerPrompt === 'rock' && computerRandom === 'paper'){
        result.innerText = 'YOU LOSE'
        computerScore += 1;
        computerScoreboard.innerText = computerScore
    } else if (playerPrompt === 'rock' && computerRandom === 'scissors'){
        result.innerText = 'YOU WIN';
        playerScore += 1;
        playerScoreboard.innerText = playerScore;
    } else if (playerPrompt === 'rock' && computerRandom === 'rock'){
        result.innerText = 'YOU TIE'
    }
    if(playerPrompt === 'scissors' && computerRandom === 'rock'){
        result.innerText = 'YOU LOSE'
        computerScore += 1;
        computerScoreboard.innerText = computerScore
    } else if (playerPrompt === 'scissors' && computerRandom === 'paper'){
        result.innerText = 'YOU WIN';
        playerScore += 1;
        playerScoreboard.innerText = playerScore;
    } else if (playerPrompt === 'scissors' && computerRandom === 'scissors'){
        result.innerText = 'YOU TIE'
    }
    if(playerPrompt === 'paper' && computerRandom === 'scissors'){
        result.innerText = 'YOU LOSE'
        computerScore += 1;
        computerScoreboard.innerText = computerScore
    } else if (playerPrompt === 'paper' && computerRandom === 'rock'){
        result.innerText = 'YOU WIN';
        playerScore += 1;
        playerScoreboard.innerText = playerScore;
    } else if (playerPrompt === 'paper' && computerRandom === 'paper'){
        result.innerText = 'YOU TIE'
    }
}

function playGame(){
    console.log(playerScore)

    playerOptions.forEach(button => {
        button.addEventListener('click', function() {
            playRound(button.innerText.toLowerCase())
        }
    
    )})
}

startButton.addEventListener('click', playGame)
