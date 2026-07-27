//Variables

let a=66;
console.log(a);

let age=29;
console.log("Age is " + age);  //String+number


let b=30;
a=90;
console.log(a + b);

//MATH OBJECTS

Math.random();
console.log(Math.round(7.5));
console.log(Math.ceil(2.02));
console.log(Math.floor(2.9));
console.log(Math.random());
console.log(Math.max(20,30,40));
console.log(Math.min(22,33,44))
console.log(Math.pow(2,4))
console.log(Math.sqrt(25))

let dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);


//functions

function greet() {
    console.log("Good Morning");
}

greet();
greet();
greet();

//return Function

function add(a,b){
    return a+b;
};
    let result= add(2,8);
    console.log(result);



