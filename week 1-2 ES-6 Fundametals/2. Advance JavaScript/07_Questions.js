// Questions:

//? What is destructuring, and how can it be used with arrays and objects? Give examples.

//* Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables.
/*
// Array Destructuring Example:
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


// Object Destructuring Examples
const person = { name: "Suraj", age: 25 };
const { name, age } = person;

console.log(name); // Suraj
console.log(age);  // 25
*/


//? Explain how the spread operator works in copying arrays or merging objects.
/*
// Copying Arrays:
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Copying arr1 into arr2

console.log(arr2); // [1, 2, 3]

// Merging Object:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }
*/


//? Convert a promise-based function into an async/await function.

// Promise Based Function
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved");
        }, 2000)
    })
}

// fetchData().then(data => console.log(data))

// Converted to Async
const fetchData2 = async () => {
    const data = await fetchData()
    console.log(data);    
}

fetchData2()



//? What is the difference between synchronous and asynchronous JavaScript?

//* Synchronous JavaScript is Executes code line by line, blocking further execution until the current line is completed.

//* Asynchronous JavaScript: Allows code to run in a non-blocking manner, enabling other code to execute while waiting for long-running operations (like network requests).





// How do ES6 modules work? Explain with an example of import and export.

//* ES6 modules allow you to split JavaScript code into separate files, promoting better organization and reusability. Each module can export its functions, objects, or variables, and other modules can import them.

//* Exporting a Module: You can export variables or functions from a module using the export keyword.