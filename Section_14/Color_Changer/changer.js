// Create a variable for the button
var el = document.getElementById("button");

// Create an Event Listener
el.addEventListener("click", function(){
    document.body.classList.toggle("green");
});