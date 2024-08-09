//1.JavaScript Fundamentals:
/* 
Variables and Data Types:
    -JavaScript is a loosely typed language, meaning variables can hold any type of data and the tpye can change at runtime
        -Primitive Types: string, number, boolean, undefined, null, symbol, bigint
        -Non-Primitive Types: object, array, function
Examples:
*/
let name = "John"; // string
let age = 30;      // number
let isStudent = true; // boolean
let address; // undefined
let hobbies = ["reading", "gaming"]; // array (object)

/* 
Functions:
    - Functions are first-class citizens in JavaScript, meaning they can be passes as arugments, returned from other functions, and assigned to variables
*/
// Function Declaration:
function greet(name) {
    return 'Hello ${name}!';
}
// Function Expression:
const greet = function(name) {
    return 'Hello ${name}';
}
// Arrow Functions: 
        // - A more concise syntax for writing functions introduced in ES6
const greet = (name) => 'Hello ${name}';
// Scope:
/* 
JavaScript has function scope and block scope
    - Function scope: Variables declared within a fucntion are only accessible inside that function
    - Block Scope: Vairables declared with let or const inside a block ('{}') are only accessible within that block
*/
// Example:
function example() {
    var functionScoped = "I'm function scoped";
    if (true){
        let blockScoped = "I'm block scoped";
        console.log(blockScoped) //works fine
    }
    console.log(functionScoped); //works fine
    console.log(blockScoped) // ERROR: blockscoped is not defined
}

// 2. Object-Oriented Programming in JavaScript
/*
Objects:
    - Objects in JavaScript are collections of key-value pairs.
    - They can represent more complex structures and allow the grouping of related data and functionality
*/
// Example:
let person = {
    name: "John",
    age: 30,
    greet: function() {
        return 'Hello, my name is ${this.name}';
    }
};

console.log(persont.greet()); // "Hello, my name is John"
/*
Prototypes:
    - JavaScript uses prototypal inheritance.
    - Every object in JavaScript has a prototype, which is another object from which it inherits properties and methods.
*/
// Example:
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    return 'Hello, my name is ${this.name}';
};

let john = new Person("John", 30);
console.log(john.greet()); // "Hello, my name is John"
/*
Classes:
    - Introduced in ES6, classes provide a more straightforward syntax for creating objects and handling inheritance.
    - Although they are essentially syntactic sugar over prototypes
*/
// Example:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return 'Hello, my name is ${this.name}';
    }
};

let frank = new Person("Frank", 30);
console.log(frank.greet()); // "Hello, my name is Frank"

// 3. Asynchronous JavaScript:
/*
Callbacks:
    - A function passed as an argument to another function, which is executed after some operation has been completed
*/
// Example:
function fetchData(callback) {
    setTimeout(() => {
        callback("Data Fetched");
    }, 1000);
}

fetchData((message) => {
    console.log(message); // "Data Fetched"
});
/*
Promises:
    - Promises represent a value that may be available now, in the future, or never.
    - Promises can be in one of three states: pending, fulfilled, rejected
*/
// Example:
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Fetched");
        }, 1000);
    });
}

fetchData().then((message) => {
    console.log(message); // "Data Fetched"
}).catch((error) => {
    console.error(error);
});

/*
Async/Await:
    - Async/await is a syntactic sugar built on top of promises
    - It allows writing asychronous code in a sychronous-looking manner
*/
// Example: 
async function fetchData() {
    let message = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Fetched");
        }, 1000);
    });
    console.log(message); // "Data Fetched"
}

fetchData();