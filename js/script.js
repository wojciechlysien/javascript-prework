function printMessage(msg) {
  var div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
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


console.log(computerMove)
// if (randomNumber == 1) {
//   computerMove = 'kamień';
// }
// else if (randomNumber == 2) {
//   computerMove = 'papier';
// } else if (randomNumber == 3) {
//   computerMove = 'nożyce';
// }

printMessage('Mój ruch to: ' + computerMove);

// let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);


console.log(playerMove)
// if (playerInput == '1') {
//   playerMove = 'kamień';
// } else if (playerInput == '2') {
//   playerMove = 'papier';
// } else if (playerInput == '3') {
//   playerMove = 'nozyce';
// }

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argPlayerMove, argComputerMove) {
  if (argPlayerMove === argComputerMove) {
    printMessage('Remis')
  } else if ((argPlayerMove === 'papier' && argComputerMove === 'kamień') || (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') || (argPlayerMove === 'nożyce' && argComputerMove === 'papier')) {
    printMessage('Wygrales')
  } else printMessage('Przegrales')
}
displayResult(playerMove, computerMove);


