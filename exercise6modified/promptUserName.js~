function userNameValidation(value)
{
  var name = prompt("Enter your " + value + " name").trim();
  if (!name) {
    alert("Please enter a valid " + value + " name" );
    return userNameValidation(value);
  }
  return name;                        
}

function promptName() {
  var firstName = userNameValidation("First");
  var lastName = userNameValidation("Last");
  var message = "Hello " + firstName + " " + lastName;
  alert(message);
  //create a div element and append it to the body
  var content = document.createElement("div");
  var contentText = document.createTextNode(message);
  content.appendChild(contentText);
  document.body.appendChild(content);
}
