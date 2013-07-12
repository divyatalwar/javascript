var form = {
  register : document.getElementById("registrationform"),
  text_area : document.getElementById("text_area"),
  checkbox : document.getElementById("check"),
  email : document.getElementById("email"), 
  homepage : document.getElementById("homepage"),
};
var patterns = {
  regexemail : /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/, 
  regexurl : /((http|ftp|https):\/\/)?(w{3}\.)?([a-zA-Z]+\.)+([a-zA-Z0-9]{2,4})+[/]?([\w\-\.,@?^=%&amp;:~\+#])+$/,
};

// function to check email and url validation
function patternMatch(pattern , elementToValidate )
{
  if (!pattern.test(elementToValidate.value) & flag == false) {
    alert(elementToValidate.id + " is invalid. pls check");
    flag = true; 
  }
}

function FormValidation(form)
{
  this.form = form;
  this.validate = function(e) {    
    // a flag variable to check the validity of the fields
    flag = false;
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
    patternMatch(patterns.regexemail, form.email);                                             //function calling for validating mail
    patternMatch(patterns.regexurl, form.homepage);                                            //function calling for validating url
    //confirm checkbox notification
    if (form.checkbox.checked) {
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
  this.form.register.addEventListener("submit" ,this.validate, false);
}
var regexvalidation = new FormValidation(form);
