const heading = document.getElementById("heading");
const button = document.getElementById("btn");
const div = document.getElementById("box");

button.addEventListener("click", function () {
    heading.innerHTML = `
        <h2>Hello Jahan 👋</h2>
        <p>Welcome to JavaScript DOM Practice.</p>
    `;
});

div.addEventListener("click", function () {
    console.log("Div clicked");
});