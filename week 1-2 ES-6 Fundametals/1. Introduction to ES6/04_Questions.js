//? What is the difference between var, let, and const in terms of scope and reassignability?

// !var:
// *Scope: Function-scoped.
// *Reassignability: Can be reassigned.
// *Hoisting: Hoisted (initialized as undefined).

// !let:
// *Scope: Block-scoped.
// *Reassignability: Can be reassigned.
// *Hoisting: Hoisted (but not initialized).

// !const:
// *Scope: Block-scoped.
// *Reassignability: Cannot be reassigned (but objects/arrays can be mutated).
// *Hoisting: Hoisted (but not initialized).



//? Rewrite a traditional function into an arrow function.

//* Traditional Function:
function myFunction() {
    console.log("hello");
}

//* Arrow Function:
const myFunc = () => {
    console.log('hello');
}



//? How do template literals improve string concatenation in JavaScript? Provide an example.

//! They use backticks (`) instead of single or double quotes and support multi-line strings and embedded expressions.

//! Traditional string Concatenation:
let name = 'suraj'
let age = 21
let location = "Ghaziabad"

console.log('My self ' + name + ' i am ' + age + ' years young, And i am currently residing at ' + location);

//! Template literals:
console.log(`My self ${name}, I am ${age} years old, and i'm currently residing at location `);



//? What are the differences between default parameters and rest parameters in ES6?

// Default Parameters are used to assign default values to parameters.
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet('Alice'); // Output: Hello, Alice!


// Rest Parameters are used to gather multiple arguments into a single array.
function myFunc2(...numbers) {
    console.log(numbers);
}
console.log(myFunc2(1, 2, 3));
console.log(myFunc2(4, 5, 6, 7, 8));



// ?How does block scoping work with let and const?

//* let and const: Both are block-scoped, meaning their visibility is restricted to the block, statement, or expression where they are declared.

//* let: Allows reassignment of the variable's value within its block.

//* const: Does not allow reassignment of the variable's value once it's set, but objects or arrays declared with const can still be mutated.


//* Example:
{
    let x = 10;
    const y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
}

console.log(x); // Error: x is not defined
console.log(y); // Error: y is not defined

