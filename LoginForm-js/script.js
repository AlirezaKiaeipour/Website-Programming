let dark_mode = document.getElementById("dark_mode");
let input_text = document.getElementsByTagName("input");
let form = document.getElementById("form");
let single = document.getElementById("single");
let married = document.getElementById("married");
let spouse_textbox = document.getElementById("spouse_textbox");
let checkbox_child = document.getElementById("checkbox_child");
let childs = document.getElementById("childs");
let div_child = document.getElementById("children");

function darkmode(){
    if (dark_mode.checked==true){
        form.style.backgroundColor = "#242526";
        form.style.color = "white";
        for (let i=1;i<4;i++){
            input_text[i].style.backgroundColor = "#3a3b3c";
            input_text[i].style.color = "white";
        }
    }
    else{
        form.style.backgroundColor = "coral";
        form.style.color = "#3a3d42";
        for (let i=1;i<4;i++){
            input_text[i].style.backgroundColor = "white";
            input_text[i].style.color = "#3a3d42";
        }
    }
}

function register(){
    form.style.display = "inline-block";
}

function radio_spouse(){
    if (married.checked==true){
        spouse_textbox.style.display = "block";
    }
    else if (single.checked==true){
        spouse_textbox.style.display = "none";
    }
}

function child(){
    if (checkbox_child.checked==true){
        childs.style.display = "block";
    }
    else{
        childs.style.display = "none";
    }
}

function add_child(){
    let input_child = document.createElement("INPUT");
    input_child.type = "text";
    div_child.append(input_child);
}

function delete_child(){
    div_child.removeChild(div_child.lastElementChild);
}
