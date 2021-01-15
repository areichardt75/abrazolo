def abrazol():
    basic.pause(1000)
    basic.clear_screen()
    for idx in range(0,5):
        for idy in range(0,5):
            akt = tabla[idx][idy];
            if akt == 1:
                led.plot(idx, idy);
    basic.pause(1000)
    basic.clear_screen()
    
                

basic.show_leds("""
    # . . . .
    . # # # #
    . # # . .
    . # . # #
    . # . # #
    """)
tabla = [[0, 1, 0, 0, 1], 
    [1, 0, 1, 1, 1], 
    [0, 1, 0, 0, 0], 
    [1, 0, 0, 1, 0], 
    [0, 0, 1, 0, 0]]
basic.pause(1000);
basic.clear_screen();

def on_forever():
    abrazol();
    pass
basic.forever(on_forever)
