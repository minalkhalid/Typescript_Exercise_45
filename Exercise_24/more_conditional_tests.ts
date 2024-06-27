// Tests for equality and inequality with strings
let apple ="apple";
//equality test
console.log("apple is equal to apple ")//true
console.log(apple == "apple")
//inequality test
console.log("apple is not equal to apple")//false
console.log(apple !== "apple")

// Tests using the lower case function
let upperCaseApple ="APPLE"
//equal to
console.log("APPLE is equal to apple after converting to lowercase")
console.log(upperCaseApple.toLowerCase() =="apple")
// not equal to
console.log("APPLE is not equal to apple after converting to lowercase")
console.log(upperCaseApple.toLowerCase() != "apple")

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let five = 5
let nine = 9;
//equality 
console.log("five is equal to nine")
console.log(five == nine)
// inequality
console.log("five is not equal tu nine")
console.log(five != nine)
//greater than
console.log("nine is greater than five")
console.log(nine > five)
//less than
console.log("nine is less than five")
console.log(nine < five)
//greater than or equal to 
console.log("nine is greater than or equal to five")
console.log(nine >= five)
// less than or equal to
console.log("nine is less than or equal to five")
console.log(nine <= five)

// Tests using "and" and "or" operators
// &&(and)
console.log("nine is not equal to five and nine is greater than five");
console.log(nine != five && nine > five);

console.log("nine is not equal to five and five is greater than nine")
console.log(nine != five && five > nine)

//||(or)
console.log("nine is greater than five or nine is not equal to  nine")
console.log(nine > five || nine != nine)

console.log("nine is less than five or nine is not equal to nine")
console.log(nine < five || nine != nine)

//Test whether an item is in a array
let cars = ["corolla","civic","parado"]
console.log("corolla include in my cars array")
console.log(cars.includes("corolla"))

//Test whether an item is not in a array
console.log("corolla is not include in my cars array")
console.log(!cars.includes("corolla"))

