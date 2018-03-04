//Print to output target
function printToOutput(event) {
    let outputTarget = document.getElementById("output-target");
    outputTarget.innerHTML = event;
   }

//Click on sections and display in output target   
let sectionClick = document.getElementsByClassName("article-section");
for (let i = 0; i < sectionClick.length; i++) {
     sectionClick[i].addEventListener("click", function () {
        printToOutput(`You just clicked the ${event.target.innerHTML}`);
     })    
 } 
   
//H1 Hover
let h1Hover = document.getElementById("page-title");
h1Hover.addEventListener("mouseover", function () {
    printToOutput("You moved your mouse over the header");
})

//Leaving H1 hover
h1Hover.addEventListener("mouseout", function () {
    printToOutput("You left me!!");
})
    
//Output mirrors input box
let keyPress = document.getElementById("keypress-input");
keyPress.addEventListener("keyup", function() {
    let outputTarget = document.getElementById("output-target");
    outputTarget.innerHTML = event.target.value;
})

//Change Color
let colorChange = document.getElementById("add-color");
colorChange.addEventListener("click", function() {
    let guineaPig = document.getElementById("guinea-pig");
    guineaPig.classList.toggle("add-color");
})

//Hulkify
let hulkify = document.getElementById("make-large");
hulkify.addEventListener("click", function() {
    let guineaPig = document.getElementById("guinea-pig");
    guineaPig.classList.toggle("make-large");
})

//Capture It
let captureIt = document.getElementById("add-border");
captureIt.addEventListener("click", function() {
    let guineaPig = document.getElementById("guinea-pig");
    guineaPig.classList.toggle("border");
    })

//Rounded Border
let guineaPig = document.getElementById("guinea-pig");
let roundBorder = document.getElementById("add-rounding");

roundBorder.addEventListener("click", function() {
    guineaPig.classList.toggle("round-border"); 
})
       
        
        




