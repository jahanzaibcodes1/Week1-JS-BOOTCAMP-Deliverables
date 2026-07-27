// 1. OBJECT DESTRUCTURING
const person = {
  name: "Jahanzaib",
  age: 20,
  city: "Lahore",
};

const { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city);

// Output:
// Jahanzaib
// 20
// Lahore



// 2. ARRAY DESTRUCTURING

const fruits = ["Apple", "Banana", "Mango"];

const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);

// Output:
// Apple
// Banana
// Mango



// 3. NESTED OBJECT DESTRUCTURING

const user = {
  id: 1,
  info: {
    name: "Jahanzaib",
    age: 20,
  },
};

const {
  id,
  info: { name: userName, age: userAge },
} = user;

console.log(id);
console.log(userName);
console.log(userAge);

// Output:
// 1
// Jahanzaib
// 20


// 4. DESTRUCTURING IN FUNCTION PARAMETERS

function showUser({ name, age, city }) {
  console.log(`${name} is ${age} years old and lives in ${city}.`);
}

const userData = {
  name: "Jahanzaib",
  age: 20,
  city: "Lahore",
};

showUser(userData);

// Output:
// Jahanzaib is 20 years old and lives in Lahore.



// 5. REST OPERATOR WITH ARRAY DESTRUCTURING

const numbers = [1, 2, 3, 4, 5];

const [a, b, ...rest] = numbers;

console.log(a);
console.log(b);
console.log(rest);

// Output:
// 1
// 2
// [3, 4, 5]



// 6. REST OPERATOR WITH OBJECT DESTRUCTURING

const employee = {
  name: "Ali",
  age: 22,
  city: "Lahore",
  country: "Pakistan",
};

const { name: employeeName, ...details } = employee;

console.log(employeeName);
console.log(details);

// Output:
// Ali
// { age: 22, city: "Lahore", country: "Pakistan" }



// 7. SWAP VARIABLES USING DESTRUCTURING

let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x);
console.log(y);

// Output:
// 20
// 10



// 8. DEFAULT VALUES IN OBJECT DESTRUCTURING


const student = {
  name: "Ali",
  age: 18,
};

const { name: studentName, age: studentAge, country = "Pakistan" } = student;

console.log(studentName);
console.log(studentAge);
console.log(country);

// Output:
// Ali
// 18
// Pakistan



// 9. DEFAULT VALUES IN ARRAY DESTRUCTURING

const colors = ["Red"];

const [firstColor, secondColor = "Blue"] = colors;

console.log(firstColor);
console.log(secondColor);

// Output:
// Red
// Blue