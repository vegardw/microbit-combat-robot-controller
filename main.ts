radio.setGroup(1)
loops.everyInterval(100, function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 600 && joystickbit.getRockerValue(joystickbit.rockerType.X) > 400) {
        if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 600) {
            radio.sendValue("drive", 1)
        } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 400) {
            radio.sendValue("drive", 2)
        } else {
            radio.sendValue("drive", 0)
        }
    } else {
        if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 600) {
            radio.sendValue("drive", 3)
        } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 400) {
            radio.sendValue("drive", 4)
        } else {
            radio.sendValue("drive", 0)
        }
    }
})
