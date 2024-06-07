/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value 
 pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/

 function car(manufacturer:string,model:number, ...rest:{[key : string]:any}[]){
  let car_obj ={
    manufacturer : manufacturer,
    model : model,
  ...Object.assign({}, ...rest)
  }
  console.log(car_obj)
 }
 
 car("Toyota",2023,{color:"black"},{optinal_feature:["power window","air bag"]})
