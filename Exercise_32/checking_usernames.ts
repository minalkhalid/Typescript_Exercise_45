// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] =['zoya','hamna','wania','fizza','tabussum'];
let new_users: string[] =['zoya','zain','arfa','fizza','areesha'];
new_users.forEach(newUsernames => {
    let lowerCase: string =newUsernames.toLowerCase();

    if(current_users.map(c_users => c_users.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsernames} will need to enter a new username.`);
    }
    else{
        console.log(`The username ${newUsernames} is available.`);
    }
})