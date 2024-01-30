enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Dead
}
namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Cloud = SpriteKind.create()
}
function transition (time: number) {
    wintereffects.startCustomEffect(myEffect, 60)
    timer.after(2500, function () {
        wintereffects.stopCustomEffect(myEffect)
    })
    pause(time)
}
function initRaptor () {
    raptor = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................ffffffff........
        ...............ffffffffff.......
        ..............fff1fffffff.......
        ..............fffffffffff.......
        ..............fffffffffff.......
        ..............fffffffffff.......
        ..............ffffff............
        ..f...........fffffffff.........
        ..f..........ffffff.............
        ..ff........fffffff.............
        ..fff......ffffffffff...........
        ..ffff...ffffffffff.f...........
        ..fffff.fffffffffff.............
        ..fffffffffffffffff.............
        ...ffffffffffffffff.............
        ....ffffffffffffff..............
        .....ffffffffffff...............
        ......ffffffffff................
        .......ffff...ff................
        ........ff.....f................
        ........f......f................
        ........ff.....ff...............
        ................................
        ................................
        ................................
        `, SpriteKind.Player)
    run = animation.createAnimation(ActionKind.Walking, 100)
    run.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................ffffffff........
        ...............ffffffffff.......
        ..............fff1fffffff.......
        ..............fffffffffff.......
        ..............fffffffffff.......
        ..............fffffffffff.......
        ..............ffffff............
        ..f...........fffffffff.........
        ..f..........ffffff.............
        ..ff........fffffff.............
        ..fff......ffffffffff...........
        ..ffff...ffffffffff.f...........
        ..fffff.fffffffffff.............
        ..fffffffffffffffff.............
        ...ffffffffffffffff.............
        ....ffffffffffffff..............
        .....ffffffffffff...............
        ......ffffffffff................
        .......fffffffff................
        ........ff.....f................
        .........f.....ff...............
        .........ff.....ff..............
        ................................
        ................................
        ................................
        `)
    run.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................ffffffff........
        ...............ffffffffff.......
        ..............fff1fffffff.......
        ..............fffffffffff.......
        ..............fffffffffff.......
        ..............fffffffffff.......
        ..............ffffff............
        ..f...........fffffffff.........
        ..f..........ffffff.............
        ..ff........fffffff.............
        ..fff......ffffffffff...........
        ..ffff...ffffffffff.f...........
        ..fffff.fffffffffff.............
        ..fffffffffffffffff.............
        ...ffffffffffffffff.............
        ....ffffffffffffff..............
        .....ffffffffffff...............
        ......ffffffffff................
        .......fffffffff................
        ........ff....ff................
        .........ff....f................
        ...............ff...............
        ................................
        ................................
        ................................
        `)
    animation.attachAnimation(raptor, run)
    jump = animation.createAnimation(ActionKind.Jumping, 200)
    jump.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................66666666........
        ...............6666666666.......
        ..............66616666666.......
        ..............66666666666.......
        ..............66666666666.......
        ..............66666666666.......
        ..............666666............
        ..6...........666666666.........
        ..66.........666666.............
        ..666.......6666666.............
        ..6666.....6666666666...........
        ..66666..6666666666.6...........
        ..66666666666666666.............
        ..66666666666666666.............
        ....666666666666666.............
        .....6666666666666..............
        ......66666666666...............
        .......666666666................
        ........666...66................
        ........66.....6................
        ........6......6................
        ........66.....66...............
        ................................
        ................................
        ................................
        `)
    animation.attachAnimation(raptor, jump)
    dead = animation.createAnimation(ActionKind.Dead, 200)
    dead.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................ffffffff........
        ...............f111ffffff.......
        ..............ff1f1ffffff.......
        ..............ff111ffffff.......
        ..............fffffffffff.......
        ..............fffffffffff.......
        ..............ffffff............
        ..............fffffffff.........
        .............ffffff.............
        ..f.........fffffff.............
        ..ff.......ffffffffff...........
        ..fff....ffffffffff.f...........
        ..ffff..fffffffffff.............
        ..fffffffffffffffff.............
        ....fffffffffffffff.............
        .....fffffffffffff..............
        ......fffffffffff...............
        .......fffffffff................
        ........fff...ff................
        ........ff.....f................
        ........f......f................
        ........ff.....ff...............
        ................................
        ................................
        ................................
        `)
    animation.attachAnimation(raptor, dead)
    raptor.z = 80
    raptor.setPosition(43, 94)
}
info.onCountdownEnd(function () {
    game.showLongText("Press A five times to continue. 1/5", DialogLayout.Full)
    game.showLongText("Press A five times to continue. 2/5", DialogLayout.Full)
    game.showLongText("Press A five times to continue. 3/5", DialogLayout.Full)
    game.showLongText("Press A five times to continue. 4/5", DialogLayout.Full)
    game.showLongText("Press A five times to continue. 5/5", DialogLayout.Full)
    if (difficultyBeaten == 1) {
        game.showLongText("The Chromosaur was once a proud and powerful member of his tribe. However, he became arrogant and selfish, neglecting his duty to his tribe. His tribe was one of the most powerful and influential in the land, but their arrogance and abuse of power led to their downfall.", DialogLayout.Full)
        blockSettings.writeNumber("Beginner", 1)
    } else if (difficultyBeaten == 2) {
        game.showLongText("The Chromosaur stumbled upon a gateway that led to a virtual world that the Chromeosaurs had created, called \"Chromeoasis\", where they could play and rule without any interference from the outside world. The virtual world of Chromeoasis was created by the Chromeosaurs as a way to escape from the outside world, which they saw as a threat to their power.", DialogLayout.Full)
        blockSettings.writeNumber("Intermediate", 2)
    } else if (difficultyBeaten == 3) {
        game.showLongText("As soon as the Chromosaur entered Chromeoasis, a massive meteorite crashed into the Earth, causing a cataclysmic event that wiped out all of the Chromeosaurs, except for him. The meteorite was caused by a rival tribe of Chromeosaurs, who sought to eliminate their competition and take control of the land. The Chromosaur was the only one who managed to survive their attack. The meteorite also caused the gateway to malfunction, trapping him inside the virtual world.", DialogLayout.Full)
        blockSettings.writeNumber("Hard", 3)
    } else if (difficultyBeaten == 4) {
        game.showLongText("The curse that trapped the Chromosaur in Chromeoasis was meant to preserve his knowledge and wisdom for future generations, as he was one of the last Chromeosaurs who possessed such powerful abilities. The curse was meant to keep him alive and his knowledge intact until a time when it could be passed on to the next generation. The virtual world decayed and became corrupted, transforming the Chromosaur into a pixelated dinosaur that roamed the endless desert of Chromeoasis. He was cursed to forever run and jump, unable to break free from the virtual world.", DialogLayout.Full)
        blockSettings.writeNumber("Impossible", 4)
    } else if (difficultyBeaten == 5) {
        game.showLongText("You are the champion of the Dinosaur Trials. Congratulations!", DialogLayout.Full)
        blockSettings.writeNumber("Ridonkulous", 5)
    }
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    end = 1
    animation.setAction(raptor, ActionKind.Dead)
    pause(50)
    if (difficultyBeaten == 0) {
        game.gameOver(true)
    } else {
        game.gameOver(false)
    }
})
function theGround () {
    ground1 = sprites.create(img`
        ...................................................................................ffff...........................................................................
        ..................................................................................f1111f..........................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffff....fffffffffffffffffffffffffffffffffffffffffffffffffffff
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11ffff11f11111111111111111111111f11ffff1111111111111111111111111ffff11f1111111111111f11111111111111111111111111ffff11f11111111111f11fff11111111111111111f11fff1111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111ffff11f1111111111111111111111111ffff1f1111111f11111111111111ff1f11111111ffff11f11111ffff11f111111111111111111f111111111111111ffff11f111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.Ground)
    ground2 = sprites.create(img`
        .....................................................................ffff..........ffff...........................................................................
        ....................................................................f1111f........f1111f..........................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffff111111fffffffffffffffff....fffffffffffffffffffffffffffffffffffffffffffffffffffff
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11ffff11f11111111111111111111111f11ffff1111111111111111111111111ffff11f1111111111111f11111111111111111111111111ffff11f11111111111f11fff11111111111111111f11fff1111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111ffff11f1111111111111111111111111ffff1f1111111f11111111111111ff1f11111111ffff11f11111ffff11f111111111111111111f111111111111111ffff11f111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.Ground)
    ground1.setPosition(scene.screenWidth() / 2, 120)
    ground2.setPosition(ground1.x + scene.screenWidth(), 120)
    ground1.vx = -100
    ground2.vx = -100
    ground1.z = 2
    ground2.z = 2
}
let cloud: Sprite = null
let cactus: Sprite = null
let choice = 0
let ground2: Sprite = null
let ground1: Sprite = null
let dead: animation.Animation = null
let jump: animation.Animation = null
let run: animation.Animation = null
let raptor: Sprite = null
let list: Image[][] = []
let difficultyBeaten = 0
let end = 0
let ready = false
let myMenu: miniMenu.MenuSprite = null
let myEffect: effects.ScreenEffect = null
game.setDialogFrame(img`
    ..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..
    .fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf.
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf
    fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddf
    .fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddf.
    ..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddf..
    ..........................................................fbbddf..
    ...........................................................fbbdf..
    ............................................................fbbf..
    .............................................................fbf..
    ..............................................................ff..
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
myEffect = wintereffects.customScaledEffect(
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b d b . . . 
    . . . . . . . . . b d 1 c c . . 
    . . . . . . . . . b 1 1 1 d c . 
    . . . . . . . . . b 1 1 d b c . 
    . . . . . . . . b 1 1 c c c . . 
    . . . . . . . b 1 1 c . . . . . 
    . . . . . . b 1 1 c . . . . . . 
    . . . . . b 1 1 c . . . . . . . 
    . . . b b 1 1 c . . . . . . . . 
    . b b 1 1 1 c . . . . . . . . . 
    b 1 1 1 1 c . . . . . . . . . . 
    . b b 1 d c . . . . . . . . . . 
    . . c d b c . . . . . . . . . . 
    . . . c c . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . b d b . . . . . . . . . . 
    . . c c 1 d b . . . . . . . . . 
    . c d 1 1 1 b . . . . . . . . . 
    . c b d 1 1 b . . . . . . . . . 
    . . c c c 1 1 b . . . . . . . . 
    . . . . . c 1 1 b . . . . . . . 
    . . . . . . c 1 1 b . . . . . . 
    . . . . . . . c 1 1 b . . . . . 
    . . . . . . . . c 1 1 b b . . . 
    . . . . . . . . . c 1 1 1 b b . 
    . . . . . . . . . . c 1 1 1 1 b 
    . . . . . . . . . . c d 1 b b . 
    . . . . . . . . . . c b d c . . 
    . . . . . . . . . . . c c . . . 
    . . . . . . . . . . . . . . . . 
    `],
wintereffects.SpawnDirection.TopLeft,
100,
100,
300,
10
)
scene.setBackgroundImage(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeefceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfeeeeeeeeee
    eeeeeeeefceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfeeeeeeeeee
    eeeeeeccffceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffcceeeeeeee
    eeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeee
    eeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeee
    eedfffcccccffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffcccccfffdeeee
    eedfffcccccffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffcccccfffdeeee
    effccccccccccccfdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedfccccccccccccffeee
    effccccccccccccfdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedfccccccccccccffeee
    effccccccccccccfdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedfccccccccccccffeee
    effccccccccccccfdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedfccccccccccccffeee
    effccccccccccccfdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedfccccccccccccffeee
    eedfcccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccccfdeeee
    eedfcccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccccfdeeee
    eedffffffffffffbbbbbbbeeeeebbbbbbbbeeeeeeeeebbbbbbbbbbbbbbeeeeebbbbbbbbbbbbeeebbbbbbbeeeeeeeedbbbbbbdeeebbbbbbbbbbbbbbeeeeeebbbbbbbbbeeeeeeebbbffffffffffffdeeee
    eedffffffffffffffffffceeeedffffffffeeeeeeeeefffffffffffffceeeeeffffffffffffeeefffffffeeeeeeeedffffffbeeefffffffffffffceeeeeecffffffffeeeeeeefffffffffffffffdeeee
    eedffffffffffffffffffceeeedffffffffeeeeeeeeefffffffffffffceeeeeffffffffffffeeefffffffeeeeeeeedffffffbeeefffffffffffffceeeeeecffffffffeeeeeeefffffffffffffffdeeee
    eeeecfcccccff44ddddd4efffff4dddddd4fffffffff4ddddddddddd4efffff4ddddddddd4bfff44ddd44fffffffff4dddd4cfff4ddddddddddd44ffffffe4ddddd44fffffff44d44ffcccccfceeeeee
    eeeecfcccccff44ddddd4efffff4dddddd4fffffffff4ddddddddddd4efffff4ddddddddd4bfff44ddd44fffffffff4dddd4cfff4ddddddddddd44ffffffe4ddddd44fffffff44d44ffcccccfceeeeee
    eeeecfcccccff44dddddddbbbbbddddddddbbbbbbbbbddddddddddddddbbbbbddddddddddddbbbdddddddbbbbbbbbbddddddbbbbddddddddddddddbbbbbbdddddddddbbbbbbbddd44ffcccccfceeeeee
    eeeecfcccccff44ddddddd44444dddddddd444444444dddddddddddddd44444dddddddddddd444ddddddd44444444dddddddd444dddddddddddddd444444ddddddddd4444444ddd44ffcccccfceeeeee
    eeeecfcccccff44ddddddd44444dddddddd444444444dddddddddddddd44444dddddddddddd444ddddddd44444444dddddddd444dddddddddddddd444444ddddddddd4444444ddd44ffcccccfceeeeee
    eeeecfcccccff44dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44ffcccccfceeeeee
    eeeecfcccccff44dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44ffcccccfceeeeee
    eeeeeeffcccccff4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ffcccccffeeeeeeee
    eeeeeeffcccccff4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ffcccccffeeeeeeee
    eeeeeeffcccccff4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ffcccccffeeeeeeee
    eeeeeeffcccccff4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ffcccccffeeeeeeee
    eeeeeeffcccccff4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222dddddddddddddd4ffcccccffeeeeeeee
    eeeeeeffcccccff4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222dddddddd222dd4ffcccccffeeeeeeee
    eeeeeeffcccccff4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222dddddd22222dd4ffcccccffeeeeeeee
    eeeeeeffcccccff4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222dddd222222dd4ffcccccffeeeeeeee
    eeeeeeffcccccff4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222dd2222222ddd4ffcccccffeeeeeeee
    eeeeeeffcccccffbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222222dddddbffcccccffeeeeeeee
    eeeeeeeeffcccccfb4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222dddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222222222dddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4dddddddddddddddddddddddddddddddddddddddddddddddddffffdddddddddddddddddddddddddddddddddddddddddddddddd2222222222222dddddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4dddddddddddddddddddddddddddddddddddddddddddddddffffffddddddffffffffffffffdddddddddddddddddddddddddddd2222222222222dddddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4dddddddddddddddddddddddddddddddddddddddddddddffffffffddddddffffffffffffffdddddddddddddddddddddddddddd222222dddd2222ddddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4ddddddddddddddddddddddddddddddddddddddddddddfffffffddddddddffffffffffffffdddddddddddddddddddddddddddd222ddddddd22222dddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4ddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222ddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4ddddddddddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222dddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222dddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddfffdddddd22222ddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddffffdddddd22222dd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfbbddddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddffffffddddddddddddddddddddddfffffdddddd22222ddbbfcccccffeeeeeeeeee
    eeeeeeeeebfcccccff44dddddddddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddfffffffddddddddddddddddddddfffffddddddd222244ffcccccfbeeeeeeeeeee
    eeeeeeeeebfcccccff44dddddddddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddddfffffffdddddddddddddddddfffffdddddddddddd44ffcccccfbeeeeeeeeeee
    eeeeeeeeebfcccccff44ddddddddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddddddfffffffdddddddddddddddfffffddddddddddddd44ffcccccfbeeeeeeeeeee
    eeeeeeeeebfcccccff44dddddddddddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddddddfffffddddddddddddddfffffdddddddddddddd44ffcccccfbeeeeeeeeeee
    eeeeeeeeebfcccccff44dddddddddddddddddddddddddddddddffffdddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddfffffffdddddddddddddd44ffcccccfbeeeeeeeeeee
    eeeeeeeeebfcccccff44ddddddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffddddddddddddddd44ffcccccfbeeeeeeeeeee
    eeeeeeeeebfcccccff44ddddddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffddddddddddddddddd44ffcccccfbeeeeeeeeeee
    eeeeeeeeebfcccccff44ddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffddddddddddddddddddd44ffcccccfbeeeeeeeeeee
    eeeeeeeeebfcccccff44ddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44ffcccccfbeeeeeeeeeee
    eeeeeeeeebfcccccff44dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44ffcccccfbeeeeeeeeeee
    eeeeeeeeebfcccccff44dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44ffcccccfbeeeeeeeeeee
    eeeeeeeeebfcccccff44dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44ffcccccfbeeeeeeeeeee
    eeeeeeeeebfcccccff44dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44ffcccccfbeeeeeeeeeee
    eeeeeeeeebfcccccff44dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44ffcccccfbeeeeeeeeeee
    eeeeeeeecccccccfeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeefccccccceeeeeeeeee
    eeeeeeeeffcccccfb4dddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4ddddddddddddddddddddddddddffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4dddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4dddddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4ddddddddddddddddddddddddffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4dddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4dddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4dddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4dddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4bfcccccffeeeeeeeeee
    eeeeeeeeffcccccfb4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4bfcccccffeeeeeeeeee
    eeeeeeccfccccffeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeffccccfcceeeeeeee
    eeeeeeffcccccff4ddddddddddddddddffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ffcccccffeeeeeeee
    eeeeeeffcccccff4dddddddddddddfffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ffcccccffeeeeeeee
    eeeeeeffcccccff4dddddddddddfffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ffcccccffeeeeeeee
    eeeeeeffcccccff4dddddddddfffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ffcccccffeeeeeeee
    eeeeeeffcccccff4dddddddddffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ffcccccffeeeeeeee
    eeeeeeffcccccff4dddddddddffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ffcccccffeeeeeeee
    eeeeeeffcccccff4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ffcccccffeeeeeeee
    eeeeeeffcccccff4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ffcccccffeeeeeeee
    eeeeeeffcccccff4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ffcccccffeeeeeeee
    eeeecfcccccff44ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddb4ffcccccfceeeeee
    eeeecfcccccff44dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44ffcccccfceeeeee
    eeeecfcccccff44dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44ffcccccfceeeeee
    eeeecfcccccff44ddd4444444ddddddddd444444dddddddddddddd444ddddddddd444444444ddddddd444dddddddddd44444dddddddddddddd444444444dddddddd44444ddddddd44ffcccccfceeeeee
    eeeecfcccccff44ddd4444444ddddddddd444444dddddddddddddd444ddddddddd444444444ddddddd444dddddddddd44444dddddddddddddd444444444dddddddd44444ddddddd44ffcccccfceeeeee
    eeeecfcccccff44d44fffffff44ddddd4effffffb4ddddddddddd4fffc4dddddd4fffffffff4dddd4efff44ddddddd4fffffe4ddddddddddd4fffffffff4dddddd4fffffe4ddddd44ffcccccfceeeeee
    eeeecfcccccff44d44fffffff44ddddd4effffffb4ddddddddddd4fffc4dddddd4fffffffff4dddd4efff44ddddddd4fffffe4ddddddddddd4fffffffff4dddddd4fffffe4ddddd44ffcccccfceeeeee
    eedcfffffffffffcffdddddddffcccccfcddddddcfccccccccccffdddbfcccccffdddddddddffcccfcdddffcccccccfdddddcfccccccccccffdddddddddffcccccfbddddcfcccccfffffffffffcdeeee
    eedfffffffffffffffeeeeeeeffffffffceeeeeecfffffffffffffeeebffffffffeeeeeeeeeffffffceeeffffffffffeeeeecfffffffffffffeeeeeeeeeffffffffdeeeecffffffffffffffffffdeeee
    eedfffffffffffffffeeeeeeeffffffffceeeeeecfffffffffffffeeebffffffffeeeeeeeeeffffffceeeffffffffffeeeeecfffffffffffffeeeeeeeeeffffffffdeeeecffffffffffffffffffdeeee
    eedfcccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccccfdeeee
    eedfcccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcccccccccfdeeee
    effccccccccccccfdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedfccccccccccccffeee
    effccccccccccccfdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedfccccccccccccffeee
    effccccccccccccfdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedfccccccccccccffeee
    effccccccccccccfdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedfccccccccccccffeee
    effccccccccccccfdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedfccccccccccccffeee
    eedfffcccccffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffcccccfffdeeee
    eedfffcccccffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffcccccfffdeeee
    eeebbbfffffbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbfffffbbbeeeee
    eeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeee
    eeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeee
    eeeeeeeefceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfeeeeeeeeee
    eeeeeeeefceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
let mySprite = sprites.create(img`
    ................ffff............................................................................................................................................
    ............ffffffffffff........................................................................................................................................
    ........ffffffccbbbbccfff.......................................................................................................................................
    ......fffffcbddddddddddcfff.....................................................................................................................................
    ....ffffcddddddbccccbdddbff.....................................................................................................................................
    ...fffcdddddbcffffffffcddbffb...................................................................................................................................
    ...fcddddddcfffcb111bfffddbffb..................................................................................................................................
    ..ffbdddcbdcf111111111fffddcf1............................................................ffff..................................................................
    ..ffcdcffbdbfd11db....bffbdbfc1...............................ffff...........f...........ffcfff.................................................................
    ...ffffffbdbfb1.........fcdbff1......ff.......fffff.........fffffff.......fffffc........ffbddffb...........................ffffffffffff.........................
    ....ccbdfbdbfb1.........fcddffcc....fffff.....fcccff......fffcbdbcff.....ffcbbffb.......ffdddcf1d.....................ffffffffccccbbccff........................
    .....d11fcdbfc1b........fbdbfffff..ffbbff.....fbddcfb....ffcddddddcff..fffbdddff1b......fcdddbff1.....fff............fffcccbddddddddddbff.......................
    ......bbfcdbfc1b.......ffbdbfbdff..fcddcfbb...fbddcfbd..ffbddddddddcfcffcddddbff11.....ffdddddff1....fffff...fffff.fffcddddddddddddddddcfd......................
    ........fcdbfc1b.......ffddcfbdcfcdfcddbfc1...fbdbff11.ffbdddbfbdddcfffcdddbcffb11.....fcddbddff1d...fbdffb.ffbcffffbddddddbbccfffffbddff1d.....................
    ........fcdbfb1b.......fcddffbdbfc1fcdddfc1...fcdbfc1bfcdddbfffffbdcffcdddcfffc11d....ffddbcddcfbd..ffddff1dfcddcffddddddbffffffffffddbff11.....................
    ........fcdbfc1b......ffddcffbdbfc1fcdddff1b..ffdbfc1ffdddbfff1ffddcfcddbfffb1111b....ffddffddbfc1..fbdcfc1dfdddcffbdbcddcffc1111ffbddcfc11.....................
    ........fcddfc1b.....ffbddfffbdcfb1fbdddcfbb..ffddfccfbddcffc11bfddffdddfff11111b....ffbdbffbdbff1bffddcfb1cfdddbfffffcddff11111ffbddbff11d.....................
    ........fbddff1b....ffcddcfcfddcfbcfbdddbfc1..ffddfffbddbffb111fcddfbddcfc1111.......ffddfffcddff1bfcdbff11fcdddbfffffcddff11dbffbddbffb11b.....................
    .......cfbdbfc1b....ffddbfcbfddcfdffdddddff1..ffddffcdddffb111bfbdbfbddffffccf......ffbdbfcfcddcf11fbdcff1cfddddbff11fbdbff11fffbddbffb11d......................
    ........fbdbfb11...ffbddff1fcddff1ffdddddcfbb.ffbdcfbddcfc111bffddcfcddbcffffffff...fcddff1ffddbfcdfddcfbbfcddddbff1dfbdbfc1cfcdddbffb111b......................
    .......cfbdbfc1b..cfcddcff1fcddcfdfcddcdddffd..fbdcfdddff111bffbddfffdddddddbbcfff.ffddbfffffdddffffddcfcfcddbddbff1dfbdbfccfcdddcffd111b.......f...............
    .......ffddcf11b..ffddbfc11cfddcfffbddfbddbfcb.fbdccddbff11cffcddcffffcdddddddddcfffcddcffcffbddcccfddcffcddbfdddfffdfbdbfcfcdddcff1dbcffffffffffff.............
    .......ffddcf11b.ffdddff111bfdddcffddbffdddcfc.fbdcfdddffffffbddbffddffffccbdddddcfcddddddddddddddcfddbfcddbffdddbcfcfbddfcfbddcffffffffffccccbbbcff............
    .......ffddcf11.ffbddcfd11d.fcddbffddcffcdddcfffddcfbdddcccbdddbffb11d1cffffffcddbfddddddbbcccdddcffbdddddbfffcdddbfffcddfffbddbccccbbddddddddddbcfcd...........
    .......ffddcf1cffbddcfc111..ffcccfcddcfcfbdddfffddcffddddddddbcffc111..1dcdbfffddbdddcffffffffcdddbbcddddcffbcfcbbffbfcddcffcddddddddddddbbcccfffff11b..........
    .......ffddcfcffbddcfc111....fffffcddff1ffbdddcbddcffcdddddbcfffd111b..ffffffcbddbddcffffcbd1cfbddddccdbcffd11fffffc1ffddbfffcbdddbdbccffffffffcfc111b..........
    .......ffddcfffbddcfc111b.....bd1fbddff1dffbdddddbffbfffcfffffd1111b...fcbbbddddcddbff11111111ffccccffffffd111b.cc111dfbddcfcfffffffffffcbdd111111111...........
    .......ffddcfcdddcff111b.......b1fcddcffd.ffcdddbffd1dcffffcd1111d.....fbdddddcffddffd11111bb..ffffffbccc111d...d1111bffbdff11bcfcccc111111111111bdb............
    .......ffbdddddbffc111d..fff.....fcdddff1..fffccffb11db11111111d.......ffbbccfffffffb111........d1111111111d......bb...fffff11d1111111111ddb....................
    .......ffbddddbffc111cffffffff...ffddbff1d..bffffd111...bd111b..........ffffffc1cfcb111..........11111dbbbb.............cffd11..bdddbdb.........................
    ........fcddddffbffffffcbbdbff....fffffc11...d1d1111b....................cbbd111111111b..................................d111d..................................
    ........ffcccfffffffcbddddddbfcb...fffd11d....bd111......................b11111db.bdb.....................................b1d...................................
    .........fffffffcbdddddddbbdbfc1....11111b.................................bb...................................................................................
    .....fffffffcbbddddddbccffffffb1b...bd1d....................................................................................fffffffffffffffffffffffffff.........
    ..ffffffccbdddddddbcfffffccffd11b...........................................................................................f6666666666666666666666666f.........
    .ffccbdddddddddddffffcd111111111..........................fffff.............................................................f6666666666666666666666666f.........
    .fcdddddddbbcfbddfc11111111bdd1...........................ffcfff.........................ff..............................ffff6666666666666666666666666fffff.....
    ffbddddbcfffffbdbfb11ddb.....ffffffffffff................ffbddffb......fff.............fffff.............................f66666666666666666666666666666666f.....
    ffcdbcfffffbcfddcf11d...ffffffffcccbbccfff....fff........ffdddcf1b...ffffff..........fffcbcfc............................f66666666666666666666666666666666f.....
    .fffffff1111ffddcf11..fffcfcbdddddddddddfff..fffff.......fcdddbfc1...fcddffb........ffcdddcffd........................ffff666666fffff666666666666666666666f.....
    ..fffd111111fcddff11ffffbdddddddddddddddbffd.fbdff......ffdddddfc1..ffdddcfbd......ffbddddcfb1b.......................f666666666f111f666666666666666666666f.....
    ...d11111d..fcddff1cfcbddddddbcccffffcddbff1bfbdcfbd....fcddbddff1b.ffdddcff1.....ffddddccff11d.......................f666666666f111f666666666666666666666f.....
    ....d1d.....fcddff1fcddddddcffffffcffcddcfc1dfbdbfc1...ffddbcddcfdb..fbddcfc1....ffbddbffffd11b.......................f666666666f111f666666666666666666666f.....
    ............fbddff1fcddcddbfffc1111ffddbff11dfbdbfb1b..ffddffddbfc1..fbddcfc1d..ffbddcfff11111........................f666666666fffff666666666666666666666f.....
    ............fbdbfb1bffffddcff1111bffdddcff11bfbdcfb1b.ffbdbffbdbff1..fbddff11b..fcddcffc1111d.........................f66666666666666666666666666666666666f.....
    ...........ffddbfd11ffffddcfc11dcfcdddcff111ffddcfb1b.ffddfffcddff1b.fbddff11b.ffddbffb1111...........................f66666666666666666666666666666666666f.....
    ...........ffddcf11b.bcfddcfc11ffcdddcffd11dffddcf11bffbdbfcfcddcf11.fddbff11..fcddbfffccc............................f66666666666666666666666666666666666f.....
    ...........ffddcf11...cfddcfb1ffbdddfff1111.fcddff11.fcddff1ffddbfb1.fddbff11..ffdddcffffffff.........................f66666666666666666666666666666666666f.....
    ...........fcddff11...ffddffbcfbddbfff111d..fcddcfc1ffddbfffffdddfffffddbfc11ffffbddddddbbcffff.......................f66666666666666666666666666666666666f.....
    ...........fcddff1d...ffddffbfbddbffcdbccfffffddcffffcddcffcffbddcccfcddbfffffcbdbcbddddddddbffc......................f66666666666666666666666666666666666f.....
    ...........fcddff1d...ffddcfffdddffffffffffcccdddbcfcddddddddddddddcffdddfffcdddbffffcccbddddbffb.....................f66666666666666666666666666666666666f.....
    ...........fcddfc1d....fddcffcdddccccbbbddddddddddbfddddddbbcccdddcfffbdddddddbcfffbcffffffbddffdb....................f66666666666666666666666666666666666f.....
    ...........fcddfc11....fbdbfffddddddddddddbbbcccccfdddcffffffffcdddbbffddddddcfffb111bbdcffcddffd1....................f6666666666666666666fffffffffffffffff.....
    ...........fcddfc1b....fcddcfffcdddddbcccfffffffffbddcffffcbd1cfbddddcfcbccffffb111dffffffbddbff11....................f6666666666666666666f.....................
    ...........fcddffcb....ffdddffffffffffffffcbd111ffddbff11111111ffccccfffffffff11111cfbbbddddbffc11....................f6666666666666666666ffffffffff............
    ...........fcddbcfb.....fcdbff1dcccfccc111111111ffddff111111bb..ffffffd1bb1111111b.ffdddddbcffc111....................f6666666666666666666666666666f............
    ...........ffdddcfdb.....ffffc11d1111111111dbb..fffffb111........dd11111dd11111d...ffcbbcffffb111b....................f6666666666666666666666666666f............
    ...........ffcddcf11......ffc11d..bbdddbb........ffcd111..........11111d..bb........fffffffb1111d..................ffff6666666666666666666666666666f............
    ............fffffc11......b1111b..................b1111b..............................cbd11111db...................f6666666666666666666fffffffffffff............
    .............fffc111........d1d....................bdb................................d11111db.....................f6666666666666666666f........................
    ..............11111d.............................................................fffff..bb......................ffff6666666666666666666f........................
    ...............d11d..............................................................f666f..........................f6666666666666666666666f........................
    .................................................................................f666f..........................f6666666666666666666666f........................
    .................................................................................f666f..........................f6666666666666666666666f........................
    .................................................................................f666ffff....................ffff6666666666666666666666fffffff..................
    .................................................................................f666666f....................f6666666666666666666666666666666f..................
    .................................................................................f666666f....................f6666666666666666666666666666666f..................
    .................................................................................f666666ffff...........fffffff6666666666666666666666666666666f..................
    .................................................................................f666666666f...........f6666666666666666666666666666666fff666f..................
    .................................................................................f666666666f...........f6666666666666666666666666666666f.f666f..................
    .................................................................................f666666666ffff....fffff6666666666666666666666666666666f.f666f..................
    .................................................................................f666666666666f....f66666666666666666666666666666666666f.fffff..................
    .................................................................................f666666666666f....f66666666666666666666666666666666666f........................
    .................................................................................f666666666666ffffff66666666666666666666666666666666666f........................
    .................................................................................f66666666666666666666666666666666666666666666666666666f........................
    .................................................................................f66666666666666666666666666666666666666666666666666666f........................
    .................................................................................f66666666666666666666666666666666666666666666666666666f........................
    .................................................................................fffffff66666666666666666666666666666666666666666666666f........................
    .......................................................................................f66666666666666666666666666666666666666666666666f........................
    .......................................................................................f66666666666666666666666666666666666666666666666f........................
    .......................................................................................ffff66666666666666666666666666666666666666666ffff........................
    ..........................................................................................f66666666666666666666666666666666666666666f...........................
    ..........................................................................................f66666666666666666666666666666666666666666f...........................
    ..........................................................................................ffff66666666666666666666666666666666666ffff...........................
    .............................................................................................f66666666666666666666666666666666666f..............................
    .............................................................................................f66666666666666666666666666666666666f..............................
    .............................................................................................ffff6666666666666666666666666666fffff..............................
    ................................................................................................f6666666666666666666666666666f..................................
    ................................................................................................f6666666666666666666666666666f..................................
    ................................................................................................ffff6666666666fffffffff666666f..................................
    ...................................................................................................f6666666666f.......f666666f..................................
    ...................................................................................................f6666666666f.......f666666f..................................
    ...................................................................................................f6666666ffff.......ffff666f..................................
    ...................................................................................................f6666666f.............f666f..................................
    ...................................................................................................f6666666f.............f666f..................................
    ...................................................................................................f6666ffff.............f666f..................................
    ...................................................................................................f6666f................f666f..................................
    ...................................................................................................f6666ffff.............f666fffff..............................
    ...................................................................................................f6666666f.............f6666666f..............................
    ...................................................................................................f6666666f.............f6666666f..............................
    ...................................................................................................f6666666f.............f6666666f..............................
    ...................................................................................................fffffffff.............fffffffff..............................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.Player)
let myMenu2 = miniMenu.createMenu(
miniMenu.createMenuItem("Play", img`
    f f f . . . . . . . . . . . . . 
    f d b f f . . . . . . . . . . . 
    f d d d b f f . . . . . . . . . 
    f d d d d d b f f . . . . . . . 
    f d d d d d d d b f f . . . . . 
    f d d d d d d d d d b f f . . . 
    f d d d d d d d d d d d b f f . 
    f d d d d d d d d d d d d d b f 
    f d d d d d d d d d d d d b f f 
    f d d d d d d d d d d b f f . . 
    f d d d d d d d d b f f . . . . 
    f d d d d d d b f f . . . . . . 
    f d d d d b f f . . . . . . . . 
    f d d b f f . . . . . . . . . . 
    f b f f . . . . . . . . . . . . 
    f f . . . . . . . . . . . . . . 
    `),
miniMenu.createMenuItem("Story", img`
    8 8 8 8 8 8 8 8 8 8 . . . . . . 
    8 6 6 6 6 6 6 6 6 6 8 . . . . . 
    8 6 6 6 6 6 6 6 6 6 1 8 . . . . 
    8 6 f f f f f f 6 6 1 8 . . . . 
    8 6 6 6 6 6 6 6 6 6 1 8 . . . . 
    8 6 f f f f f f 6 6 1 8 . . . . 
    8 6 6 6 6 6 6 6 6 6 1 8 . . . . 
    8 6 f f f f f f 6 6 1 8 . . . . 
    8 6 6 6 6 6 6 6 6 6 1 8 . . . . 
    8 6 6 6 6 6 6 6 6 6 1 8 . . . . 
    8 6 6 6 6 6 6 6 6 6 1 8 . . . . 
    8 6 6 6 6 6 6 6 6 6 1 8 . . . . 
    . 8 d d d d d d d d d 8 . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
)
myMenu2.setFrame(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . 
    . . . . f . . . . . f . . . . 
    . . . . f . . . . . f . . . . 
    . . . . f . . . . . f . . . . 
    . . . . f . . . . . f . . . . 
    . . . . f . . . . . f . . . . 
    . . . . f f f f f f f . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `)
myMenu2.setPosition(7, 63)
myMenu2.onButtonPressed(controller.A, function (selection, selectedIndex) {
    if (selection == "Play") {
        transition(2000)
        myMenu2.close()
        sprites.destroy(mySprite)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        scene.setBackgroundColor(12)
        myMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("Endless", img`
            f f f f f f f f f f f f f f f f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d d c c c d d d c c c d d b f 
            f d c d d e c d c d d e c d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d d c c c c c c c c c d d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f b b b b b b b b b b b b b b f 
            f f f f f f f f f f f f f f f f 
            `),
        miniMenu.createMenuItem("Beginner", img`
            f f f f f f f f f f f f f f f f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d d c c c d d d c c c d d b f 
            f d c d d d c d c d d d c d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d c d d d d d d d d d c d b f 
            f d c d d d d d d d d d c d b f 
            f d d c c c c c c c c c d d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f b b b b b b b b b b b b b b f 
            f f f f f f f f f f f f f f f f 
            `),
        miniMenu.createMenuItem("Intermediate", img`
            f f f f f f f f f f f f f f f f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d c c c c c d c c c c c d b f 
            f d c 5 5 5 c d c 5 5 5 c d b f 
            f d c c c c c d c c c c c d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d c d d d d d d d d d c d b f 
            f d d c c c c c c c c c d d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f b b b b b b b b b b b b b b f 
            f f f f f f f f f f f f f f f f 
            `),
        miniMenu.createMenuItem("Hard", img`
            f f f f f f f f f f f f f f f f 
            f d d d d d d d d d d d d d b f 
            f d d d c c d d d c c d d d b f 
            f d d d d c c d c c d d d d b f 
            f d c c c c c c c c c c c d b f 
            f d c 5 5 5 c d c 5 5 5 c d b f 
            f d c c c c c d c c c c c d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d c d d d d d d d d d c d b f 
            f d c d d d d d d d d d c d b f 
            f d d c c c c c c c c c d d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f b b b b b b b b b b b b b b f 
            f f f f f f f f f f f f f f f f 
            `),
        miniMenu.createMenuItem("Impossible", img`
            f f f f f f f f f f f f f f f f 
            f d d d d d d d d d d d d d b f 
            f d d d c c d d d c c d d d b f 
            f d d d d c c d c c d d d d b f 
            f d c c c c c c c c c c c d b f 
            f d c 2 2 2 c d c 2 2 2 c d b f 
            f d c c c c c d c c c c c d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f d c d d d d d d d d d d d b f 
            f d c d d d d d d d d d d d b f 
            f d c c c c c c c c c c d d b f 
            f d d d d d d d d d d d d d b f 
            f d d d d d d d d d d d d d b f 
            f b b b b b b b b b b b b b b f 
            f f f f f f f f f f f f f f f f 
            `),
        miniMenu.createMenuItem("Ridonkulous", img`
            f f f f f f f f f f f f f f f f 
            f d d d d d d d d d d d d d b f 
            f d c c c c c d c c c c c d b f 
            f d c 2 2 2 c d c 2 2 2 c d b f 
            f d c 2 2 2 c d c 2 2 2 c d b f 
            f d c 2 2 2 c d c 2 2 2 c d b f 
            f d c c c c c d c c c c c d b f 
            f d d d d d d d d d d d d d b f 
            f d c c c d d d d d c c c d b f 
            f d c 1 c c c c c c c 1 c d b f 
            f d c 1 1 1 1 1 1 1 1 1 c d b f 
            f d c 1 1 1 1 1 1 1 1 1 c d b f 
            f d c c c c c c c c c c c d b f 
            f d d d d d d d d d d d d d b f 
            f b b b b b b b b b b b b b b f 
            f f f f f f f f f f f f f f f f 
            `)
        )
        myMenu.z = -1
        myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 160)
        timer.after(2000, function () {
            myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
                if (selection == "Endless") {
                    if (true) {
                        myMenu.close()
                        ready = true
                        theGround()
                        initRaptor()
                        info.setScore(0)
                        end = 0
                        color.setPalette(
                        color.GrayScale
                        )
                        timer.after(10000, function () {
                            color.startFade(color.GrayScale, color.originalPalette, 1000)
                            scene.setBackgroundImage(img`
                                7777777777777777777777777777ff777777777777777777777777777f77777777777777777777777777777777ff7777777777777777777777776ff777777777777776f777777777777777777777777
                                777777777777777777777777777777f77777777777777777777777777ff777777777777777777777777777777777f77777777777777777777777f767777777777777776f77777777777777777777777
                                777777777777777777777777777777ff7777777777777777777777fff77777777777777777777777777777777777ff777777777777777777776f67777777777777777776f7777777777777777777777
                                7777777777777777777777777777777f7777777777777777777776fff777777777777777777777777777777777777f677777777777777777776f66677777777777777777ffff7777777777777777777
                                7777777777777777777777777777777f777777777777777777777f777777777777777777777777777777777777777f6777777777777777777776fff777777777777777777fff7777777777777777777
                                77777777777777777777777777777777f77777777777777777777f7777777777777777777777777777777777777ff77777777777777777777777777f777777777777777767f77777777777777777777
                                77777777777777777777777777777777f777777777777777777777f777777777777777777777777777777ffffff7777777777777777777f7777776f777777777777777777f777777777777777777777
                                7777777777777777777777777777ffff777777777777777777f777f7777777777777777777777777777777f777777777777777777777777f67776f7777777777777777777f7777f7777777777777777
                                7777777777777777777777777fff66667777777777777777777f77f77777777777777777777777777777777ff77777777777777777777776fffff67ff777777777777777ff77fff7777777777777777
                                7777777777777777777777777fff7777777777777777776777766ff77777777777777777777777777777777ff67777777777777777677777fccccf6cc677777777777777ffffff77777777777777777
                                777777777777777777777777777f777777777777777776f77777ff77777777777777777777777777777777777f7777777777777777f77777feeeeffeef77777777777777ffff7f77777777777777777
                                7777777777777777777777777777f777777f77777777777f777f7777777777777777777777777777ff7777777f77777777777777777f7777feeeeeeeef77777777777777f7777f77777777777777777
                                7777777777777777777777777777f77f777f77777f77777ff77f77777f777777777777777777777777f777777f777777777777777777f777feeeeeeef77fff777f776f77f77fff777f7777777777777
                                777777777777777777777f777777f7ff77f77f777f67777fefff7777f77777ff7777777777777777777ffffff7777777777777f77777ffffeeeeeeeeeffeef777f776f77f7fff77ff77777777777777
                                777777777777777777777fffff77ffef77f77f77fee6777feeeefffff77777ff77777777777777777777feef777777777777777f7777feeeeeeeeeeeeeeeef77ff776ff7fffffffef77777777777777
                                777777777777777777777feeeeffeeef7ff7f677feee66eeeeeeeeeef77777ff7777777777777ff77777feef7777f7766777777ff777feeeeeeeeeeeeeeeef7fef76eeffffffffeef777f7777777777
                                777777777777777777777feeeeffeeef7f77f777feeef6feeeeeeeeef7777ff77777777777777ff77777feef7777f77f6777776ff777feeeeeeeeeeeeeeeef7fef6feeffffffffeef777ff777777777
                                77777777777777777f777feeeeeeeeeefffff77feeeeefeeeeeeeeeefffffff7777f777777777ff77777feef777ff777ff7777feef77feeeeeeeeeeeeeeeeefeeeffeeefffffeeeef77fff777777777
                                7777f7777777f7777f777feeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeef7777f7777f7777fffff77feef777ff777fff77feeeeffeeeeeeeeeeeeeeeeeeeeeeeeeefffeffeeeef7feff7777f7777
                                7777f7777777f7777ffffffeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeef777ff7777f7777feeefffeeeef7feff7feeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeefffeeeffeeef7777f777f
                                7777f7777777f7777feefffeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeef77fef7777f7777feeeeeeeeeeefeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeefffeeeeeeeff777ff777f
                                7777f777777fef777feeffeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeffeeef77fef777feeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeffeeeeeeeeffffef77fe
                                7777f777777fef777feeffeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeffeeef77fef777feeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeffeeeeeeeeeeeeef77fe
                                777ff777777feef7feefffeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77fef77feeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeefffeeeeeeeeeeeeeffee
                                777feff777ffeeefeefffeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeffeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeefffeeeeeeeeeeeeeeee
                                777f7ff777fe7e7e7effeeeeeeeeeee7e7e7e7fff7e77eeeeeeee7e7eeeee77e7e7e7eeeee7e7e77e7e7e7e7eeeeeeee77efffe7eeeeee7e7eeeeeee7e7e7ffffeeee7e7eeeefffeee7e777eee7e7e7
                                fff7e77fffe7e7e7effeeee7eeeeeeee7e7e7e7fff77eeeeeeeeee7e7eeee7e7e7e7eeeeeee7e7777e7e7e7eeeee7ee7777effffeeeeeee7e7eeeeeee7efffffeeeeee7e7eeeffffeee7e7eeeee7e7e
                                7e7e7e7eeeee7e7e7ffeeeee7eeeeee7e7e7e7e7fff7eeeeeeeee7e7eeeeee7e7e7eeeeeeeee7e7777e7e7e7eee7e7eee7e7efffffeeee7e7eeeeeeeffffff7e7eeee7e7eeeeefffee7e77eeee7e7e7
                                7777777eeee777777feeeeee7eeeeee7777777777fffeeeeeeee77777eeeee77777eee7eeee7777777777777eee777eee7777e7fffeeee7777eeeeeefffff7777eee77777eeeeeffeee777eeee77777
                                e7e7e7eeeee7e7e7ffeeeee7eeeeeeee7e7e7e7e7fffeeeeeeee7e7e7eeeeee7e7eeee7eeee7e7777e7e7e7eeeee7eeee77e7e7fffffffe7e77ffffffffff7e7eeee7e7e7eeeeefffee7e7eee7e7e7e
                                7e7e7e7eeeee7e7fffeeee777eeeeeeee7e7e7e7e7ffffeeeeeee7e7e7eeee7e7e7eeeeeeeee7e77e7e7e7eeeee7e7eeeee7e7e7effffffffffffffffe7e7e7e7eeee7e7e7eeeeffff7e7eeeee7e7e7
                                e7e7e77eeeeee7fff7eeeee7e7eeeeeeee7e7e7e7e77fffeeeee7e7e7eeeeee7e7eeee7eeeeee7777e7e7e7eeeee7e74eeee7e7eeeeeeffffffffee7e7e7e7e7eeee7e7e7e7eeeefffe7eeeee7e7e7e
                                7e7e7e77eeee7fff7eeeee7e77eeeeeee7e7e7e7e7e77fffeeeee7e7e7eeeeee7eeee7e7eeeeee77e7e7e7eeeee7e7e7eeeee7eeeeeeee7e7eeeeeee7e7e7e7eeeee77e7e7eeeeeefffeeeee7e7e7e7
                                e7e7e777eeeefff7e7eeeee7e77eeeeeee7e7e7e7e77eeffffee7e7e7eeeee47eeee7e7eeeeee7777e7e7e7eeeee7e77eeee7eeeeeeee7e7e7eeeee7e7e7e7e7eeee7e7e7e7eeeeeefffeeeee7e7e7e
                                7e777e77eeeeff7e74eeee777777eeeeeee7e777e77eeeefffeee7e7e7eeeeeeeeee77e7eeeeeee7e777777eeee7e777eeee47eeeeee7e7777eeeeee7e7e7e7eeeeee7777777eeee7effeeee7e777e7
                                7e7e7e77eeefff7e7eeeee7777e7eeeeeee7e7e7e7e7eeefffffe7e7e7eeeeeeeeeee7e7eeeeeee7e7e7e7eeeee7e7777eeee7eeeeee7e7e7eeeeeee7e7e7e7eeeee7777e7e7eeee7eeffee77e7e7e7
                                7777777777fff7777eeee7777777eeeeeee7777777777eeeefffff7777eeeeeeeee777777eeeeee77777777eeee777777eeeeeeeeeee777777eeeee77777777eee7777777777eeee777fff777777777
                                77777777ffffee777eeee77777777eeeeee777777777eeeeeeeffffff7eeeeeeee7777777eeeeeee777777eeee777777777eeeeeeeee777777eeeee77777777eee777777777eeeeee7eeeffff777777
                                7777777ffffeee777eeee77777777eeeeeee77777777eeeeeeee7ffffffffeeeee777777ffeeeeee777777eeee7777777777eeeeeee7777777eeeee77777777eee77777777eeeeeeeeeeeeffff77777
                                7777ffff777eeee7eeeee777777777eeeeeee7777777eeeeeeee7777ffffffffffffffffffeeeeeee77777eeee7777777eeeeeeeeee7777777eeeee77777777eee77777777eeeeeeeeeee47ffff7777
                                7ffffff77777eeeeeeeee777777777eeeeeeee7777777eeeeeee777777effffffffffffff77eeeeee7777eeeee777777eeeeeeeeeee7777777eeeee77777777eee7777777eeeeeeeeeeeee777ffff77
                                7ffffe777777eeeeeeeee777777777eeeeeeeee777777eeeeeee777777eeeeeee7777777777eeeeeee777eeeee777777eeeeeeeeeee7777777eeeee7777777eeee777777eeeeeeeeeeee477777fff77
                                fffff7777777eeeeeeee77777777777eeeeeeee777777eeeeeee777777eeeeeee77777777777eeeeee777eeeee77777eeeeeeeeeeee7777777eeeee7777777eeee777777eeeee77eeeee777777fffff
                                fff777777777eeeeeeee77777777777eeeeeeeee777eeeeeeeee7777777eeeeee77777777777eeeeee77eeeeee7777eeeeeeeeeeeee7777777eeeee7777777eeee77777eeeee777eeeee77777777fff
                                777777777777eeeeeeee777777777777eeeeeeeeeeeeeeeeeeee7777777eeeeee777777777777eeeeeeeeeeeeee77eeeeeeee7eeee77777777eeeeee777777eeee777eeeeeee7777eeee77777777777
                                7777777777777eeeeeee7777777777777eeeeeeeeeeeeeeeeeee7777777eeeee7777777777777eeeeeeeeeeeeeeeeeeeeeee77eeee77777777eeeeee777777eee777eeeeeee77777eee777777777777
                                7777777777777eeeeeee77777777777777eeeeeeeeeeeeeeeeee7777777eeeee77777777777777eeeeeeeeeeeeeeeeeeeee7777eee77777777eeeeee777777eee77eeeeeee777777eee777777777777
                                7777777777777eeeeeee77777777777777eeeeeeeeeeeeeeeeee7777777eeeee777777777777777eeeeeeeeeeeeeeeeeeee7777eee77777777eeeeee777777eeeeeeeeeeee777777eee777777777777
                                7777777777777eeeeeee777777777777777eeeeeeeeeeeeeeeee7777777eeeee777777777777777eeeeeeeeeeeeeeeeeee77777eee77777777eeeeee777777eeeeeeeeeee7777777eee777777777777
                                7575757557575eeeeee75757577575757575eeeeeeeeeeeeeeee5757575eeeee757575757575757eeeeeeeeeeeeeeeee5575757eee5757575755eeee75757eeeeeeeeeee75757575eee755757575757
                                5757575775757eeeeee5757575575757575757eeeeeeeeeeeeee7575757eeee45757575757575755eeeeeeeeeeeeee757757575eee7575757577eeee57575eeeeeeeeee757575757eee577575757575
                                757575755757eeeeeee75757577575757575757eeeeeeeeeeeee5757575eeeee757575757575757757eeeeeeeeee5757557575eeee5757575755eeee75757eeeeeeeee7575757575eee757757575757
                                575757575575eeeeeee575757557575757575757eeeeeeeeeee57575757eeee45757575757575777757eeeeeeeee7575775757eeee7575757557eeee57575eeeeeeee75757575757eee575775757575
                                757575755757eeeeeee7575757557575757575757eeeeeeeeee75757575eeee47575757575757557577eeeeeeeee5757557575eeee5757575757eeeee5757eeeeeee757575757575eee755757575757
                                757575755757eeeeeee7575757757575757575757eeeeeeeeee75757575eeeee7575757575757575575eeeeeeee75757557575eeee5757575757eeeee5757eeeeee7757575757575eee755757575757
                                575757575575eeeeeee57575755757575757575757eeeeeeeee57575757eeee457575757575757557575eeeeee757575775757eeee7575757557eeeee7575eeeee75575757575757eee577575757575
                                757575757757eeeeeee75757577575757575757575eeeeeeeee75757575eeeeee5757575757575575757eeeeee575757557575eeee5757575775eeeee575eeeee757757575757575eee755757575757
                                575757575575eeeeeee575757557575757575757575eeeeeeee5757575eeeeeee7575757575757757575eeeeee757575775757eeee7575757557eeeee757eeeee575575757575757eee577575757575
                                75757575575eeeeeee5757575775757575757575757eeeeeeee7575757eeeeeee5757575757575775757eeeeee575757557575eeee5757575755eeeeee75eeeee757757575757575eee755757575757
                                55555555555eeeeeee5555555555555555555555555eeeeeee75555555eeeeeee5555555555555555557eeeee5555555555555eeee5555577777eeeeee55eeeee755555555555555eee555555555555
                                55555555555eeeeeee5555555555555555555555555eeeeeee55555555eeeeeee5555555555555555555eeeee5555555555557eeee555577777eeeeeee75eeeee555555555555557eee555555555555
                                55555555555eeeeeee5555555555555555555555555eeeeeee55555555eeeeeee5555555555555555555eeeee555555555555eeeee555567777eeeeeeee5eeeee55555555555555eeee555555555555
                                55555555555eeeeeee5555555555555555555557775eeeeeee5555556777777777555555555555555555eeeee555555555555eeeeee556777777eeeeeeeeeeeee55555555555555eeeee75555555555
                                55555555555eeeeeee5555555555555555555667777eeeeeee5555677777777777776555555555555555eeeee5555555577777eeeee567777777eeeeeeeeeeeee55555555555555eeeee75555555555
                                5555555555eeeeeeee5555555555555555557777777eeeeeee5577777777777777776555577555555555eeeee55555557777777eee77777777777eeeeeeeeeeee55555555555555eeeee75555555555
                                5557777777eeeeeeee7777555555555555777777777eeeeeee7777777777777777777757777775555555eeeee5555557777777777777777777777eeeeeeeeeeee7777555555555777eee75555555555
                                5577777777eeeeeeee7777755557777577777777777eeeeeee777777777777777777777777777775555eeeeee5555777777777777777777777777eeeeeeeeeeee7777755555577777eee75555555555
                                5577777777eeeeee777777775577776577777777777eeeeeee777777777777777777777777777777555eeeeee5555677777777777777777777777eeeeeeeeeeee77777555555777777ee75555555555
                                6777777777eeeee7777777775777777777777777777eeeeeee777777777777777777777777777777757eeeeee777777777777777777777777777777eeeeeeeeee777777555777777777e55555555555
                                7777777777eeeee777777777777777777777777f677eeeeeee777777777777777777777777777777777eeeeee777777777777777777777777777777eeeeeeeeee777777777777777777777777675555
                                777777777eeeeee77777777777777777777777f7f67eeeeeee777777777777777777777777777777777eeeeee7777777777777777777777777777777eeeeeeeee777777777777777777777777777777
                                777777777eeeeee77777777777777777777777ff7f6eeeeeee777777777777777777777777777777777eeeeee77777777777777777f77777777777777eeeeeeeee77777777777777777777777777777
                                777777777eeeeee77777777777777777777777ff66fceeeeee777777777777777777777777777777777eeeeee7777777777777777fff7777777777777eeeeeeee777777777777777777777777777777
                                777777777eeeeee77777777777777777777777fff7ffeeeeee77777777777777eee7777777777777777eeeeee7777777777777777f7f77777777777777eeeeee7777777777777777777777777777777
                                777777777eeeeee77777777777777777f777777ff7ffeeeeee7ff777777777cccccc77777777777777eeeeeee7777777777777777ff7f7777777777777eeeeee7777777777777777777777777777777
                                777777777eeeee77777777777777777f7ff7777fff76feeeeff77f77777cccccccccc7777777777777eeeeeee7777777777fff777ff7f77777777777777eeeee7777777777777777777777777777777
                                7777777eeeeeeeee777777777777777ff77f777fff76feeef77ff77777ccccccccccc7777777777777eeeeeee7777777777f77f77fff7f777777fff77777cccc7777777777777777777777777777777
                                77777cccccccccccc777777777777777fff7f77fff76feef7ffff7777cccccccccccc77777777777ceeeeeeee77777777776ff7f7fff7f777776f77f777ccccccc77777777777777777777777777777
                                7777cccccccccccccc77777777777777fff7f77fff76feef7ffff7ff7cccccccccccc77777777777ceeeeeeeee7777777776ff66ffff7f7777ff666f777cccccccc7777777777777777777777777777
                                7777cccccccccccccc777777777666777ff7fc7fff76feef7fff76ffccccccccccccc77777777777ceeeeeeeee77777777776ff7ffff7f6776ff7fff77cccccccccc777777777777777777777777777
                                777ccccccccccccccc77777777ffff777fff7f7fff76fef7fff7ff77ffccccccccccc77777ccc777ceeeeeeeee77777777776ff7fffff7f67f67fff77cccccccccccc77777777777777777777777777
                                77ccccccffffcffffc7777777ff777ff77ff7f7fff76ff7fffff77ffcccccccccccccc777ccccc7eeeeeeeeeee77777777776fff7ffff7f7f77fffcccfccccccccccc77777777777777777777777777
                                7cccccceeeeefccc2fe7777777ffff77f7fff7ffff76f7ffff77fffcccccccccccccccccccccccceeeffeeeeee777ffffff777ff7ffff7ff76fffcccccccccccccccc7777777777777777777777ccc7
                                cccccccfcffffffcfcc77777ccccffff7f7ff7ffff76fffff7ffffcccccccccccccccccccccccccee2eefeeeee77f777777ff7ff7ffff7f76fffcccccccccccccccccc77777777777777777fffccccc
                                cccccccceeeefcf2eeee7777eeeeeefff7fff67ffff77fff7fffffcfffccccccccccffccccccccceeeeffeeeee776fffff677ffff7fff7ffffffcfffffcccccffccccc777777777777777fff6cfcccc
                                cccccccceeefffc2feee777eeeeeeefff7ffff7ffff66fff7ffffffffffcccccccfffffccccccccceeeffceeee777ffffff77ffff7fff7fffffffffffffcccefffeeee777777777777776ffffefeeee
                                eeeeeeeeeefffffccccccccccccccccfff7ffff7fffffffffffccff77ffcccccccffccffccccccccce2eefeeee7777fffffff7ffffffff7ffffcff7777fccc2fefccccc777ccc7777777ff7fffc2eee
                                eeeeeeeeee2eff2eeeeeeeeeeeeeeeeefff7fffffffffffffcfff77ff77ffccccfccffc2feeeeeeeeeeeffeeeeeee7ffffffff77ffffffffffff77ffffcccccfffccccccccccccc7777ffffce2eeeee
                                eeeeeeeeeeeefccfcccccccccccccccccfffffffffffffffff777ffffffccccffcfff2efeeeeeeeeeee2eefccccccf777777ffff7fffffff7777fffffcccccc2eeffcccccccccccc777ffceeeeeeeee
                                eeeeeeeeeeeefcfcccccccccccccccccccffffffffffffff77ffffffcccccccfffc2efeeeeeeeeeeeeefeefcccccf7ffffff777ffffffffffffffffccccccccfcfffcccccccccccccccffcffccccccc
                                cfccccffccccffcccccfccccccffccccfccfffffffffffffffffffcccccccccffcccccfcccccccccccccccfccccccfffffffffffffffffffffffffcccccccccc2eeffeeeeeeeeeeeeeeffccfccccccc
                                cffccfffffccfffccccffccccfffcccfffcfffffffffffffffffffccccfcccffffccccfccfcccccffcccccfccccccfffffffffffffffffffffffffccfccccccfeeeffeeeefeeeeeeeeeffffccfcfccc
                                cffccffffccffffccccffccccfffcccfffcffffffffffffffffffcccfcfcccffffccccfcfffcccfffcccccfccccccfcccffffffffffffffffffffcccfccccccffccffccccfcccccccccffffccccffcc
                                ffffcfffffcffffccffffcccfffffcfffffcffffffffffffffffffccffffffffffcccffcfffccfffffcccfffcccffffffffffccffffffffffffffccfffccccffcccffcccfffcccccfccffffcccfffcc
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffccffffffffffffcffffffffffffffffffffffffffcffffffffffcccffccfffffcffffff
                                fffffffffffff7ffffffffff76fffffffffffffffffffffffff7fffffffff77ffffffffff7ffffffffff7fffffff7ffffffffffffffffff76fffffffffffffffffffffffffffffffffffffffffff7ff
                                f7fffff77ff67f7ffffffff7677ffff7fffffffff76fffffff7f7fffffff7767ffffffff7f7ffffffff7f7fffff7f76fffffffff7fffff7f76f67fffff7fffffffff77ffff7ffffffff76ffffff7f7f
                                767fff7777ff6f6fff7fff77ffffff767ffff7ff7677f67fff6f6ff7fff77ff77ff7fff76f6ffff77ff6f6ffff76f676f67ffff767fff76fff7767fff767fff7fff7777ff767ffffff7f77fff7fffff
                                7f7ff676776ffffff676ff7ffffff67f7fff676f7f76f776ffffff676ff76fff7f676ff7fffffff777fffff6ff7fff766776ff67f7f6f7ffff67f7ff67f7ff676ff7767f67f7f6fff67f77ff676ffff
                                fffff77ff67ffffff7f7ffffffff67ffffff7f7fffff6767ffffff7f76ffffffff7f7fffffffff7767fffff7ffffffff77f7ff7ffff7ffffffffffff7fffff7f76ffffff7ffff7fff7fffff77f7ffff
                                ffffffffffffffff7ffffffffffffffffff7fffffff77ffffffff7fff7ffffffffffffffff7ff77fffffff7f7fffffffffffffffff7f7ffffffffffffffff7ffffffffffffff7f7fffffff77fff7fff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f7fffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeee4ffffffffffffffffffffff
                                eeeeeeeeeeeeeeeeeeeeeeefeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeefffeeeffeeeeeeeeeeeeeeeeeeeeeeeeee
                                eeeeeffeeeeefeeeefffeeeefeeeeeeeeeffffeeefeeeeeeeefeeeeffffffeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeefeeeeefefffffeeeefeeeeeeeeeeefeeefeeeefeeeeeeeeefeeeeeeeffeeeffe
                                eefeeeeeeeeeeeeefeeefeeeeeeeeeefefeeefeeeeeeeeeeeeeeeefeeeeffeeeeeeefeeeeefffffeeefeeeeeeeffffeeeeeeeeefeeeefeeeeeeeefffeeefeeeffeeeeeefeeeffeeeeeffeeeeeeeeffe
                                eeeeeeefffeeeeeefffffeeeeeeeeeefefeeefeeeeeeffeeeeeeeefeeeffeeeeeeeeeeeeeffffffeeefefeeeefffffeeeeefeeefeeeffeeeeeeeffffeeeffffffeeeeeeeeeffffeeefffeeeeeeeeffe
                                eeeeeeffffeeeeeeefffeeeeeeeeeeefefeeefeeeeeffffeeeeeeefeeefeeeefeeeeefeeefeeefeeeefefeeeefeeefeeeeefeeefeeeffeeeeeeefeefeeeefffeeeeeeeeeeefeefeeefefeeeeeeeeeee
                                eeeeeffeeefeefeeeeeeeeeeffffeeeeeffffeeeeeffeefeeeefeeffffeeeeeeeeeeeeeeeffffeeeeeeeeeeeefeeefeeeeeeeeeefffeeeeeeeeeeffeeeeeeeeeeefeeeeeeefeefeeeffeeeeeeeeeeee
                                eefeefeeeefeeeeeeeeeeeefeeeefeeeeeeeeefeefeeefeefeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeefeefeeeeeeeeefffeefee
                                eeeeeeffffeeeeeeeeeeeeefeeeefeeeeeeeeefeeffffeeeeeeeeefeeeeeeeffefefeeefeeefeeeeeffffefeeeeeeeeeeeeefffeeefeefffeeeeeeeeefeeeeeeeeeffffeeeeffeeeeeeeeeffeefeeee
                                eeeefeeeeeeeeeeeeefeeeeeffffeeeeeefeeeeeeeeeeeeeeeeeeeeeeffeeeeeefffeeeeeeeeeeeffeeefeeeeeeeeeeeeeefeefeeeeeefeefeeeffeeeeeeeeeeeefceefeeeeeeeeeefeeeffeeffeeee
                                efeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeefeeeeffeeeeeefeeeeeeeeeeeeefffffeeeeefeeeffeeeeffffeefeeeffffeeeeeeeeeeeeeeeeeffefeeefeeeeefefeeeffffeeefee
                                efeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeefeeeeffeeeeeeeeeeeeeeeeeeeeeffffeeeeefeeeffeeeefffeeefeeeeffeeeeeeeeeeeeeeeeeeffffeeefeeeeefefeeeefffeeefee
                                eeeeeeeeffeeeeeeeeeeefeeeeeefeeeeeeeffeeeeeefeeeeeeeeeeeeeeeeefeeeeeffeeefeeefeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeefeeeefeeeeffeeeeeeefeeeeeeeeeeeeeeeeee
                                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeee
                                `)
                            blur.BlurIn(1000)
                        })
                    }
                } else if (selection == "Beginner") {
                    if (true) {
                        myMenu.close()
                        difficultyBeaten = 1
                        ready = true
                        theGround()
                        initRaptor()
                        info.setScore(0)
                        end = 0
                        color.setPalette(
                        color.GrayScale
                        )
                        timer.after(10000, function () {
                            info.startCountdown(60)
                            color.startFade(color.GrayScale, color.originalPalette, 60000)
                            scene.setBackgroundImage(img`
                                7777777777777777777777777777ff777777777777777777777777777f77777777777777777777777777777777ff7777777777777777777777776ff777777777777776f777777777777777777777777
                                777777777777777777777777777777f77777777777777777777777777ff777777777777777777777777777777777f77777777777777777777777f767777777777777776f77777777777777777777777
                                777777777777777777777777777777ff7777777777777777777777fff77777777777777777777777777777777777ff777777777777777777776f67777777777777777776f7777777777777777777777
                                7777777777777777777777777777777f7777777777777777777776fff777777777777777777777777777777777777f677777777777777777776f66677777777777777777ffff7777777777777777777
                                7777777777777777777777777777777f777777777777777777777f777777777777777777777777777777777777777f6777777777777777777776fff777777777777777777fff7777777777777777777
                                77777777777777777777777777777777f77777777777777777777f7777777777777777777777777777777777777ff77777777777777777777777777f777777777777777767f77777777777777777777
                                77777777777777777777777777777777f777777777777777777777f777777777777777777777777777777ffffff7777777777777777777f7777776f777777777777777777f777777777777777777777
                                7777777777777777777777777777ffff777777777777777777f777f7777777777777777777777777777777f777777777777777777777777f67776f7777777777777777777f7777f7777777777777777
                                7777777777777777777777777fff66667777777777777777777f77f77777777777777777777777777777777ff77777777777777777777776fffff67ff777777777777777ff77fff7777777777777777
                                7777777777777777777777777fff7777777777777777776777766ff77777777777777777777777777777777ff67777777777777777677777fccccf6cc677777777777777ffffff77777777777777777
                                777777777777777777777777777f777777777777777776f77777ff77777777777777777777777777777777777f7777777777777777f77777feeeeffeef77777777777777ffff7f77777777777777777
                                7777777777777777777777777777f777777f77777777777f777f7777777777777777777777777777ff7777777f77777777777777777f7777feeeeeeeef77777777777777f7777f77777777777777777
                                7777777777777777777777777777f77f777f77777f77777ff77f77777f777777777777777777777777f777777f777777777777777777f777feeeeeeef77fff777f776f77f77fff777f7777777777777
                                777777777777777777777f777777f7ff77f77f777f67777fefff7777f77777ff7777777777777777777ffffff7777777777777f77777ffffeeeeeeeeeffeef777f776f77f7fff77ff77777777777777
                                777777777777777777777fffff77ffef77f77f77fee6777feeeefffff77777ff77777777777777777777feef777777777777777f7777feeeeeeeeeeeeeeeef77ff776ff7fffffffef77777777777777
                                777777777777777777777feeeeffeeef7ff7f677feee66eeeeeeeeeef77777ff7777777777777ff77777feef7777f7766777777ff777feeeeeeeeeeeeeeeef7fef76eeffffffffeef777f7777777777
                                777777777777777777777feeeeffeeef7f77f777feeef6feeeeeeeeef7777ff77777777777777ff77777feef7777f77f6777776ff777feeeeeeeeeeeeeeeef7fef6feeffffffffeef777ff777777777
                                77777777777777777f777feeeeeeeeeefffff77feeeeefeeeeeeeeeefffffff7777f777777777ff77777feef777ff777ff7777feef77feeeeeeeeeeeeeeeeefeeeffeeefffffeeeef77fff777777777
                                7777f7777777f7777f777feeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeef7777f7777f7777fffff77feef777ff777fff77feeeeffeeeeeeeeeeeeeeeeeeeeeeeeeefffeffeeeef7feff7777f7777
                                7777f7777777f7777ffffffeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeef777ff7777f7777feeefffeeeef7feff7feeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeefffeeeffeeef7777f777f
                                7777f7777777f7777feefffeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeef77fef7777f7777feeeeeeeeeeefeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeefffeeeeeeeff777ff777f
                                7777f777777fef777feeffeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeffeeef77fef777feeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeffeeeeeeeeffffef77fe
                                7777f777777fef777feeffeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeffeeef77fef777feeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeffeeeeeeeeeeeeef77fe
                                777ff777777feef7feefffeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77fef77feeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeefffeeeeeeeeeeeeeffee
                                777feff777ffeeefeefffeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeffeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeefffeeeeeeeeeeeeeeee
                                777f7ff777fe7e7e7effeeeeeeeeeee7e7e7e7fff7e77eeeeeeee7e7eeeee77e7e7e7eeeee7e7e77e7e7e7e7eeeeeeee77efffe7eeeeee7e7eeeeeee7e7e7ffffeeee7e7eeeefffeee7e777eee7e7e7
                                fff7e77fffe7e7e7effeeee7eeeeeeee7e7e7e7fff77eeeeeeeeee7e7eeee7e7e7e7eeeeeee7e7777e7e7e7eeeee7ee7777effffeeeeeee7e7eeeeeee7efffffeeeeee7e7eeeffffeee7e7eeeee7e7e
                                7e7e7e7eeeee7e7e7ffeeeee7eeeeee7e7e7e7e7fff7eeeeeeeee7e7eeeeee7e7e7eeeeeeeee7e7777e7e7e7eee7e7eee7e7efffffeeee7e7eeeeeeeffffff7e7eeee7e7eeeeefffee7e77eeee7e7e7
                                7777777eeee777777feeeeee7eeeeee7777777777fffeeeeeeee77777eeeee77777eee7eeee7777777777777eee777eee7777e7fffeeee7777eeeeeefffff7777eee77777eeeeeffeee777eeee77777
                                e7e7e7eeeee7e7e7ffeeeee7eeeeeeee7e7e7e7e7fffeeeeeeee7e7e7eeeeee7e7eeee7eeee7e7777e7e7e7eeeee7eeee77e7e7fffffffe7e77ffffffffff7e7eeee7e7e7eeeeefffee7e7eee7e7e7e
                                7e7e7e7eeeee7e7fffeeee777eeeeeeee7e7e7e7e7ffffeeeeeee7e7e7eeee7e7e7eeeeeeeee7e77e7e7e7eeeee7e7eeeee7e7e7effffffffffffffffe7e7e7e7eeee7e7e7eeeeffff7e7eeeee7e7e7
                                e7e7e77eeeeee7fff7eeeee7e7eeeeeeee7e7e7e7e77fffeeeee7e7e7eeeeee7e7eeee7eeeeee7777e7e7e7eeeee7e74eeee7e7eeeeeeffffffffee7e7e7e7e7eeee7e7e7e7eeeefffe7eeeee7e7e7e
                                7e7e7e77eeee7fff7eeeee7e77eeeeeee7e7e7e7e7e77fffeeeee7e7e7eeeeee7eeee7e7eeeeee77e7e7e7eeeee7e7e7eeeee7eeeeeeee7e7eeeeeee7e7e7e7eeeee77e7e7eeeeeefffeeeee7e7e7e7
                                e7e7e777eeeefff7e7eeeee7e77eeeeeee7e7e7e7e77eeffffee7e7e7eeeee47eeee7e7eeeeee7777e7e7e7eeeee7e77eeee7eeeeeeee7e7e7eeeee7e7e7e7e7eeee7e7e7e7eeeeeefffeeeee7e7e7e
                                7e777e77eeeeff7e74eeee777777eeeeeee7e777e77eeeefffeee7e7e7eeeeeeeeee77e7eeeeeee7e777777eeee7e777eeee47eeeeee7e7777eeeeee7e7e7e7eeeeee7777777eeee7effeeee7e777e7
                                7e7e7e77eeefff7e7eeeee7777e7eeeeeee7e7e7e7e7eeefffffe7e7e7eeeeeeeeeee7e7eeeeeee7e7e7e7eeeee7e7777eeee7eeeeee7e7e7eeeeeee7e7e7e7eeeee7777e7e7eeee7eeffee77e7e7e7
                                7777777777fff7777eeee7777777eeeeeee7777777777eeeefffff7777eeeeeeeee777777eeeeee77777777eeee777777eeeeeeeeeee777777eeeee77777777eee7777777777eeee777fff777777777
                                77777777ffffee777eeee77777777eeeeee777777777eeeeeeeffffff7eeeeeeee7777777eeeeeee777777eeee777777777eeeeeeeee777777eeeee77777777eee777777777eeeeee7eeeffff777777
                                7777777ffffeee777eeee77777777eeeeeee77777777eeeeeeee7ffffffffeeeee777777ffeeeeee777777eeee7777777777eeeeeee7777777eeeee77777777eee77777777eeeeeeeeeeeeffff77777
                                7777ffff777eeee7eeeee777777777eeeeeee7777777eeeeeeee7777ffffffffffffffffffeeeeeee77777eeee7777777eeeeeeeeee7777777eeeee77777777eee77777777eeeeeeeeeee47ffff7777
                                7ffffff77777eeeeeeeee777777777eeeeeeee7777777eeeeeee777777effffffffffffff77eeeeee7777eeeee777777eeeeeeeeeee7777777eeeee77777777eee7777777eeeeeeeeeeeee777ffff77
                                7ffffe777777eeeeeeeee777777777eeeeeeeee777777eeeeeee777777eeeeeee7777777777eeeeeee777eeeee777777eeeeeeeeeee7777777eeeee7777777eeee777777eeeeeeeeeeee477777fff77
                                fffff7777777eeeeeeee77777777777eeeeeeee777777eeeeeee777777eeeeeee77777777777eeeeee777eeeee77777eeeeeeeeeeee7777777eeeee7777777eeee777777eeeee77eeeee777777fffff
                                fff777777777eeeeeeee77777777777eeeeeeeee777eeeeeeeee7777777eeeeee77777777777eeeeee77eeeeee7777eeeeeeeeeeeee7777777eeeee7777777eeee77777eeeee777eeeee77777777fff
                                777777777777eeeeeeee777777777777eeeeeeeeeeeeeeeeeeee7777777eeeeee777777777777eeeeeeeeeeeeee77eeeeeeee7eeee77777777eeeeee777777eeee777eeeeeee7777eeee77777777777
                                7777777777777eeeeeee7777777777777eeeeeeeeeeeeeeeeeee7777777eeeee7777777777777eeeeeeeeeeeeeeeeeeeeeee77eeee77777777eeeeee777777eee777eeeeeee77777eee777777777777
                                7777777777777eeeeeee77777777777777eeeeeeeeeeeeeeeeee7777777eeeee77777777777777eeeeeeeeeeeeeeeeeeeee7777eee77777777eeeeee777777eee77eeeeeee777777eee777777777777
                                7777777777777eeeeeee77777777777777eeeeeeeeeeeeeeeeee7777777eeeee777777777777777eeeeeeeeeeeeeeeeeeee7777eee77777777eeeeee777777eeeeeeeeeeee777777eee777777777777
                                7777777777777eeeeeee777777777777777eeeeeeeeeeeeeeeee7777777eeeee777777777777777eeeeeeeeeeeeeeeeeee77777eee77777777eeeeee777777eeeeeeeeeee7777777eee777777777777
                                7575757557575eeeeee75757577575757575eeeeeeeeeeeeeeee5757575eeeee757575757575757eeeeeeeeeeeeeeeee5575757eee5757575755eeee75757eeeeeeeeeee75757575eee755757575757
                                5757575775757eeeeee5757575575757575757eeeeeeeeeeeeee7575757eeee45757575757575755eeeeeeeeeeeeee757757575eee7575757577eeee57575eeeeeeeeee757575757eee577575757575
                                757575755757eeeeeee75757577575757575757eeeeeeeeeeeee5757575eeeee757575757575757757eeeeeeeeee5757557575eeee5757575755eeee75757eeeeeeeee7575757575eee757757575757
                                575757575575eeeeeee575757557575757575757eeeeeeeeeee57575757eeee45757575757575777757eeeeeeeee7575775757eeee7575757557eeee57575eeeeeeee75757575757eee575775757575
                                757575755757eeeeeee7575757557575757575757eeeeeeeeee75757575eeee47575757575757557577eeeeeeeee5757557575eeee5757575757eeeee5757eeeeeee757575757575eee755757575757
                                757575755757eeeeeee7575757757575757575757eeeeeeeeee75757575eeeee7575757575757575575eeeeeeee75757557575eeee5757575757eeeee5757eeeeee7757575757575eee755757575757
                                575757575575eeeeeee57575755757575757575757eeeeeeeee57575757eeee457575757575757557575eeeeee757575775757eeee7575757557eeeee7575eeeee75575757575757eee577575757575
                                757575757757eeeeeee75757577575757575757575eeeeeeeee75757575eeeeee5757575757575575757eeeeee575757557575eeee5757575775eeeee575eeeee757757575757575eee755757575757
                                575757575575eeeeeee575757557575757575757575eeeeeeee5757575eeeeeee7575757575757757575eeeeee757575775757eeee7575757557eeeee757eeeee575575757575757eee577575757575
                                75757575575eeeeeee5757575775757575757575757eeeeeeee7575757eeeeeee5757575757575775757eeeeee575757557575eeee5757575755eeeeee75eeeee757757575757575eee755757575757
                                55555555555eeeeeee5555555555555555555555555eeeeeee75555555eeeeeee5555555555555555557eeeee5555555555555eeee5555577777eeeeee55eeeee755555555555555eee555555555555
                                55555555555eeeeeee5555555555555555555555555eeeeeee55555555eeeeeee5555555555555555555eeeee5555555555557eeee555577777eeeeeee75eeeee555555555555557eee555555555555
                                55555555555eeeeeee5555555555555555555555555eeeeeee55555555eeeeeee5555555555555555555eeeee555555555555eeeee555567777eeeeeeee5eeeee55555555555555eeee555555555555
                                55555555555eeeeeee5555555555555555555557775eeeeeee5555556777777777555555555555555555eeeee555555555555eeeeee556777777eeeeeeeeeeeee55555555555555eeeee75555555555
                                55555555555eeeeeee5555555555555555555667777eeeeeee5555677777777777776555555555555555eeeee5555555577777eeeee567777777eeeeeeeeeeeee55555555555555eeeee75555555555
                                5555555555eeeeeeee5555555555555555557777777eeeeeee5577777777777777776555577555555555eeeee55555557777777eee77777777777eeeeeeeeeeee55555555555555eeeee75555555555
                                5557777777eeeeeeee7777555555555555777777777eeeeeee7777777777777777777757777775555555eeeee5555557777777777777777777777eeeeeeeeeeee7777555555555777eee75555555555
                                5577777777eeeeeeee7777755557777577777777777eeeeeee777777777777777777777777777775555eeeeee5555777777777777777777777777eeeeeeeeeeee7777755555577777eee75555555555
                                5577777777eeeeee777777775577776577777777777eeeeeee777777777777777777777777777777555eeeeee5555677777777777777777777777eeeeeeeeeeee77777555555777777ee75555555555
                                6777777777eeeee7777777775777777777777777777eeeeeee777777777777777777777777777777757eeeeee777777777777777777777777777777eeeeeeeeee777777555777777777e55555555555
                                7777777777eeeee777777777777777777777777f677eeeeeee777777777777777777777777777777777eeeeee777777777777777777777777777777eeeeeeeeee777777777777777777777777675555
                                777777777eeeeee77777777777777777777777f7f67eeeeeee777777777777777777777777777777777eeeeee7777777777777777777777777777777eeeeeeeee777777777777777777777777777777
                                777777777eeeeee77777777777777777777777ff7f6eeeeeee777777777777777777777777777777777eeeeee77777777777777777f77777777777777eeeeeeeee77777777777777777777777777777
                                777777777eeeeee77777777777777777777777ff66fceeeeee777777777777777777777777777777777eeeeee7777777777777777fff7777777777777eeeeeeee777777777777777777777777777777
                                777777777eeeeee77777777777777777777777fff7ffeeeeee77777777777777eee7777777777777777eeeeee7777777777777777f7f77777777777777eeeeee7777777777777777777777777777777
                                777777777eeeeee77777777777777777f777777ff7ffeeeeee7ff777777777cccccc77777777777777eeeeeee7777777777777777ff7f7777777777777eeeeee7777777777777777777777777777777
                                777777777eeeee77777777777777777f7ff7777fff76feeeeff77f77777cccccccccc7777777777777eeeeeee7777777777fff777ff7f77777777777777eeeee7777777777777777777777777777777
                                7777777eeeeeeeee777777777777777ff77f777fff76feeef77ff77777ccccccccccc7777777777777eeeeeee7777777777f77f77fff7f777777fff77777cccc7777777777777777777777777777777
                                77777cccccccccccc777777777777777fff7f77fff76feef7ffff7777cccccccccccc77777777777ceeeeeeee77777777776ff7f7fff7f777776f77f777ccccccc77777777777777777777777777777
                                7777cccccccccccccc77777777777777fff7f77fff76feef7ffff7ff7cccccccccccc77777777777ceeeeeeeee7777777776ff66ffff7f7777ff666f777cccccccc7777777777777777777777777777
                                7777cccccccccccccc777777777666777ff7fc7fff76feef7fff76ffccccccccccccc77777777777ceeeeeeeee77777777776ff7ffff7f6776ff7fff77cccccccccc777777777777777777777777777
                                777ccccccccccccccc77777777ffff777fff7f7fff76fef7fff7ff77ffccccccccccc77777ccc777ceeeeeeeee77777777776ff7fffff7f67f67fff77cccccccccccc77777777777777777777777777
                                77ccccccffffcffffc7777777ff777ff77ff7f7fff76ff7fffff77ffcccccccccccccc777ccccc7eeeeeeeeeee77777777776fff7ffff7f7f77fffcccfccccccccccc77777777777777777777777777
                                7cccccceeeeefccc2fe7777777ffff77f7fff7ffff76f7ffff77fffcccccccccccccccccccccccceeeffeeeeee777ffffff777ff7ffff7ff76fffcccccccccccccccc7777777777777777777777ccc7
                                cccccccfcffffffcfcc77777ccccffff7f7ff7ffff76fffff7ffffcccccccccccccccccccccccccee2eefeeeee77f777777ff7ff7ffff7f76fffcccccccccccccccccc77777777777777777fffccccc
                                cccccccceeeefcf2eeee7777eeeeeefff7fff67ffff77fff7fffffcfffccccccccccffccccccccceeeeffeeeee776fffff677ffff7fff7ffffffcfffffcccccffccccc777777777777777fff6cfcccc
                                cccccccceeefffc2feee777eeeeeeefff7ffff7ffff66fff7ffffffffffcccccccfffffccccccccceeeffceeee777ffffff77ffff7fff7fffffffffffffcccefffeeee777777777777776ffffefeeee
                                eeeeeeeeeefffffccccccccccccccccfff7ffff7fffffffffffccff77ffcccccccffccffccccccccce2eefeeee7777fffffff7ffffffff7ffffcff7777fccc2fefccccc777ccc7777777ff7fffc2eee
                                eeeeeeeeee2eff2eeeeeeeeeeeeeeeeefff7fffffffffffffcfff77ff77ffccccfccffc2feeeeeeeeeeeffeeeeeee7ffffffff77ffffffffffff77ffffcccccfffccccccccccccc7777ffffce2eeeee
                                eeeeeeeeeeeefccfcccccccccccccccccfffffffffffffffff777ffffffccccffcfff2efeeeeeeeeeee2eefccccccf777777ffff7fffffff7777fffffcccccc2eeffcccccccccccc777ffceeeeeeeee
                                eeeeeeeeeeeefcfcccccccccccccccccccffffffffffffff77ffffffcccccccfffc2efeeeeeeeeeeeeefeefcccccf7ffffff777ffffffffffffffffccccccccfcfffcccccccccccccccffcffccccccc
                                cfccccffccccffcccccfccccccffccccfccfffffffffffffffffffcccccccccffcccccfcccccccccccccccfccccccfffffffffffffffffffffffffcccccccccc2eeffeeeeeeeeeeeeeeffccfccccccc
                                cffccfffffccfffccccffccccfffcccfffcfffffffffffffffffffccccfcccffffccccfccfcccccffcccccfccccccfffffffffffffffffffffffffccfccccccfeeeffeeeefeeeeeeeeeffffccfcfccc
                                cffccffffccffffccccffccccfffcccfffcffffffffffffffffffcccfcfcccffffccccfcfffcccfffcccccfccccccfcccffffffffffffffffffffcccfccccccffccffccccfcccccccccffffccccffcc
                                ffffcfffffcffffccffffcccfffffcfffffcffffffffffffffffffccffffffffffcccffcfffccfffffcccfffcccffffffffffccffffffffffffffccfffccccffcccffcccfffcccccfccffffcccfffcc
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffccffffffffffffcffffffffffffffffffffffffffcffffffffffcccffccfffffcffffff
                                fffffffffffff7ffffffffff76fffffffffffffffffffffffff7fffffffff77ffffffffff7ffffffffff7fffffff7ffffffffffffffffff76fffffffffffffffffffffffffffffffffffffffffff7ff
                                f7fffff77ff67f7ffffffff7677ffff7fffffffff76fffffff7f7fffffff7767ffffffff7f7ffffffff7f7fffff7f76fffffffff7fffff7f76f67fffff7fffffffff77ffff7ffffffff76ffffff7f7f
                                767fff7777ff6f6fff7fff77ffffff767ffff7ff7677f67fff6f6ff7fff77ff77ff7fff76f6ffff77ff6f6ffff76f676f67ffff767fff76fff7767fff767fff7fff7777ff767ffffff7f77fff7fffff
                                7f7ff676776ffffff676ff7ffffff67f7fff676f7f76f776ffffff676ff76fff7f676ff7fffffff777fffff6ff7fff766776ff67f7f6f7ffff67f7ff67f7ff676ff7767f67f7f6fff67f77ff676ffff
                                fffff77ff67ffffff7f7ffffffff67ffffff7f7fffff6767ffffff7f76ffffffff7f7fffffffff7767fffff7ffffffff77f7ff7ffff7ffffffffffff7fffff7f76ffffff7ffff7fff7fffff77f7ffff
                                ffffffffffffffff7ffffffffffffffffff7fffffff77ffffffff7fff7ffffffffffffffff7ff77fffffff7f7fffffffffffffffff7f7ffffffffffffffff7ffffffffffffff7f7fffffff77fff7fff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f7fffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeee4ffffffffffffffffffffff
                                eeeeeeeeeeeeeeeeeeeeeeefeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeefffeeeffeeeeeeeeeeeeeeeeeeeeeeeeee
                                eeeeeffeeeeefeeeefffeeeefeeeeeeeeeffffeeefeeeeeeeefeeeeffffffeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeefeeeeefefffffeeeefeeeeeeeeeeefeeefeeeefeeeeeeeeefeeeeeeeffeeeffe
                                eefeeeeeeeeeeeeefeeefeeeeeeeeeefefeeefeeeeeeeeeeeeeeeefeeeeffeeeeeeefeeeeefffffeeefeeeeeeeffffeeeeeeeeefeeeefeeeeeeeefffeeefeeeffeeeeeefeeeffeeeeeffeeeeeeeeffe
                                eeeeeeefffeeeeeefffffeeeeeeeeeefefeeefeeeeeeffeeeeeeeefeeeffeeeeeeeeeeeeeffffffeeefefeeeefffffeeeeefeeefeeeffeeeeeeeffffeeeffffffeeeeeeeeeffffeeefffeeeeeeeeffe
                                eeeeeeffffeeeeeeefffeeeeeeeeeeefefeeefeeeeeffffeeeeeeefeeefeeeefeeeeefeeefeeefeeeefefeeeefeeefeeeeefeeefeeeffeeeeeeefeefeeeefffeeeeeeeeeeefeefeeefefeeeeeeeeeee
                                eeeeeffeeefeefeeeeeeeeeeffffeeeeeffffeeeeeffeefeeeefeeffffeeeeeeeeeeeeeeeffffeeeeeeeeeeeefeeefeeeeeeeeeefffeeeeeeeeeeffeeeeeeeeeeefeeeeeeefeefeeeffeeeeeeeeeeee
                                eefeefeeeefeeeeeeeeeeeefeeeefeeeeeeeeefeefeeefeefeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeefeefeeeeeeeeefffeefee
                                eeeeeeffffeeeeeeeeeeeeefeeeefeeeeeeeeefeeffffeeeeeeeeefeeeeeeeffefefeeefeeefeeeeeffffefeeeeeeeeeeeeefffeeefeefffeeeeeeeeefeeeeeeeeeffffeeeeffeeeeeeeeeffeefeeee
                                eeeefeeeeeeeeeeeeefeeeeeffffeeeeeefeeeeeeeeeeeeeeeeeeeeeeffeeeeeefffeeeeeeeeeeeffeeefeeeeeeeeeeeeeefeefeeeeeefeefeeeffeeeeeeeeeeeefceefeeeeeeeeeefeeeffeeffeeee
                                efeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeefeeeeffeeeeeefeeeeeeeeeeeeefffffeeeeefeeeffeeeeffffeefeeeffffeeeeeeeeeeeeeeeeeffefeeefeeeeefefeeeffffeeefee
                                efeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeefeeeeffeeeeeeeeeeeeeeeeeeeeeffffeeeeefeeeffeeeefffeeefeeeeffeeeeeeeeeeeeeeeeeeffffeeefeeeeefefeeeefffeeefee
                                eeeeeeeeffeeeeeeeeeeefeeeeeefeeeeeeeffeeeeeefeeeeeeeeeeeeeeeeefeeeeeffeeefeeefeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeefeeeefeeeeffeeeeeeefeeeeeeeeeeeeeeeeee
                                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeee
                                `)
                            blur.BlurIn(1000)
                        })
                    }
                } else if (selection == "Intermediate") {
                    if (blockSettings.exists("Beginner")) {
                        myMenu.close()
                        difficultyBeaten = 2
                        ready = true
                        theGround()
                        initRaptor()
                        info.setScore(0)
                        end = 0
                        color.setPalette(
                        color.GrayScale
                        )
                        timer.after(10000, function () {
                            info.startCountdown(120)
                            color.startFade(color.GrayScale, color.originalPalette, 120000)
                            scene.setBackgroundImage(img`
                                7777777777777777777777777777ff777777777777777777777777777f77777777777777777777777777777777ff7777777777777777777777776ff777777777777776f777777777777777777777777
                                777777777777777777777777777777f77777777777777777777777777ff777777777777777777777777777777777f77777777777777777777777f767777777777777776f77777777777777777777777
                                777777777777777777777777777777ff7777777777777777777777fff77777777777777777777777777777777777ff777777777777777777776f67777777777777777776f7777777777777777777777
                                7777777777777777777777777777777f7777777777777777777776fff777777777777777777777777777777777777f677777777777777777776f66677777777777777777ffff7777777777777777777
                                7777777777777777777777777777777f777777777777777777777f777777777777777777777777777777777777777f6777777777777777777776fff777777777777777777fff7777777777777777777
                                77777777777777777777777777777777f77777777777777777777f7777777777777777777777777777777777777ff77777777777777777777777777f777777777777777767f77777777777777777777
                                77777777777777777777777777777777f777777777777777777777f777777777777777777777777777777ffffff7777777777777777777f7777776f777777777777777777f777777777777777777777
                                7777777777777777777777777777ffff777777777777777777f777f7777777777777777777777777777777f777777777777777777777777f67776f7777777777777777777f7777f7777777777777777
                                7777777777777777777777777fff66667777777777777777777f77f77777777777777777777777777777777ff77777777777777777777776fffff67ff777777777777777ff77fff7777777777777777
                                7777777777777777777777777fff7777777777777777776777766ff77777777777777777777777777777777ff67777777777777777677777fccccf6cc677777777777777ffffff77777777777777777
                                777777777777777777777777777f777777777777777776f77777ff77777777777777777777777777777777777f7777777777777777f77777feeeeffeef77777777777777ffff7f77777777777777777
                                7777777777777777777777777777f777777f77777777777f777f7777777777777777777777777777ff7777777f77777777777777777f7777feeeeeeeef77777777777777f7777f77777777777777777
                                7777777777777777777777777777f77f777f77777f77777ff77f77777f777777777777777777777777f777777f777777777777777777f777feeeeeeef77fff777f776f77f77fff777f7777777777777
                                777777777777777777777f777777f7ff77f77f777f67777fefff7777f77777ff7777777777777777777ffffff7777777777777f77777ffffeeeeeeeeeffeef777f776f77f7fff77ff77777777777777
                                777777777777777777777fffff77ffef77f77f77fee6777feeeefffff77777ff77777777777777777777feef777777777777777f7777feeeeeeeeeeeeeeeef77ff776ff7fffffffef77777777777777
                                777777777777777777777feeeeffeeef7ff7f677feee66eeeeeeeeeef77777ff7777777777777ff77777feef7777f7766777777ff777feeeeeeeeeeeeeeeef7fef76eeffffffffeef777f7777777777
                                777777777777777777777feeeeffeeef7f77f777feeef6feeeeeeeeef7777ff77777777777777ff77777feef7777f77f6777776ff777feeeeeeeeeeeeeeeef7fef6feeffffffffeef777ff777777777
                                77777777777777777f777feeeeeeeeeefffff77feeeeefeeeeeeeeeefffffff7777f777777777ff77777feef777ff777ff7777feef77feeeeeeeeeeeeeeeeefeeeffeeefffffeeeef77fff777777777
                                7777f7777777f7777f777feeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeef7777f7777f7777fffff77feef777ff777fff77feeeeffeeeeeeeeeeeeeeeeeeeeeeeeeefffeffeeeef7feff7777f7777
                                7777f7777777f7777ffffffeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeef777ff7777f7777feeefffeeeef7feff7feeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeefffeeeffeeef7777f777f
                                7777f7777777f7777feefffeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeef77fef7777f7777feeeeeeeeeeefeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeefffeeeeeeeff777ff777f
                                7777f777777fef777feeffeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeffeeef77fef777feeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeffeeeeeeeeffffef77fe
                                7777f777777fef777feeffeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeffeeef77fef777feeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeffeeeeeeeeeeeeef77fe
                                777ff777777feef7feefffeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77fef77feeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeefffeeeeeeeeeeeeeffee
                                777feff777ffeeefeefffeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeffeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeefffeeeeeeeeeeeeeeee
                                777f7ff777fe7e7e7effeeeeeeeeeee7e7e7e7fff7e77eeeeeeee7e7eeeee77e7e7e7eeeee7e7e77e7e7e7e7eeeeeeee77efffe7eeeeee7e7eeeeeee7e7e7ffffeeee7e7eeeefffeee7e777eee7e7e7
                                fff7e77fffe7e7e7effeeee7eeeeeeee7e7e7e7fff77eeeeeeeeee7e7eeee7e7e7e7eeeeeee7e7777e7e7e7eeeee7ee7777effffeeeeeee7e7eeeeeee7efffffeeeeee7e7eeeffffeee7e7eeeee7e7e
                                7e7e7e7eeeee7e7e7ffeeeee7eeeeee7e7e7e7e7fff7eeeeeeeee7e7eeeeee7e7e7eeeeeeeee7e7777e7e7e7eee7e7eee7e7efffffeeee7e7eeeeeeeffffff7e7eeee7e7eeeeefffee7e77eeee7e7e7
                                7777777eeee777777feeeeee7eeeeee7777777777fffeeeeeeee77777eeeee77777eee7eeee7777777777777eee777eee7777e7fffeeee7777eeeeeefffff7777eee77777eeeeeffeee777eeee77777
                                e7e7e7eeeee7e7e7ffeeeee7eeeeeeee7e7e7e7e7fffeeeeeeee7e7e7eeeeee7e7eeee7eeee7e7777e7e7e7eeeee7eeee77e7e7fffffffe7e77ffffffffff7e7eeee7e7e7eeeeefffee7e7eee7e7e7e
                                7e7e7e7eeeee7e7fffeeee777eeeeeeee7e7e7e7e7ffffeeeeeee7e7e7eeee7e7e7eeeeeeeee7e77e7e7e7eeeee7e7eeeee7e7e7effffffffffffffffe7e7e7e7eeee7e7e7eeeeffff7e7eeeee7e7e7
                                e7e7e77eeeeee7fff7eeeee7e7eeeeeeee7e7e7e7e77fffeeeee7e7e7eeeeee7e7eeee7eeeeee7777e7e7e7eeeee7e74eeee7e7eeeeeeffffffffee7e7e7e7e7eeee7e7e7e7eeeefffe7eeeee7e7e7e
                                7e7e7e77eeee7fff7eeeee7e77eeeeeee7e7e7e7e7e77fffeeeee7e7e7eeeeee7eeee7e7eeeeee77e7e7e7eeeee7e7e7eeeee7eeeeeeee7e7eeeeeee7e7e7e7eeeee77e7e7eeeeeefffeeeee7e7e7e7
                                e7e7e777eeeefff7e7eeeee7e77eeeeeee7e7e7e7e77eeffffee7e7e7eeeee47eeee7e7eeeeee7777e7e7e7eeeee7e77eeee7eeeeeeee7e7e7eeeee7e7e7e7e7eeee7e7e7e7eeeeeefffeeeee7e7e7e
                                7e777e77eeeeff7e74eeee777777eeeeeee7e777e77eeeefffeee7e7e7eeeeeeeeee77e7eeeeeee7e777777eeee7e777eeee47eeeeee7e7777eeeeee7e7e7e7eeeeee7777777eeee7effeeee7e777e7
                                7e7e7e77eeefff7e7eeeee7777e7eeeeeee7e7e7e7e7eeefffffe7e7e7eeeeeeeeeee7e7eeeeeee7e7e7e7eeeee7e7777eeee7eeeeee7e7e7eeeeeee7e7e7e7eeeee7777e7e7eeee7eeffee77e7e7e7
                                7777777777fff7777eeee7777777eeeeeee7777777777eeeefffff7777eeeeeeeee777777eeeeee77777777eeee777777eeeeeeeeeee777777eeeee77777777eee7777777777eeee777fff777777777
                                77777777ffffee777eeee77777777eeeeee777777777eeeeeeeffffff7eeeeeeee7777777eeeeeee777777eeee777777777eeeeeeeee777777eeeee77777777eee777777777eeeeee7eeeffff777777
                                7777777ffffeee777eeee77777777eeeeeee77777777eeeeeeee7ffffffffeeeee777777ffeeeeee777777eeee7777777777eeeeeee7777777eeeee77777777eee77777777eeeeeeeeeeeeffff77777
                                7777ffff777eeee7eeeee777777777eeeeeee7777777eeeeeeee7777ffffffffffffffffffeeeeeee77777eeee7777777eeeeeeeeee7777777eeeee77777777eee77777777eeeeeeeeeee47ffff7777
                                7ffffff77777eeeeeeeee777777777eeeeeeee7777777eeeeeee777777effffffffffffff77eeeeee7777eeeee777777eeeeeeeeeee7777777eeeee77777777eee7777777eeeeeeeeeeeee777ffff77
                                7ffffe777777eeeeeeeee777777777eeeeeeeee777777eeeeeee777777eeeeeee7777777777eeeeeee777eeeee777777eeeeeeeeeee7777777eeeee7777777eeee777777eeeeeeeeeeee477777fff77
                                fffff7777777eeeeeeee77777777777eeeeeeee777777eeeeeee777777eeeeeee77777777777eeeeee777eeeee77777eeeeeeeeeeee7777777eeeee7777777eeee777777eeeee77eeeee777777fffff
                                fff777777777eeeeeeee77777777777eeeeeeeee777eeeeeeeee7777777eeeeee77777777777eeeeee77eeeeee7777eeeeeeeeeeeee7777777eeeee7777777eeee77777eeeee777eeeee77777777fff
                                777777777777eeeeeeee777777777777eeeeeeeeeeeeeeeeeeee7777777eeeeee777777777777eeeeeeeeeeeeee77eeeeeeee7eeee77777777eeeeee777777eeee777eeeeeee7777eeee77777777777
                                7777777777777eeeeeee7777777777777eeeeeeeeeeeeeeeeeee7777777eeeee7777777777777eeeeeeeeeeeeeeeeeeeeeee77eeee77777777eeeeee777777eee777eeeeeee77777eee777777777777
                                7777777777777eeeeeee77777777777777eeeeeeeeeeeeeeeeee7777777eeeee77777777777777eeeeeeeeeeeeeeeeeeeee7777eee77777777eeeeee777777eee77eeeeeee777777eee777777777777
                                7777777777777eeeeeee77777777777777eeeeeeeeeeeeeeeeee7777777eeeee777777777777777eeeeeeeeeeeeeeeeeeee7777eee77777777eeeeee777777eeeeeeeeeeee777777eee777777777777
                                7777777777777eeeeeee777777777777777eeeeeeeeeeeeeeeee7777777eeeee777777777777777eeeeeeeeeeeeeeeeeee77777eee77777777eeeeee777777eeeeeeeeeee7777777eee777777777777
                                7575757557575eeeeee75757577575757575eeeeeeeeeeeeeeee5757575eeeee757575757575757eeeeeeeeeeeeeeeee5575757eee5757575755eeee75757eeeeeeeeeee75757575eee755757575757
                                5757575775757eeeeee5757575575757575757eeeeeeeeeeeeee7575757eeee45757575757575755eeeeeeeeeeeeee757757575eee7575757577eeee57575eeeeeeeeee757575757eee577575757575
                                757575755757eeeeeee75757577575757575757eeeeeeeeeeeee5757575eeeee757575757575757757eeeeeeeeee5757557575eeee5757575755eeee75757eeeeeeeee7575757575eee757757575757
                                575757575575eeeeeee575757557575757575757eeeeeeeeeee57575757eeee45757575757575777757eeeeeeeee7575775757eeee7575757557eeee57575eeeeeeee75757575757eee575775757575
                                757575755757eeeeeee7575757557575757575757eeeeeeeeee75757575eeee47575757575757557577eeeeeeeee5757557575eeee5757575757eeeee5757eeeeeee757575757575eee755757575757
                                757575755757eeeeeee7575757757575757575757eeeeeeeeee75757575eeeee7575757575757575575eeeeeeee75757557575eeee5757575757eeeee5757eeeeee7757575757575eee755757575757
                                575757575575eeeeeee57575755757575757575757eeeeeeeee57575757eeee457575757575757557575eeeeee757575775757eeee7575757557eeeee7575eeeee75575757575757eee577575757575
                                757575757757eeeeeee75757577575757575757575eeeeeeeee75757575eeeeee5757575757575575757eeeeee575757557575eeee5757575775eeeee575eeeee757757575757575eee755757575757
                                575757575575eeeeeee575757557575757575757575eeeeeeee5757575eeeeeee7575757575757757575eeeeee757575775757eeee7575757557eeeee757eeeee575575757575757eee577575757575
                                75757575575eeeeeee5757575775757575757575757eeeeeeee7575757eeeeeee5757575757575775757eeeeee575757557575eeee5757575755eeeeee75eeeee757757575757575eee755757575757
                                55555555555eeeeeee5555555555555555555555555eeeeeee75555555eeeeeee5555555555555555557eeeee5555555555555eeee5555577777eeeeee55eeeee755555555555555eee555555555555
                                55555555555eeeeeee5555555555555555555555555eeeeeee55555555eeeeeee5555555555555555555eeeee5555555555557eeee555577777eeeeeee75eeeee555555555555557eee555555555555
                                55555555555eeeeeee5555555555555555555555555eeeeeee55555555eeeeeee5555555555555555555eeeee555555555555eeeee555567777eeeeeeee5eeeee55555555555555eeee555555555555
                                55555555555eeeeeee5555555555555555555557775eeeeeee5555556777777777555555555555555555eeeee555555555555eeeeee556777777eeeeeeeeeeeee55555555555555eeeee75555555555
                                55555555555eeeeeee5555555555555555555667777eeeeeee5555677777777777776555555555555555eeeee5555555577777eeeee567777777eeeeeeeeeeeee55555555555555eeeee75555555555
                                5555555555eeeeeeee5555555555555555557777777eeeeeee5577777777777777776555577555555555eeeee55555557777777eee77777777777eeeeeeeeeeee55555555555555eeeee75555555555
                                5557777777eeeeeeee7777555555555555777777777eeeeeee7777777777777777777757777775555555eeeee5555557777777777777777777777eeeeeeeeeeee7777555555555777eee75555555555
                                5577777777eeeeeeee7777755557777577777777777eeeeeee777777777777777777777777777775555eeeeee5555777777777777777777777777eeeeeeeeeeee7777755555577777eee75555555555
                                5577777777eeeeee777777775577776577777777777eeeeeee777777777777777777777777777777555eeeeee5555677777777777777777777777eeeeeeeeeeee77777555555777777ee75555555555
                                6777777777eeeee7777777775777777777777777777eeeeeee777777777777777777777777777777757eeeeee777777777777777777777777777777eeeeeeeeee777777555777777777e55555555555
                                7777777777eeeee777777777777777777777777f677eeeeeee777777777777777777777777777777777eeeeee777777777777777777777777777777eeeeeeeeee777777777777777777777777675555
                                777777777eeeeee77777777777777777777777f7f67eeeeeee777777777777777777777777777777777eeeeee7777777777777777777777777777777eeeeeeeee777777777777777777777777777777
                                777777777eeeeee77777777777777777777777ff7f6eeeeeee777777777777777777777777777777777eeeeee77777777777777777f77777777777777eeeeeeeee77777777777777777777777777777
                                777777777eeeeee77777777777777777777777ff66fceeeeee777777777777777777777777777777777eeeeee7777777777777777fff7777777777777eeeeeeee777777777777777777777777777777
                                777777777eeeeee77777777777777777777777fff7ffeeeeee77777777777777eee7777777777777777eeeeee7777777777777777f7f77777777777777eeeeee7777777777777777777777777777777
                                777777777eeeeee77777777777777777f777777ff7ffeeeeee7ff777777777cccccc77777777777777eeeeeee7777777777777777ff7f7777777777777eeeeee7777777777777777777777777777777
                                777777777eeeee77777777777777777f7ff7777fff76feeeeff77f77777cccccccccc7777777777777eeeeeee7777777777fff777ff7f77777777777777eeeee7777777777777777777777777777777
                                7777777eeeeeeeee777777777777777ff77f777fff76feeef77ff77777ccccccccccc7777777777777eeeeeee7777777777f77f77fff7f777777fff77777cccc7777777777777777777777777777777
                                77777cccccccccccc777777777777777fff7f77fff76feef7ffff7777cccccccccccc77777777777ceeeeeeee77777777776ff7f7fff7f777776f77f777ccccccc77777777777777777777777777777
                                7777cccccccccccccc77777777777777fff7f77fff76feef7ffff7ff7cccccccccccc77777777777ceeeeeeeee7777777776ff66ffff7f7777ff666f777cccccccc7777777777777777777777777777
                                7777cccccccccccccc777777777666777ff7fc7fff76feef7fff76ffccccccccccccc77777777777ceeeeeeeee77777777776ff7ffff7f6776ff7fff77cccccccccc777777777777777777777777777
                                777ccccccccccccccc77777777ffff777fff7f7fff76fef7fff7ff77ffccccccccccc77777ccc777ceeeeeeeee77777777776ff7fffff7f67f67fff77cccccccccccc77777777777777777777777777
                                77ccccccffffcffffc7777777ff777ff77ff7f7fff76ff7fffff77ffcccccccccccccc777ccccc7eeeeeeeeeee77777777776fff7ffff7f7f77fffcccfccccccccccc77777777777777777777777777
                                7cccccceeeeefccc2fe7777777ffff77f7fff7ffff76f7ffff77fffcccccccccccccccccccccccceeeffeeeeee777ffffff777ff7ffff7ff76fffcccccccccccccccc7777777777777777777777ccc7
                                cccccccfcffffffcfcc77777ccccffff7f7ff7ffff76fffff7ffffcccccccccccccccccccccccccee2eefeeeee77f777777ff7ff7ffff7f76fffcccccccccccccccccc77777777777777777fffccccc
                                cccccccceeeefcf2eeee7777eeeeeefff7fff67ffff77fff7fffffcfffccccccccccffccccccccceeeeffeeeee776fffff677ffff7fff7ffffffcfffffcccccffccccc777777777777777fff6cfcccc
                                cccccccceeefffc2feee777eeeeeeefff7ffff7ffff66fff7ffffffffffcccccccfffffccccccccceeeffceeee777ffffff77ffff7fff7fffffffffffffcccefffeeee777777777777776ffffefeeee
                                eeeeeeeeeefffffccccccccccccccccfff7ffff7fffffffffffccff77ffcccccccffccffccccccccce2eefeeee7777fffffff7ffffffff7ffffcff7777fccc2fefccccc777ccc7777777ff7fffc2eee
                                eeeeeeeeee2eff2eeeeeeeeeeeeeeeeefff7fffffffffffffcfff77ff77ffccccfccffc2feeeeeeeeeeeffeeeeeee7ffffffff77ffffffffffff77ffffcccccfffccccccccccccc7777ffffce2eeeee
                                eeeeeeeeeeeefccfcccccccccccccccccfffffffffffffffff777ffffffccccffcfff2efeeeeeeeeeee2eefccccccf777777ffff7fffffff7777fffffcccccc2eeffcccccccccccc777ffceeeeeeeee
                                eeeeeeeeeeeefcfcccccccccccccccccccffffffffffffff77ffffffcccccccfffc2efeeeeeeeeeeeeefeefcccccf7ffffff777ffffffffffffffffccccccccfcfffcccccccccccccccffcffccccccc
                                cfccccffccccffcccccfccccccffccccfccfffffffffffffffffffcccccccccffcccccfcccccccccccccccfccccccfffffffffffffffffffffffffcccccccccc2eeffeeeeeeeeeeeeeeffccfccccccc
                                cffccfffffccfffccccffccccfffcccfffcfffffffffffffffffffccccfcccffffccccfccfcccccffcccccfccccccfffffffffffffffffffffffffccfccccccfeeeffeeeefeeeeeeeeeffffccfcfccc
                                cffccffffccffffccccffccccfffcccfffcffffffffffffffffffcccfcfcccffffccccfcfffcccfffcccccfccccccfcccffffffffffffffffffffcccfccccccffccffccccfcccccccccffffccccffcc
                                ffffcfffffcffffccffffcccfffffcfffffcffffffffffffffffffccffffffffffcccffcfffccfffffcccfffcccffffffffffccffffffffffffffccfffccccffcccffcccfffcccccfccffffcccfffcc
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffccffffffffffffcffffffffffffffffffffffffffcffffffffffcccffccfffffcffffff
                                fffffffffffff7ffffffffff76fffffffffffffffffffffffff7fffffffff77ffffffffff7ffffffffff7fffffff7ffffffffffffffffff76fffffffffffffffffffffffffffffffffffffffffff7ff
                                f7fffff77ff67f7ffffffff7677ffff7fffffffff76fffffff7f7fffffff7767ffffffff7f7ffffffff7f7fffff7f76fffffffff7fffff7f76f67fffff7fffffffff77ffff7ffffffff76ffffff7f7f
                                767fff7777ff6f6fff7fff77ffffff767ffff7ff7677f67fff6f6ff7fff77ff77ff7fff76f6ffff77ff6f6ffff76f676f67ffff767fff76fff7767fff767fff7fff7777ff767ffffff7f77fff7fffff
                                7f7ff676776ffffff676ff7ffffff67f7fff676f7f76f776ffffff676ff76fff7f676ff7fffffff777fffff6ff7fff766776ff67f7f6f7ffff67f7ff67f7ff676ff7767f67f7f6fff67f77ff676ffff
                                fffff77ff67ffffff7f7ffffffff67ffffff7f7fffff6767ffffff7f76ffffffff7f7fffffffff7767fffff7ffffffff77f7ff7ffff7ffffffffffff7fffff7f76ffffff7ffff7fff7fffff77f7ffff
                                ffffffffffffffff7ffffffffffffffffff7fffffff77ffffffff7fff7ffffffffffffffff7ff77fffffff7f7fffffffffffffffff7f7ffffffffffffffff7ffffffffffffff7f7fffffff77fff7fff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f7fffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeee4ffffffffffffffffffffff
                                eeeeeeeeeeeeeeeeeeeeeeefeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeefffeeeffeeeeeeeeeeeeeeeeeeeeeeeeee
                                eeeeeffeeeeefeeeefffeeeefeeeeeeeeeffffeeefeeeeeeeefeeeeffffffeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeefeeeeefefffffeeeefeeeeeeeeeeefeeefeeeefeeeeeeeeefeeeeeeeffeeeffe
                                eefeeeeeeeeeeeeefeeefeeeeeeeeeefefeeefeeeeeeeeeeeeeeeefeeeeffeeeeeeefeeeeefffffeeefeeeeeeeffffeeeeeeeeefeeeefeeeeeeeefffeeefeeeffeeeeeefeeeffeeeeeffeeeeeeeeffe
                                eeeeeeefffeeeeeefffffeeeeeeeeeefefeeefeeeeeeffeeeeeeeefeeeffeeeeeeeeeeeeeffffffeeefefeeeefffffeeeeefeeefeeeffeeeeeeeffffeeeffffffeeeeeeeeeffffeeefffeeeeeeeeffe
                                eeeeeeffffeeeeeeefffeeeeeeeeeeefefeeefeeeeeffffeeeeeeefeeefeeeefeeeeefeeefeeefeeeefefeeeefeeefeeeeefeeefeeeffeeeeeeefeefeeeefffeeeeeeeeeeefeefeeefefeeeeeeeeeee
                                eeeeeffeeefeefeeeeeeeeeeffffeeeeeffffeeeeeffeefeeeefeeffffeeeeeeeeeeeeeeeffffeeeeeeeeeeeefeeefeeeeeeeeeefffeeeeeeeeeeffeeeeeeeeeeefeeeeeeefeefeeeffeeeeeeeeeeee
                                eefeefeeeefeeeeeeeeeeeefeeeefeeeeeeeeefeefeeefeefeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeefeefeeeeeeeeefffeefee
                                eeeeeeffffeeeeeeeeeeeeefeeeefeeeeeeeeefeeffffeeeeeeeeefeeeeeeeffefefeeefeeefeeeeeffffefeeeeeeeeeeeeefffeeefeefffeeeeeeeeefeeeeeeeeeffffeeeeffeeeeeeeeeffeefeeee
                                eeeefeeeeeeeeeeeeefeeeeeffffeeeeeefeeeeeeeeeeeeeeeeeeeeeeffeeeeeefffeeeeeeeeeeeffeeefeeeeeeeeeeeeeefeefeeeeeefeefeeeffeeeeeeeeeeeefceefeeeeeeeeeefeeeffeeffeeee
                                efeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeefeeeeffeeeeeefeeeeeeeeeeeeefffffeeeeefeeeffeeeeffffeefeeeffffeeeeeeeeeeeeeeeeeffefeeefeeeeefefeeeffffeeefee
                                efeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeefeeeeffeeeeeeeeeeeeeeeeeeeeeffffeeeeefeeeffeeeefffeeefeeeeffeeeeeeeeeeeeeeeeeeffffeeefeeeeefefeeeefffeeefee
                                eeeeeeeeffeeeeeeeeeeefeeeeeefeeeeeeeffeeeeeefeeeeeeeeeeeeeeeeefeeeeeffeeefeeefeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeefeeeefeeeeffeeeeeeefeeeeeeeeeeeeeeeeee
                                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeee
                                `)
                            blur.BlurIn(1000)
                        })
                    } else {
                        game.splash("LOCKED", "Beat Beginner Mode!")
                    }
                } else if (selection == "Hard") {
                    if (blockSettings.exists("Intermediate")) {
                        myMenu.close()
                        difficultyBeaten = 3
                        ready = true
                        theGround()
                        initRaptor()
                        info.setScore(0)
                        end = 0
                        color.setPalette(
                        color.GrayScale
                        )
                        timer.after(10000, function () {
                            info.startCountdown(180)
                            color.startFade(color.GrayScale, color.originalPalette, 180000)
                            scene.setBackgroundImage(img`
                                7777777777777777777777777777ff777777777777777777777777777f77777777777777777777777777777777ff7777777777777777777777776ff777777777777776f777777777777777777777777
                                777777777777777777777777777777f77777777777777777777777777ff777777777777777777777777777777777f77777777777777777777777f767777777777777776f77777777777777777777777
                                777777777777777777777777777777ff7777777777777777777777fff77777777777777777777777777777777777ff777777777777777777776f67777777777777777776f7777777777777777777777
                                7777777777777777777777777777777f7777777777777777777776fff777777777777777777777777777777777777f677777777777777777776f66677777777777777777ffff7777777777777777777
                                7777777777777777777777777777777f777777777777777777777f777777777777777777777777777777777777777f6777777777777777777776fff777777777777777777fff7777777777777777777
                                77777777777777777777777777777777f77777777777777777777f7777777777777777777777777777777777777ff77777777777777777777777777f777777777777777767f77777777777777777777
                                77777777777777777777777777777777f777777777777777777777f777777777777777777777777777777ffffff7777777777777777777f7777776f777777777777777777f777777777777777777777
                                7777777777777777777777777777ffff777777777777777777f777f7777777777777777777777777777777f777777777777777777777777f67776f7777777777777777777f7777f7777777777777777
                                7777777777777777777777777fff66667777777777777777777f77f77777777777777777777777777777777ff77777777777777777777776fffff67ff777777777777777ff77fff7777777777777777
                                7777777777777777777777777fff7777777777777777776777766ff77777777777777777777777777777777ff67777777777777777677777fccccf6cc677777777777777ffffff77777777777777777
                                777777777777777777777777777f777777777777777776f77777ff77777777777777777777777777777777777f7777777777777777f77777feeeeffeef77777777777777ffff7f77777777777777777
                                7777777777777777777777777777f777777f77777777777f777f7777777777777777777777777777ff7777777f77777777777777777f7777feeeeeeeef77777777777777f7777f77777777777777777
                                7777777777777777777777777777f77f777f77777f77777ff77f77777f777777777777777777777777f777777f777777777777777777f777feeeeeeef77fff777f776f77f77fff777f7777777777777
                                777777777777777777777f777777f7ff77f77f777f67777fefff7777f77777ff7777777777777777777ffffff7777777777777f77777ffffeeeeeeeeeffeef777f776f77f7fff77ff77777777777777
                                777777777777777777777fffff77ffef77f77f77fee6777feeeefffff77777ff77777777777777777777feef777777777777777f7777feeeeeeeeeeeeeeeef77ff776ff7fffffffef77777777777777
                                777777777777777777777feeeeffeeef7ff7f677feee66eeeeeeeeeef77777ff7777777777777ff77777feef7777f7766777777ff777feeeeeeeeeeeeeeeef7fef76eeffffffffeef777f7777777777
                                777777777777777777777feeeeffeeef7f77f777feeef6feeeeeeeeef7777ff77777777777777ff77777feef7777f77f6777776ff777feeeeeeeeeeeeeeeef7fef6feeffffffffeef777ff777777777
                                77777777777777777f777feeeeeeeeeefffff77feeeeefeeeeeeeeeefffffff7777f777777777ff77777feef777ff777ff7777feef77feeeeeeeeeeeeeeeeefeeeffeeefffffeeeef77fff777777777
                                7777f7777777f7777f777feeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeef7777f7777f7777fffff77feef777ff777fff77feeeeffeeeeeeeeeeeeeeeeeeeeeeeeeefffeffeeeef7feff7777f7777
                                7777f7777777f7777ffffffeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeef777ff7777f7777feeefffeeeef7feff7feeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeefffeeeffeeef7777f777f
                                7777f7777777f7777feefffeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeef77fef7777f7777feeeeeeeeeeefeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeefffeeeeeeeff777ff777f
                                7777f777777fef777feeffeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeffeeef77fef777feeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeffeeeeeeeeffffef77fe
                                7777f777777fef777feeffeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeffeeef77fef777feeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeffeeeeeeeeeeeeef77fe
                                777ff777777feef7feefffeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77fef77feeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeefffeeeeeeeeeeeeeffee
                                777feff777ffeeefeefffeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeffeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeefffeeeeeeeeeeeeeeee
                                777f7ff777fe7e7e7effeeeeeeeeeee7e7e7e7fff7e77eeeeeeee7e7eeeee77e7e7e7eeeee7e7e77e7e7e7e7eeeeeeee77efffe7eeeeee7e7eeeeeee7e7e7ffffeeee7e7eeeefffeee7e777eee7e7e7
                                fff7e77fffe7e7e7effeeee7eeeeeeee7e7e7e7fff77eeeeeeeeee7e7eeee7e7e7e7eeeeeee7e7777e7e7e7eeeee7ee7777effffeeeeeee7e7eeeeeee7efffffeeeeee7e7eeeffffeee7e7eeeee7e7e
                                7e7e7e7eeeee7e7e7ffeeeee7eeeeee7e7e7e7e7fff7eeeeeeeee7e7eeeeee7e7e7eeeeeeeee7e7777e7e7e7eee7e7eee7e7efffffeeee7e7eeeeeeeffffff7e7eeee7e7eeeeefffee7e77eeee7e7e7
                                7777777eeee777777feeeeee7eeeeee7777777777fffeeeeeeee77777eeeee77777eee7eeee7777777777777eee777eee7777e7fffeeee7777eeeeeefffff7777eee77777eeeeeffeee777eeee77777
                                e7e7e7eeeee7e7e7ffeeeee7eeeeeeee7e7e7e7e7fffeeeeeeee7e7e7eeeeee7e7eeee7eeee7e7777e7e7e7eeeee7eeee77e7e7fffffffe7e77ffffffffff7e7eeee7e7e7eeeeefffee7e7eee7e7e7e
                                7e7e7e7eeeee7e7fffeeee777eeeeeeee7e7e7e7e7ffffeeeeeee7e7e7eeee7e7e7eeeeeeeee7e77e7e7e7eeeee7e7eeeee7e7e7effffffffffffffffe7e7e7e7eeee7e7e7eeeeffff7e7eeeee7e7e7
                                e7e7e77eeeeee7fff7eeeee7e7eeeeeeee7e7e7e7e77fffeeeee7e7e7eeeeee7e7eeee7eeeeee7777e7e7e7eeeee7e74eeee7e7eeeeeeffffffffee7e7e7e7e7eeee7e7e7e7eeeefffe7eeeee7e7e7e
                                7e7e7e77eeee7fff7eeeee7e77eeeeeee7e7e7e7e7e77fffeeeee7e7e7eeeeee7eeee7e7eeeeee77e7e7e7eeeee7e7e7eeeee7eeeeeeee7e7eeeeeee7e7e7e7eeeee77e7e7eeeeeefffeeeee7e7e7e7
                                e7e7e777eeeefff7e7eeeee7e77eeeeeee7e7e7e7e77eeffffee7e7e7eeeee47eeee7e7eeeeee7777e7e7e7eeeee7e77eeee7eeeeeeee7e7e7eeeee7e7e7e7e7eeee7e7e7e7eeeeeefffeeeee7e7e7e
                                7e777e77eeeeff7e74eeee777777eeeeeee7e777e77eeeefffeee7e7e7eeeeeeeeee77e7eeeeeee7e777777eeee7e777eeee47eeeeee7e7777eeeeee7e7e7e7eeeeee7777777eeee7effeeee7e777e7
                                7e7e7e77eeefff7e7eeeee7777e7eeeeeee7e7e7e7e7eeefffffe7e7e7eeeeeeeeeee7e7eeeeeee7e7e7e7eeeee7e7777eeee7eeeeee7e7e7eeeeeee7e7e7e7eeeee7777e7e7eeee7eeffee77e7e7e7
                                7777777777fff7777eeee7777777eeeeeee7777777777eeeefffff7777eeeeeeeee777777eeeeee77777777eeee777777eeeeeeeeeee777777eeeee77777777eee7777777777eeee777fff777777777
                                77777777ffffee777eeee77777777eeeeee777777777eeeeeeeffffff7eeeeeeee7777777eeeeeee777777eeee777777777eeeeeeeee777777eeeee77777777eee777777777eeeeee7eeeffff777777
                                7777777ffffeee777eeee77777777eeeeeee77777777eeeeeeee7ffffffffeeeee777777ffeeeeee777777eeee7777777777eeeeeee7777777eeeee77777777eee77777777eeeeeeeeeeeeffff77777
                                7777ffff777eeee7eeeee777777777eeeeeee7777777eeeeeeee7777ffffffffffffffffffeeeeeee77777eeee7777777eeeeeeeeee7777777eeeee77777777eee77777777eeeeeeeeeee47ffff7777
                                7ffffff77777eeeeeeeee777777777eeeeeeee7777777eeeeeee777777effffffffffffff77eeeeee7777eeeee777777eeeeeeeeeee7777777eeeee77777777eee7777777eeeeeeeeeeeee777ffff77
                                7ffffe777777eeeeeeeee777777777eeeeeeeee777777eeeeeee777777eeeeeee7777777777eeeeeee777eeeee777777eeeeeeeeeee7777777eeeee7777777eeee777777eeeeeeeeeeee477777fff77
                                fffff7777777eeeeeeee77777777777eeeeeeee777777eeeeeee777777eeeeeee77777777777eeeeee777eeeee77777eeeeeeeeeeee7777777eeeee7777777eeee777777eeeee77eeeee777777fffff
                                fff777777777eeeeeeee77777777777eeeeeeeee777eeeeeeeee7777777eeeeee77777777777eeeeee77eeeeee7777eeeeeeeeeeeee7777777eeeee7777777eeee77777eeeee777eeeee77777777fff
                                777777777777eeeeeeee777777777777eeeeeeeeeeeeeeeeeeee7777777eeeeee777777777777eeeeeeeeeeeeee77eeeeeeee7eeee77777777eeeeee777777eeee777eeeeeee7777eeee77777777777
                                7777777777777eeeeeee7777777777777eeeeeeeeeeeeeeeeeee7777777eeeee7777777777777eeeeeeeeeeeeeeeeeeeeeee77eeee77777777eeeeee777777eee777eeeeeee77777eee777777777777
                                7777777777777eeeeeee77777777777777eeeeeeeeeeeeeeeeee7777777eeeee77777777777777eeeeeeeeeeeeeeeeeeeee7777eee77777777eeeeee777777eee77eeeeeee777777eee777777777777
                                7777777777777eeeeeee77777777777777eeeeeeeeeeeeeeeeee7777777eeeee777777777777777eeeeeeeeeeeeeeeeeeee7777eee77777777eeeeee777777eeeeeeeeeeee777777eee777777777777
                                7777777777777eeeeeee777777777777777eeeeeeeeeeeeeeeee7777777eeeee777777777777777eeeeeeeeeeeeeeeeeee77777eee77777777eeeeee777777eeeeeeeeeee7777777eee777777777777
                                7575757557575eeeeee75757577575757575eeeeeeeeeeeeeeee5757575eeeee757575757575757eeeeeeeeeeeeeeeee5575757eee5757575755eeee75757eeeeeeeeeee75757575eee755757575757
                                5757575775757eeeeee5757575575757575757eeeeeeeeeeeeee7575757eeee45757575757575755eeeeeeeeeeeeee757757575eee7575757577eeee57575eeeeeeeeee757575757eee577575757575
                                757575755757eeeeeee75757577575757575757eeeeeeeeeeeee5757575eeeee757575757575757757eeeeeeeeee5757557575eeee5757575755eeee75757eeeeeeeee7575757575eee757757575757
                                575757575575eeeeeee575757557575757575757eeeeeeeeeee57575757eeee45757575757575777757eeeeeeeee7575775757eeee7575757557eeee57575eeeeeeee75757575757eee575775757575
                                757575755757eeeeeee7575757557575757575757eeeeeeeeee75757575eeee47575757575757557577eeeeeeeee5757557575eeee5757575757eeeee5757eeeeeee757575757575eee755757575757
                                757575755757eeeeeee7575757757575757575757eeeeeeeeee75757575eeeee7575757575757575575eeeeeeee75757557575eeee5757575757eeeee5757eeeeee7757575757575eee755757575757
                                575757575575eeeeeee57575755757575757575757eeeeeeeee57575757eeee457575757575757557575eeeeee757575775757eeee7575757557eeeee7575eeeee75575757575757eee577575757575
                                757575757757eeeeeee75757577575757575757575eeeeeeeee75757575eeeeee5757575757575575757eeeeee575757557575eeee5757575775eeeee575eeeee757757575757575eee755757575757
                                575757575575eeeeeee575757557575757575757575eeeeeeee5757575eeeeeee7575757575757757575eeeeee757575775757eeee7575757557eeeee757eeeee575575757575757eee577575757575
                                75757575575eeeeeee5757575775757575757575757eeeeeeee7575757eeeeeee5757575757575775757eeeeee575757557575eeee5757575755eeeeee75eeeee757757575757575eee755757575757
                                55555555555eeeeeee5555555555555555555555555eeeeeee75555555eeeeeee5555555555555555557eeeee5555555555555eeee5555577777eeeeee55eeeee755555555555555eee555555555555
                                55555555555eeeeeee5555555555555555555555555eeeeeee55555555eeeeeee5555555555555555555eeeee5555555555557eeee555577777eeeeeee75eeeee555555555555557eee555555555555
                                55555555555eeeeeee5555555555555555555555555eeeeeee55555555eeeeeee5555555555555555555eeeee555555555555eeeee555567777eeeeeeee5eeeee55555555555555eeee555555555555
                                55555555555eeeeeee5555555555555555555557775eeeeeee5555556777777777555555555555555555eeeee555555555555eeeeee556777777eeeeeeeeeeeee55555555555555eeeee75555555555
                                55555555555eeeeeee5555555555555555555667777eeeeeee5555677777777777776555555555555555eeeee5555555577777eeeee567777777eeeeeeeeeeeee55555555555555eeeee75555555555
                                5555555555eeeeeeee5555555555555555557777777eeeeeee5577777777777777776555577555555555eeeee55555557777777eee77777777777eeeeeeeeeeee55555555555555eeeee75555555555
                                5557777777eeeeeeee7777555555555555777777777eeeeeee7777777777777777777757777775555555eeeee5555557777777777777777777777eeeeeeeeeeee7777555555555777eee75555555555
                                5577777777eeeeeeee7777755557777577777777777eeeeeee777777777777777777777777777775555eeeeee5555777777777777777777777777eeeeeeeeeeee7777755555577777eee75555555555
                                5577777777eeeeee777777775577776577777777777eeeeeee777777777777777777777777777777555eeeeee5555677777777777777777777777eeeeeeeeeeee77777555555777777ee75555555555
                                6777777777eeeee7777777775777777777777777777eeeeeee777777777777777777777777777777757eeeeee777777777777777777777777777777eeeeeeeeee777777555777777777e55555555555
                                7777777777eeeee777777777777777777777777f677eeeeeee777777777777777777777777777777777eeeeee777777777777777777777777777777eeeeeeeeee777777777777777777777777675555
                                777777777eeeeee77777777777777777777777f7f67eeeeeee777777777777777777777777777777777eeeeee7777777777777777777777777777777eeeeeeeee777777777777777777777777777777
                                777777777eeeeee77777777777777777777777ff7f6eeeeeee777777777777777777777777777777777eeeeee77777777777777777f77777777777777eeeeeeeee77777777777777777777777777777
                                777777777eeeeee77777777777777777777777ff66fceeeeee777777777777777777777777777777777eeeeee7777777777777777fff7777777777777eeeeeeee777777777777777777777777777777
                                777777777eeeeee77777777777777777777777fff7ffeeeeee77777777777777eee7777777777777777eeeeee7777777777777777f7f77777777777777eeeeee7777777777777777777777777777777
                                777777777eeeeee77777777777777777f777777ff7ffeeeeee7ff777777777cccccc77777777777777eeeeeee7777777777777777ff7f7777777777777eeeeee7777777777777777777777777777777
                                777777777eeeee77777777777777777f7ff7777fff76feeeeff77f77777cccccccccc7777777777777eeeeeee7777777777fff777ff7f77777777777777eeeee7777777777777777777777777777777
                                7777777eeeeeeeee777777777777777ff77f777fff76feeef77ff77777ccccccccccc7777777777777eeeeeee7777777777f77f77fff7f777777fff77777cccc7777777777777777777777777777777
                                77777cccccccccccc777777777777777fff7f77fff76feef7ffff7777cccccccccccc77777777777ceeeeeeee77777777776ff7f7fff7f777776f77f777ccccccc77777777777777777777777777777
                                7777cccccccccccccc77777777777777fff7f77fff76feef7ffff7ff7cccccccccccc77777777777ceeeeeeeee7777777776ff66ffff7f7777ff666f777cccccccc7777777777777777777777777777
                                7777cccccccccccccc777777777666777ff7fc7fff76feef7fff76ffccccccccccccc77777777777ceeeeeeeee77777777776ff7ffff7f6776ff7fff77cccccccccc777777777777777777777777777
                                777ccccccccccccccc77777777ffff777fff7f7fff76fef7fff7ff77ffccccccccccc77777ccc777ceeeeeeeee77777777776ff7fffff7f67f67fff77cccccccccccc77777777777777777777777777
                                77ccccccffffcffffc7777777ff777ff77ff7f7fff76ff7fffff77ffcccccccccccccc777ccccc7eeeeeeeeeee77777777776fff7ffff7f7f77fffcccfccccccccccc77777777777777777777777777
                                7cccccceeeeefccc2fe7777777ffff77f7fff7ffff76f7ffff77fffcccccccccccccccccccccccceeeffeeeeee777ffffff777ff7ffff7ff76fffcccccccccccccccc7777777777777777777777ccc7
                                cccccccfcffffffcfcc77777ccccffff7f7ff7ffff76fffff7ffffcccccccccccccccccccccccccee2eefeeeee77f777777ff7ff7ffff7f76fffcccccccccccccccccc77777777777777777fffccccc
                                cccccccceeeefcf2eeee7777eeeeeefff7fff67ffff77fff7fffffcfffccccccccccffccccccccceeeeffeeeee776fffff677ffff7fff7ffffffcfffffcccccffccccc777777777777777fff6cfcccc
                                cccccccceeefffc2feee777eeeeeeefff7ffff7ffff66fff7ffffffffffcccccccfffffccccccccceeeffceeee777ffffff77ffff7fff7fffffffffffffcccefffeeee777777777777776ffffefeeee
                                eeeeeeeeeefffffccccccccccccccccfff7ffff7fffffffffffccff77ffcccccccffccffccccccccce2eefeeee7777fffffff7ffffffff7ffffcff7777fccc2fefccccc777ccc7777777ff7fffc2eee
                                eeeeeeeeee2eff2eeeeeeeeeeeeeeeeefff7fffffffffffffcfff77ff77ffccccfccffc2feeeeeeeeeeeffeeeeeee7ffffffff77ffffffffffff77ffffcccccfffccccccccccccc7777ffffce2eeeee
                                eeeeeeeeeeeefccfcccccccccccccccccfffffffffffffffff777ffffffccccffcfff2efeeeeeeeeeee2eefccccccf777777ffff7fffffff7777fffffcccccc2eeffcccccccccccc777ffceeeeeeeee
                                eeeeeeeeeeeefcfcccccccccccccccccccffffffffffffff77ffffffcccccccfffc2efeeeeeeeeeeeeefeefcccccf7ffffff777ffffffffffffffffccccccccfcfffcccccccccccccccffcffccccccc
                                cfccccffccccffcccccfccccccffccccfccfffffffffffffffffffcccccccccffcccccfcccccccccccccccfccccccfffffffffffffffffffffffffcccccccccc2eeffeeeeeeeeeeeeeeffccfccccccc
                                cffccfffffccfffccccffccccfffcccfffcfffffffffffffffffffccccfcccffffccccfccfcccccffcccccfccccccfffffffffffffffffffffffffccfccccccfeeeffeeeefeeeeeeeeeffffccfcfccc
                                cffccffffccffffccccffccccfffcccfffcffffffffffffffffffcccfcfcccffffccccfcfffcccfffcccccfccccccfcccffffffffffffffffffffcccfccccccffccffccccfcccccccccffffccccffcc
                                ffffcfffffcffffccffffcccfffffcfffffcffffffffffffffffffccffffffffffcccffcfffccfffffcccfffcccffffffffffccffffffffffffffccfffccccffcccffcccfffcccccfccffffcccfffcc
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffccffffffffffffcffffffffffffffffffffffffffcffffffffffcccffccfffffcffffff
                                fffffffffffff7ffffffffff76fffffffffffffffffffffffff7fffffffff77ffffffffff7ffffffffff7fffffff7ffffffffffffffffff76fffffffffffffffffffffffffffffffffffffffffff7ff
                                f7fffff77ff67f7ffffffff7677ffff7fffffffff76fffffff7f7fffffff7767ffffffff7f7ffffffff7f7fffff7f76fffffffff7fffff7f76f67fffff7fffffffff77ffff7ffffffff76ffffff7f7f
                                767fff7777ff6f6fff7fff77ffffff767ffff7ff7677f67fff6f6ff7fff77ff77ff7fff76f6ffff77ff6f6ffff76f676f67ffff767fff76fff7767fff767fff7fff7777ff767ffffff7f77fff7fffff
                                7f7ff676776ffffff676ff7ffffff67f7fff676f7f76f776ffffff676ff76fff7f676ff7fffffff777fffff6ff7fff766776ff67f7f6f7ffff67f7ff67f7ff676ff7767f67f7f6fff67f77ff676ffff
                                fffff77ff67ffffff7f7ffffffff67ffffff7f7fffff6767ffffff7f76ffffffff7f7fffffffff7767fffff7ffffffff77f7ff7ffff7ffffffffffff7fffff7f76ffffff7ffff7fff7fffff77f7ffff
                                ffffffffffffffff7ffffffffffffffffff7fffffff77ffffffff7fff7ffffffffffffffff7ff77fffffff7f7fffffffffffffffff7f7ffffffffffffffff7ffffffffffffff7f7fffffff77fff7fff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f7fffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeee4ffffffffffffffffffffff
                                eeeeeeeeeeeeeeeeeeeeeeefeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeefffeeeffeeeeeeeeeeeeeeeeeeeeeeeeee
                                eeeeeffeeeeefeeeefffeeeefeeeeeeeeeffffeeefeeeeeeeefeeeeffffffeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeefeeeeefefffffeeeefeeeeeeeeeeefeeefeeeefeeeeeeeeefeeeeeeeffeeeffe
                                eefeeeeeeeeeeeeefeeefeeeeeeeeeefefeeefeeeeeeeeeeeeeeeefeeeeffeeeeeeefeeeeefffffeeefeeeeeeeffffeeeeeeeeefeeeefeeeeeeeefffeeefeeeffeeeeeefeeeffeeeeeffeeeeeeeeffe
                                eeeeeeefffeeeeeefffffeeeeeeeeeefefeeefeeeeeeffeeeeeeeefeeeffeeeeeeeeeeeeeffffffeeefefeeeefffffeeeeefeeefeeeffeeeeeeeffffeeeffffffeeeeeeeeeffffeeefffeeeeeeeeffe
                                eeeeeeffffeeeeeeefffeeeeeeeeeeefefeeefeeeeeffffeeeeeeefeeefeeeefeeeeefeeefeeefeeeefefeeeefeeefeeeeefeeefeeeffeeeeeeefeefeeeefffeeeeeeeeeeefeefeeefefeeeeeeeeeee
                                eeeeeffeeefeefeeeeeeeeeeffffeeeeeffffeeeeeffeefeeeefeeffffeeeeeeeeeeeeeeeffffeeeeeeeeeeeefeeefeeeeeeeeeefffeeeeeeeeeeffeeeeeeeeeeefeeeeeeefeefeeeffeeeeeeeeeeee
                                eefeefeeeefeeeeeeeeeeeefeeeefeeeeeeeeefeefeeefeefeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeefeefeeeeeeeeefffeefee
                                eeeeeeffffeeeeeeeeeeeeefeeeefeeeeeeeeefeeffffeeeeeeeeefeeeeeeeffefefeeefeeefeeeeeffffefeeeeeeeeeeeeefffeeefeefffeeeeeeeeefeeeeeeeeeffffeeeeffeeeeeeeeeffeefeeee
                                eeeefeeeeeeeeeeeeefeeeeeffffeeeeeefeeeeeeeeeeeeeeeeeeeeeeffeeeeeefffeeeeeeeeeeeffeeefeeeeeeeeeeeeeefeefeeeeeefeefeeeffeeeeeeeeeeeefceefeeeeeeeeeefeeeffeeffeeee
                                efeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeefeeeeffeeeeeefeeeeeeeeeeeeefffffeeeeefeeeffeeeeffffeefeeeffffeeeeeeeeeeeeeeeeeffefeeefeeeeefefeeeffffeeefee
                                efeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeefeeeeffeeeeeeeeeeeeeeeeeeeeeffffeeeeefeeeffeeeefffeeefeeeeffeeeeeeeeeeeeeeeeeeffffeeefeeeeefefeeeefffeeefee
                                eeeeeeeeffeeeeeeeeeeefeeeeeefeeeeeeeffeeeeeefeeeeeeeeeeeeeeeeefeeeeeffeeefeeefeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeefeeeefeeeeffeeeeeeefeeeeeeeeeeeeeeeeee
                                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeee
                                `)
                            blur.BlurIn(1000)
                        })
                    } else {
                        game.splash("LOCKED", "Beat Intermediate Mode!")
                    }
                } else if (selection == "Impossible") {
                    if (blockSettings.exists("Hard")) {
                        myMenu.close()
                        difficultyBeaten = 4
                        ready = true
                        theGround()
                        initRaptor()
                        info.setScore(0)
                        end = 0
                        color.setPalette(
                        color.GrayScale
                        )
                        timer.after(10000, function () {
                            info.startCountdown(240)
                            color.startFade(color.GrayScale, color.originalPalette, 240000)
                            scene.setBackgroundImage(img`
                                7777777777777777777777777777ff777777777777777777777777777f77777777777777777777777777777777ff7777777777777777777777776ff777777777777776f777777777777777777777777
                                777777777777777777777777777777f77777777777777777777777777ff777777777777777777777777777777777f77777777777777777777777f767777777777777776f77777777777777777777777
                                777777777777777777777777777777ff7777777777777777777777fff77777777777777777777777777777777777ff777777777777777777776f67777777777777777776f7777777777777777777777
                                7777777777777777777777777777777f7777777777777777777776fff777777777777777777777777777777777777f677777777777777777776f66677777777777777777ffff7777777777777777777
                                7777777777777777777777777777777f777777777777777777777f777777777777777777777777777777777777777f6777777777777777777776fff777777777777777777fff7777777777777777777
                                77777777777777777777777777777777f77777777777777777777f7777777777777777777777777777777777777ff77777777777777777777777777f777777777777777767f77777777777777777777
                                77777777777777777777777777777777f777777777777777777777f777777777777777777777777777777ffffff7777777777777777777f7777776f777777777777777777f777777777777777777777
                                7777777777777777777777777777ffff777777777777777777f777f7777777777777777777777777777777f777777777777777777777777f67776f7777777777777777777f7777f7777777777777777
                                7777777777777777777777777fff66667777777777777777777f77f77777777777777777777777777777777ff77777777777777777777776fffff67ff777777777777777ff77fff7777777777777777
                                7777777777777777777777777fff7777777777777777776777766ff77777777777777777777777777777777ff67777777777777777677777fccccf6cc677777777777777ffffff77777777777777777
                                777777777777777777777777777f777777777777777776f77777ff77777777777777777777777777777777777f7777777777777777f77777feeeeffeef77777777777777ffff7f77777777777777777
                                7777777777777777777777777777f777777f77777777777f777f7777777777777777777777777777ff7777777f77777777777777777f7777feeeeeeeef77777777777777f7777f77777777777777777
                                7777777777777777777777777777f77f777f77777f77777ff77f77777f777777777777777777777777f777777f777777777777777777f777feeeeeeef77fff777f776f77f77fff777f7777777777777
                                777777777777777777777f777777f7ff77f77f777f67777fefff7777f77777ff7777777777777777777ffffff7777777777777f77777ffffeeeeeeeeeffeef777f776f77f7fff77ff77777777777777
                                777777777777777777777fffff77ffef77f77f77fee6777feeeefffff77777ff77777777777777777777feef777777777777777f7777feeeeeeeeeeeeeeeef77ff776ff7fffffffef77777777777777
                                777777777777777777777feeeeffeeef7ff7f677feee66eeeeeeeeeef77777ff7777777777777ff77777feef7777f7766777777ff777feeeeeeeeeeeeeeeef7fef76eeffffffffeef777f7777777777
                                777777777777777777777feeeeffeeef7f77f777feeef6feeeeeeeeef7777ff77777777777777ff77777feef7777f77f6777776ff777feeeeeeeeeeeeeeeef7fef6feeffffffffeef777ff777777777
                                77777777777777777f777feeeeeeeeeefffff77feeeeefeeeeeeeeeefffffff7777f777777777ff77777feef777ff777ff7777feef77feeeeeeeeeeeeeeeeefeeeffeeefffffeeeef77fff777777777
                                7777f7777777f7777f777feeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeef7777f7777f7777fffff77feef777ff777fff77feeeeffeeeeeeeeeeeeeeeeeeeeeeeeeefffeffeeeef7feff7777f7777
                                7777f7777777f7777ffffffeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeef777ff7777f7777feeefffeeeef7feff7feeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeefffeeeffeeef7777f777f
                                7777f7777777f7777feefffeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeef77fef7777f7777feeeeeeeeeeefeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeefffeeeeeeeff777ff777f
                                7777f777777fef777feeffeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeffeeef77fef777feeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeffeeeeeeeeffffef77fe
                                7777f777777fef777feeffeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeffeeef77fef777feeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeffeeeeeeeeeeeeef77fe
                                777ff777777feef7feefffeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77fef77feeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeefffeeeeeeeeeeeeeffee
                                777feff777ffeeefeefffeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeffeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeefffeeeeeeeeeeeeeeee
                                777f7ff777fe7e7e7effeeeeeeeeeee7e7e7e7fff7e77eeeeeeee7e7eeeee77e7e7e7eeeee7e7e77e7e7e7e7eeeeeeee77efffe7eeeeee7e7eeeeeee7e7e7ffffeeee7e7eeeefffeee7e777eee7e7e7
                                fff7e77fffe7e7e7effeeee7eeeeeeee7e7e7e7fff77eeeeeeeeee7e7eeee7e7e7e7eeeeeee7e7777e7e7e7eeeee7ee7777effffeeeeeee7e7eeeeeee7efffffeeeeee7e7eeeffffeee7e7eeeee7e7e
                                7e7e7e7eeeee7e7e7ffeeeee7eeeeee7e7e7e7e7fff7eeeeeeeee7e7eeeeee7e7e7eeeeeeeee7e7777e7e7e7eee7e7eee7e7efffffeeee7e7eeeeeeeffffff7e7eeee7e7eeeeefffee7e77eeee7e7e7
                                7777777eeee777777feeeeee7eeeeee7777777777fffeeeeeeee77777eeeee77777eee7eeee7777777777777eee777eee7777e7fffeeee7777eeeeeefffff7777eee77777eeeeeffeee777eeee77777
                                e7e7e7eeeee7e7e7ffeeeee7eeeeeeee7e7e7e7e7fffeeeeeeee7e7e7eeeeee7e7eeee7eeee7e7777e7e7e7eeeee7eeee77e7e7fffffffe7e77ffffffffff7e7eeee7e7e7eeeeefffee7e7eee7e7e7e
                                7e7e7e7eeeee7e7fffeeee777eeeeeeee7e7e7e7e7ffffeeeeeee7e7e7eeee7e7e7eeeeeeeee7e77e7e7e7eeeee7e7eeeee7e7e7effffffffffffffffe7e7e7e7eeee7e7e7eeeeffff7e7eeeee7e7e7
                                e7e7e77eeeeee7fff7eeeee7e7eeeeeeee7e7e7e7e77fffeeeee7e7e7eeeeee7e7eeee7eeeeee7777e7e7e7eeeee7e74eeee7e7eeeeeeffffffffee7e7e7e7e7eeee7e7e7e7eeeefffe7eeeee7e7e7e
                                7e7e7e77eeee7fff7eeeee7e77eeeeeee7e7e7e7e7e77fffeeeee7e7e7eeeeee7eeee7e7eeeeee77e7e7e7eeeee7e7e7eeeee7eeeeeeee7e7eeeeeee7e7e7e7eeeee77e7e7eeeeeefffeeeee7e7e7e7
                                e7e7e777eeeefff7e7eeeee7e77eeeeeee7e7e7e7e77eeffffee7e7e7eeeee47eeee7e7eeeeee7777e7e7e7eeeee7e77eeee7eeeeeeee7e7e7eeeee7e7e7e7e7eeee7e7e7e7eeeeeefffeeeee7e7e7e
                                7e777e77eeeeff7e74eeee777777eeeeeee7e777e77eeeefffeee7e7e7eeeeeeeeee77e7eeeeeee7e777777eeee7e777eeee47eeeeee7e7777eeeeee7e7e7e7eeeeee7777777eeee7effeeee7e777e7
                                7e7e7e77eeefff7e7eeeee7777e7eeeeeee7e7e7e7e7eeefffffe7e7e7eeeeeeeeeee7e7eeeeeee7e7e7e7eeeee7e7777eeee7eeeeee7e7e7eeeeeee7e7e7e7eeeee7777e7e7eeee7eeffee77e7e7e7
                                7777777777fff7777eeee7777777eeeeeee7777777777eeeefffff7777eeeeeeeee777777eeeeee77777777eeee777777eeeeeeeeeee777777eeeee77777777eee7777777777eeee777fff777777777
                                77777777ffffee777eeee77777777eeeeee777777777eeeeeeeffffff7eeeeeeee7777777eeeeeee777777eeee777777777eeeeeeeee777777eeeee77777777eee777777777eeeeee7eeeffff777777
                                7777777ffffeee777eeee77777777eeeeeee77777777eeeeeeee7ffffffffeeeee777777ffeeeeee777777eeee7777777777eeeeeee7777777eeeee77777777eee77777777eeeeeeeeeeeeffff77777
                                7777ffff777eeee7eeeee777777777eeeeeee7777777eeeeeeee7777ffffffffffffffffffeeeeeee77777eeee7777777eeeeeeeeee7777777eeeee77777777eee77777777eeeeeeeeeee47ffff7777
                                7ffffff77777eeeeeeeee777777777eeeeeeee7777777eeeeeee777777effffffffffffff77eeeeee7777eeeee777777eeeeeeeeeee7777777eeeee77777777eee7777777eeeeeeeeeeeee777ffff77
                                7ffffe777777eeeeeeeee777777777eeeeeeeee777777eeeeeee777777eeeeeee7777777777eeeeeee777eeeee777777eeeeeeeeeee7777777eeeee7777777eeee777777eeeeeeeeeeee477777fff77
                                fffff7777777eeeeeeee77777777777eeeeeeee777777eeeeeee777777eeeeeee77777777777eeeeee777eeeee77777eeeeeeeeeeee7777777eeeee7777777eeee777777eeeee77eeeee777777fffff
                                fff777777777eeeeeeee77777777777eeeeeeeee777eeeeeeeee7777777eeeeee77777777777eeeeee77eeeeee7777eeeeeeeeeeeee7777777eeeee7777777eeee77777eeeee777eeeee77777777fff
                                777777777777eeeeeeee777777777777eeeeeeeeeeeeeeeeeeee7777777eeeeee777777777777eeeeeeeeeeeeee77eeeeeeee7eeee77777777eeeeee777777eeee777eeeeeee7777eeee77777777777
                                7777777777777eeeeeee7777777777777eeeeeeeeeeeeeeeeeee7777777eeeee7777777777777eeeeeeeeeeeeeeeeeeeeeee77eeee77777777eeeeee777777eee777eeeeeee77777eee777777777777
                                7777777777777eeeeeee77777777777777eeeeeeeeeeeeeeeeee7777777eeeee77777777777777eeeeeeeeeeeeeeeeeeeee7777eee77777777eeeeee777777eee77eeeeeee777777eee777777777777
                                7777777777777eeeeeee77777777777777eeeeeeeeeeeeeeeeee7777777eeeee777777777777777eeeeeeeeeeeeeeeeeeee7777eee77777777eeeeee777777eeeeeeeeeeee777777eee777777777777
                                7777777777777eeeeeee777777777777777eeeeeeeeeeeeeeeee7777777eeeee777777777777777eeeeeeeeeeeeeeeeeee77777eee77777777eeeeee777777eeeeeeeeeee7777777eee777777777777
                                7575757557575eeeeee75757577575757575eeeeeeeeeeeeeeee5757575eeeee757575757575757eeeeeeeeeeeeeeeee5575757eee5757575755eeee75757eeeeeeeeeee75757575eee755757575757
                                5757575775757eeeeee5757575575757575757eeeeeeeeeeeeee7575757eeee45757575757575755eeeeeeeeeeeeee757757575eee7575757577eeee57575eeeeeeeeee757575757eee577575757575
                                757575755757eeeeeee75757577575757575757eeeeeeeeeeeee5757575eeeee757575757575757757eeeeeeeeee5757557575eeee5757575755eeee75757eeeeeeeee7575757575eee757757575757
                                575757575575eeeeeee575757557575757575757eeeeeeeeeee57575757eeee45757575757575777757eeeeeeeee7575775757eeee7575757557eeee57575eeeeeeee75757575757eee575775757575
                                757575755757eeeeeee7575757557575757575757eeeeeeeeee75757575eeee47575757575757557577eeeeeeeee5757557575eeee5757575757eeeee5757eeeeeee757575757575eee755757575757
                                757575755757eeeeeee7575757757575757575757eeeeeeeeee75757575eeeee7575757575757575575eeeeeeee75757557575eeee5757575757eeeee5757eeeeee7757575757575eee755757575757
                                575757575575eeeeeee57575755757575757575757eeeeeeeee57575757eeee457575757575757557575eeeeee757575775757eeee7575757557eeeee7575eeeee75575757575757eee577575757575
                                757575757757eeeeeee75757577575757575757575eeeeeeeee75757575eeeeee5757575757575575757eeeeee575757557575eeee5757575775eeeee575eeeee757757575757575eee755757575757
                                575757575575eeeeeee575757557575757575757575eeeeeeee5757575eeeeeee7575757575757757575eeeeee757575775757eeee7575757557eeeee757eeeee575575757575757eee577575757575
                                75757575575eeeeeee5757575775757575757575757eeeeeeee7575757eeeeeee5757575757575775757eeeeee575757557575eeee5757575755eeeeee75eeeee757757575757575eee755757575757
                                55555555555eeeeeee5555555555555555555555555eeeeeee75555555eeeeeee5555555555555555557eeeee5555555555555eeee5555577777eeeeee55eeeee755555555555555eee555555555555
                                55555555555eeeeeee5555555555555555555555555eeeeeee55555555eeeeeee5555555555555555555eeeee5555555555557eeee555577777eeeeeee75eeeee555555555555557eee555555555555
                                55555555555eeeeeee5555555555555555555555555eeeeeee55555555eeeeeee5555555555555555555eeeee555555555555eeeee555567777eeeeeeee5eeeee55555555555555eeee555555555555
                                55555555555eeeeeee5555555555555555555557775eeeeeee5555556777777777555555555555555555eeeee555555555555eeeeee556777777eeeeeeeeeeeee55555555555555eeeee75555555555
                                55555555555eeeeeee5555555555555555555667777eeeeeee5555677777777777776555555555555555eeeee5555555577777eeeee567777777eeeeeeeeeeeee55555555555555eeeee75555555555
                                5555555555eeeeeeee5555555555555555557777777eeeeeee5577777777777777776555577555555555eeeee55555557777777eee77777777777eeeeeeeeeeee55555555555555eeeee75555555555
                                5557777777eeeeeeee7777555555555555777777777eeeeeee7777777777777777777757777775555555eeeee5555557777777777777777777777eeeeeeeeeeee7777555555555777eee75555555555
                                5577777777eeeeeeee7777755557777577777777777eeeeeee777777777777777777777777777775555eeeeee5555777777777777777777777777eeeeeeeeeeee7777755555577777eee75555555555
                                5577777777eeeeee777777775577776577777777777eeeeeee777777777777777777777777777777555eeeeee5555677777777777777777777777eeeeeeeeeeee77777555555777777ee75555555555
                                6777777777eeeee7777777775777777777777777777eeeeeee777777777777777777777777777777757eeeeee777777777777777777777777777777eeeeeeeeee777777555777777777e55555555555
                                7777777777eeeee777777777777777777777777f677eeeeeee777777777777777777777777777777777eeeeee777777777777777777777777777777eeeeeeeeee777777777777777777777777675555
                                777777777eeeeee77777777777777777777777f7f67eeeeeee777777777777777777777777777777777eeeeee7777777777777777777777777777777eeeeeeeee777777777777777777777777777777
                                777777777eeeeee77777777777777777777777ff7f6eeeeeee777777777777777777777777777777777eeeeee77777777777777777f77777777777777eeeeeeeee77777777777777777777777777777
                                777777777eeeeee77777777777777777777777ff66fceeeeee777777777777777777777777777777777eeeeee7777777777777777fff7777777777777eeeeeeee777777777777777777777777777777
                                777777777eeeeee77777777777777777777777fff7ffeeeeee77777777777777eee7777777777777777eeeeee7777777777777777f7f77777777777777eeeeee7777777777777777777777777777777
                                777777777eeeeee77777777777777777f777777ff7ffeeeeee7ff777777777cccccc77777777777777eeeeeee7777777777777777ff7f7777777777777eeeeee7777777777777777777777777777777
                                777777777eeeee77777777777777777f7ff7777fff76feeeeff77f77777cccccccccc7777777777777eeeeeee7777777777fff777ff7f77777777777777eeeee7777777777777777777777777777777
                                7777777eeeeeeeee777777777777777ff77f777fff76feeef77ff77777ccccccccccc7777777777777eeeeeee7777777777f77f77fff7f777777fff77777cccc7777777777777777777777777777777
                                77777cccccccccccc777777777777777fff7f77fff76feef7ffff7777cccccccccccc77777777777ceeeeeeee77777777776ff7f7fff7f777776f77f777ccccccc77777777777777777777777777777
                                7777cccccccccccccc77777777777777fff7f77fff76feef7ffff7ff7cccccccccccc77777777777ceeeeeeeee7777777776ff66ffff7f7777ff666f777cccccccc7777777777777777777777777777
                                7777cccccccccccccc777777777666777ff7fc7fff76feef7fff76ffccccccccccccc77777777777ceeeeeeeee77777777776ff7ffff7f6776ff7fff77cccccccccc777777777777777777777777777
                                777ccccccccccccccc77777777ffff777fff7f7fff76fef7fff7ff77ffccccccccccc77777ccc777ceeeeeeeee77777777776ff7fffff7f67f67fff77cccccccccccc77777777777777777777777777
                                77ccccccffffcffffc7777777ff777ff77ff7f7fff76ff7fffff77ffcccccccccccccc777ccccc7eeeeeeeeeee77777777776fff7ffff7f7f77fffcccfccccccccccc77777777777777777777777777
                                7cccccceeeeefccc2fe7777777ffff77f7fff7ffff76f7ffff77fffcccccccccccccccccccccccceeeffeeeeee777ffffff777ff7ffff7ff76fffcccccccccccccccc7777777777777777777777ccc7
                                cccccccfcffffffcfcc77777ccccffff7f7ff7ffff76fffff7ffffcccccccccccccccccccccccccee2eefeeeee77f777777ff7ff7ffff7f76fffcccccccccccccccccc77777777777777777fffccccc
                                cccccccceeeefcf2eeee7777eeeeeefff7fff67ffff77fff7fffffcfffccccccccccffccccccccceeeeffeeeee776fffff677ffff7fff7ffffffcfffffcccccffccccc777777777777777fff6cfcccc
                                cccccccceeefffc2feee777eeeeeeefff7ffff7ffff66fff7ffffffffffcccccccfffffccccccccceeeffceeee777ffffff77ffff7fff7fffffffffffffcccefffeeee777777777777776ffffefeeee
                                eeeeeeeeeefffffccccccccccccccccfff7ffff7fffffffffffccff77ffcccccccffccffccccccccce2eefeeee7777fffffff7ffffffff7ffffcff7777fccc2fefccccc777ccc7777777ff7fffc2eee
                                eeeeeeeeee2eff2eeeeeeeeeeeeeeeeefff7fffffffffffffcfff77ff77ffccccfccffc2feeeeeeeeeeeffeeeeeee7ffffffff77ffffffffffff77ffffcccccfffccccccccccccc7777ffffce2eeeee
                                eeeeeeeeeeeefccfcccccccccccccccccfffffffffffffffff777ffffffccccffcfff2efeeeeeeeeeee2eefccccccf777777ffff7fffffff7777fffffcccccc2eeffcccccccccccc777ffceeeeeeeee
                                eeeeeeeeeeeefcfcccccccccccccccccccffffffffffffff77ffffffcccccccfffc2efeeeeeeeeeeeeefeefcccccf7ffffff777ffffffffffffffffccccccccfcfffcccccccccccccccffcffccccccc
                                cfccccffccccffcccccfccccccffccccfccfffffffffffffffffffcccccccccffcccccfcccccccccccccccfccccccfffffffffffffffffffffffffcccccccccc2eeffeeeeeeeeeeeeeeffccfccccccc
                                cffccfffffccfffccccffccccfffcccfffcfffffffffffffffffffccccfcccffffccccfccfcccccffcccccfccccccfffffffffffffffffffffffffccfccccccfeeeffeeeefeeeeeeeeeffffccfcfccc
                                cffccffffccffffccccffccccfffcccfffcffffffffffffffffffcccfcfcccffffccccfcfffcccfffcccccfccccccfcccffffffffffffffffffffcccfccccccffccffccccfcccccccccffffccccffcc
                                ffffcfffffcffffccffffcccfffffcfffffcffffffffffffffffffccffffffffffcccffcfffccfffffcccfffcccffffffffffccffffffffffffffccfffccccffcccffcccfffcccccfccffffcccfffcc
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffccffffffffffffcffffffffffffffffffffffffffcffffffffffcccffccfffffcffffff
                                fffffffffffff7ffffffffff76fffffffffffffffffffffffff7fffffffff77ffffffffff7ffffffffff7fffffff7ffffffffffffffffff76fffffffffffffffffffffffffffffffffffffffffff7ff
                                f7fffff77ff67f7ffffffff7677ffff7fffffffff76fffffff7f7fffffff7767ffffffff7f7ffffffff7f7fffff7f76fffffffff7fffff7f76f67fffff7fffffffff77ffff7ffffffff76ffffff7f7f
                                767fff7777ff6f6fff7fff77ffffff767ffff7ff7677f67fff6f6ff7fff77ff77ff7fff76f6ffff77ff6f6ffff76f676f67ffff767fff76fff7767fff767fff7fff7777ff767ffffff7f77fff7fffff
                                7f7ff676776ffffff676ff7ffffff67f7fff676f7f76f776ffffff676ff76fff7f676ff7fffffff777fffff6ff7fff766776ff67f7f6f7ffff67f7ff67f7ff676ff7767f67f7f6fff67f77ff676ffff
                                fffff77ff67ffffff7f7ffffffff67ffffff7f7fffff6767ffffff7f76ffffffff7f7fffffffff7767fffff7ffffffff77f7ff7ffff7ffffffffffff7fffff7f76ffffff7ffff7fff7fffff77f7ffff
                                ffffffffffffffff7ffffffffffffffffff7fffffff77ffffffff7fff7ffffffffffffffff7ff77fffffff7f7fffffffffffffffff7f7ffffffffffffffff7ffffffffffffff7f7fffffff77fff7fff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f7fffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeee4ffffffffffffffffffffff
                                eeeeeeeeeeeeeeeeeeeeeeefeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeefffeeeffeeeeeeeeeeeeeeeeeeeeeeeeee
                                eeeeeffeeeeefeeeefffeeeefeeeeeeeeeffffeeefeeeeeeeefeeeeffffffeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeefeeeeefefffffeeeefeeeeeeeeeeefeeefeeeefeeeeeeeeefeeeeeeeffeeeffe
                                eefeeeeeeeeeeeeefeeefeeeeeeeeeefefeeefeeeeeeeeeeeeeeeefeeeeffeeeeeeefeeeeefffffeeefeeeeeeeffffeeeeeeeeefeeeefeeeeeeeefffeeefeeeffeeeeeefeeeffeeeeeffeeeeeeeeffe
                                eeeeeeefffeeeeeefffffeeeeeeeeeefefeeefeeeeeeffeeeeeeeefeeeffeeeeeeeeeeeeeffffffeeefefeeeefffffeeeeefeeefeeeffeeeeeeeffffeeeffffffeeeeeeeeeffffeeefffeeeeeeeeffe
                                eeeeeeffffeeeeeeefffeeeeeeeeeeefefeeefeeeeeffffeeeeeeefeeefeeeefeeeeefeeefeeefeeeefefeeeefeeefeeeeefeeefeeeffeeeeeeefeefeeeefffeeeeeeeeeeefeefeeefefeeeeeeeeeee
                                eeeeeffeeefeefeeeeeeeeeeffffeeeeeffffeeeeeffeefeeeefeeffffeeeeeeeeeeeeeeeffffeeeeeeeeeeeefeeefeeeeeeeeeefffeeeeeeeeeeffeeeeeeeeeeefeeeeeeefeefeeeffeeeeeeeeeeee
                                eefeefeeeefeeeeeeeeeeeefeeeefeeeeeeeeefeefeeefeefeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeefeefeeeeeeeeefffeefee
                                eeeeeeffffeeeeeeeeeeeeefeeeefeeeeeeeeefeeffffeeeeeeeeefeeeeeeeffefefeeefeeefeeeeeffffefeeeeeeeeeeeeefffeeefeefffeeeeeeeeefeeeeeeeeeffffeeeeffeeeeeeeeeffeefeeee
                                eeeefeeeeeeeeeeeeefeeeeeffffeeeeeefeeeeeeeeeeeeeeeeeeeeeeffeeeeeefffeeeeeeeeeeeffeeefeeeeeeeeeeeeeefeefeeeeeefeefeeeffeeeeeeeeeeeefceefeeeeeeeeeefeeeffeeffeeee
                                efeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeefeeeeffeeeeeefeeeeeeeeeeeeefffffeeeeefeeeffeeeeffffeefeeeffffeeeeeeeeeeeeeeeeeffefeeefeeeeefefeeeffffeeefee
                                efeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeefeeeeffeeeeeeeeeeeeeeeeeeeeeffffeeeeefeeeffeeeefffeeefeeeeffeeeeeeeeeeeeeeeeeeffffeeefeeeeefefeeeefffeeefee
                                eeeeeeeeffeeeeeeeeeeefeeeeeefeeeeeeeffeeeeeefeeeeeeeeeeeeeeeeefeeeeeffeeefeeefeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeefeeeefeeeeffeeeeeeefeeeeeeeeeeeeeeeeee
                                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeee
                                `)
                            blur.BlurIn(1000)
                        })
                    } else {
                        game.splash("LOCKED", "Beat Hard Mode!")
                    }
                } else if (selection == "Ridonkulous") {
                    if (blockSettings.exists("Impossible")) {
                        myMenu.close()
                        ready = true
                        difficultyBeaten = 5
                        theGround()
                        initRaptor()
                        info.setScore(0)
                        end = 0
                        color.setPalette(
                        color.GrayScale
                        )
                        timer.after(10000, function () {
                            info.startCountdown(600)
                            color.startFade(color.GrayScale, color.originalPalette, 600000)
                            scene.setBackgroundImage(img`
                                7777777777777777777777777777ff777777777777777777777777777f77777777777777777777777777777777ff7777777777777777777777776ff777777777777776f777777777777777777777777
                                777777777777777777777777777777f77777777777777777777777777ff777777777777777777777777777777777f77777777777777777777777f767777777777777776f77777777777777777777777
                                777777777777777777777777777777ff7777777777777777777777fff77777777777777777777777777777777777ff777777777777777777776f67777777777777777776f7777777777777777777777
                                7777777777777777777777777777777f7777777777777777777776fff777777777777777777777777777777777777f677777777777777777776f66677777777777777777ffff7777777777777777777
                                7777777777777777777777777777777f777777777777777777777f777777777777777777777777777777777777777f6777777777777777777776fff777777777777777777fff7777777777777777777
                                77777777777777777777777777777777f77777777777777777777f7777777777777777777777777777777777777ff77777777777777777777777777f777777777777777767f77777777777777777777
                                77777777777777777777777777777777f777777777777777777777f777777777777777777777777777777ffffff7777777777777777777f7777776f777777777777777777f777777777777777777777
                                7777777777777777777777777777ffff777777777777777777f777f7777777777777777777777777777777f777777777777777777777777f67776f7777777777777777777f7777f7777777777777777
                                7777777777777777777777777fff66667777777777777777777f77f77777777777777777777777777777777ff77777777777777777777776fffff67ff777777777777777ff77fff7777777777777777
                                7777777777777777777777777fff7777777777777777776777766ff77777777777777777777777777777777ff67777777777777777677777fccccf6cc677777777777777ffffff77777777777777777
                                777777777777777777777777777f777777777777777776f77777ff77777777777777777777777777777777777f7777777777777777f77777feeeeffeef77777777777777ffff7f77777777777777777
                                7777777777777777777777777777f777777f77777777777f777f7777777777777777777777777777ff7777777f77777777777777777f7777feeeeeeeef77777777777777f7777f77777777777777777
                                7777777777777777777777777777f77f777f77777f77777ff77f77777f777777777777777777777777f777777f777777777777777777f777feeeeeeef77fff777f776f77f77fff777f7777777777777
                                777777777777777777777f777777f7ff77f77f777f67777fefff7777f77777ff7777777777777777777ffffff7777777777777f77777ffffeeeeeeeeeffeef777f776f77f7fff77ff77777777777777
                                777777777777777777777fffff77ffef77f77f77fee6777feeeefffff77777ff77777777777777777777feef777777777777777f7777feeeeeeeeeeeeeeeef77ff776ff7fffffffef77777777777777
                                777777777777777777777feeeeffeeef7ff7f677feee66eeeeeeeeeef77777ff7777777777777ff77777feef7777f7766777777ff777feeeeeeeeeeeeeeeef7fef76eeffffffffeef777f7777777777
                                777777777777777777777feeeeffeeef7f77f777feeef6feeeeeeeeef7777ff77777777777777ff77777feef7777f77f6777776ff777feeeeeeeeeeeeeeeef7fef6feeffffffffeef777ff777777777
                                77777777777777777f777feeeeeeeeeefffff77feeeeefeeeeeeeeeefffffff7777f777777777ff77777feef777ff777ff7777feef77feeeeeeeeeeeeeeeeefeeeffeeefffffeeeef77fff777777777
                                7777f7777777f7777f777feeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeef7777f7777f7777fffff77feef777ff777fff77feeeeffeeeeeeeeeeeeeeeeeeeeeeeeeefffeffeeeef7feff7777f7777
                                7777f7777777f7777ffffffeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeef777ff7777f7777feeefffeeeef7feff7feeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeefffeeeffeeef7777f777f
                                7777f7777777f7777feefffeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeef77fef7777f7777feeeeeeeeeeefeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeefffeeeeeeeff777ff777f
                                7777f777777fef777feeffeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeffeeef77fef777feeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeffeeeeeeeeffffef77fe
                                7777f777777fef777feeffeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeffeeef77fef777feeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeffeeeeeeeeeeeeef77fe
                                777ff777777feef7feefffeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77fef77feeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeefffeeeeeeeeeeeeeffee
                                777feff777ffeeefeefffeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeffeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeefffeeeeeeeeeeeeeeee
                                777f7ff777fe7e7e7effeeeeeeeeeee7e7e7e7fff7e77eeeeeeee7e7eeeee77e7e7e7eeeee7e7e77e7e7e7e7eeeeeeee77efffe7eeeeee7e7eeeeeee7e7e7ffffeeee7e7eeeefffeee7e777eee7e7e7
                                fff7e77fffe7e7e7effeeee7eeeeeeee7e7e7e7fff77eeeeeeeeee7e7eeee7e7e7e7eeeeeee7e7777e7e7e7eeeee7ee7777effffeeeeeee7e7eeeeeee7efffffeeeeee7e7eeeffffeee7e7eeeee7e7e
                                7e7e7e7eeeee7e7e7ffeeeee7eeeeee7e7e7e7e7fff7eeeeeeeee7e7eeeeee7e7e7eeeeeeeee7e7777e7e7e7eee7e7eee7e7efffffeeee7e7eeeeeeeffffff7e7eeee7e7eeeeefffee7e77eeee7e7e7
                                7777777eeee777777feeeeee7eeeeee7777777777fffeeeeeeee77777eeeee77777eee7eeee7777777777777eee777eee7777e7fffeeee7777eeeeeefffff7777eee77777eeeeeffeee777eeee77777
                                e7e7e7eeeee7e7e7ffeeeee7eeeeeeee7e7e7e7e7fffeeeeeeee7e7e7eeeeee7e7eeee7eeee7e7777e7e7e7eeeee7eeee77e7e7fffffffe7e77ffffffffff7e7eeee7e7e7eeeeefffee7e7eee7e7e7e
                                7e7e7e7eeeee7e7fffeeee777eeeeeeee7e7e7e7e7ffffeeeeeee7e7e7eeee7e7e7eeeeeeeee7e77e7e7e7eeeee7e7eeeee7e7e7effffffffffffffffe7e7e7e7eeee7e7e7eeeeffff7e7eeeee7e7e7
                                e7e7e77eeeeee7fff7eeeee7e7eeeeeeee7e7e7e7e77fffeeeee7e7e7eeeeee7e7eeee7eeeeee7777e7e7e7eeeee7e74eeee7e7eeeeeeffffffffee7e7e7e7e7eeee7e7e7e7eeeefffe7eeeee7e7e7e
                                7e7e7e77eeee7fff7eeeee7e77eeeeeee7e7e7e7e7e77fffeeeee7e7e7eeeeee7eeee7e7eeeeee77e7e7e7eeeee7e7e7eeeee7eeeeeeee7e7eeeeeee7e7e7e7eeeee77e7e7eeeeeefffeeeee7e7e7e7
                                e7e7e777eeeefff7e7eeeee7e77eeeeeee7e7e7e7e77eeffffee7e7e7eeeee47eeee7e7eeeeee7777e7e7e7eeeee7e77eeee7eeeeeeee7e7e7eeeee7e7e7e7e7eeee7e7e7e7eeeeeefffeeeee7e7e7e
                                7e777e77eeeeff7e74eeee777777eeeeeee7e777e77eeeefffeee7e7e7eeeeeeeeee77e7eeeeeee7e777777eeee7e777eeee47eeeeee7e7777eeeeee7e7e7e7eeeeee7777777eeee7effeeee7e777e7
                                7e7e7e77eeefff7e7eeeee7777e7eeeeeee7e7e7e7e7eeefffffe7e7e7eeeeeeeeeee7e7eeeeeee7e7e7e7eeeee7e7777eeee7eeeeee7e7e7eeeeeee7e7e7e7eeeee7777e7e7eeee7eeffee77e7e7e7
                                7777777777fff7777eeee7777777eeeeeee7777777777eeeefffff7777eeeeeeeee777777eeeeee77777777eeee777777eeeeeeeeeee777777eeeee77777777eee7777777777eeee777fff777777777
                                77777777ffffee777eeee77777777eeeeee777777777eeeeeeeffffff7eeeeeeee7777777eeeeeee777777eeee777777777eeeeeeeee777777eeeee77777777eee777777777eeeeee7eeeffff777777
                                7777777ffffeee777eeee77777777eeeeeee77777777eeeeeeee7ffffffffeeeee777777ffeeeeee777777eeee7777777777eeeeeee7777777eeeee77777777eee77777777eeeeeeeeeeeeffff77777
                                7777ffff777eeee7eeeee777777777eeeeeee7777777eeeeeeee7777ffffffffffffffffffeeeeeee77777eeee7777777eeeeeeeeee7777777eeeee77777777eee77777777eeeeeeeeeee47ffff7777
                                7ffffff77777eeeeeeeee777777777eeeeeeee7777777eeeeeee777777effffffffffffff77eeeeee7777eeeee777777eeeeeeeeeee7777777eeeee77777777eee7777777eeeeeeeeeeeee777ffff77
                                7ffffe777777eeeeeeeee777777777eeeeeeeee777777eeeeeee777777eeeeeee7777777777eeeeeee777eeeee777777eeeeeeeeeee7777777eeeee7777777eeee777777eeeeeeeeeeee477777fff77
                                fffff7777777eeeeeeee77777777777eeeeeeee777777eeeeeee777777eeeeeee77777777777eeeeee777eeeee77777eeeeeeeeeeee7777777eeeee7777777eeee777777eeeee77eeeee777777fffff
                                fff777777777eeeeeeee77777777777eeeeeeeee777eeeeeeeee7777777eeeeee77777777777eeeeee77eeeeee7777eeeeeeeeeeeee7777777eeeee7777777eeee77777eeeee777eeeee77777777fff
                                777777777777eeeeeeee777777777777eeeeeeeeeeeeeeeeeeee7777777eeeeee777777777777eeeeeeeeeeeeee77eeeeeeee7eeee77777777eeeeee777777eeee777eeeeeee7777eeee77777777777
                                7777777777777eeeeeee7777777777777eeeeeeeeeeeeeeeeeee7777777eeeee7777777777777eeeeeeeeeeeeeeeeeeeeeee77eeee77777777eeeeee777777eee777eeeeeee77777eee777777777777
                                7777777777777eeeeeee77777777777777eeeeeeeeeeeeeeeeee7777777eeeee77777777777777eeeeeeeeeeeeeeeeeeeee7777eee77777777eeeeee777777eee77eeeeeee777777eee777777777777
                                7777777777777eeeeeee77777777777777eeeeeeeeeeeeeeeeee7777777eeeee777777777777777eeeeeeeeeeeeeeeeeeee7777eee77777777eeeeee777777eeeeeeeeeeee777777eee777777777777
                                7777777777777eeeeeee777777777777777eeeeeeeeeeeeeeeee7777777eeeee777777777777777eeeeeeeeeeeeeeeeeee77777eee77777777eeeeee777777eeeeeeeeeee7777777eee777777777777
                                7575757557575eeeeee75757577575757575eeeeeeeeeeeeeeee5757575eeeee757575757575757eeeeeeeeeeeeeeeee5575757eee5757575755eeee75757eeeeeeeeeee75757575eee755757575757
                                5757575775757eeeeee5757575575757575757eeeeeeeeeeeeee7575757eeee45757575757575755eeeeeeeeeeeeee757757575eee7575757577eeee57575eeeeeeeeee757575757eee577575757575
                                757575755757eeeeeee75757577575757575757eeeeeeeeeeeee5757575eeeee757575757575757757eeeeeeeeee5757557575eeee5757575755eeee75757eeeeeeeee7575757575eee757757575757
                                575757575575eeeeeee575757557575757575757eeeeeeeeeee57575757eeee45757575757575777757eeeeeeeee7575775757eeee7575757557eeee57575eeeeeeee75757575757eee575775757575
                                757575755757eeeeeee7575757557575757575757eeeeeeeeee75757575eeee47575757575757557577eeeeeeeee5757557575eeee5757575757eeeee5757eeeeeee757575757575eee755757575757
                                757575755757eeeeeee7575757757575757575757eeeeeeeeee75757575eeeee7575757575757575575eeeeeeee75757557575eeee5757575757eeeee5757eeeeee7757575757575eee755757575757
                                575757575575eeeeeee57575755757575757575757eeeeeeeee57575757eeee457575757575757557575eeeeee757575775757eeee7575757557eeeee7575eeeee75575757575757eee577575757575
                                757575757757eeeeeee75757577575757575757575eeeeeeeee75757575eeeeee5757575757575575757eeeeee575757557575eeee5757575775eeeee575eeeee757757575757575eee755757575757
                                575757575575eeeeeee575757557575757575757575eeeeeeee5757575eeeeeee7575757575757757575eeeeee757575775757eeee7575757557eeeee757eeeee575575757575757eee577575757575
                                75757575575eeeeeee5757575775757575757575757eeeeeeee7575757eeeeeee5757575757575775757eeeeee575757557575eeee5757575755eeeeee75eeeee757757575757575eee755757575757
                                55555555555eeeeeee5555555555555555555555555eeeeeee75555555eeeeeee5555555555555555557eeeee5555555555555eeee5555577777eeeeee55eeeee755555555555555eee555555555555
                                55555555555eeeeeee5555555555555555555555555eeeeeee55555555eeeeeee5555555555555555555eeeee5555555555557eeee555577777eeeeeee75eeeee555555555555557eee555555555555
                                55555555555eeeeeee5555555555555555555555555eeeeeee55555555eeeeeee5555555555555555555eeeee555555555555eeeee555567777eeeeeeee5eeeee55555555555555eeee555555555555
                                55555555555eeeeeee5555555555555555555557775eeeeeee5555556777777777555555555555555555eeeee555555555555eeeeee556777777eeeeeeeeeeeee55555555555555eeeee75555555555
                                55555555555eeeeeee5555555555555555555667777eeeeeee5555677777777777776555555555555555eeeee5555555577777eeeee567777777eeeeeeeeeeeee55555555555555eeeee75555555555
                                5555555555eeeeeeee5555555555555555557777777eeeeeee5577777777777777776555577555555555eeeee55555557777777eee77777777777eeeeeeeeeeee55555555555555eeeee75555555555
                                5557777777eeeeeeee7777555555555555777777777eeeeeee7777777777777777777757777775555555eeeee5555557777777777777777777777eeeeeeeeeeee7777555555555777eee75555555555
                                5577777777eeeeeeee7777755557777577777777777eeeeeee777777777777777777777777777775555eeeeee5555777777777777777777777777eeeeeeeeeeee7777755555577777eee75555555555
                                5577777777eeeeee777777775577776577777777777eeeeeee777777777777777777777777777777555eeeeee5555677777777777777777777777eeeeeeeeeeee77777555555777777ee75555555555
                                6777777777eeeee7777777775777777777777777777eeeeeee777777777777777777777777777777757eeeeee777777777777777777777777777777eeeeeeeeee777777555777777777e55555555555
                                7777777777eeeee777777777777777777777777f677eeeeeee777777777777777777777777777777777eeeeee777777777777777777777777777777eeeeeeeeee777777777777777777777777675555
                                777777777eeeeee77777777777777777777777f7f67eeeeeee777777777777777777777777777777777eeeeee7777777777777777777777777777777eeeeeeeee777777777777777777777777777777
                                777777777eeeeee77777777777777777777777ff7f6eeeeeee777777777777777777777777777777777eeeeee77777777777777777f77777777777777eeeeeeeee77777777777777777777777777777
                                777777777eeeeee77777777777777777777777ff66fceeeeee777777777777777777777777777777777eeeeee7777777777777777fff7777777777777eeeeeeee777777777777777777777777777777
                                777777777eeeeee77777777777777777777777fff7ffeeeeee77777777777777eee7777777777777777eeeeee7777777777777777f7f77777777777777eeeeee7777777777777777777777777777777
                                777777777eeeeee77777777777777777f777777ff7ffeeeeee7ff777777777cccccc77777777777777eeeeeee7777777777777777ff7f7777777777777eeeeee7777777777777777777777777777777
                                777777777eeeee77777777777777777f7ff7777fff76feeeeff77f77777cccccccccc7777777777777eeeeeee7777777777fff777ff7f77777777777777eeeee7777777777777777777777777777777
                                7777777eeeeeeeee777777777777777ff77f777fff76feeef77ff77777ccccccccccc7777777777777eeeeeee7777777777f77f77fff7f777777fff77777cccc7777777777777777777777777777777
                                77777cccccccccccc777777777777777fff7f77fff76feef7ffff7777cccccccccccc77777777777ceeeeeeee77777777776ff7f7fff7f777776f77f777ccccccc77777777777777777777777777777
                                7777cccccccccccccc77777777777777fff7f77fff76feef7ffff7ff7cccccccccccc77777777777ceeeeeeeee7777777776ff66ffff7f7777ff666f777cccccccc7777777777777777777777777777
                                7777cccccccccccccc777777777666777ff7fc7fff76feef7fff76ffccccccccccccc77777777777ceeeeeeeee77777777776ff7ffff7f6776ff7fff77cccccccccc777777777777777777777777777
                                777ccccccccccccccc77777777ffff777fff7f7fff76fef7fff7ff77ffccccccccccc77777ccc777ceeeeeeeee77777777776ff7fffff7f67f67fff77cccccccccccc77777777777777777777777777
                                77ccccccffffcffffc7777777ff777ff77ff7f7fff76ff7fffff77ffcccccccccccccc777ccccc7eeeeeeeeeee77777777776fff7ffff7f7f77fffcccfccccccccccc77777777777777777777777777
                                7cccccceeeeefccc2fe7777777ffff77f7fff7ffff76f7ffff77fffcccccccccccccccccccccccceeeffeeeeee777ffffff777ff7ffff7ff76fffcccccccccccccccc7777777777777777777777ccc7
                                cccccccfcffffffcfcc77777ccccffff7f7ff7ffff76fffff7ffffcccccccccccccccccccccccccee2eefeeeee77f777777ff7ff7ffff7f76fffcccccccccccccccccc77777777777777777fffccccc
                                cccccccceeeefcf2eeee7777eeeeeefff7fff67ffff77fff7fffffcfffccccccccccffccccccccceeeeffeeeee776fffff677ffff7fff7ffffffcfffffcccccffccccc777777777777777fff6cfcccc
                                cccccccceeefffc2feee777eeeeeeefff7ffff7ffff66fff7ffffffffffcccccccfffffccccccccceeeffceeee777ffffff77ffff7fff7fffffffffffffcccefffeeee777777777777776ffffefeeee
                                eeeeeeeeeefffffccccccccccccccccfff7ffff7fffffffffffccff77ffcccccccffccffccccccccce2eefeeee7777fffffff7ffffffff7ffffcff7777fccc2fefccccc777ccc7777777ff7fffc2eee
                                eeeeeeeeee2eff2eeeeeeeeeeeeeeeeefff7fffffffffffffcfff77ff77ffccccfccffc2feeeeeeeeeeeffeeeeeee7ffffffff77ffffffffffff77ffffcccccfffccccccccccccc7777ffffce2eeeee
                                eeeeeeeeeeeefccfcccccccccccccccccfffffffffffffffff777ffffffccccffcfff2efeeeeeeeeeee2eefccccccf777777ffff7fffffff7777fffffcccccc2eeffcccccccccccc777ffceeeeeeeee
                                eeeeeeeeeeeefcfcccccccccccccccccccffffffffffffff77ffffffcccccccfffc2efeeeeeeeeeeeeefeefcccccf7ffffff777ffffffffffffffffccccccccfcfffcccccccccccccccffcffccccccc
                                cfccccffccccffcccccfccccccffccccfccfffffffffffffffffffcccccccccffcccccfcccccccccccccccfccccccfffffffffffffffffffffffffcccccccccc2eeffeeeeeeeeeeeeeeffccfccccccc
                                cffccfffffccfffccccffccccfffcccfffcfffffffffffffffffffccccfcccffffccccfccfcccccffcccccfccccccfffffffffffffffffffffffffccfccccccfeeeffeeeefeeeeeeeeeffffccfcfccc
                                cffccffffccffffccccffccccfffcccfffcffffffffffffffffffcccfcfcccffffccccfcfffcccfffcccccfccccccfcccffffffffffffffffffffcccfccccccffccffccccfcccccccccffffccccffcc
                                ffffcfffffcffffccffffcccfffffcfffffcffffffffffffffffffccffffffffffcccffcfffccfffffcccfffcccffffffffffccffffffffffffffccfffccccffcccffcccfffcccccfccffffcccfffcc
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffccffffffffffffcffffffffffffffffffffffffffcffffffffffcccffccfffffcffffff
                                fffffffffffff7ffffffffff76fffffffffffffffffffffffff7fffffffff77ffffffffff7ffffffffff7fffffff7ffffffffffffffffff76fffffffffffffffffffffffffffffffffffffffffff7ff
                                f7fffff77ff67f7ffffffff7677ffff7fffffffff76fffffff7f7fffffff7767ffffffff7f7ffffffff7f7fffff7f76fffffffff7fffff7f76f67fffff7fffffffff77ffff7ffffffff76ffffff7f7f
                                767fff7777ff6f6fff7fff77ffffff767ffff7ff7677f67fff6f6ff7fff77ff77ff7fff76f6ffff77ff6f6ffff76f676f67ffff767fff76fff7767fff767fff7fff7777ff767ffffff7f77fff7fffff
                                7f7ff676776ffffff676ff7ffffff67f7fff676f7f76f776ffffff676ff76fff7f676ff7fffffff777fffff6ff7fff766776ff67f7f6f7ffff67f7ff67f7ff676ff7767f67f7f6fff67f77ff676ffff
                                fffff77ff67ffffff7f7ffffffff67ffffff7f7fffff6767ffffff7f76ffffffff7f7fffffffff7767fffff7ffffffff77f7ff7ffff7ffffffffffff7fffff7f76ffffff7ffff7fff7fffff77f7ffff
                                ffffffffffffffff7ffffffffffffffffff7fffffff77ffffffff7fff7ffffffffffffffff7ff77fffffff7f7fffffffffffffffff7f7ffffffffffffffff7ffffffffffffff7f7fffffff77fff7fff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f7fffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeee4ffffffffffffffffffffff
                                eeeeeeeeeeeeeeeeeeeeeeefeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeefffeeeffeeeeeeeeeeeeeeeeeeeeeeeeee
                                eeeeeffeeeeefeeeefffeeeefeeeeeeeeeffffeeefeeeeeeeefeeeeffffffeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeefeeeeefefffffeeeefeeeeeeeeeeefeeefeeeefeeeeeeeeefeeeeeeeffeeeffe
                                eefeeeeeeeeeeeeefeeefeeeeeeeeeefefeeefeeeeeeeeeeeeeeeefeeeeffeeeeeeefeeeeefffffeeefeeeeeeeffffeeeeeeeeefeeeefeeeeeeeefffeeefeeeffeeeeeefeeeffeeeeeffeeeeeeeeffe
                                eeeeeeefffeeeeeefffffeeeeeeeeeefefeeefeeeeeeffeeeeeeeefeeeffeeeeeeeeeeeeeffffffeeefefeeeefffffeeeeefeeefeeeffeeeeeeeffffeeeffffffeeeeeeeeeffffeeefffeeeeeeeeffe
                                eeeeeeffffeeeeeeefffeeeeeeeeeeefefeeefeeeeeffffeeeeeeefeeefeeeefeeeeefeeefeeefeeeefefeeeefeeefeeeeefeeefeeeffeeeeeeefeefeeeefffeeeeeeeeeeefeefeeefefeeeeeeeeeee
                                eeeeeffeeefeefeeeeeeeeeeffffeeeeeffffeeeeeffeefeeeefeeffffeeeeeeeeeeeeeeeffffeeeeeeeeeeeefeeefeeeeeeeeeefffeeeeeeeeeeffeeeeeeeeeeefeeeeeeefeefeeeffeeeeeeeeeeee
                                eefeefeeeefeeeeeeeeeeeefeeeefeeeeeeeeefeefeeefeefeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeefeefeeeeeeeeefffeefee
                                eeeeeeffffeeeeeeeeeeeeefeeeefeeeeeeeeefeeffffeeeeeeeeefeeeeeeeffefefeeefeeefeeeeeffffefeeeeeeeeeeeeefffeeefeefffeeeeeeeeefeeeeeeeeeffffeeeeffeeeeeeeeeffeefeeee
                                eeeefeeeeeeeeeeeeefeeeeeffffeeeeeefeeeeeeeeeeeeeeeeeeeeeeffeeeeeefffeeeeeeeeeeeffeeefeeeeeeeeeeeeeefeefeeeeeefeefeeeffeeeeeeeeeeeefceefeeeeeeeeeefeeeffeeffeeee
                                efeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeefeeeeffeeeeeefeeeeeeeeeeeeefffffeeeeefeeeffeeeeffffeefeeeffffeeeeeeeeeeeeeeeeeffefeeefeeeeefefeeeffffeeefee
                                efeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeefeeeeffeeeeeeeeeeeeeeeeeeeeeffffeeeeefeeeffeeeefffeeefeeeeffeeeeeeeeeeeeeeeeeeffffeeefeeeeefefeeeefffeeefee
                                eeeeeeeeffeeeeeeeeeeefeeeeeefeeeeeeeffeeeeeefeeeeeeeeeeeeeeeeefeeeeeffeeefeeefeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeefeeeefeeeeffeeeeeeefeeeeeeeeeeeeeeeeee
                                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeee
                                `)
                            blur.BlurIn(1000)
                        })
                    } else {
                        game.splash("LOCKED", "Beat Impossible Mode!")
                    }
                }
            })
            list = [
            [img`
                .......................
                ............a..........
                ...........aa..........
                ..........aaa..........
                .........aaaa..........
                .........aaaa..........
                ........aaaaa...aa.....
                .......aaaaaa..aaaa....
                ......aaaaaaa.aa1aaa...
                .....aaaaaaaa.aaaaaaa..
                .aaaaaaaaaaaaaaaaaaaaa.
                ....aaaaaaaaaaaa.......
                ..aaaaaaaaaaaa.........
                .....aaaaaaa...........
                .......................
                `],
            [img`
                ................fffffff.......
                ...............ff11111f.......
                .............fff111111fff.....
                .............f1111111111ffff..
                .............f1111111111111f..
                ..........ffff1111111111111fff
                .........ff111111111111111111f
                .....fffff1111111111111111111f
                .....f111111111111111111111111
                .fffff11f111111111111111111111
                ffffffffffffffffffffffffffffff
                ..............................
                ..............................
                ..............................
                ..............................
                `],
            [img`
                .......................
                ............8..........
                ...........88..........
                ..........888..........
                .........8888..........
                .........8888..........
                ........88888...88.....
                .......888888..8888....
                ......8888888.881888...
                .....88888888.8888888..
                .888888888888888888888.
                ....888888888888.......
                ..888888888888.........
                .....8888888...........
                .......................
                `],
            [img`
                .......................
                ............6..........
                ...........66..........
                ..........666..........
                .........6666..........
                .........6666..........
                ........66666...66.....
                .......666666..6666....
                ......6666666.661666...
                .....66666666.6666666..
                .666666666666666666666.
                ....666666666666.......
                ..666666666666.........
                .....6666666...........
                .......................
                `],
            [img`
                .......................
                ............2..........
                ...........22..........
                ..........222..........
                .........2222..........
                .........2222..........
                ........22222...22.....
                .......222222..2222....
                ......2222222.221222...
                .....22222222.2222222..
                .222222222222222222222.
                ....222222222222.......
                ..222222222222.........
                .....2222222...........
                .......................
                `],
            [img`
                .......................
                ............3..........
                ...........33..........
                ..........333..........
                .........3333..........
                .........3333..........
                ........33333...33.....
                .......333333..3333....
                ......3333333.331333...
                .....33333333.3333333..
                .333333333333333333333.
                ....333333333333.......
                ..333333333333.........
                .....3333333...........
                .......................
                `],
            [img`
                .......................
                ............5..........
                ...........55..........
                ..........555..........
                .........5555..........
                .........5555..........
                ........55555...55.....
                .......555555..5555....
                ......5555555.551555...
                .....55555555.5555555..
                .555555555555555555555.
                ....555555555555.......
                ..555555555555.........
                .....5555555...........
                .......................
                `]
            ]
        })
    } else if (selection == "Story") {
        game.showLongText("Legend has it that long before humans roamed the earth, there was a powerful and ancient dinosaur tribe known as the \"Chromeosaurs\". These magnificent creatures were revered for their strength and wisdom, and they were said to possess incredible powers that allowed them to control time and space.  However, as time passed, the Chromeosaurs became arrogant and selfish, and they began to use their powers for their own gain. They created a virtual world, which they called \"Chromeoasis\", where they could play and rule without any interference from the outside world.  But one day, a terrible disaster struck. A massive meteorite crashed into the Earth, causing a cataclysmic event that wiped out all of the Chromeosaurs, except for one. This last surviving member of the tribe was trapped in the virtual world of Chromeoasis, and he was unable to escape.  As the years passed, the virtual world became corrupted and decayed, and the last surviving Chromeosaur was transformed into a pixelated dinosaur that roamed the endless desert of Chromeoasis. The dinosaur was cursed to forever run and jump over cacti and dodge pterodactyls, unable to escape the virtual world.  But there was hope. The legend of the Chromeosaurs and their incredible powers had been passed down through the ages, and it was said that the only way to break the curse was to complete the virtual world's endless game. Only then would the last surviving Chromeosaur be freed from his virtual prison and his spirit could finally rest in peace.  That is where you come in. As the player, you take on the role of the last surviving Chromeosaur, and your goal is to complete the endless game that has trapped you for so long. As you progress through the levels, the world around you changes and transforms, becoming more colorful and vibrant as you get closer to breaking the curse.  Once you have survived for a certain amount of time and completed the game, the background blurs into a prehistoric setting, and the game gains even more color, signaling the end of the curse and the freedom of the last surviving Chromeosaur.", DialogLayout.Full)
    }
})
game.onUpdate(function () {
    if (info.highScore() >= info.score()) {
        blockSettings.writeNumber("High score", info.highScore())
    } else if (info.highScore() < info.score()) {
        blockSettings.writeNumber("High score", info.score())
    }
})
game.onUpdate(function () {
    if (ready) {
        scroller.scrollBackgroundWithSpeed(ground1.vx / 2, 0)
        if (raptor.y < 94) {
            raptor.ay = 400
        } else {
            raptor.ay = 0
            raptor.y = 94
            if (end == 0) {
                animation.setAction(raptor, ActionKind.Walking)
            }
        }
        if (controller.A.isPressed() || controller.up.isPressed()) {
            if (raptor.y == 94 && end == 0) {
                raptor.vy = -160
                animation.setAction(raptor, ActionKind.Jumping)
            }
        }
    }
})
game.onUpdateInterval(50, function () {
    if (ready) {
        info.changeScoreBy(1)
    }
})
game.onUpdateInterval(1000, function () {
    if (ready) {
        ground1.vx += -1
        ground2.vx += -1
    }
})
game.onUpdateInterval(1000, function () {
    if (ready) {
        choice = randint(0, 4)
        if (choice == 0) {
            cactus = sprites.createProjectileFromSide(img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                .............fffff..............
                ............ff777ff.............
                ............f77777f.............
                ............f77777f.fff.........
                ........fff.f77777fff7ff........
                .......ff7fff77777ff777f........
                .......f777ff77777ff777f........
                .......f777ff77777ff777f........
                .......f777ff77777ff777f........
                .......f7777777777ff777f........
                .......f7777777777ff777f........
                .......ff77777777777777f........
                ........fffff7777777777f........
                ............f777777777ff........
                ............f77777fffff.........
                ............f77777f.............
                ............f77777f.............
                ............f77777f.............
                ............f77777f.............
                ............f77777f.............
                ............f77777f.............
                ............fffffff.............
                `, ground1.vx, 0)
            cactus.y = 94
            cactus.z = 2
        } else if (choice == 1) {
            cactus = sprites.createProjectileFromSide(img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                .............fffff..............
                ............ff777ff.............
                ............f77777f.............
                ............f77777f.fff.........
                ........fff.f77777fff7ff........
                .......ff7fff77777ff777f........
                .......f777ff77777ff777f........
                .......f777ff77777ff777f........
                .......f777ff77777ff777f........
                .......f7777777777ff777f........
                .......f7777777777ff777f........
                .......ff77777777777777f........
                ........fffff7777777777f........
                ............f777777777ff........
                ............f77777fffff.........
                ............f77777f.............
                ............f77777f.............
                ............f77777f.............
                ............f77777f.............
                ............f77777f.............
                ............f77777f.............
                ............fffffff.............
                `, ground1.vx, 0)
            cactus.y = 94
            cactus.z = 2
        } else if (choice == 2) {
            cactus = sprites.createProjectileFromSide(img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                .................fff............
                ................f777f...........
                ................f777f.ff........
                .............ff.f777ff7ff.......
                ............f77ff777ff77f.......
                ............f77ff777ff77f.......
                ............f7777777ff77f.......
                ............ff7777777777f.......
                .............ffff7777777f.......
                ................f777fffff.......
                ................f777f...........
                ................f777f...........
                ................f777f...........
                ................f777f...........
                `, ground1.vx, 0)
            cactus.y = 94
            cactus.z = 2
        }
    }
})
game.onUpdateInterval(1500, function () {
    if (ready) {
        if (Math.percentChance(20)) {
            cloud = sprites.createProjectileFromSide(img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................ffff.ff.........
                ...............ff.....f.........
                .............fff......fff.......
                .............f..........ffff....
                .............f.............f....
                ..........ffff.............fff..
                .........ff..................f..
                .....fffff...................ff.
                .....f........................f.
                .ff.ff..f......................f
                ff.......fffffffffffffffffffffff
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                `, ground1.vx / randint(2, 10), 0)
            animation.runImageAnimation(
            cloud,
            list._pickRandom(),
            500,
            true
            )
            cloud.y = randint(20, 60)
            cloud.setKind(SpriteKind.Cloud)
            cloud.z = 1
        }
    }
})
forever(function () {
    if (ready) {
        if (ground2.x < -1 * (scene.screenWidth() / 2)) {
            ground2.x = ground1.x + scene.screenWidth()
        }
        if (ground1.x < -1 * (scene.screenWidth() / 2)) {
            ground1.x = ground2.x + scene.screenWidth()
        }
    }
})
