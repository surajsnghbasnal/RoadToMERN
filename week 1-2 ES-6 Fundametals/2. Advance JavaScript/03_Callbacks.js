// callback is a function passed as an argument to another function

const calc = (a, b, operation) => {
    return operation(a, b)
}

// method 1
let addititon = calc(3, 4, (num1, num2) => num1 + num2)
console.log(addititon);

// method 2
let subtraction = (num1, num2) => num1 - num2
let subRes = calc(100, 90, subtraction)
console.log(subRes)