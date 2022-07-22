var body = document.getElementById("body");
var head = document.getElementById("head");
var eyes = document.getElementsByClassName("eyes");
var right_hand = document.getElementById("right_hand");
var left_hand = document.getElementById("left_hand");

body.onclick = function(){
    eyes[0].style.height = "3px";
    eyes[1].style.height = "3px";
}

head.onclick = function(){
    eyes[0].style.height = "12px";
    eyes[1].style.height = "12px";
}

right_hand.onclick = function(){
    right_hand.style.transform = "rotate(-180deg)";
    right_hand.style.transformOrigin = "20% 0%";
    right_hand.style.transition = "1.5s";
    setTimeout(function(){
        right_hand.style.transform = "rotate(0deg)";
    },600);
}

left_hand.onclick = function(){
    left_hand.style.transform = "rotate(180deg)";
    left_hand.style.transformOrigin = "80% 0%";
    left_hand.style.transition = "1.5s";
    setTimeout(function(){
        left_hand.style.transform = "rotate(0deg)";
    },600)
}