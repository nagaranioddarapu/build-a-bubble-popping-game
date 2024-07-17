controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
scene.onHitWall(SpriteKind.Bubble, function (sprite, location) {
    bubble.stick_to_wall(sprite, location)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tilt_angle(bubble.Choice.Right)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Left)
})
bubble.createBoard()
bubble.load_bubble()
let mySprite = sprites.create(io2_images.joy, SpriteKind.Player)
mySprite.top = 102
