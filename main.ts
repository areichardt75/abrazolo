function abrazol() {
    let akt: number;
    basic.pause(1000)
    basic.clearScreen()
    for (let idx = 0; idx < 5; idx++) {
        for (let idy = 0; idy < 5; idy++) {
            akt = tabla[idx][idy]
            if (akt == 1) {
                led.plot(idx, idy)
            }
            
        }
    }
    basic.pause(1000)
    basic.clearScreen()
}

basic.showLeds(`
    # . . . .
    . # # # #
    . # # . .
    . # . # #
    . # . # #
    `)
let tabla = [[0, 1, 0, 0, 1], [1, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 0, 1, 0], [0, 0, 1, 0, 0]]
basic.pause(1000)
basic.clearScreen()
basic.forever(function on_forever() {
    abrazol()
    
})
