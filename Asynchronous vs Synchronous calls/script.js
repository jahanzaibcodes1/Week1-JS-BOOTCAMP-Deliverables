// 1. SYNCHRONOUS

console.log("Wake Up");
console.log("Brush");
console.log("Breakfast");

// Output:
// Wake Up
// Brush
// Breakfast



// 2. ASYNCHRONOUS

console.log("Wake Up");

setTimeout(() => {
    console.log("Breakfast");
}, 2000);

console.log("Brush");

// Output:
// Wake Up
// Brush
// Breakfast



// 3. SYNCHRONOUS EXAMPLE

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

// Output:
// Task 1
// Task 2
// Task 3



// 4. ASYNCHRONOUS EXAMPLE

console.log("Start");

setTimeout(() => {
    console.log("Task 2");
}, 1000);

console.log("Task 3");

// Output:
// Start
// Task 3
// Task 2

// 5. SYNCHRONOUS vs ASYNCHRONOUS

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

// Output:
// A
// C
// B