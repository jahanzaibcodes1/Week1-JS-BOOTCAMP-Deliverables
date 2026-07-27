// ES5
{
  const name = "Jahanzaib";
  const age = 20;

  const user = {
    name: name,
    age: age,
  };

  console.log(user);
}

// ES6
{
  const name = "Jahanzaib";
  const age = 20;

  const user = {
    name,
    age,
  };

  console.log(user);
}


//Output of both is same but with less and effective code

const Brand = "Iphone";
const Model = "14proMax";
const colour = "Black";

const Phone ={
    Brand,
    Model,
    colour,
}
console.log(Phone);