//? Promises - The promises object represents the eventual complete or failure of a an asynchronous operation and its resulting value.

// const myPro1 = new Promise((resolve, reject) => {
//     // Do an async Task
//     // DB Calls, Cryptography, network
//     console.log('promise is in pending');
//     setTimeout(() => {
//         console.log(('Async task is complete'));
//         resolve()
//     }, 4000)
// })

// myPro1.then(() => {
//     console.log('Promise is consumed');
// })


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('async task.');
//         resolve()
//     }, 5000)
// }).then(() => console.log('async task resolved')
// )


// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             username: 'surajbasnal',
//             email: 'suraj@gmail.com'
//         })
//     }, 2000)
// })

// promise3.then((user) => {
//     console.log(user.username);
// })


new promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({
                username: 'surajbasnal21',
                password: 'suraj@123'
            })
        } else {
            reject('ERROR: Something went worng')
        }
    }, 2000)
})

promise4.then((user)=>{
    console.log(user);
    
})