function usernamevalidation()
{
  // a boolean variable to check if the user has entered the valid name else prompts the window again and again
  var bool = true;                
  // loop that runs till the user enters a valid firstname
  while (bool == true) {
    var firstname = prompt("enter your first name");
    bool = !bool;
    // checks if there is a space between any of the entered letters or firstname is  blank
    if (firstname == "" || firstname.match(' ')) {
      alert("please enter a valid first name");
      bool = !bool;
    }
  }
  //when the firstname is entered correctly
  while (bool == false) {
    bool = !bool;
    var lastname = prompt("enter your last name");
    if(lastname == "" || lastname.match(' ')) {
      alert("please enter a valid last name");
      bool = !bool;
    }
  }
  message = "hello " + firstname + " " + lastname;
  alert(message);
  //create a div element and append it to the body
  content = document.createElement("div");
  content.appendChild(document.createTextNode(message));
  document.body.appendChild(content);
}
