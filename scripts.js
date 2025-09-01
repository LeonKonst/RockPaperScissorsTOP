function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    return randomNumber===1?"rock":randomNumber===2?"paper":"scissors";
}

function getHumanChoice(){
    let usersChoice = window.prompt("What's your choice? (choices: rock, paper, scissors)");   
    return usersChoice;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice==="rock"&&computerChoice==="scissors"||
        humanChoice==="paper"&&computerChoice==="rock"||
        humanChoice==="scissors"&&computerChoice==="paper"){
            humanScore +=1;
            return `You won with ${humanChoice} against ${computerChoice}`
        } else if(humanChoice===computerChoice) {
            return `It's a tie! Both chose ${humanChoice}`
        } else {
            computerScore +=1;
            return `You lost with ${humanChoice} against ${computerChoice}!`
        }
}
