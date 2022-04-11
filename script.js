console.log("Hello World");

const possibleOutcome = ["Rock","Paper","Scissors"];

function computerPlay(){
    return possibleOutcome[Math.floor(Math.random() * 3)];
}

function playGame(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerPlay();
    if(playerSelection == "Rock"){
        if(computerSelection == "Paper") return "lose";
        else if(computerSelection == "Scissors") return "win";
        else return null;    
    }else if(playerSelection == "Paper"){
        if(computerSelection == "Scissors") return "lose";
        else if(computerSelection == "Rock") return "win";
        else return null;    
    }else{
        if(computerSelection == "Rock") return "lose";
        else if(computerSelection == "Paper") return "win";
        else return null;    
    }
}


let playerPoints = 0;
let computerPoints = 0;
for(let i = 0 ; i < 5 ; i++){
    let playerSelection = prompt("Pick either Rock, Paper or Scissors!");
    let computerSelection = computerPlay();
    if(playGame(playerSelection, computerSelection) == "win") {
        playerPoints++;
        alert(`You picked ${playerSelection} and the computer picked ${computerSelection}.
You won this round!`)
    }else {
        computerPoints++;
        alert(`You picked ${playerSelection} and the computer picked ${computerSelection}.
You lost this round!`)
    }
}
if(playerPoints > computerPoints) alert(`${playerPoints} - ${computerPoints}.
You won the game!`);
else alert(`${playerPoints} - ${computerPoints}.
You lost the game!`);