// Game Logic

var players = [];

var gameBoard = ['','','','','','','','',''];

var currentPlayer = 0;
var win = false
// query selectors

var playerTurn = document.querySelector('.banner-icon');
var gridSquareIds = document.querySelector('.play-grid');

var playGrid = document.querySelector('.play-grid');

var gridSquare = document.querySelector('.grid-square');

var player0Wins = document.querySelector('.player-0-wins');
var player1Wins = document.querySelector('.player-1-wins');
var banner = document.querySelector('h1');
var announcement = document.querySelector('.announcement')
// event listeners

window.addEventListener('load', function() {
  var triumphIcon = 'triumph'
  var ducatiIcon ='ducati'
  createPlayer('TRIUMPH', triumphIcon, true);
  createPlayer('DUCATI', ducatiIcon, false);
  // getRandomPlayer(players);
  showGrid();
  showPlayerTurn();

})

playGrid.addEventListener('click', function(event) {
  console.log('clicked square: ', event.target)
  if (win === true) {
    return
  }
  setCurrentPlayerTokenToGameBoardIndex(event);
  showGrid();
  if (checkForWin()) {
    increaseWins()
    announcement.innerText = `${players[currentPlayer].id} Wins!`;
    setTimeout(resetGame, 3000);
    // showPlayerTurn();
    displayWins();
    return
  } else if (checkForDraw(event)) {
    setTimeout(resetGame, 3000)
    // showPlayerTurn();
    displayWins();
    return
  }
  togglePlayerTurn();
  showPlayerTurn();
  displayWins();
})
 
  // checkForDraw();


// square0.addEventListener('click', showCurrentPlayerToken)


// functions

function createPlayer(id, token, turn) {
  var player = {
    id: id,
    token: token,
    wins: 0,
    turn: turn,
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
  console.log('currentPlayer in showPlayerTurn:',currentPlayer)
  // playerTurn.innerText = `It's Player ${players[currentPlayer].token}'s Turn`
  playerTurn.innerHTML = `<article><img class="banner-${players[currentPlayer].token}-icon" src="assets/${players[currentPlayer].token}_icon.png"/></article>`
}

function showGrid() {
  playGrid.innerHTML = '';
    for (var i = 0; i < gameBoard.length; i ++) {
      if (gameBoard[i] === '') {
        playGrid.innerHTML += `<article class="grid-square" id="square${i}"></article>`
      } else {
        playGrid.innerHTML += 
      `<article class="grid-square" id="square${i}"><img class="${gameBoard[i]}-icon" src="assets/${gameBoard[i]}_icon.png" alt="${gameBoard[i]} icon"</article>`
      }
      
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
  if (gameBoard[indexPosition] === '') {
    gameBoard[indexPosition] = players[currentPlayer].token
  };
}

function togglePlayerTurn() {
  if (currentPlayer === 0) {
    currentPlayer = 1;
  } else currentPlayer = 0;
}

function checkForWin() {
  // checks for row wins
  for (var i = 0; i < gameBoard.length; i +=3) {
    if (gameBoard[i] === gameBoard[i+1] && gameBoard[i+1] === gameBoard[i+2] && gameBoard[i] !== '') {
      console.log('currentPlayer in checkForWin:',currentPlayer)
      console.log(`player ${currentPlayer} wins!`)
      win = true;
      return true;
    }
  }
  // checks for column wins
  for (var i = 0; i < gameBoard.length; i ++) {
    if (gameBoard[i] === gameBoard[i+3] && gameBoard[i+3] === gameBoard[i+6] && gameBoard[i] !== '') {
      console.log(`player ${currentPlayer} wins!`)
      win = true;
      return true;
    } 
  }
  // checks for diagonal win
  if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== '') {
      console.log(`player ${currentPlayer} wins!`)
      win = true;
      return true;
  }
  // checks for diagonal win
  if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== '') {
      console.log(`player ${currentPlayer} wins!`)
      win = true;
      return true;
  } 
  return false
}

function increaseWins() {
  return players[currentPlayer].wins += 1;
}

function checkForDraw(event) {
  if (!gameBoard.includes('')) {
    console.log(`It's a DRAW!`)
    announcement.innerText = "It's a DRAW!"
    
    return true;
  }
}

function displayWins() {
  player0Wins.innerText = `Wins: ${players[0].wins}`
  player1Wins.innerText = `Wins: ${players[1].wins}`
  
}

function resetGame() {
  console.log('reset');
  console.log('players[0].turn: ',players[0].turn)
  
  if (players[0].turn === true) {
    console.log('TEST')
      currentPlayer = 1;
      players[0].turn = false;
    } else {currentPlayer = 0;
    players[0].turn = true}
  for (var i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] !== '') {gameBoard[i] = ''}
    announcement.innerText = '';
    showGrid();
  }
  showPlayerTurn();
  win = false;
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
