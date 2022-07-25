const circle = document.getElementById("main");
let deg = Math.floor(Math.random()*2000)

function spinner(){
    circle.style.transform = "rotate("+deg + "deg)";
    circle.style.transition = "5s";
    deg +=Math.ceil(Math.random()*2000); 
}