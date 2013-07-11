// object oriented approach
function URLValidation(value) {
  // obtaining the form id 
  this.form = document.getElementById(value);
  this.checkURL = function (e) {
  regexUrl = /^((http|https|ftp):\/\/)?(w{3}\.)?((\w+\.)*)([a-zA-Z]+\.[a-z]{2,4})([/])?([\w%-]+)?([/?][\w%.])?([\w\-\.,@?^=%&amp;:~\+#]*)$/i;
  url = document.getElementById("url").value;
  //testing if the URL matches the above pattern 
  if (regexUrl.test(url)) {
    domain = RegExp.$6;
    subDomain = RegExp.$4.replace(/\.$/,"");
      if (subDomain === "") {
        alert("domain :" + " " +  domain);
        e.preventDefault();
      } else {
        alert("domain : " + " " + domain + " " +  " subdomain : " + " " + subDomain); 
        e.preventDefault();   
        }
    }
    else {
      alert("please enter a valid URL");
      e.preventDefault();
    }
  }
  //adding an event listener for the submit button
  this.form.addEventListener("submit", this.checkURL , false);
}
var URLTest = new URLValidation('formTest');
