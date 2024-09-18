import {describe, expect, test} from '@jest/globals';
import { Ship, Gameboard } from './classes';
describe('Create Ship', () => {
    test('Ship size', () => {
        expect(new Ship(1).size).toBe(1); // Check that the length is 1
        expect(() => new Ship(5)).toThrow('Ship size must be greater than 0 and less than 5');
    });
    test('hit() should increment the hits count', () => {
        const ship = new Ship(3);
        ship.hit();
        expect(ship.hits).toBe(1);
    });
    test('isSunk() should return true if hits equal length', () => {
        const ship = new Ship(3);
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});
describe('Gameboard', () => {
    let gameboard;
    beforeAll(() => {
        gameboard = new Gameboard();
        gameboard.createBoard();
    });
    test('should create a game board with 10 rows and 10 columns', () => {

        
        expect(gameboard.board).toHaveLength(100); // 10 rows * 10 columns = 100 cells

        // Check the structure of the first cell
        expect(gameboard.board[0]).toEqual({
            cell: { col: 'a', row: 1, isShoot: false }
        });

        // Check the structure of the last cell
        expect(gameboard.board[99]).toEqual({
            cell: { col: 'j', row: 10, isShoot: false }
        });

        // Check some random cells to verify the structure
        expect(gameboard.board[9]).toEqual({
            cell: { col: 'a', row: 10, isShoot: false }
        });
        expect(gameboard.board[19]).toEqual({
            cell: { col: 'b', row: 10, isShoot: false }
        });
    });
    test('Gameboard receiveAttack', () => {
        expect(gameboard.board[19]).toEqual({
            cell: { col: 'b', row: 10, isShoot: false }
        });
    })
});

