function checkallornone(val) {
    var checkbox = document.getElementsByName("check"), i; 
    for (i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = val;
    }
}
