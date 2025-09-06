const selectionContainer = document.querySelector("#playerSelectionContainer");
const roundDisplay = document.querySelector("#roundDisplay");
const logsDiv = document.querySelector("#logs");
const playersScoreDiv = document.querySelector("#playersScore");
const computersScoreDiv = document.querySelector("#computersScore");
const htmlBody = document.querySelector("body");

// selectionContainer.addEventListener("click", (e) => )
selectionContainer.addEventListener("click", (e) => e.target.localName !=="button"?console.log("be more precise buddy!"):playRound(e.target.value,getComputerChoice()))

function getRoundsPerGame(){
    let roundsPerGame = prompt("How many round per Game?", 5);
    return parseInt(roundsPerGame);
}

let roundsPerGame = getRoundsPerGame();

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    return randomNumber===1?"rock":randomNumber===2?"paper":"scissors";
}

let humanScore = 0;
let computerScore = 0;
let round = 0;
computersScoreDiv.textContent = computerScore;
playersScoreDiv.textContent = humanScore;
roundDisplay.textContent = round;

function playRound(humanChoice, computerChoice = getComputerChoice()){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice==="rock"&&computerChoice==="scissors"||
        humanChoice==="paper"&&computerChoice==="rock"||
        humanChoice==="scissors"&&computerChoice==="paper"){
            humanScore +=1;
            logsDiv.textContent = `You won with ${humanChoice} against ${computerChoice}`;
        } else if(humanChoice===computerChoice) {
            logsDiv.textContent = `It's a tie! Both chose ${humanChoice}`;
        } else {
            computerScore +=1;
            logsDiv.textContent = `You lost with ${humanChoice} against ${computerChoice}!`;
        }
    roundDisplay.textContent = ++round;
    computersScoreDiv.textContent = computerScore;
    playersScoreDiv.textContent = humanScore;
    if(round===roundsPerGame){
        finishGame();
    }
    return;
}

let restartBtn = document.createElement("button");
restartBtn.textContent = "Restart Game"

function finishGame(){
    logsDiv.textContent = computerScore>humanScore?`Computer won with ${computerScore} over ${humanScore}`:computerScore===humanScore?`It's a tie ${humanScore}-${computerScore}`:`You won with ${humanScore} over ${computerScore}`
    selectionContainer.childNodes.forEach(button=>{button.disabled=true})
    
    htmlBody.appendChild(restartBtn);
    restartBtn.addEventListener("click", restartGame)

}


function restartGame(){
    roundsPerGame = getRoundsPerGame();
    humanScore = 0;
    computerScore = 0;
    round = 0;
    computersScoreDiv.textContent = computerScore;
    playersScoreDiv.textContent = humanScore;
    roundDisplay.textContent = round;
    selectionContainer.childNodes.forEach(button=>{button.disabled=false});
    restartBtn.remove();
}