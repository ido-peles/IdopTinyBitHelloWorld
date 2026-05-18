input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.SmallHeart)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showString("B")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("AHH!")
})
basic.forever(function () {
	
})
