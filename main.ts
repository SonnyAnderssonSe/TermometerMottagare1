radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("")
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
})
let MinTemp = 0
let MaxTemp = 0
radio.setGroup(22)
basic.showIcon(IconNames.Square)
MaxTemp = input.temperature()
MinTemp += input.temperature()
