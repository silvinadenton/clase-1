input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(100)
    basic.clearScreen()
})
basic.showString("Hello!")
basic.pause(200)
basic.showIcon(IconNames.Happy)
basic.clearScreen()
