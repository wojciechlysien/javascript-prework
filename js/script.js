
function playGame(playerInput) {

  function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.querySelector('.messages').appendChild(div);
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);


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
    if (playerMove == '1') {
      return 'kamień';
    } else if (playerMove == '2') {
      return 'papier';
    } else if (playerMove == '3') {
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
document.getElementById('papier').addEventListener('click', function () {
  playGame('2');
});
document.getElementById('kamień').addEventListener('click', function () {
  playGame('1');
});
document.getElementById('nożyce').addEventListener('click', function () {
  playGame('3');
});