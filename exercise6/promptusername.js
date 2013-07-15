function userNameValidation(value)
{
  do {
    var name = prompt("enter your " + value + " name");
    if (name == "" || (name.trim(' ').length==0)) {
      alert("please enter a valid " + value + "name" );
    }
  }while(name == false);
  return name;                                  // name if empty string whem converted to boolean for comparison yields false otherwise true
}

function promptName() {
  firstName = userNameValidation("first");
  lastName = userNameValidation("last");
  message = "hello " + firstName + " " + lastName;
  alert(message);
  //create a div element and append it to the body
  content = document.createElement("div");
  content.appendChild(document.createTextNode(message));
  document.body.appendChild(content);
}
