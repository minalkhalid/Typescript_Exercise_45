

let Guest_list :string[] =['zain','imran','rohan'] ;

for(let i=0;  i<Guest_list.length; i++ ){

    console.log('Dear Mr.'  + Guest_list[i] + ' ,\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')

}

let absent_Guest :string = 'zain' ;

let new_Guest :string = 'kamran' ;

Guest_list[0] = new_Guest ;
     
for(let i=0;  i<Guest_list.length; i++ ){

    console.log('Dear Mr.'  + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you!\n\n')

}

console.log(`Mr.${absent_Guest} is not coming to the party.`)