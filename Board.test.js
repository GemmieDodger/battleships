const Board = require ('./Board');


describe('board', () => {
    test('create board', () => {
        const board = new Board();
        expect(board.ships.length).toBe(4)
        expect(board.board.length).toBe(25)
    })
    test('add ships to board', () => {
        const board = new Board();
        board.placeShips()
        var count = 0
        for( var i = 0; i < board.board.length ; i++ ){
            if(board.board[i] !== ''){
                count = count + 1 
            }
        }
        console.log(board.board)
        expect(count).toBe(11)
    })
})