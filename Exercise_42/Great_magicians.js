"use strict";
//define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// function  to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//define an array of magicians names
let magician_names = ["Harry poter", "Hermione Granger", "Ron weasley"];
// call make_great function to modify magicians names
let great_magicians = make_great(magician_names);
// call show_magicians function that show  modified list of magicians
show_magicians(great_magicians);
