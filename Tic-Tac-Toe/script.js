let cells = document.getElementsByClassName("cell");
let score_player1 = document.getElementById("score_player1");
let score_player2 = document.getElementById("score_player2");
let score_draw = document.getElementById("score_draw");
let banner = document.getElementById("banner");
let radio_player = document.getElementById("radio_player");
let radio_cpu = document.getElementById("radio_cpu");
let win_player1 = 0;
let draw = 0;
let win_player2 = 0;
let num1,num2;

let buttons = [[cells[0],cells[1],cells[2]],
                [cells[3],cells[4],cells[5]],
                [cells[6],cells[7],cells[8]]];
let player = "X";

function btn_index(x,y){
    if (radio_player.checked==true){
        if (buttons[x][y].innerHTML==""){
            if (player=="X"){
                buttons[x][y].style.backgroundColor = "#63c132";
                buttons[x][y].style.color = "green";
                buttons[x][y].innerHTML = player;
                player = "O";
            }
            else if(player=="O"){
                buttons[x][y].style.backgroundColor = "#ff6978";
                buttons[x][y].style.color = "#ff0035";
                buttons[x][y].innerHTML = player;
                player = "X";
            }
        }
        check_game()
    }

    else if (radio_cpu.checked==true){
        if (buttons[x][y].innerHTML==""){
            if (player=="X"){
                buttons[x][y].style.backgroundColor = "#63c132";
                buttons[x][y].style.color = "green";
                buttons[x][y].innerHTML = player;

                for (let i=0;i<3;i++){
                    for (let j=0;j<3;j++){
                        if (buttons[i][j].innerHTML==""){
                            player = "O";
                            break
                        }
                    }
                }

                if (player=="O"){
                    while(true){
                        num1 = getRandomInt(3);
                        num2 = getRandomInt(3);
                        if (buttons[num1][num2].innerHTML==""){
                            buttons[num1][num2].style.backgroundColor = "#ff6978";
                            buttons[num1][num2].style.color = "#ff0035";
                            buttons[num1][num2].innerHTML = player;
                            player = "X";
                            break
                        }
                    }
                }
                
            }
        }
        check_game()
    }

}
    
function check_game(){
    for (let i=0;i<3;i++){
        if (buttons[i][0].innerHTML=="X" && buttons[i][1].innerHTML=="X" && buttons[i][2].innerHTML=="X"){
            show_winner("Player 1 won");
            win_player1++;
            score_player1.innerHTML = win_player1;
        }
        else if (buttons[i][0].innerHTML=="O" && buttons[i][1].innerHTML=="O" && buttons[i][2].innerHTML=="O"){
            show_winner("Player 2 won");
            win_player2++;
            score_player2.innerHTML = win_player2;
        }
        else if (buttons[0][i].innerHTML=="X" && buttons[1][i].innerHTML=="X" && buttons[2][i].innerHTML=="X"){
            show_winner("Player 1 won");
            win_player1++;
            score_player1.innerHTML = win_player1;
        }
        else if (buttons[0][i].innerHTML=="O" && buttons[1][i].innerHTML=="O" && buttons[2][i].innerHTML=="O"){
            show_winner("Player 2 won");
            win_player2++;
            score_player2.innerHTML = win_player2;
        }
    }

    if (buttons[0][0].innerHTML=="X" && buttons[1][1].innerHTML=="X" && buttons[2][2].innerHTML=="X"){
        show_winner("Player 1 won");
        win_player1++;
        score_player1.innerHTML = win_player1;
    }

    else if (buttons[0][0].innerHTML=="O" && buttons[1][1].innerHTML=="O" && buttons[2][2].innerHTML=="O"){
        show_winner("Player 2 won");
        win_player2++;
        score_player2.innerHTML = win_player2;
    }

    else if (buttons[0][2].innerHTML=="X" && buttons[1][1].innerHTML=="X" && buttons[2][0].innerHTML=="X"){
        show_winner("Player 1 won");
        win_player1++;
        score_player1.innerHTML = win_player1;
    }

    else if (buttons[0][2].innerHTML=="O" && buttons[1][1].innerHTML=="O" && buttons[2][0].innerHTML=="O"){
        show_winner("Player 2 won");
        win_player2++;
        score_player2.innerHTML = win_player2;
    }

    else if (buttons[0][0].innerHTML!="" && buttons[0][1].innerHTML!="" && buttons[0][2].innerHTML!="" && 
    buttons[1][0].innerHTML!="" && buttons[1][1].innerHTML!="" && buttons[1][2].innerHTML!="" && 
    buttons[2][0].innerHTML!="" && buttons[2][1].innerHTML!="" && buttons[2][2].innerHTML!=""){
        show_winner("The Game is Draw");
        draw++;
        score_draw.innerHTML = draw;
    }
    
}

function reset(){
    for (let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            buttons[i][j].innerHTML = "";
            buttons[i][j].style.backgroundColor = "rgba(211, 211, 211, 0.5)";
        }
    }
    show_winner("")
}

function show_winner(text){
    banner.innerHTML = text;
    banner.style.color = "darkblue";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }