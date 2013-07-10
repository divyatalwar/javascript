var form = {
  register : document.getElementById("registrationform"),
  text_area : document.getElementById("text_area"),
  checkbox : document.getElementById("check"),
};

function validate(form)
{
  this.form = form;
  this.formvalidation = function(e) { 
    var regexemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/; 
    var regexurl = /((http|ftp|https):\/\/)?(w{3}\.)?([a-zA-Z]+\.)+([a-zA-Z0-9]{2,4})+[/]?([\w\-\.,@?^=%&amp;:~\+#])+$/;
    // a flag variable to check the validity of the fields
    var flag = false;
    var element = document.getElementsByClassName("inputvalue");
    for (var i=0;i < element.length; i++) {
      var text = element[i].value.trim(' ');        //to remove any leading or trailing white spaces
      if(text == "") {
        alert(element[i].id + " cant be left empty");
        flag = true;
        break;
      }
    }
    //validate text area field
    if (form.text_area.value.trim(' ').length < 50 & flag == false) {
      alert(" ABOUT ME information is not complete: it should be minimum 50 characters");
      flag = true;
    }  
    //validating if the user has entered the correct mail or not
    var email = document.getElementById("email"); 
    if(!regexemail.test(email.value) & flag == false) {
      alert("please enter a valid email");
      flag = true; 
    } 
    //validating if the user has entered the corrext url or not
    var homepage = document.getElementById("homepage"); 
    if(!regexurl.test(homepage.value) & flag == false) {
      alert("please enter a valid url");
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
      if (confirm ("Are you sure you " + textstring + " to receive any notificiaction")) {
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
  this.form.register.addEventListener("submit" ,this.formvalidation, false);
}
var regexvalidation = new validate(form);
