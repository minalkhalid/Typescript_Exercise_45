"use strict";
// Alien colors #3:Turn your if- else chain from Exercise 5-4 into an if-else chain.
//write three versions of this program,making sure each massage is printed for the appropriate color alien.
let aliencolors = "green";
// if the alien is green, print a massage that the player earned 5 points.
//if the alien is yellow, print a massage that the player earned 10 points.
// if the alien is red, print a massage that the player earned 15 points.
// version 1 of the program
if (aliencolors === "green") {
    console.log("player earned 5 points.");
}
else if (aliencolors === "yellow") {
    console.log("player earned 10 points.");
}
else if (aliencolors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("player select right color");
}
// versions 2 of the program
aliencolors = "yellow";
if (aliencolors === "green") {
    console.log("player earned 5 points.");
}
else if (aliencolors === "yellow") {
    console.log("player earned 10 points.");
}
else if (aliencolors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("player select right color");
}
// version 3 of the program 
aliencolors = "red";
if (aliencolors === "green") {
    console.log("player earned 5 points.");
}
else if (aliencolors === "yellow") {
    console.log("player earned 10 points.");
}
else if (aliencolors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("player select right color");
}
