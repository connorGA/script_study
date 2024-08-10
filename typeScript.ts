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

// 3. Advanced Types:
/*
Interfaces:
    - Interfaces define the shape of an object, specifying the properties and their types that the object must have
*/ 
// Example:
interface User {
    name: string;
    age: number;
    isAdmin?: boolean; // optional property
}

function printUser(user: User) {
    console.log(`${user.name} is ${user.age} years old`);
}

const user: User = {name: "John", age: 30};
printUser(user); //"John is 30 years old"
/*
Classes and Interfaces:
    - TypeScript allows you to use interfaces to enforce contracts wihin classes
*/
// Example 
interface Shape {
    area(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

let circle = new Circle(5);
console.log(circle.area()); //78.5398...
/*
Enums:
    -Enums allow you to define a set of named constants, which can be either numeric or string values
*/
// Example:
enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Green;
console.log(color); // 1
/*
Generics:
    - Generics allow you to create reusable components that can work with any data type while maintaining type safety
*/
// Example:
function identity<T>(value: T): T {
    return value;
}

let output1 = identity<string>("Hello"); // "Hello"
let output2 = identity<number>(42); //42

//4. Modules and Namespaces:
/*
Modules:
    - TypeScript follows ES6 module syntax, allowing you to export and import code across files
*/
// Example:
//math.ts
export function add(x: number, y: number): number {
    return x + y;
}
//app.ts
// import { add } from './math';    commented out because no math.ts file to import from so was throwing an error
console.log(add(10,20)); //30 
/*
Namespaces:
    - Namespaces in TypeScript are a way to organize code into logical groups and prevent name collisions
*/
// Example:
namespace Utils {
    export function log(message: string): void {
        console.log(message);
    }
}

Utils.log("Hello World") // "Hello World"
