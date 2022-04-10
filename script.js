const playButtons = document.querySelectorAll('div.playButtons button');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const results = document.querySelector('#results');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => location.reload());

playButtons.forEach(button => {button.addEventListener('click', getPlayerChoice )});

let playerScore = 0;
let compScore = 0;
let playerChoice;

const winnerResults ={
  computer: ["Lost... to a computer.", 'red'],
  player: ["Congratulations.", 'green'],
  tie: ["Tie. Not bad but you can do better.", 'blue']
}

function computerPlay() {
  return Math.floor(Math.random() * 3);
}

function getPlayerChoice(e) {
  let playerNumber = (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerNumber, computerPlay());
}

function playRound(playerNumber, computerNumber) {
  let roundSelections = `${playerNumber}-${computerNumber}`;
  let winningCombination = ['1-0', 'o-2', '2-1'];

  if (Number(playerNumber) === computerNumber) {
    playerPoints.textContent = ++playerScore;
    computerPoints.textContent = ++compScore;
    results.textContent = "A tie... everyone wins!";
  } else if (winningCombination.includes(roundSelections)) {
    playerPoints.textContent = ++playerScore;
    results.textContent = `Wise choice - the ${playerChoice} brought you victory.`;
  } else {
    computerPoints.textContent = ++compScore;
    results.textContent = `Wrong choice.`;
  }
  checkWinner();
}

function checkWinner() {
  if (compScore === 5 || playerScore === 5) {
    if (compScore === playerScore) {
      updateWinner('tie')
    }else {
      let winner = `${(compScore > playerScore) ? 'computer' : 'player'}`;
      updateWinner(winner);
    }
  }
}

function updateWinner(winner){
  results.textContent = winnerResults[winner][0];
  results.style.color = winnerResults[winner][1];

  playButtons.forEach(button => {
    button.removeEventListener('click', getPlayerChoice);
  });
}