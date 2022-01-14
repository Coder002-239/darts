scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    scene.cameraShake(4, 500)
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
function createDartMain () {
    myDart = darts.create(assets.image`dartMain`, SpriteKind.Player)
    myDart.controlWithArrowKeys(true)
    myDart.angle = 45
    scene.cameraFollowSprite(myDart.sprite)
    tiles.placeOnTile(myDart.sprite, tiles.getTileLocation(2, 11))
}
let myDart: Dart = null
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`level1`)
createDartMain()
