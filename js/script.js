const playGame = function (playerInput) {
  function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  }

  const getMoveName = function (move) {
    if (move === 1) {
      return 'kamień';
    } else if (move === 2) {
      return 'papier';
    } else if (move === 3) {
      return 'nożyce';
    }
  };

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let playerMove = getMoveName(playerInput);
  let computerMove = getMoveName(randomNumber);
  const displayResult = function (argPlayerMove, argComputerMove) {

    if (argPlayerMove === argComputerMove) {
      printMessage('Remis')
    } else if ((argPlayerMove === 'papier' && argComputerMove === 'kamień') || (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') || (argPlayerMove === 'nożyce' && argComputerMove === 'papier')) {
      printMessage('Wygrales')
    } else printMessage('Przegrales')
  };
  displayResult(playerMove, computerMove);

};

document.getElementById('reset').addEventListener('click', () => {
  document.getElementById('messages').innerHTML = '';
});
document.getElementById('papier').addEventListener('click', () => { playGame(1) });
document.getElementById('kamień').addEventListener('click', () => { playGame(2) });
document.getElementById('nożyce').addEventListener('click', () => { playGame(3) });

