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
displayBoard();

const draggableShip = document.querySelector('.ship[draggable="true"]');
draggableShip.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    console.log("Drag started on element:", event.target.id);
});

const dropTargets = document.querySelectorAll('.cell');

function canPlaceShip(cell, ship, length, direction = 'horizontal'){
    const startRow = cell.dataset.row;
    const startCol = cell.dataset.col.charCodeAt(0) - 97; 
    for (let i = 0; i < length; i++) {
        const row = direction === 'horizontal' ? startRow : startRow + i;
        const col = direction === 'horizontal' ? startCol + i : startCol;
        const columnLetter = String.fromCharCode(97 + col); 

        const targetCell = document.querySelector(`.cell[data-row='${row}'][data-col='${columnLetter}']`);
        console.log('Checking target cell:', targetCell);


        if (targetCell) {
            targetCell.appendChild(ship); // Append the ship to each target cell
            targetCell.classList.add('occupied'); // Mark the cell as occupied
        }
        
    }
}

// Add event listeners to each drop target
dropTargets.forEach(cell => {
    // Allow the dragged element to be dropped by preventing the default behavior
    cell.addEventListener('dragenter', (event) => {
        const shipLength = parseInt(draggableShip.dataset.length);
        // Check if there is enough space to place the ship
        if (canPlaceShip(cell, draggableShip, shipLength)) {
            event.target.style.backgroundColor = '#f0f0f0';  // Highlight the cell when dragging over
        } else {
            event.target.style.backgroundColor = '#ffcccc'; // Red highlight if no space
        }
    });
    cell.addEventListener('dragover', (event) => {
        event.preventDefault(); // Necessary to allow dropping
        

    });
  
    // Handle when the dragged element is dropped
    cell.addEventListener('drop', (event) => {
      event.preventDefault(); // Prevent default to allow the drop
  
      // Retrieve the ID of the dragged element
      
      // Find the dragged element using its ID
      const draggedElementId = event.dataTransfer.getData('text/plain');
      const draggedElement = document.getElementById(draggedElementId);
      
      // Append the dragged element to the current cell
      event.target.appendChild(draggedElement);
      
      // Reset the cell's style after the drop
      event.target.style.backgroundColor = '';
  
      console.log(`Dropped element with ID: ${draggedElementId} into cell`);
    });
  
    // Optional: Reset the background color when the dragging leaves the target
    cell.addEventListener('dragleave', (event) => {
      event.target.style.backgroundColor = '';
    });
  });
  