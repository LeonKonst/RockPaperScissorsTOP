function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    return randomNumber===1?"rock":randomNumber===2?"paper":"scissors";
}

function getHumanChoice(){
    let usersChoice = window.prompt("What's your choice? (choices: rock, paper, scissors)");   
    return usersChoice;
}
