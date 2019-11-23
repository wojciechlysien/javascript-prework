const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
}

const game = {
  playerHand: '',
  aiHand: '',
}

const hands = [...document.querySelectorAll('.select img')];

//First function:
function handSelection() {
  game.playerHand = this.dataset.option;
  //console.log(game.playerHand);
  hands.forEach(hand => hand.style.boxShadow = '');
  this.style.boxShadow = '0 0 0 4px gray';
}

//A function that determines the selection of a computer:
function aiChoice() {
  return hands[Math.floor(Math.random() * 3)].dataset.option;
}

// A function that returns information about the result of the game:
function checkResult(player, ai) {
  // console.log(player, ai);
  if (player === ai) {
    return 'draw'
  } else if ((player === 'Paper' && ai === 'Stone') || (player === 'Stone' && ai === 'Scissors') || (player === 'Scissors' && ai === 'Paper')) {
    return 'win'
  } else { return 'loss' }
}


// Publication of the result:
function publishResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;

  document.querySelector('[data-summary="ai-choice"]').textContent = ai;
  document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

  if (result === "win") {
    document.querySelector('p.wins span').textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = "You win!!!!"
    document.querySelector('[data-summary="who-win"]').style.color = "green";
  } else if (result === "loss") {
    document.querySelector('p.losses span').textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent = "Computer Win :("
    document.querySelector('[data-summary="who-win"]').style.color = "red";
  } else {
    document.querySelector('p.draws span').textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = "Draw :\\"
    document.querySelector('[data-summary="who-win"]').style.color = "gray";
  }
}
function endGame() {
  document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
  game.playerHand = '';
  game.aiHand = '';
}

// Control function:
function startGame() {
  if (!game.playerHand) {
    return alert('Choice hand!!!')
  }
  game.aiHand = aiChoice()
  const gameResult = checkResult(game.playerHand, game.aiHand);
  //console.log(gameResult);
  publishResult(game.playerHand, game.aiHand, gameResult);

  endGame()
}

hands.forEach(hand => hand.addEventListener('click', handSelection))


document.querySelector('.start').addEventListener('click', startGame)

