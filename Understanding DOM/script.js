//DOM : Document Object Model

//HTML is a blueprint and DOM ia a live version of that blueprint

//Purpose of DOM : We can change HTML by Javascript

let heading = document.getElementById("heading");

//if you want to change inner text

heading.innerText = "Welcome Jahan";

//if you want to change color:

heading.style.color="red";

const button=document.getElementById("btn");
button.innerText="Press me";
button.style.color="Pink";

button.addEventListener("click", function () {
    console.log("Clicked");
});