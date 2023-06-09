// Game Logic

var players = [];



// query selectors




// event listeners

window.addEventListener('load', function() {
  var triumphIcon = 'assets/triumph_motorcycles_icon.png'
  createPlayer('one', triumphIcon);
  createPlayer('two', 'O');
  getRandomPlayer(players);
  showPlayerTurn()
})

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

function getRandomPlayer(numPlayers) {
  var startingPlayer = Math.floor(Math.random() * numPlayers.length + 1);
  console.log('start:', startingPlayer);
  return startingPlayer
}

function showPlayerTurn() {
  playerTurn.innerText = `It's Player variable's Turn`
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