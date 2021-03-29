class Ship {
    constructor(length, coordsArr) {
        this.shipLength = length
        this.hits = []
        this.coords = coordsArr
        this.name = ''
        this.placed = false
        this.sunk = false

        for(var i =0; i < this.shipLength; i++){
            this.hits[i] = 0
        }
        if (this.shipLength === 1) {
            this.name =  'Tug'
        } else if (this.shipLength === 3) {
            this.name = 'Submarine'
        } else if (this.shipLength === 5) {
            this.name = 'Cruiser'
        } else {
            this.name = 'Battleship'
        }
    }

    hit(num) {
        this.hits[num] = 1
    }

    isSunk(){
        var count = 0
        for(var i = 0; i < this.shipLength; i++){
            if(this.hits[i] === 1){
            count = count + 1
            }
        }
        if(count === this.shipLength){
            this.sunk = true
        }
    }
}

module.exports = Ship

// theodinproject.com/courses/javascript/lessons/battleship