function usernamevalidation(value)
{
  // a boolean variable to check if the user has entered the valid name else prompts the window again and again
  var bool = true;                
  // loop that runs till the user enters a valid name
  while (bool == true) {
    var name = prompt("enter your " + value + " name");
    
    bool = !bool;
    // checks if there are a few white spaces or name is blank
    if (name == "" || (name.trim(' ').length==0)) {
      alert("please enter a valid " + value + "name" );
      bool = !bool;
    }
  }
  return name;
}

function promptname() {
  firstname = usernamevalidation("first");
  lastname = usernamevalidation("last");
  message = "hello " + firstname + " " + lastname;
  alert(message);
  //create a div element and append it to the body
  content = document.createElement("div");
  content.appendChild(document.createTextNode(message));
  document.body.appendChild(content);
}
