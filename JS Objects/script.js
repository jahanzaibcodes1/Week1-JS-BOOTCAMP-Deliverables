const student = {
  name: "Ali",
  age: 20,
  city: "Lahore"
};

console.log(student);
console.log(student.name);   //.Method
console.log(student["age"]); //Bracket Method
 
//Property Change from object
student.age=22;
console.log(student)

//Method to Add New Property

student.gmail="jahanzaib@gmail.com";
console.log(student)

//Property Deletion

delete student.gmail;
console.log(student)

//Method : Function inside the object is known as method

const person = {
    name:"jahanzaib",

    greet : function(){
        console.log("Hello");
    }

};
person.greet();

//Example#2

const calculator={
    add: function(){
        return 5+10;
    }
};
console.log(calculator.add());

//This Keyword: Is used to access your property inside the object

const client = {
  name: "Jahanzaib",

  welcome: function () {
    console.log("Hello " + this.name);
  }
};

client.welcome();

//Prototype : 


const arr = [1, 2, 3];

arr.push(7);

console.log(arr);

const str = "Hello";

console.log(str.toUpperCase("Hello"));

const obj = {};

console.log(obj.toString);
console.log(obj.hasOwnProperty);