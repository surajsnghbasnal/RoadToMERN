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


// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;

//         if (!error) {
//             resolve({
//                 username: 'surajbasnal21',
//                 password: 'suraj@123'
//             })
//         } else {
//             reject('ERROR: Something went worng')
//         }
//     }, 2000)
// })

// promise4
//     .then((user) => {
//         console.log(user);
//         return user.username
//     })
//     .then((username) => {
//         console.log(username)
//     })
//     .catch((error) => {
//         console.log(error);
//     }).finally(()=>console.log('The promise is either resolved or rejected')
//     )


// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({ username: 'javascript', password: 'js123' })
//         } else {
//             reject('ERROR: JS went wrong.')
//         }
//     }, 1000)
// });

// const consumed5 = async () => {
//     try {
//         const res = await promise5
//         console.log(res)
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumed5()


// const getAllUsers = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await res.json()
//         console.log(data);
//     } catch (error) {
//         console.log('ERROR:', error)
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
    return res.json()
})
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);

    })