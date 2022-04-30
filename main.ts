let r2 = 0
let p2 = 0
let r1 = 0
let p1 = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    p1 = input.rotation(Rotation.Pitch)
    r1 = input.rotation(Rotation.Roll)
    basic.pause(200)
    p2 = input.rotation(Rotation.Pitch)
    r2 = input.rotation(Rotation.Roll)
    if (r1 != r2 || p1 != p2) {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    serial.writeValue("p", p1)
    serial.writeValue("r", r1)
})
