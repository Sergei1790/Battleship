import {Gameboard} from './classes';
// const gameboard = new Gameboard;
// console.log('asd', gameboard.createBoard()); 
console.log('asdasdasdasd');
const main = document.querySelector('main');
function displayBoard() {
    const gameboard = new Gameboard();

    const gameboardDisplay = document.createElement('div');
    const gameboardCells = document.createElement('div');


    gameboardDisplay.classList.add('sund-gameboard');
    gameboardCells.classList.add('sund-cells');

    gameboardDisplay.appendChild(gameboardCells);
    gameboard.createBoard().forEach((cells) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = cells.cell.row;
        cell.dataset.col = cells.cell.col;
        // cell.dataset.pos = JSON.stringify({
        //     col: cells.cell.col,
        //     row: cells.cell.row
        // });
        cell.addEventListener('click', (e) => {
            const row = e.target.dataset.row;
            const col = e.target.dataset.col;
            console.log(row, col);
            gameboard.receiveAttack(row, col);
            // Update UI to reflect the change
            e.target.classList.add('shot');
        });
        gameboardCells.appendChild(cell);
    })
    main.appendChild(gameboardDisplay);
    
}
// console.log(gameboard.board[9]);
displayBoard()