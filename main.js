// Game Logic

var players = [];

var gameBoard = ['X','','O','','X','','O','',''];

var currentPlayer = 0;

// query selectors

var playerTurn = document.querySelector('h1');
var gridSquareIds = document.querySelector('.play-grid');

var playGrid = document.querySelector('.play-grid')

var gridSquares = document.querySelectorAll('.grid-squares')

// event listeners

window.addEventListener('load', function() {
  var triumphIcon = 'assets/triumph_motorcycles_icon.png'
  createPlayer('one', triumphIcon);
  createPlayer('two', 'O');
  // getRandomPlayer(players);
  showGrid();
  showPlayerTurn();
})

playGrid.addEventListener('click', function(event) {
  console.log('clicked square: ', event.target)
  showCurrentPlayerToken(event);
  togglePlayerTurn();
  showPlayerTurn();
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
      `<article class="grid-square" id="square${i}">
        <p>${gameBoard[i]}</p>
      </article>`
  }

}

function showCurrentPlayerToken() {
  console.log('you clicked me')
  
  square0.innerText = 'X'
 
  
}

function togglePlayerTurn() {
  if (currentPlayer === 0) {
    currentPlayer = 1;
  } else currentPlayer = 0;
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


