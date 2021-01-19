function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    real_answer = parseInt("number1") * parseInt("number2")
    question_number="<h4>" + number1 + " x " + number2 + "</h4>" ;
    text_input="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'>CHECK</button>";
    div=question_number+text_input+check_button;
    document.getElementById("output").innerHTML=div;
 }
