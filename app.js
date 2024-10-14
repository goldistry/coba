let userScore = 0;
let computerScore = 0
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

function convertToName(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissor";
}

function win(userChoice, computerChoice) {
  const smallerUser = "user".fontsize(3).sub();
  const smallerComputer = "computer".fontsize(3).sub();
  userScore++;
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToName(userChoice)}${smallerUser}  beats ${convertToName(computerChoice)}${smallerComputer}. You win!`;
  // to change border color when win lose draw in the choice
  // userChoice_div.classList.add('green-glow');
  // setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300)
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = `${convertToName(userChoice)}${smallerUser}  loses to ${convertToName(computerChoice)}${smallerComputer}. You lose!`
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToName(userChoice)}${smallerUser}  equals to ${convertToName(computerChoice)}${smallerComputer}. It's a draw!`
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', ()=> game("p"));
  scissor_div.addEventListener('click', ()=> game("s"));