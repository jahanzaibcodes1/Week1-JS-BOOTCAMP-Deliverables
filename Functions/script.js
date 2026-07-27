// ===============================
// 1. Simple Function
// ===============================

function say() {
    console.log("Good Morning");
}

say();
say();


// ===============================
// 2. Parameters & Arguments
// ===============================

function greet(name) {
    console.log("Hi: " + name);
}

greet("Jahanzaib");
greet("Shahmeer");


// ===============================
// 3. Another Example
// ===============================

function roti(name) {
    console.log("Khana for " + name);
}

roti("Jahanzaib");
roti("Ali");


// ===============================
// 4. Multiple Parameters
// ===============================

function multiply(num1, num2) {
    console.log(num1 * num2);
}

multiply(2, 8);

function subtract(num1, num2) {
    console.log(num1 - num2);
}

subtract(8, 2);


// ===============================
// 5. Calculator Function
// ===============================

function calculator(num1, num2, operator) {

    if (operator === "+") {
        console.log(num1 + num2);
    }
    else if (operator === "-") {
        console.log(num1 - num2);
    }
    else if (operator === "*") {
        console.log(num1 * num2);
    }
    else if (operator === "/") {
        console.log(num1 / num2);
    }
    else {
        console.log("Invalid Operator");
    }
}

calculator(100, 100, "/");
calculator(577, 44, "-");
calculator(18, 79, "*");


// ===============================
// 6. Return
// ===============================

function add(a, b) {
    return a + b;
}

let answer = add(10, 10);
console.log(answer);


// ===============================
// 7. Default Parameter
// ===============================

function welcome(name = "Guest") {
    console.log("Hello " + name);
}

welcome();
welcome("Jahanzaib");


// ===============================
// 8. Function Expression
// ===============================

const addExpression = function (a, b) {
    return a + b;
};

console.log(addExpression(5, 5));

const subtractexpression =function(a,b){
    return a-b;
}
console.log(subtractexpression(5,6));

// ===============================
// 8. Arrow function
// ===============================

const divideArrow =(a,b)=>{
    return a/b;
}
console.log(divideArrow(2,4));

// ===============================
// 8. timeout function
// ===============================
setTimeout(function () {
    console.log("Hello");
}, 3000);

console.log("Start");

setTimeout(function () {
    console.log("Hello Jahanzaib");
}, 3000);

console.log("End");