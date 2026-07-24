// =======================
// VAR
// =======================

console.log(a); // undefined

var a = 10;

console.log(a); // 10

// =======================
// LET
// =======================

// console.log(b); // ReferenceError

let b = 20;

console.log(b);

// =======================
// CONST
// =======================

// console.log(c); // ReferenceError

const c = 30;

console.log(c);

// =======================
// Function Declaration
// =======================

hello();

function hello() {
    console.log("Hello World");
}

// =======================
// Function Expression
// =======================

// hi(); // TypeError

var hi = function () {
    console.log("Hi");
};

hi();