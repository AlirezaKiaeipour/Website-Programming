var btn_dark = document.getElementById("dark_mode");
var btn_light = document.getElementById("light_mode");
var body = document.body;
var footer = document.getElementsByTagName("footer");
var footer_center_section = document.getElementsByClassName("footer_center_section");
var tagh5 = document.getElementsByTagName("h5");
var tagh1 = document.getElementsByTagName("h1");
var tagh2 = document.getElementsByTagName("h2");
var tagp = document.getElementsByTagName("p");
var app_row = document.getElementById("app_row");
var business_row = document.getElementById("business_row");

btn_dark.onclick = function(){
    body.style.backgroundColor = "#242526";
    app_row.style.backgroundColor = "#3a3b3c";
    business_row.style.backgroundColor = "#3a3b3c";
    footer[0].style.backgroundColor = "#3a3b3c";
    tagh1[1].style.color = "white";
    tagh1[2].style.color = "white";
    tagh2[1].style.color = "white";
    tagh5[0].style.color = "white";

    for (let i = 0; i < tagp.length;i++){
        tagp[i].style.color = "white";
    }
    for (let i = 0; i < footer_center_section.length; i++){
        footer_center_section[i].style.color = "white";
    }
}

btn_light.onclick = function(){
    body.style.backgroundColor = "white";
    app_row.style.backgroundColor = "rgb(235, 237, 240)";
    business_row.style.backgroundColor = "rgba(235, 237, 240, 0.5)";
    footer[0].style.backgroundColor = "#F9FAFB";
    tagh1[1].style.color = "#343d42";
    tagh1[2].style.color = "#343d42";
    tagh2[1].style.color = "#53565c";
    tagh5[0].style.color = "#53565c";

    for (let i = 0; i < tagp.length;i++){
        tagp[i].style.color = "#53565c";
    }
    for (let i = 0; i < footer_center_section.length; i++){
        footer_center_section[i].style.color = "#53565c";
    }
}