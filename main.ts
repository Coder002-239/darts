scene.onOverlapTile(SpriteKind.Player, assets.tile`boost`, function (sprite, location) {
    timer.throttle("action", 500, function () {
        myDart.throwDart()
        music.powerUp.play()
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    scene.cameraShake(4, 500)
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
function createDartMain () {
    myDart = darts.create(assets.image`dartMain`, SpriteKind.Player)
    myDart.angle = 45
    myDart.controlWithArrowKeys(true)
    myDart.setTrace(true)
    info.setLife(3)
    scene.cameraFollowSprite(myDart.sprite)
    tiles.placeOnTile(myDart.sprite, tiles.getTileLocation(2, 11))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`bomb`, function (sprite, location) {
    scene.cameraShake(4, 500)
    timer.throttle("action", 500, function () {
        myDart.angle += -10
        info.changeLifeBy(-1)
    })
})
let myDart: Dart = null
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`level1`)
createDartMain()
