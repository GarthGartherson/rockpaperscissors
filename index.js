let playerPrompt = prompt('Rock Paper Scissors?').toLowerCase();
let playerChoice = document.querySelector('.player-choice');
let result = document.querySelector('.result');
let computerChoice = document.querySelector('.computer-choice');


const choiceArray = ['rock', 'paper', 'scissors', 'Rock', 'Paper', 'Scissors']
while(choiceArray.includes(playerPrompt) === false){
    playerPrompt = prompt('Rock Paper Scissors?').toLowerCase();
}
// if(choiceArray.includes(playerPrompt) === false) {
//     console.log(choiceArray.includes)
// })
let computerRandom = choiceArray[(Math.floor(Math.random() * 3))]

console.log(computerChoice)

playerChoice.innerText =  playerPrompt;
computerChoice.innerText = computerRandom 

console.log(playerPrompt)
console.log(computerRandom)

if(playerPrompt === 'rock' && computerRandom === 'paper'){
    result.innerText = 'YOU LOSE'
} else if (playerPrompt === 'rock' && computerRandom === 'scissors'){
    result.innerText = 'YOU WIN'
} else if (playerPrompt === 'rock' && computerRandom === 'rock'){
    result.innerText = 'YOU TIE'
}
if(playerPrompt === 'scissors' && computerRandom === 'rock'){
    result.innerText = 'YOU LOSE'
} else if (playerPrompt === 'scissors' && computerRandom === 'paper'){
    result.innerText = 'YOU WIN'
} else if (playerPrompt === 'scissors' && computerRandom === 'scissors'){
    result.innerText = 'YOU TIE'
}
if(playerPrompt === 'paper' && computerRandom === 'scissors'){
    result.innerText = 'YOU LOSE'
} else if (playerPrompt === 'paper' && computerRandom === 'rock'){
    result.innerText = 'YOU WIN'
} else if (playerPrompt === 'paper' && computerRandom === 'paper'){
    result.innerText = 'YOU TIE'
}