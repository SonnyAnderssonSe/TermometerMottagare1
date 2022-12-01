radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Square)
    basic.showString("" + (receivedNumber))
    basic.showString("C")
})
radio.setGroup(22)
basic.showIcon(IconNames.Square)
