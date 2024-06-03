

let Guest_list :string[] =['zain','imran','rohan'] ;


//for(let i=0;  i<Guest_list.length; i++ ){

 // console.log('Dear Mr.'  + Guest_list[i] + ' ,\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')

//}
let absent_Guest :string = 'zain' ;

let new_Guest :string = 'kamran' ;

Guest_list[0] = new_Guest ;
     
for(let i=0;  i<Guest_list.length; i++ ){

    console.log('Dear Mr.'  + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')

}

console.log(`Mr.${absent_Guest} is not coming to the party.`)

console.log('Good News! we find the Big table so we are inviting 3 more guest')

Guest_list.unshift('sir hamza khan') ;
Guest_list.splice(2,0,'zuhaib khan');
Guest_list.push('khalid mehmood bhatti');

for(let i=0;  i<Guest_list.length; i++ ){

    console.log('Dear Mr.'  + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')

}