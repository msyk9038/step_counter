input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showNumber(steps)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
let steps = 0
steps = 0
