//function that is called when the user clicks on the start quiz button
function startQuiz() {
  no_of_questions = 0;
  operators = ["+", "-", "/","*"];
  rightAnswers = 0;
  answer = 0;
  incorrectAnswers = [];
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("inner").style.visibility = "visible";
  generateQuestion();
}
//function thta calculates the answers
function calculateResult(index) {
  switch (index) {
    case 0:
        answer = operand1 + operand2;
        break;
    case 1:
        answer = operand1 - operand2;
        break;
    case 2:
        answer = operand1 / operand2;
        answer = Math.round(answer);   
        break;
    case 3:
        answer = operand1 * operand2;
        break;
  }
  userInput = parseFloat(document.getElementById("input_entered").value);
  calculation =  "Question no : " + no_of_questions + " ( "+ operand1 + operators[index] + operand2 + " ) " + " = " + answer + "<br><br>";
    if (userInput == answer) {
        rightAnswers++;
    } else {
     incorrectAnswers.push(calculation);
    }
  document.getElementById("score").innerHTML = "<br>your score is: " + rightAnswers; 
}
//function that generates questions randomly
function generateQuestion() {
  if (no_of_questions < 20) {
    timeleft = 10;
    no_of_questions ++;
    operand1 = Math.floor(Math.random()*20 +1);
    operand2 = Math.floor(Math.random()*20 +1);
    index = Math.floor(Math.random()*3 +0);
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("timer").style.visibility = "visible";
    document.getElementById("quesno").innerHTML = "<p> Question no : " + no_of_questions + "</p>";
    value = operand1 + " " +operators[index] + " "+operand2;
    ques = document.getElementById("ques");
    content = document.createElement("div");
    content.appendChild(document.createTextNode(value));
    ques.appendChild(content);
    setTimer();
  } 
  else {
    document.getElementById("inner").innerHTML = "<p>" + "" +"</p>";
    document.getElementById("finalscore").innerHTML = "You have attempted " + rightAnswers + " right Answers" + " <br> Corrected Answers:-     <br><br>" + incorrectAnswers.join(' ');
    return false;
  }
}
//function that executes if the user clicks on the submit button to finish the test
function finishTest() {
  if (confirm("are you sure u want to finish the test ")) {
    calculateResult(index);
    no_of_questions = 20;
    generateQuestion();
    clearTimeout(myTimer);
  }
}
//function to generate question once user clicks on the next button
function nextQuestion() {
  document.getElementById("ques").innerHTML = "<p>" + "" +"</p>";
  calculateResult(index);
  document.getElementById("input_entered").value = "";
  clearTimeout(myTimer);
  generateQuestion();
}
//function to generate timer
function setTimer() {
  myTimer = setTimeout(setTimer, 1000);
  document.getElementById("timer").innerHTML = "<p> time left : " + timeleft-- +"secs";
  if (timeleft == 0) {
    alert("timeout! Please try next question");
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("timer").style.visibility = "hidden";
  }
}
