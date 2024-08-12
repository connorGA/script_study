// Functions in JavaScript
//Q1 - What is a function declaration?

function square(num) {
    return num * num;
}

// Q2 - What is a function expression?
    // - When you store a function declaration inside of a variable

const square = function (num) {
    return num * num;
};

console.log(square(5)); // 25

// Q3 - What are First Class Functions?
        // In a language where a function can be treated like a variable, meaning they can be passed into other functions, manipulated, returned, etc they are know as first class function.

function displaySquare(fn) {
    console.log("Square is " + fn(5));
}

displaySquare(square);

// Function Scope
var num1 = 20,
    num2 = 3,
    name = "Coder";

function multiply() {
    return num1 * num2;
}

multiply(); //Returns 60

// A nested function example
function getScore() {
    var num1 = 2,
        num2 = 3;

        function add() {
            return name + " scored " + (num1 + num2);
        }

        return add();
}

getScore(); // Returns "Coder scored 5"