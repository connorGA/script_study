// 1. Introduction to TypeScript
/*
TypeScript Basics:
    - TypeScript is a typed superset of JavaScript, meaning it includes all JavaScript features but adds optional static types, interfaces, and advanced language features that are absent in vanilla javascript
Type Annotations:
    -TypeScript allows you to define the type of a variable, function parameter, or a return value, making your code more predictable and easier to debug
*/
// Example:
let username: string = "John";
let age: number = 30;
let isLoggedIn: boolean = true;
/*
Compilation:
    - TypeScript code is compiled into JavaScript, meaning you need to use a TypeScript compiler(e.g,'tsc') to convert .ts files in .js files
*/
// 2. Static Typing and Type Inference:
/*
Explicit Types:
    - You can explicitly declare the type of variables and function parameters
*/
// Example:
function greet(name: string): string {
    return `Hello, ${name}`;
}
/*
Type Inference:
    - TypeScript can often infer the type of a variable or return type of a function based on the value assigned to it or the logic inside the function
*/
// Example:
let greeting = "Hello"; //TypeScript infers that 'greeting' is of type 'string'
/*
Union Types:
    - Union types allow a variable to hold more than one type 
*/
// Example:
let id: number | string;
id = 101; // valid
id = "E-101"; // also valid
/*
Any Type:
    - The 'any' type allows a variable to hold any type of value.
    - It should be used sparingly as it defeats the purpose of TypeScripts type safety
*/
// Example:
let randomValue: any = "Hello";
randomValue = 10; //valid
randomValue = true; //valid
