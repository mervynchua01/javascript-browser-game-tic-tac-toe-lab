/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.getElementById("message");
const boardEl = document.querySelector(".board");
const resetButton = document.getElementById("reset");

/*-------------------------------- Functions --------------------------------*/

function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  render();
}

function render() {
  updateBoard();
  updateMessage();
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

function handleClick(event) {
  const clickedElement = event.target;

  if (!clickedElement.classList.contains("sqr")) {
    return;
  }

  const squareIndex = clickedElement.id;

  if (board[squareIndex] !== "") {
    return;
  }

  if (winner) {
    return;
  }

  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

function placePiece(index) {
  board[index] = turn;
}

function checkForWinner() {
  winningCombos.forEach((combo) => {
    const pos1 = combo[0];
    const pos2 = combo[1];
    const pos3 = combo[2];

    if (
      board[pos1] !== "" &&
      board[pos1] === board[pos2] &&
      board[pos1] === board[pos3]
    ) {
      winner = true;
    }
  });
}

function checkForTie() {
  if (winner) {
    return;
  }

  if (board.includes("")) {
    tie = false;
  } else {
    tie = true;
  }
}

function switchPlayerTurn() {
  if (winner) {
    return;
  }

  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}

/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener("click", handleClick);
resetButton.addEventListener("click", init);
init();
