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

function game() {
  let playerScore = 0;
  let compScore = 0;
  
  for (let i = 0; i < 5; i++) {
    let playerChoice = convertInputToMove(prompt("Pick one of rock, paper or scissors.").toLowerCase());
    let computerChoice = computerPlay();
    if (playerChoice === undefined) {
      console.log("Invalid input.");
      return;
    }
    let result = playRound(playerChoice, computerChoice);
    if (result == 0) {
      console.log("Tie.");
      playerScore++;
      compScore++;
    } else if (result == 1) {
      console.log("You win!");
      playerScore++;
    } else {
      console.log("You lose!");
      compScore++;
    }
  }
  if (playerScore > compScore) {
    console.log("Congratulations, you won!");
  } else if (playerScore < compScore) {
    console.log("Unfortunately you lost.");
  } else {
    console.log("Looks like it's a tie...")
  }

}

game();