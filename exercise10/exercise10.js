// object oriented approach
function validate(value) {
  // form id 
  this.form = document.getElementById(value);
  this.checkNumberValidation = function (e) {
    var regexNumber = /^[\d]+$/;
    if(regexNumber.test(document.getElementById("number").value)) {
      document.getElementById("result").value = 'true';
      alert("input is a valid number");
    }
    else {
      document.getElementById("result").value = 'false';
      e.preventDefault();
      alert("input is not a valid number");
    }
  }
  this.form.addEventListener("submit", this.checkNumberValidation ,false);
}

var numericTest = new validate('formTest');
