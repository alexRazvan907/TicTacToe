// Define Variables
const x_player = 'X';
const o_player = 'O';

const msgX = document.getElementById('xWon');
const msgO = document.getElementById('oWon');

const resetBtn = document.getElementById('reset');

let xTurn = true;



// Define Functions
const table = () =>  Array.from(document.getElementsByClassName('box'));
// Replace the id from b0(example) to 0 and also transform it into a integer
const boxId = (boxEl) => Number.parseInt(boxEl.id.replace('b', ''))
const emptyCells = () => table().filter(cell => cell.innerHTML === '')

const takeTurn = (index, letter) => table()[index].innerText = letter;
const opponentChoice = () => boxId(emptyCells()[Math.floor(Math.random() * emptyCells().length)])



const handleClick = (e) => {
    var cell = e.target;
    /*
    if(xTurn) {
        cell.innerHTML = x_player;
    } else {
        cell.innerHTML = o_player;
    }
    changeTurns();
    */
   /*
   cell.innerHTML = xTurn ? x_player : o_player;
   */
   cell.innerText = x_player;

   opponentTurn();

   checkForWin();
}

const opponentTurn = () => {
    disableClick();
    setTimeout(() => {
        takeTurn(opponentChoice(), o_player);
        cellClick();
        checkForWin();
        }, 1000)

}


const xWon = () => msgX.style.display = "block";

const oWon = () => msgO.style.display = "block";


const checkForWin = () => {
    const x_cells = table().map(eachEl => eachEl.innerText == x_player);
    const o_cells = table().map(eachEl => eachEl.innerText == o_player);
    /* 0 1 2 */
    if ((x_cells[0] && x_cells[1] && x_cells[2])) {
        xWon();
        disableClick();
    } else if (o_cells[0] && o_cells[1] && o_cells[2]) {
        oWon();
        disableClick();
    /* 3 4 5 */
    } else if ((x_cells[3] && x_cells[4] && x_cells[5])) {
        xWon();
        disableClick();
    } else if (o_cells[3] && o_cells[4] && o_cells[5]) {
        oWon();
        disableClick();
    /* 6 7 8 */
    } else if ((x_cells[6] && x_cells[7] && x_cells[8])) {
        xWon();
        disableClick();
    } else if (o_cells[6] && o_cells[7] && o_cells[8]) {
        oWon();
        disableClick();
    /* 0 4 8 */
    } else if ((x_cells[0] && x_cells[4] && x_cells[8])) {
        xWon();
        disableClick();
    } else if (o_cells[0] && o_cells[4] && o_cells[8]) {
        oWon();
        disableClick();
    /* 2 4 6 */
    } else if ((x_cells[2] && x_cells[4] && x_cells[6])) {
        xWon();
        disableClick();
    } else if (o_cells[2] && o_cells[4] && o_cells[6]) {
        oWon();
        disableClick();
    } 
    /* 0 3 6 */
    else if ((x_cells[0] && x_cells[3] && x_cells[6])) {
        xWon();
        disableClick();
    } else if (o_cells[0] && o_cells[3] && o_cells[6]) {
        oWon();
        disableClick();
    } 
     /* 1 4 7 */
     else if ((x_cells[1] && x_cells[4] && x_cells[7])) {
        xWon();
        disableClick();
    } else if (o_cells[1] && o_cells[4] && o_cells[7]) {
        oWon();
        disableClick();
    } 
     /*  2 5 8 */
     else if ((x_cells[2] && x_cells[5] && x_cells[8])) {
        xWon();
        disableClick();
    } else if (o_cells[2] && o_cells[5] && o_cells[8]) {
        oWon();
        disableClick();
    } 
}
/* Define Event Listeners */
const cellClick = () => table().forEach(cellEl => cellEl.addEventListener('click', handleClick, {once: true}) )
const disableClick = () => table().forEach(cellEl => cellEl.removeEventListener('click', handleClick) )

resetBtn.addEventListener("click", () => {
    location.reload();
})

cellClick();


