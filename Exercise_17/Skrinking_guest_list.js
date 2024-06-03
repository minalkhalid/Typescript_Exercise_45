"use strict";
let Guest_list = ['zain', 'imran', 'rohan'];
// for(let i=0;  i<Guest_list.length; i++ ){
// console.log('Dear Mr.'  + Guest_list[i] + ' ,\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
//}
let absent_Guest = 'zain';
let new_Guest = 'kamran';
Guest_list[0] = new_Guest;
//for(let i=0;  i<Guest_list.length; i++ ){
// console.log('Dear Mr.'  + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')
//}
console.log(`Mr.${absent_Guest} is not coming to the party.`);
console.log('Good News! we find the Big table so we are inviting 3 more guest');
Guest_list.unshift('sir hamza khan');
Guest_list.splice(2, 0, 'zuhaib khan');
Guest_list.push('khalid mehmood bhatti');
// yahan par mama 6 guest ka array kp print karwaya hai.
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
//sorry massage to guest for not inviting.
console.log('\nsorry we can not arrange Big table, only two people will be invited');
// yahan par mana sara remove kiya hain.
while (Guest_list.length > 2) {
    let remove_guest = Guest_list.pop();
    console.log(`sorry Mr. ${remove_guest}, You are not invited for Dinner.`);
}
// humare bacha howa 2 invited guest.
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr.' + Guest_list[i] + ' ,\n\nyou are still invited.\n\nThank you!\n\n');
}
// mana sara guest array sa remove kar diya.
Guest_list.splice(0, 2);
console.log(Guest_list);
