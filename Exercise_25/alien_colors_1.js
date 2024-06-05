"use strict";
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// create a variable called alien color
let alien_color = 'green';
if (alien_color === "green") {
    console.log("playing just earned 5 points !");
}
// Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.
alien_color = 'pink';
// (The version that fails will have no output).
if (alien_color === 'green') {
    console.log("the player just earned 5 points.");
} //fail
