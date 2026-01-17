/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.getElementById("message");

/*-------------------------------- Functions --------------------------------*/

function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  render();
  console.log("Game initialised");
}

function updateBoard() {
  board.forEach((cell, index) => {
    const square = squareEls[index];
    square.textContent = cell;
  });
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.textContent = `Player ${turn}'s turn`;
  } else if (winner === false && tie === true) {
    messageEl.textContent = `It is a tie!`;
  } else {
    messageEl.textContent = `Player ${turn} wins!`;
  }
}

function render() {
  updateBoard();
  updateMessaeg();
}

/*----------------------------- Event Listeners -----------------------------*/

init();
