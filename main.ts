scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    music.buzzer.play()
    game.showLongText("Horray, you passed level 3!", DialogLayout.Bottom)
    game.over(true)
})
function initializeLevel2 () {
    myDart.stopDart()
    scene.setBackgroundImage(assets.image`background`)
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnTile(myDart.sprite, tiles.getTileLocation(2, 10))
    myDart.setTrace(true)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`boost`, function (sprite, location) {
    timer.throttle("action", 500, function () {
        myDart.throwDart()
        info.changeScoreBy(350)
        music.powerUp.play()
    })
})
function initializeLevel3 () {
    myDart.stopDart()
    scene.setBackgroundImage(assets.image`background`)
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnTile(myDart.sprite, tiles.getTileLocation(1, 12))
    myDart.setTrace(true)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    scene.cameraShake(4, 500)
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 500, function () {
        myDart.throwDart()
    })
})
function createDartMain () {
    myDart = darts.create(assets.image`dartMain`, SpriteKind.Player)
    info.setLife(3)
    info.setScore(0)
    myDart.angle = 45
    myDart.setTrace()
    myDart.controlWithArrowKeys(true)
    scene.cameraFollowSprite(myDart.sprite)
}
function initializeLevel1 () {
    scene.setBackgroundImage(assets.image`background`)
    tiles.setTilemap(tilemap`level1`)
    createDartMain()
    tiles.placeOnTile(myDart.sprite, tiles.getTileLocation(2, 11))
    game.showLongText("Use the arrow keys to aim where you want to go.", DialogLayout.Bottom)
    game.showLongText("Press space or A to throw the dart! There is a short cooldown before you can throw it again, so use it wisely!", DialogLayout.Bottom)
    game.showLongText("Use the green boost arrows to gain some more distance. Hitting bombs costs you a life, so watch out!", DialogLayout.Bottom)
    game.showLongText("Falling to low will end the game, so becareful. Now, here we go!", DialogLayout.Bottom)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    music.buzzer.play()
    game.showLongText("Great! You passed level 1!", DialogLayout.Bottom)
    initializeLevel2()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`bomb`, function (sprite, location) {
    timer.throttle("action", 500, function () {
        info.changeLifeBy(-1)
        info.changeScoreBy(-120)
        scene.cameraShake(4, 500)
        music.powerDown.play()
    })
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    music.buzzer.play()
    game.showLongText("Nice! You passed level 2!", DialogLayout.Bottom)
    initializeLevel3()
})
let myDart: Dart = null
game.showLongText("Welcome to Flying Darts!", DialogLayout.Full)
game.showLongText("To win, you must get to the target button at the end of each level.", DialogLayout.Full)
game.showLongText("Whatch out for red bombs, but aim for the green arrows!", DialogLayout.Full)
game.showLongText("Good luck, and have fun!", DialogLayout.Full)
initializeLevel1()
