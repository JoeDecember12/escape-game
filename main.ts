input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.Y, 1)
    if (player.get(LedSpriteProperty.Y) == 4) {
        game.addScore(1)
        player.delete()
        guard_1.delete()
        guard_2.delete()
        player = game.createSprite(2, 0)
        guard_1 = game.createSprite(randint(0, 4), 1)
        guard_2 = game.createSprite(randint(0, 4), 2)
    }
    if (game.score() == 10) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (game.isPaused()) {
        game.resume()
    } else {
        game.pause()
    }
})
let guard_2: game.LedSprite = null
let guard_1: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 0)
guard_1 = game.createSprite(randint(0, 4), 1)
guard_2 = game.createSprite(randint(0, 4), 2)
game.setScore(0)
game.startCountdown(20000)
basic.forever(function () {
    if (player.isTouching(guard_1) || player.isTouching(guard_2)) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
        game.gameOver()
    } else {
        guard_1.move(1)
        guard_2.move(1)
        guard_1.ifOnEdgeBounce()
        guard_2.ifOnEdgeBounce()
        basic.pause(500)
    }
})
