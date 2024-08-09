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