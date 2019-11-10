const playGame = function (playerInput) {

  function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let playerMove = getMoveName(playerInput);
  let computerMove = getMoveName(randomNumber);

  const getMoveName = function (playerMove, computerMove) {

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
  const displayResult = function (argPlayerMove, argComputerMove) {

    if (argPlayerMove === argComputerMove) {
      printMessage('Remis')
    } else if ((argPlayerMove === 'papier' && argComputerMove === 'kamień') || (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') || (argPlayerMove === 'nożyce' && argComputerMove === 'papier')) {
      printMessage('Wygrales')
    } else printMessage('Przegrales')
  }
  displayResult(playerMove, computerMove);

  function clearMessages() {
    document.getElementById('messages').innerHTML = '';
  }
  // let testReset = document.getElementById('reset');

  testReset.document.getElementById('reset').addEventListener('click', clearMessages);

  document.getElementById('papier').addEventListener('click', playGame);
  document.getElementById('kamień').addEventListener('click', playGame);
  document.getElementById('nożyce').addEventListener('click', playGame);
}





