register = document.getElementById("registrationform");
var formElement = {
  text_area : document.getElementById("text_area"),
  checkbox : document.getElementById("check"),
};

//adding event handler for submit button
register.addEventListener("submit" ,formvalidation);

function formvalidation(e) {
  // a flag variable to check the validity of the fields
  var flag = false;
  var element = document.getElementsByClassName("inputvalue");
  for (var i = 0; i < element.length; i++) {
    var text = element[i].value.trim(' ');        //to remove any leading or trailing white spaces
    if(text === "") {
      alert(element[i].id + " cant be left empty");
      flag = true;
      break;
    }
  }
  //validate text area field
  if (formElement.text_area.value.trim(' ').length < 50 & flag == false) {
    alert(" ABOUT ME information is not complete: it should be minimum 50 characters");
    flag = true;
    
  }  
  //confirm checkbox notification
  if (check.checked) {
      textstring = "want";
  } 
  else {
       textstring = "dont want";
  }
  if (! flag) {
    if (confirm("Are you sure you " + textstring + " to receive any notificiaction")) {
    } 
    else {
     flag = true;
    }
  }
  //if any of the field is invalid prevent it from submitting. 
  if (flag)
  {
  e.preventDefault();
  }  
}
