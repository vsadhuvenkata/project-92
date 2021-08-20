player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn"+ player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn"+ player2_name;

function send(){
number1 = document.getElementById("number_1").value;
number2 = document.getElementById("number_2").value;
actual_answer = parseInt(number1) * parseInt(number2);
question_word = "<h4 id='word_disply'>"+ number1+"X "+ number2+ "</h4>";
input_box = "<br> Answer : <input type='text' id='input_checkbox'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number_1").value = "";
document.getElementById("number_2").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("Answer In Lower Case is -" + answer);
    if(answer==word){
        if(answer_turn=="player_1"){
          player_1_score = player_1_score+1;
          document.getElementById("player1_score").innerHTML = player_1_score;
        }else{
            player_2_score = player_2_score+1;
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
        
    }
    if(question_turn=="player_1"){
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn - "+ player_2_name;
    }else{
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn - "+ player_1_name;
    }
    if(answer_turn=="player_1"){
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+ player_2_name;
    }else{
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+ player_1_name;
    }
    document.getElementById("output").innerHTML = "";
}

function update_score(){
    localStorage.setItem("player_1_score",player1_score);
    localStorage.setItem("player_2_score",player2_score);
}