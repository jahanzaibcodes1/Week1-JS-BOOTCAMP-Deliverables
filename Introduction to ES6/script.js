// ===============================
// ES6 Introduction
// ===============================

// let

let name = "Jahanzaib";
console.log(name);

name = "Ali";
console.log(name);

// const

const country = "Pakistan";
console.log(country);

// country = "India"; // Error


// ===============================
// Arrow Functions
// ===============================

// Normal Function

function greet() {
    console.log("Hello");
}

greet();

// Arrow Function

const greetUser = () => {
    console.log("Welcome Jutt");
};

greetUser();


// Arrow Function with Parameters

const introduce = (name) => {
    console.log("Hello " + name);
};

introduce("Jahan");


// Arrow Function Returning Value

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


// Short Arrow Function

const multiply = (a, b) => a * b;

console.log(multiply(5, 4));


// One Parameter

const square = number => number * number;

console.log(square(6));


// Array with Arrow Function

const numbers = [10, 20, 30, 40];

numbers.forEach((item) => {
    console.log(item);
});