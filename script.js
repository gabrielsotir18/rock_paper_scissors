console.log("Hello World");

const possibleOutcome = ["Rock","Paper","Scissors"];

function computerPlay(){
    return possibleOutcome[Math.floor(Math.random() * 3)];
}

function playGame(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerSelection == "Rock"){
        if(computerSelection == "Paper") return "lose";
        else if(computerSelection == "Scissors") return "win";
        else return "tie";    
    }else if(playerSelection == "Paper"){
        if(computerSelection == "Scissors") return "lose";
        else if(computerSelection == "Rock") return "win";
        else return "tie";    
    }else if(playerSelection == "Scissors"){
        if(computerSelection == "Rock") return "lose";
        else if(computerSelection == "Paper") return "win";
        else return "tie";    
    }else return null;
}


const body = document.querySelector("body");
const buttons = Array.from(document.querySelectorAll('.btn'));
const result = document.createElement("div");
const points = document.createElement("div");
let playerPoints = 0;
let computerPoints = 0;
let endGameFlag = false;
buttons.forEach(element => {
    element.addEventListener("click", e =>{
        let playerSelection=(e.target.value);
        let computerSelection=computerPlay()
        if(playGame(playerSelection, computerSelection) == "win"){
            result.textContent = `You picked ${playerSelection}\n computer picked ${computerSelection}\n YOU WON!!`;
            playerPoints++;
        }else if(playGame(playerSelection, computerSelection) == "lose"){
            result.textContent = `You picked ${playerSelection}\n computer picked ${computerSelection}\n YOU LOST!!`;
            computerPoints++;
        }else if(playGame(playerSelection, computerSelection) == "tie"){
            result.textContent = `You picked ${playerSelection}\n computer picked ${computerSelection}\n Its a tie`;
        }
        body.appendChild(result);
        if(playerPoints == 5 || computerPoints == 5){
            points.textContent = `game finished ${playerPoints} - ${computerPoints}`;
            body.appendChild(points);
            buttons.forEach(element => {
                element.childNodes[1].disabled = true;
                console.log(element.childNodes[1]);
            });
        }
    });
});

if(endGameFlag == true){ 
    console.log("done");
    buttons.forEach(element => {
        element.disable = true;
        console.log(element);
    });
    
}
