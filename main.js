// Game Logic

var players = [];

var gameBoard = ['','','','','','','','',''];

var currentPlayer = 0;

// query selectors

var playerTurn = document.querySelector('h1');
var gridSquareIds = document.querySelector('.play-grid');

var playGrid = document.querySelector('.play-grid')

var gridSquares = document.querySelectorAll('.grid-squares')

// event listeners

window.addEventListener('load', function() {
  var triumphIcon = '<img class="triumph-icon" src="assets/triumph_motorcycles_icon.png" alt="Triumph Icon"/>'
  var ducatiIcon ='<img class="ducati-icon" src="assets/ducati_icon.png" alt="Ducati Icon"/>'
  createPlayer('one', triumphIcon);
  createPlayer('two', ducatiIcon);
  // getRandomPlayer(players);
  showGrid();
  showPlayerTurn();

})

playGrid.addEventListener('click', function(event) {
  console.log('clicked square: ', event.target)
  setCurrentPlayerTokenToGameBoardIndex(event);
  showGrid();
  showPlayerTurn();
  checkForWin();
  togglePlayerTurn();
})

// square0.addEventListener('click', showCurrentPlayerToken)


// functions

function createPlayer(id, token) {
  var player = {
    id: id,
    token: token,
    wins: 0,
  }
  players.push(player)
  return players
}

// function getRandomPlayer(numPlayers) {
//   var startingPlayer = Math.floor(Math.random() * numPlayers.length + 1);
//   console.log('start:', startingPlayer);
//   return startingPlayer
// }

function showPlayerTurn() {
  playerTurn.innerText = `It's Player ${currentPlayer}'s Turn`
}

function showGrid() {
  playGrid.innerHTML = '';
    for (var i = 0; i < gameBoard.length; i ++) {
      playGrid.innerHTML += 
      `<article class="grid-square" id="square${i}">${gameBoard[i]}</article>`
  }

}


// function showCurrentPlayerToken() {
//   console.log('you clicked me')
  
//   square0.innerHTML = players[currentPlayer].token
//  '<img class="triumph-icon" src="assets/triumph_motorcycles_icon.png" alt="Triumph Icon"/>'
  
// }

function setCurrentPlayerTokenToGameBoardIndex(event) {
  var indexPos = event.target.closest('article').id
  var indexPosition = parseInt(indexPos.slice(-1))
  if (gameBoard[indexPosition] === '') {gameBoard [indexPosition] = players[currentPlayer].token};
}

function togglePlayerTurn() {
  if (currentPlayer === 0) {
    currentPlayer = 1;
  } else currentPlayer = 0;
}

function checkForWin() {
  for (var i = 0; i < gameBoard.length; i +=3) {
    if (gameBoard[i] === gameBoard[i+1] && gameBoard[i+1] === gameBoard[i+2] && gameBoard[i] !== '') {
      players[currentPlayer].wins += 1;
      console.log(`player ${currentPlayer} wins!`)
    }
  }
  for (var i = 0; i < gameBoard.length; i ++) {
    if (gameBoard[i] === gameBoard[i+3] && gameBoard[i+3] === gameBoard[i+6] && gameBoard[i] !== '') {
      players[currentPlayer].wins += 1;
      console.log(`player ${currentPlayer} wins!`)
    } 
  }
  if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== '') {
      players[currentPlayer].wins += 1;
      console.log(`player ${currentPlayer} wins!`)
  }
  if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== '') {
      players[currentPlayer].wins += 1;
      console.log(`player ${currentPlayer} wins!`)
  }
}
  
for (var i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === '') {
      console.log(`It's a DRAW!`)
    }
  }  

// var gameBoard = {{player},{player2}};
//  // cell num;
//  // open: default true;
//  // player:'';

// //wins
// //token
// //isTurn

// // cells 0 through 8

// // object players
//    moves:

// array of all the moves

// array of each player's moves

// function checkForWin
// array of winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

// function createPlayer(id, ) {
//   var player = {
//     id: id,
//     token: X,
//     wins: 0,
//   }
// }


