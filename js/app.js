/*-------------------------------- Constants --------------------------------*/
init();


/*---------------------------- Variables (state) ----------------------------*/

let board
let turn
let winner
let tie

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.getElementById("message");

/*-------------------------------- Functions --------------------------------*/

function init(params) {
  board = ["","","","","","","","",""]
  turn = 'X'
  winner = false
  tie = false
  render ()
  console.log('Game initialised')
}


/*----------------------------- Event Listeners -----------------------------*/
