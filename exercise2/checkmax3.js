var selectedValue = [];
// function to check the limit on the number of checkboxes selected.if user selects more than three an alert message is displayed
function limitCheck(val) {
  var checkNone = document.getElementById("none");
  if (checkNone.checked === true) {
      checkNone.checked = false;       //to uncheck the "none" element
  }
  if (val.checked === true) {
    // this loop adds the elements to the array if it is checked.only after checking the value of selectedValue.length.       
    if (selectedValue.length >= 3) {
      val.checked = false;
      alert("Only three days can be selected.You have already selected " + selectedValue[0].value + " , " + selectedValue[1].value + " and " + selectedValue[2].value);
    }else {
        selectedValue.length = selectedValue.length;
        selectedValue.push(val);
     }
  }
  else {
        // if the user after checking the checkbox unchecks it.the element added to the array is removed and selectedValue.length is decremented.
        var index = selectedValue.indexOf(val);
        selectedValue.splice(index, 1);
  }
}

// this function unchecks all the chechboxes after selecting none.
function selectNone() {
  var uncheck = document.getElementsByName("days");
  for (var j = 0;j < uncheck.length;j++) {
    uncheck[j].checked = false;
   } 
  selectedValue = []; 
}
