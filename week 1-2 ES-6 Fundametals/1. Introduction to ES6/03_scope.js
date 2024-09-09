// Scope

// let a = 100
// const b = 200
// var c = 300

const scope = () => {
    let a = 10
    const b = 20
    var c = 30
    // console.log('====================================');
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log('====================================');
}
scope()
console.log('====================================');
// console.log(a);
// console.log(b);
// console.log(c);
console.log('====================================');

//? Scope and closures

// const parent = () => {
//     const username = 'suraj'

//     const child = () => {
//         const website = 'youtube'
//         console.log(username);
//     }

//     child()
//     console.log(website);
// }
// parent()

// ! Child(local scope) can access the variables from Parent(global scope) but parent can't access the variables from child.

if (true){
    const username = 'surajbasnal'
    if (username == 'surajbasnal') {
        const website = ' youtube'
        console.log(username + website);
    }
    console.log(website);
}
console.log(username)