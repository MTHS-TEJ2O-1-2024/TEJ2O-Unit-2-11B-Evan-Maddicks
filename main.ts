/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan M
 * Created on: Oct 2024
 * This program now generates 2 random numbers and determines which is greater than the other 
*/

let firstnumber = randint(0, 99)
let secondnumber = randint(0, 99)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A,function(){
basic.showString("#1 : ")
basic.showNumber(firstnumber)
basic.clearScreen()
})

input.onButtonPressed(Button.B, function () {
    basic.showString("#2 : ")
    basic.showNumber(secondnumber)
    basic.clearScreen()
})

input.onGesture(Gesture.Shake,function(){
    if (firstnumber > secondnumber) {
    basic.showString(firstnumber + ">" + secondnumber)
} else
basic.showString(firstnumber + "<" + secondnumber)
    basic.showIcon(IconNames.Happy)
})