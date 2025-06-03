import {Gameboard} from './classes';
// const gameboard = new Gameboard;
// console.log('asd', gameboard.createBoard());
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
    });
    main.appendChild(gameboardDisplay);
}
// console.log(gameboard.board[9]);
displayBoard();

let draggableShip = null;
let startingPart = null;

document.querySelectorAll('.ship[draggable="true"]').forEach((ship) => {
    ship.querySelectorAll('.ship-part').forEach((part) => {
        part.addEventListener('mousedown', (event) => {
            startingPart = +event.target.dataset.part;
        });
    });
    ship.addEventListener('dragstart', () => {
        console.log('Drag started from part:', startingPart);
        draggableShip = ship;
    });
    ship.addEventListener('dragend', () => {
        draggableShip = null;
        startingPart = null;
    });
});

function getCellsForShip(cell, length, direction = 'horizontal', startingPart) {
    const startRow = +cell.dataset.row;
    const startCol = cell.dataset.col.charCodeAt(0) - 97;
    const cells = [];

    for (let i = 0; i < length; i++) {
        // Calculate the offset from the drop cell, so part at startingPart aligns with drop cell
        const offset = i - startingPart;

        const row = direction === 'horizontal' ? startRow : startRow + offset;
        const col = direction === 'horizontal' ? startCol + offset : startCol;

        const rowNum = row.toString();
        const columnLetter = String.fromCharCode(97 + col);

        const targetCell = document.querySelector(`.cell[data-row='${rowNum}'][data-col='${columnLetter}']`);

        if (targetCell) {
            cells.push(targetCell);
        }
    }
    return cells;
}

function markShipAdjacentCels(shipCells) {
    console.log('shipCells', shipCells);
    shipCells.forEach((cell) => {
        const startRow = +cell.dataset.row;
        const startCol = cell.dataset.col.charCodeAt(0) - 97;
        for (let r = -1; r < 2; r++) {
            for (let c = -1; c < 2; c++) {
                if (r === 0 && c === 0) continue; // skip the cell itself

                const adjacentRow = startRow + r;
                let adjacentCol = startCol + c;

                // Ensure col stays within a-z (assuming a 10x10 board, a-j)
                if (adjacentCol < 0 || adjacentCol > 9 || adjacentRow < 1 || adjacentRow > 10) continue;

                adjacentCol = String.fromCharCode(97 + adjacentCol);

                let adjacentCell = document.querySelector(`.cell[data-row='${adjacentRow}'][data-col='${adjacentCol}']`);
                adjacentCell.classList.add('occupied');
            }
        }
    });
}

function canPlaceShip(cell, length, direction = 'horizontal', startingPart) {
    const cells = getCellsForShip(cell, length, direction, startingPart);
    if (!cells || cells.length !== length) return false; // invalid placement (out of board)
    return !cells.some((cell) => cell.classList.contains('occupied'));
}

const dropTargets = document.querySelectorAll('.cell');

let lastHighlightedCells = [];

// Add event listeners to each drop target
dropTargets.forEach((cell) => {
    // Allow the dragged element to be dropped by preventing the default behavior
    cell.addEventListener('dragover', (event) => {
        event.preventDefault();
        if (!draggableShip || startingPart === null) return; // safety check

        lastHighlightedCells.forEach((cellEl) => {
            cellEl.style.backgroundColor = '';
        });
        const shipLength = parseInt(draggableShip.dataset.length);
        const direction = 'horizontal';

        const cells = getCellsForShip(cell, shipLength, direction, startingPart);
        const isValid = cells.length === shipLength && canPlaceShip(cell, shipLength, direction, startingPart);

        cells.forEach((cellEl) => {
            cellEl.style.backgroundColor = isValid ? '#f0f0f0' : '#ffcccc';
        });
        lastHighlightedCells = cells;
    });

    // Handle when the dragged element is dropped
    cell.addEventListener('drop', (event) => {
        event.preventDefault(); // Prevent default to allow the drop

        const shipLength = parseInt(draggableShip.dataset.length);
        const direction = 'horizontal';
        const isValid = lastHighlightedCells.length === shipLength && canPlaceShip(cell, shipLength, direction, startingPart);
        lastHighlightedCells.forEach((cellEl) => {
            cellEl.style.backgroundColor = '';
        });
        if (!isValid) {
            console.log('Invalid drop - ship placement not allowed here.');
            return;
        }

        let placedShip = lastHighlightedCells;
        console.log(placedShip);
        placedShip.forEach((cellEl) => {
            cellEl.classList.add('ship', 'occupied');
        });
        markShipAdjacentCels(placedShip);

        // Retrieve the ID of th dragged element

        // // Find the dragged element using its ID
        // const draggedElementId = event.dataTransfer.getData('text/plain');
        // const draggedElement = document.getElementById(draggedElementId);

        // // Append the dragged element to the current cell
        // event.target.appendChild(draggedElement);

        // // Reset the cell's style after the drop
        // event.target.style.backgroundColor = '';

        // console.log(`Dropped element with ID: ${draggedElementId} into cell`);
    });

    // Optional: Reset the background color when the dragging leaves the target
    cell.addEventListener('dragleave', () => {
        lastHighlightedCells.forEach((cellEl) => {
            cellEl.style.backgroundColor = '';
        });
    });
});
