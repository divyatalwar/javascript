//function that is called when the user clicks on the start quiz button
function Quiz ()
{

  this.submit = document.getElementById("submit");
  this.next = document.getElementById("next");
  this.startnow = document.getElementById("startnow");
  this.no_of_questions = 0;
  this.operators = ["+", "-", "/","*"];
  this.rightAnswers = 0;
  this.answer = 0;
  this.incorrectAnswers = [];
  quiz = this;
  this.jsonArray = [];
  this.startQuiz = function () {
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("inner").style.visibility = "visible";
  quiz.generateQuestion(); 
  }
  this.calculateResult = function(index) {
    switch (index) {
      case 0:
          quiz.answer = operand1 + operand2;
          break;
      case 1:
          quiz.answer = operand1 - operand2;
          break;
      case 2:
          quiz.answer = operand1 / operand2;
          quiz.answer = Math.round(quiz.answer);   
          break;
      case 3:
          quiz.answer = operand1 * operand2;
          break;
     }
    return quiz.answer;
  }
  this.generateQuestion = function() {
    for(no_of_questions = 0; no_of_questions< 20 ; no_of_questions++) { // if (quiz.no_of_questions < 20) {
      quiz.no_of_questions ++;
      operand1 = Math.floor(Math.random()*20 +1);
      operand2 = Math.floor(Math.random()*20 +1);
      index = Math.floor(Math.random()*3 +0);
      operator = quiz.operators[index];
      document.getElementById("result").style.visibility = "visible";
      document.getElementById("timer").style.visibility = "visible";
      result = quiz.calculateResult(index);
      quiz.jsonArray.push({"operand1": operand1, "operand2": operand2, "operator": operator, "result": result}); 
  } 
    questionNumber = 0;
    quiz.displayQuestion();
}

this.displayQuestion = function() {
  questionNumber = questionNumber + 1;
  if(questionNumber >20) {
    document.getElementById("inner").innerHTML = "<p>" + "" +"</p>";
    document.getElementById("finalscore").innerHTML = "You have attempted " + quiz.rightAnswers + " right Answers" + " <br> Corrected Answers:-     <br><br>" + quiz.incorrectAnswers.join(' ');
    return false;
  }
  timeleft = 10;
  quiz.setTimer();
  document.getElementById("quesno").innerHTML = "<p> Question no : " + questionNumber + "</p>";
  value =  quiz.jsonArray[questionNumber-1].operand1 + " " + quiz.jsonArray[questionNumber-1].operator + " " + quiz.jsonArray[questionNumber-1].operand2;
  var ques = document.getElementById("ques");
  var content = document.createElement("div");
  content.appendChild(document.createTextNode(value));
  ques.appendChild(content);
}
this.calculateScore = function(question) {
  var userInput = parseFloat(document.getElementById("input_entered").value);
  var calculation =  "Question no : " + question + " ( "+  quiz.jsonArray[question-1].operand1 + " " + quiz.jsonArray[question-1].operator + " " + quiz.jsonArray[question-1].operand2+ " ) " + " = " + quiz.jsonArray[question-1].result + "<br><br>";
  if (parseFloat(quiz.jsonArray[question-1].result) == userInput) {
    quiz.rightAnswers++;
  } else {
    quiz.incorrectAnswers.push(calculation);
    }
  document.getElementById("score").innerHTML = "<br>your score is: " + quiz.rightAnswers;
}
//function to generate question once user clicks on the next button
this.nextQuestion = function() {
  document.getElementById("ques").innerHTML = "<p>" + "" +"</p>";
  quiz.calculateScore(questionNumber);
  document.getElementById("input_entered").value = "";
  clearTimeout(myTimer);
  quiz.displayQuestion();
}
//function to generate timer
this.setTimer=function () {
  myTimer = setTimeout(quiz.setTimer, 1000);
  document.getElementById("timer").innerHTML = "<p> time left : " + timeleft-- +"secs";
  if (timeleft == 0) {
    alert("timeout! Please try next question");
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("timer").style.visibility = "hidden";
  }
}
  this.next.addEventListener("click" , this.nextQuestion ,false);
  this.startnow.addEventListener("click", this.startQuiz ,false);
}
var quizz = new Quiz ();

