function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    return randomNumber===1?"rock":randomNumber===2?"paper":"scissors";
}

function getHumanChoice(){
    let usersChoice = window.prompt("What's your choice? (choices: rock, paper, scissors)");   
    return usersChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()){
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice==="rock"&&computerChoice==="scissors"||
            humanChoice==="paper"&&computerChoice==="rock"||
            humanChoice==="scissors"&&computerChoice==="paper"){
                humanScore +=1;
                console.log(`You won with ${humanChoice} against ${computerChoice}`)
            } else if(humanChoice===computerChoice) {
                console.log(`It's a tie! Both chose ${humanChoice}`)
            } else {
                computerScore +=1;
                console.log(`You lost with ${humanChoice} against ${computerChoice}!`)
            }
    }
    for(let i=0; i<5; i++){
        playRound();
    }
    console.log(computerScore>humanScore?`Computer won with ${computerScore} over ${humanScore}`:computerScore===humanScore?`It's a tie ${humanScore}-${computerScore}`:`You won with ${humanScore} over ${computerScore}`)
}

playGame()