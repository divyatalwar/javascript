// object oriented approach
function validate(value) {
  // form id 
  this.form = document.getElementById(value);
  this.checkURLValidation = function (e) {
  var regexUrl = /^((http|https|ftp):\/\/)?(w{3}\.)?((\w+\.)*)([a-zA-Z]+\.[a-z]{2,4})([/])?([\w%-]+)?([/?][\w%.])?([\w\-\.,@?^=%&amp;:~\+#]*)$/i;
   url = document.getElementById("url").value;
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
  this.form.addEventListener("submit", this.checkURLValidation ,false);
}
var URLTest = new validate('formTest');
