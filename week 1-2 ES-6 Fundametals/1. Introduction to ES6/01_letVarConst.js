//! let const VS var

const accountId = 144553 //we can't update or redeclare const 
// accountId = 112233 //not allowed 

let accEmail = "hitesh@gmail.com" //we can update the value but can't redeclare.
accEmail = "suraj@gmail.com"

var accPass = 'suraj@123' //we can update and redeclare the variable with var
accPass = 'sur@123'

accCity = 'jaipur' // we can make variable without any reserved keyword, but this is not good habit we shouldn't use this method.

console.log([accountId, accEmail, accPass, accCity]);


let name;

console.log(name); //undefine, because we only declared the variable didn't initialized yet.

console.log(age); // not defined, because we didn't declare any variable with "age" identifier.



