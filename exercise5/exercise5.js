var formelement ={
  register : document.getElementById("registrationform"),
  login : document.getElementById("login"),
  email : document.getElementById("email"),
  name : document.getElementById("name"),
  homepage : document.getElementById("homepage"),
  text_area : document.getElementById("text_area"),
  checkbox : document.getElementById("check"),
};

formelement.register.addEventListener("submit" ,formvalidation);
function formvalidation(e)
{
  count = 0;
  if (formelement.login.value=="") {
    alert("login Id cant be left empty");
    count += 1;
  }
  else if (formelement.email.value=="") {
    alert("please enter correct email");
    count += 1;
  }
  else if (formelement.name.value=="") {
    alert("name cant be left empty");
    count += 1;
  }
  else if (formelement.homepage.value=="") {
    alert("homepage cant be left empty");
    count += 1;
  }
  else if (formelement.text_area.value.length < 50) {
    alert("information is not complete: should be minimum 50 characters");
    count += 1;
  }  
  if (check.checked) {
      textstring = "want";
  } 
  else {
       textstring = "dont want";
    }
  if (count==0 ){
    if (confirm("Are you sure you " + textstring + " to receive any notificiaction")) {
      } 
  else {
     count+=1;
       }
  }
  if (count>0)
  {
  e.preventDefault();
  }  
}
