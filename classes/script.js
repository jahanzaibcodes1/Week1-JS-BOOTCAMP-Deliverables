class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }

}

const student1 = new Student("Jahanzaib", 20);

student1.introduce();

class Car {

    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    details() {
        console.log(`${this.brand} ${this.model}`);
    }

}

const car1 = new Car("Toyota", "Corolla");

car1.details();

class Calculator {

    add(a, b) {
        console.log(a + b);
    }

    subtract(a, b) {
        console.log(a - b);
    }

}

const calc = new Calculator();

calc.add(20, 30);

calc.subtract(50, 15);