//Event:
      // Event is the action performed by user or browser
// Example 
//         mouse click,double click,keyboard press,scrol,form submit etc

let btn=document.querySelector("button");
let h=document.querySelector("h1")

h.addEventListener(
    "click",
    function(){
        h.textContent="welcome";
    }
);

btn.addEventListener(
    "click",
    function(){
        console.log("clicked");}
    
);

btn.addEventListener(
    "click",
    function(){
        btn.style.color="red";}
    
);

btn.addEventListener(
    "click",
    function(){
        document.body.style.background="Black"}
    
);