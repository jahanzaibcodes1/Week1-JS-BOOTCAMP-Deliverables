const person ={
   city: "lahore"
};

const student=Object.create(person);
student.name="Ali";
console.log(student.city);

const mart ={
    items:"lays",
    cold:"drinks"
};
const shop=Object.create(mart);
shop.name="Alia";
console.log(shop.items);  //in shop object we do not have items property
                         // it is inherited by mart object

//Constructor function in prototype inheritence
function client(name){
    this.name=name;
}
client.prototype.sayhello = function(){
    console.log("Hello " + this.name);
};

const s1 = new client("Jahanzaib");
s1.sayhello();
const s2 =new client("Ali Sher");
s2.sayhello();

const parent = {
    city: "Lahore"
};

const child = Object.create(parent);

console.log(child.__proto__);  //Object have __proto__

console.log(student.__proto__ === person);