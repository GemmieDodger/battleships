const Ship = require ('./Ship')

describe('ship', () => {
    test('create ship', () => {
        const ship = Ship(2)
        console.log(ship)
        expect(ship.length).toBe(2)
        // expect(ship.shipName).toBe("Battleship")
        expect(ship.name).toBe("Battleship")
    })
})