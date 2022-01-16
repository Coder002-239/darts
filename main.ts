scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    music.buzzer.play()
    game.over(true)
})
function initializeLevel2 () {
    scene.setBackgroundImage(assets.image`background`)
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnTile(myDart.sprite, tiles.getTileLocation(2, 10))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`boost`, function (sprite, location) {
    timer.throttle("action", 500, function () {
        myDart.throwDart()
        info.changeScoreBy(350)
    })
})
function initializeLevel3 () {
    scene.setBackgroundImage(assets.image`background`)
    tiles.setTilemap(tilemap`level3`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    scene.cameraShake(4, 500)
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
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
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    music.buzzer.play()
    initializeLevel2()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`bomb`, function (sprite, location) {
    timer.throttle("action", 500, function () {
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
    })
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    music.buzzer.play()
    initializeLevel3()
})
let myDart: Dart = null
initializeLevel1()
