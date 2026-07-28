// 1. BASIC for...of

const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Output:
// Apple
// Banana
// Mango



// 2. for...of WITH NUMBERS

const numbers = [10, 20, 30, 40];

for (const number of numbers) {
  console.log(number);
}

// Output:
// 10
// 20
// 30
// 40



// 3. for...of WITH STRING

const name = "Jahanzaib";

for (const letter of name) {
  console.log(letter);
}

// Output:
// J
// a
// h
// a
// n
// z
// a
// i
// b


// 4. for...of WITH SET

const ids = new Set([101, 102, 103]);

for (const id of ids) {
  console.log(id);
}

// Output:
// 101
// 102
// 103
const fruits2 = ["Apple", "Banana", "Mango"];

const iterator2 = fruits2[Symbol.iterator]();

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());



const numbers2 = [1, 2, 3];

const iterator3 = numbers2[Symbol.iterator]();

let result = iterator3.next();

console.log(result.value);
console.log(result.done);
