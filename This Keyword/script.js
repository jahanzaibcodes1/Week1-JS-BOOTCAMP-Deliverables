const student = {
    name: "Jahan",

    sayHello() {
        console.log(this.name);
    }
};

student.sayHello();  //this point to that object who call the function

let client = {
    name: "Jahan",
    age: 21,

    greet() {
        console.log(this.name, this.age);
    }
};

client.greet();

function water(){
    console.log(`give water only to ${this.age} With name ${this.name} year old members`);
}
const community ={
    age:20,
    name:"PVC",
    water
}
const school={
    age:20,
    name:"USS",
    water
}
community.water();
school.water();