export class Ship{
    constructor(size){
        if (size <= 0 || size > 4) {
            throw new Error('Ship size must be greater than 0 and less than 5');
        }
        this.size = size;
        this.hits = 0;
        this.sunk = false;
    }
    hit(){
        this.hits++;
        this.isSunk();
        console.log(this.isSunk());
    }
    isSunk(){
        this.sunk = (this.size === this.hits); 
        return this.sunk; 
    }
}

export class Gameboard{
    constructor(){
        this.size = 10;
        this.board = [];
    }
    createBoard() {
        for (let row = 1; row <= 10; row++) {
            for (let col = 0; col < 10; col++) {
                this.board.push({
                    cell: {
                        col: String.fromCharCode(97 + col), // Column letter ('a' to 'j')
                        row: row.toString(), // Row number (1 to 10)
                        shot: false
                    }
                })
            }
        }
        console.log(this.board);
        return this.board;
    }
    receiveAttack(row, col){
        const attackedCell = this.board.find(cells => cells.cell.row === row && cells.cell.col === col);
        if (attackedCell) {
            attackedCell.cell.shot = true;
            console.log(`Attack received on cell:`, attackedCell);
        } else {
            console.log(`No cell found at row ${row} and column ${col}`);
        }
        return attackedCell;
    }
}
