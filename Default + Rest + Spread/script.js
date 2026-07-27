// 1. DEFAULT VALUES


// (A) Default Values in Object Destructuring

const person = {
  name: "Ali",
  age: 18,
};

const { name, age, city = "Lahore" } = person;

console.log(name); // Ali
console.log(age); // 18
console.log(city); // Lahore



// (B) Default Values in Array Destructuring

const colors = ["Red"];

const [first, second = "Blue"] = colors;

console.log(first); // Red
console.log(second); // Blue



// 2. REST OPERATOR (...rest)


// (A) Rest Operator in Array

const numbers = [1, 2, 3, 4, 5];

const [a, b, ...rest] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]



// (B) Rest Operator in Object

const student = {
  id: 101,
  name: "Ahmed",
  age: 20,
  city: "Karachi",
};

const { id, ...info } = student;

console.log(id); // 101
console.log(info);
// {
//   name: "Ahmed",
//   age: 20,
//   city: "Karachi"
// }


// 3. SPREAD OPERATOR (...)


// (A) Spread Operator in Array

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArr = [...arr1, ...arr2, 7, 8];

console.log(newArr);

// Output:
// [1, 2, 3, 4, 5, 6, 7, 8]



// (B) Spread Operator in Object

const obj1 = {
  name: "Ali",
  age: 18,
};

const obj2 = {
  city: "Lahore",
  country: "Pakistan",
};

const newObj = {
  ...obj1,
  ...obj2,
};

console.log(newObj);

// Output:
// {
//   name: "Ali",
//   age: 18,
//   city: "Lahore",
//   country: "Pakistan"
// }




// Copy an Array

const originalArray = [10, 20, 30];
const copiedArray = [...originalArray];

console.log(copiedArray);



// Copy an Object

const originalObject = {
  name: "Jahanzaib",
  age: 20,
};

const copiedObject = {
  ...originalObject,
};

console.log(copiedObject);



// Merge Three Arrays

const firstArray = [1, 2];
const secondArray = [3, 4];
const thirdArray = [5, 6];

const mergedArray = [...firstArray, ...secondArray, ...thirdArray];

console.log(mergedArray);



// Merge Three Objects

const personal = {
  name: "Jahanzaib",
};

const education = {
  degree: "BS Software Engineering",
};

const location = {
  city: "Lahore",
};

const profile = {
  ...personal,
  ...education,
  ...location,
};

console.log(profile);