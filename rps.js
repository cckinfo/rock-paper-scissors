function computerPlay() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Scissors";
      break;
    case 3:
      return "Paper";
  }
}

console.log(computerPlay());