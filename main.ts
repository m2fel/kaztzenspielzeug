input.onGesture(Gesture.Shake, function () {
    let Vogelgezwitscher: string[] = []
    music.playSoundEffect(Vogelgezwitscher._pickRandom(), SoundExpressionPlayMode.UntilDone)
})
