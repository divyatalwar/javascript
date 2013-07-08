var formelement ={
  register : document.getElementById("registrationform"),
  login : document.getElementById("login"),
  email : document.getElementById("email"),
  name : document.getElementById("name"),
  homepage : document.getElementById("homepage"),
  text_area : document.getElementById("text_area"),
  checkbox : document.getElementById("check"),
};
//adding event handler for submit button
formelement.register.addEventListener("submit" ,formvalidation);
function formvalidation(e)
{ // a variable count to check if any of the fields is invalid it should prevent the form from submitting else submit the form if it is still zero.
  count = 0;
  //validate login field
  if (formelement.login.value=="") {
    alert("login Id cant be left empty");
    count += 1;
  }
  //validate email field
  else if (formelement.email.value=="") {
    alert("email field cant be left empty");
    count += 1;
  }
  //validate name field
  else if (formelement.name.value=="") {
    alert("name cant be left empty");
    count += 1;
  }
  //validate home page field
  else if (formelement.homepage.value=="") {
    alert("homepage cant be left empty");
    count += 1;
  }
  //validate text area field
  else if (formelement.text_area.value.length < 50) {
    alert(" ABOUT ME information is not complete: should be minimum 50 characters");
    count += 1;
  }  
  //confirm checkbox notification
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
  //if any of the field is invalid(count incremented) prevent it from submitting. 
  if (count>0)
  {
  e.preventDefault();
  }  
}
