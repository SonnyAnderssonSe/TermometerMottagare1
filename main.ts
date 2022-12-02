radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    basic.pause(2000)
    basic.showString("C")
    basic.showIcon(IconNames.Square)
    if (receivedNumber < MinTemp) {
        MinTemp = receivedNumber
    }
    if (receivedNumber > MaxTemp) {
        MaxTemp = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.showString("" + (MinTemp))
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.showString("" + (MaxTemp))
    basic.pause(500)
})
let MinTemp = 0
let MaxTemp = 0
radio.setGroup(22)
basic.showIcon(IconNames.Square)
MaxTemp = input.temperature()
MinTemp += input.temperature()
