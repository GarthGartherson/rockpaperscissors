// let playerChoice = document.querySelector('.player-choice');
// let computerChoice = document.querySelector('.computer-choice');
let result = document.querySelector('.result');
let resetButton = document.querySelector('#reset')
let playerScore=0;
let computerScore=0;



function playRound(playerPrompt, computerRandom){
    console.log(`Computer chooses: ${computerRandom} you chose ${playerPrompt}`)
    if(playerPrompt === 'rock' && computerRandom === 'paper'){
        result.innerText = 'YOU LOSE'
        computerScore += 1;
    } else if (playerPrompt === 'rock' && computerRandom === 'scissors'){
        result.innerText = 'YOU WIN';
        playerScore += 1;
    } else if (playerPrompt === 'rock' && computerRandom === 'rock'){
        result.innerText = 'YOU TIE'
    }
    if(playerPrompt === 'scissors' && computerRandom === 'rock'){
        result.innerText = 'YOU LOSE'
        computerScore += 1
    } else if (playerPrompt === 'scissors' && computerRandom === 'paper'){
        result.innerText = 'YOU WIN';
        playerScore += 1;
    } else if (playerPrompt === 'scissors' && computerRandom === 'scissors'){
        result.innerText = 'YOU TIE'
    }
    if(playerPrompt === 'paper' && computerRandom === 'scissors'){
        result.innerText = 'YOU LOSE'
        computerScore += 1
    } else if (playerPrompt === 'paper' && computerRandom === 'rock'){
        result.innerText = 'YOU WIN';
        playerScore += 1;
    } else if (playerPrompt === 'paper' && computerRandom === 'paper'){
        result.innerText = 'YOU TIE'
    }
}

function getPrompt(){
    const choiceArray = ['rock', 'paper', 'scissors', 'Rock', 'Paper', 'Scissors'];
    const playerPrompt = prompt('Rock Paper Scissors?').toLowerCase();
    while(choiceArray.includes(playerPrompt) === false){
        playerPrompt = prompt('Rock Paper Scissors?').toLowerCase();
    }
    console.log(playerPrompt)
    return playerPrompt;
}

function getRandom(){
    const choiceArray = ['rock', 'paper', 'scissors', 'Rock', 'Paper', 'Scissors']
    return computerRandom = choiceArray[(Math.floor(Math.random() * 3))]
}

function playGame(){
    let playerPrompt = prompt('Rock Paper Scissors?').toLowerCase();
    const choiceArray = ['rock', 'paper', 'scissors'];
    let computerRandom = choiceArray[(Math.floor(Math.random() * 3))];    
    while(playerScore <5 && computerScore < 5){
        playRound(playerPrompt, computerRandom);
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
        playerPrompt = getPrompt();
        computerRandom = getRandom();
    }
    if(computerScore === 5){
        console.log('Computer Wins!')
    } else {
        console.log('Player Wins!')
    }
}

playGame();

// resetButton.addEventListener('click', () => {
//     result.innerText = '';
//     computerChoice.innerText = '';
//     playerChoice.innerText = ''
//     let playerScore = 0;
//     let computerScore = 0;
// })