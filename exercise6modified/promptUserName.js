function userNameValidation(value)
{
  var name = prompt("Enter your " + value + " name");
  if (name == "" || (name.trim(' ').length == 0)) {
    alert("Please enter a valid " + value + "name" );
    return userNameValidation(value);
  }
  return name;                            // name if empty string whem converted to boolean for comparison yields false otherwise true
}
function promptName() {
  firstName = userNameValidation("First");
  lastName = userNameValidation("Last");
  message = "Hello " + firstName + " " + lastName;
  alert(message);
  //create a div element and append it to the body
  content = document.createElement("div");
  content.appendChild(document.createTextNode(message));
  document.body.appendChild(content);
}
