//Call() method call the function immediately

const user = {
    Name :"jahanzaib",
    Age :  20,
};

function introduce(city,hobby){
    console.log(` My name is ${this.Name} i am ${this.Age} 
 i live in ${city}  my hobby is ${hobby}`);
    }
introduce.call(user,"Lahore","Gym");

//output


//My name is jahanzaib i am 20 
//i live in undefined  my hobby is undefined

//Apply() method also call function immediately but in it we wrtie parameters in array
const student = {
    Name :"jahanzaib",
    Age :  20,
};

function introduce(city,hobby){
    console.log(` My name is ${this.Name} i am ${this.Age} 
 i live in ${city}  my hobby is ${hobby}`);
    }
introduce.apply(student,["Lahore","Gym"]);


//bind() method did not call the function immediately 
//but it create new function and set value in it permamnently

const client = {
    Name :"Ali",
    Age :  20,
};

function introduce(city,hobby){
    console.log(` My name is ${this.Name} i am ${this.Age} 
 i live in ${city}  my hobby is ${hobby}`);
    }
const newfunc = introduce.bind(client,"Lahore","Essay Writting");

newfunc();
newfunc();