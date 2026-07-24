// DOM Elements Practice

// Selecting an element using querySelector()

let heading = document.querySelector("h1");

// Change text
heading.textContent = "Welcome Jutt";

// Change color
heading.style.color = "red";

// Change font size
heading.style.fontSize = "50px";


// Selecting button using getElementById()

const button = document.getElementById("btn");

// Change button text
button.innerText = "Press Me";

// Change button text color
button.style.color = "pink";


// Event Listener

button.addEventListener("click", function () {

    console.log("Button Clicked");

    heading.textContent = "DOM is Easy";

    heading.style.color = "blue";

    button.innerText = "Pressed";

});