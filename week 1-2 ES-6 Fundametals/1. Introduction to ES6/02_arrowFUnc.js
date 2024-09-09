//? 'This'  keyword.

// const user = {
//     name: 'suraj',
//     username: 'surajbasnal',
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`hello ${this.name}, Welcome to website`);
//         console.log(this);
        // ! this indicate the current context 
//     }
// }
// user.welcomeMessage()

// console.log(this);

// !Node Environment - this indicate an empty object because in global scope there is no context, 

// *Browser engine - this indicate window, because in previous time there is only one engine to execute JS.


// ? this keyword in function.
//! we can use 'this' keyword in Object and classes only.

// function suraj() {
//     let username = 'suraj'
//     console.log(this);
// }
// suraj()


// ?Arrow Function

const sum = (num1, num2) => {
    return (num1 + num2)
}
console.log(sum(2,3))

// ?Arrow function with implicit return

const sum2 = (num1, num2)=> (num1+num2)
console.log(sum2(5,5));

