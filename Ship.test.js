const Ship = require ('./Ship')

describe('ship', () => {
    test('create ship', () => {
        const ship = new Ship(2)
        expect(ship.shipLength).toBe(2)
        expect(ship.name).toBe("Battleship")
    })
    test('hit a ship', () => {
        const ship = new Ship(2)
        ship.hit(1)
        expect(ship.hits[0]).toBe(0)
        expect(ship.hits[1]).toBe(1)
    })
    test('sunk ship', () => {
        const ship = new Ship(2)
        ship.hit(1)
        ship.hit(0)
        ship.isSunk()
        expect(ship.sunk).toBe(true)
    })
})