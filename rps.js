// 1 = Rock, 2 = Scissors, 3 = Paper

function computerPlay() {
  return Math.floor(Math.random() * 3) + 1;
}

function convertInputToMove(input) {
  let choice;
  switch (input) {
    case "rock":
      choice = 1;
      break;
    case "scissors":
      choice = 2;
      break;
    case "paper":
      choice = 3;
  }
  return choice;
}

function didYouWin(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return 0;
  else if (playerChoice === 1 && computerChoice === 2) return true;
  else if (playerChoice === 2 && computerChoice === 3) return true;
  else if (playerChoice === 3 && computerChoice === 1) return true;
  else return false;
}

function playRound(playerChoice, computerChoice) {
  if (didYouWin(playerChoice, computerChoice) === 0) return 0;
  else if (didYouWin(playerChoice, computerChoice)) return 1;
  else return 2;
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === "rock") {
      playRound(1, computerPlay());
    } else if (button.id === "scissors") {
      playRound(2, computerPlay());
    } else if (button.id === "scissors") {
      playRound(3, computerPlay());
    }
  })
});