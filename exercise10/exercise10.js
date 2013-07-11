// object oriented approach
var patterns = {
  regexNumber : /^(([\-]{1})?[\d]+(\.[\d]+)?)$/ 
};
function NumberValidation(value) {
  // obtaining the id of the form
  this.form = document.getElementById(value);
  this.checkNumber = function (e) {
    
    if(patterns.regexNumber.test(document.getElementById("number").value)) {
      document.getElementById("result").value = 'true';
      alert("input is a valid number");
    }
    else {
      document.getElementById("result").value = 'false';
      e.preventDefault();
      alert("input is not a valid number");
    }
  }
  this.form.addEventListener("submit", this.checkNumber , false);
}

var numericTest = new NumberValidation('formTest');
