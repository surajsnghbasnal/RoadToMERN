//? Destructuring.

const course = {
    courseName: 'Js Tutorials',
    price: '999',
    courseInstructor: 'hitesh'
}

//! 1st way of destructuring
const { courseInstructor } = course
console.log('====================================');
console.log(courseInstructor);
console.log('====================================');

//! 2nd way: you can change its name as well.
const { courseInstructor: tutor } = course
console.log('====================================');
console.log(tutor);
console.log('====================================');

//? API
// json Format

// {
//     'username': 'suraj',
//     'password': 'suraj@123',
//     'location': 'Ghaziabad',
//     'isLogin': true
// }
