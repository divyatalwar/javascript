function redirecturl() {
  var bool = true;   
  while (bool) {
    var url = prompt("Please enter URL ", "");
    if (url.length == 0) 
      alert("please enter a valid URL");
    else {
      window.open(url, "_blank","fullscreen=yes ,resizable=no, height=450px ,width=400px, scrollbars=no, status=no");
      bool = !bool;
    }
  }
}
