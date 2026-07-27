//Basic Variable
const name = "Jahanzaib";

console.log(`Hello ${name}!`);
//Multiple variable
const name = "Jahanzaib";
const age = 20;
const city = "Lahore";

console.log(`My name is ${name}. I am ${age} years old and I live in ${city}.`);

//Object practice

const user = {
  name: "Jahanzaib",
  age: 20,
  profession: "Software Engineer"
};

console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(`Profession: ${user.profession}`);

//Array

const fruits = ["Apple", "Banana", "Orange"];

console.log(`First Fruit: ${fruits[0]}`);
console.log(`Second Fruit: ${fruits[1]}`);
console.log(`Total Fruits: ${fruits.length}`);

const Brand = "iPhone";
const Model = "14 Pro Max";
const Color = "Black";
const Price = 250000;

console.log(`
Phone Details
-------------
Brand : ${Brand}
Model : ${Model}
Color : ${Color}
Price : Rs. ${Price}
`);