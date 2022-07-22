const text_box = document.getElementById("text_box");
const btn_0 = document.getElementById("btn_0");
const btn_1 = document.getElementById("btn_1");
const btn_2 = document.getElementById("btn_2");
const btn_3 = document.getElementById("btn_3");
const btn_4 = document.getElementById("btn_4");
const btn_5 = document.getElementById("btn_5");
const btn_6 = document.getElementById("btn_6");
const btn_7 = document.getElementById("btn_7");
const btn_8 = document.getElementById("btn_8");
const btn_9 = document.getElementById("btn_9");
const btn_ac = document.getElementById("btn_ac");
const btn_pm = document.getElementById("btn_pm");
const btn_mod = document.getElementById("btn_mod");
const btn_div = document.getElementById("btn_div");
const btn_mul = document.getElementById("btn_mul");
const btn_sub = document.getElementById("btn_sub");
const btn_plus = document.getElementById("btn_plus");
const btn_equal = document.getElementById("btn_equal");
const btn_dot = document.getElementById("btn_dot");
let op,num1,num2;

btn_0.onclick = function(){
    text_box.value += "0";
}

btn_1.onclick = function(){
    text_box.value += "1";
}

btn_2.onclick = function(){
    text_box.value += "2";
}

btn_3.onclick = function(){
    text_box.value += "3";
}

btn_4.onclick = function(){
    text_box.value += "4";
}

btn_5.onclick = function(){
    text_box.value += "5"
}

btn_6.onclick = function(){
    text_box.value += "6"
}

btn_7.onclick = function(){
    text_box.value += "7"
}

btn_8.onclick = function(){
    text_box.value += "8"
}

btn_9.onclick = function(){
    text_box.value += "9"
}

btn_plus.onclick = function(){
    op = "+";
    num1 = parseFloat(text_box.value);
    text_box.value = "";
}

btn_sub.onclick = function(){
    op = "-";
    num1 = parseFloat(text_box.value);
    text_box.value = ""
}

btn_mul.onclick = function(){
    op = "*";
    num1 = parseFloat(text_box.value);
    text_box.value = ""
}

btn_div.onclick = function(){
    op = "/";
    num1 = parseFloat(text_box.value);
    text_box.value = ""
}

btn_mod.onclick = function(){
    op = "%";
    num1 = parseFloat(text_box.value);
    text_box.value = ""
}

btn_pm.onclick = function(){
    num1 = parseFloat(text_box.value);
    text_box.value = -1 * parseFloat(text_box.value);
}

btn_ac.onclick = function(){
    text_box.value = ""
}

btn_dot.onclick = function(){
    text_box.value = text_box.value + "."
}

btn_equal.onclick = function(){
    if (op=="+"){
        num2 = parseFloat(text_box.value);
        text_box.value = num1 + num2;
    }
    else if (op=="-"){
        num2 = parseFloat(text_box.value);
        text_box.value = num1 - num2;
    }
    else if (op=="*"){
        num2 = parseFloat(text_box.value);
        text_box.value = num1 * num2;
    }
    else if (op=="/"){
        num2 = parseFloat(text_box.value);
        text_box.value = num1 / num2;
    }
    else if (op=="%"){
        num2 = parseFloat(text_box.value);
        text_box.value = num1 % num2;
    }  
}