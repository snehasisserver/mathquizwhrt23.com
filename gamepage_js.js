player_1_name = localStorage.getItem("player1");
player_2_name = localStorage.getItem("player2");

player_1score = 0;
player_2score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";

document.getElementById("player1_score").innerHTML = player_1score;
document.getElementById("player2_score").innerHTML = player_2score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name ;

function send(){
    number1var = document.getElementById("num1").value;
    number2var = document.getElementById("num2").value;
    actual_answervar =parseInt(number1var) * parseInt(number2var);
    
    question_numbervar = "<h4>" + number1var + " X " + number2var + "<h4>";
    input_boxvar = "<br>Answer : <input type='number' id='input_text_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick = 'check()'>Check</button>";
    
    row = question_numbervar + input_boxvar + check_button;
    document.getElementById("output").innerHTML= row;
    
}