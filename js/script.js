const summary = {
  wins: 0,
  losses: 0,
  draws: 0,
}
const game = {
  playerMove: '',
  computerMove: '',
}


const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
  game.playerMove = this.dataset.option;
  hands.forEach(hand => hand.style.boxShadow = '');
  this.style.boxShadow = '0 0 0 4px green';
}

hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.play').addEventListener('click', playGame)


function playGame(playerInput) {
  if (!game.playerMove) {
    return alert('Zaznacz dłoń!!!')
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.querySelector('.messages').appendChild(div);
  }

  let playerMove = getMoveName(playerInput);
  let computerMove = getMoveName(randomNumber);
  function getMoveName(playerMove, computerMove) {

    if (computerMove == 1) {
      return 'kamień';
    }
    else if (computerMove == 2) {
      return 'papier';
    } else if (computerMove == 3) {
      return 'nożyce';
    }
    if (playerMove == 1) {
      return 'kamień';
    } else if (playerMove == 2) {
      return 'papier';
    } else if (playerMove == 3) {
      return 'nożyce';
    }
  }
  printMessage('Mój ruch to: ' + computerMove);

  printMessage('Twój ruch to: ' + playerMove);

  function displayResult(argPlayerMove, argComputerMove) {
    if (argPlayerMove === argComputerMove) {
      printMessage('Remis')
    } else if ((argPlayerMove === 'papier' && argComputerMove === 'kamień') || (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') || (argPlayerMove === 'nożyce' && argComputerMove === 'papier')) {
      printMessage('Wygrales')
    } else printMessage('Przegrales')
  }

  displayResult(playerMove, computerMove);
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

document.querySelector('.play').addEventListener('click', playGame)