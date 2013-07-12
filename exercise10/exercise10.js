// object oriented approach

function NumberValidation(value) {
  // obtaining the id of the form
  this.form = document.getElementById(value);
  this.checkNumber = function (e) {
    var regexNumber = /^(([\-\+]{1})?[\d]*(\.[\d]+)?)$/;
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
  this.form.addEventListener("submit", this.checkNumber , false);
}

var numericTest = new NumberValidation('formTest');
