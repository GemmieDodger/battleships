const Ship = require('./Ship');

class Board {
    constructor() {
        this.ships = []
        this.count = 0
        this.board = []
        for (var i = 0; i < 25; i++) {
            this.board[i] = ''
        }
        const shipOptions = [5, 3, 2, 1]
        for (var i = 0; i < shipOptions.length; i++) {
            this.ships[i] = new Ship(shipOptions[i])
        }
    }
    getRandomNumber(min, max) {
        const random = Math.floor(Math.random() * (max - min + 1) + min)
        if(this.board[random] === ''){
            return random
        } 
    }
    markShipPosition(startingPosition, endPoint, shipKey) {
        for (var i = startingPosition; i < endPoint; i++) {
            this.board[i] = shipKey
            //the number on the board is the key of which ship is hidden there
        }
        this.ships[shipKey].placed =  true
        console.log(this.count)
        if(this.count === this.ships.length) {
            console.log(this.board)
            return
        }
    }

    getShipKey(startingPosition, endPoint, shipLength) {
        for (var j = 0; j < this.ships.length; j++) {
            if (this.ships[j].shipLength === shipLength && this.ships[j].placed === false) {
                const shipKey = j
                this.markShipPosition(startingPosition, endPoint, shipKey)
            }
        }
    }
    getEndPosition(startingPoint, shipLength) {
        const endPoint = startingPoint + shipLength
        // console.log('start ' + startingPoint + ' shipLength' + shipLength )
        // console.log('end position = ' +endPoint)
        if(endPoint <= this.board.length -1) {
            return endPoint
        } else {
        // console.log('end position length : ' + shipLength)
        // console.log('end position end point' + endPoint)
        this.getStartPosition(shipLength)
        }
    }
    getStartPosition(shipLength) {
        const startingPoint = this.getRandomNumber(0, this.board.length - 1)
        const endPoint = this.getEndPosition(startingPoint, shipLength)
        this.checkPosition(startingPoint, endPoint, shipLength);
        }
    

    checkPosition(startingPoint, endPoint, shipLength) {
        var count = 0
        for (var i = startingPoint; i <= endPoint; i++) {
            if (count === shipLength) {

                    this.getShipKey(startingPoint, endPoint, shipLength)
                } else if (this.board[i] !== 0 && this.board[i] !== 1 && this.board[i] !== 2 && this.board[i] !== 3 ) {
                    count = count + 1
                } else {
                    count = 0
                    this.getStartPosition(shipLength)
                    break
                }
            }
    }

    placeShips() {
        for (var i = 0; i < this.ships.length; i++) {
            const shipLength = this.ships[i].shipLength
            //this is as expected
            this.getStartPosition(shipLength)
        }
    }
}


module.exports = Board