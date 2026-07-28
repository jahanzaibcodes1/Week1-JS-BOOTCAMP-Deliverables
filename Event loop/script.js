// 1. SYNCHRONOUS CODE

console.log("A");
console.log("B");
console.log("C");

// Output:
// A
// B
// C


// 2. setTimeout()

console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 2000);

console.log("End");

// Output:
// Start
// End
// Hello



// 3. setTimeout() WITH 0

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");

// Output:
// 1
// 3
// 2



// 4. MULTIPLE setTimeout()

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

setTimeout(() => {
    console.log("C");
}, 0);

console.log("D");

// Output:
// A
// D
// C
// B


// 5. PROMISE (MICROTASK QUEUE)

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// Output:
// Start
// End
// Promise


// 6. PROMISE + setTimeout()

console.log("A");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("B");

// Output:
// A
// B
// Promise
// Timeout



// ===============================================
// 7. MULTIPLE PROMISES
// ===============================================

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise 1");
});

Promise.resolve().then(() => {
    console.log("Promise 2");
});

console.log("End");

// Output:
// Start
// End
// Promise 1
// Promise 2



// 8. EVENT LOOP COMPLETE EXAMPLE

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

// Output:
// 1
// 4
// 3
// 2



