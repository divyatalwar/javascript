//a function to check or uncheck all checkboxes depending upon the boolean value passed
function checkAllOrNone(val) {
    var checkbox = document.getElementsByName("colors"), i; 
    for (i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = val;
        return false;
    }
}
