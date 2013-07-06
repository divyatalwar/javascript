function displaychild(val)
{
  var name = val.id + "group";        
  var list = document.getElementById(name);              //gets the ul element             
  var listcontent = document.getElementsByName(name);    //gets each of li element under ul i.e.checkboxes under each of color,bikes ,drinks 
  //this loop checks if the outer checkbox is checked.if yes then contents are displayed and checkboxes belonging to the sublist are checked 
  if (val.checked === true) {
    list.style.display = "block";
    for (i = 0; i< listcontent.length; i++) {
      listcontent[i].checked = true;
    }
    //this ensures that the scroll is adjusted according to the checked boxes.no need to move up/down to view the checked ones.    
    val.scrollIntoView(true);
  }
  //if the chechbox is unchecked then the list corresponding to it is hidden.  
  else { 
    list.style.display = "none";
    for (i=0;i< listcontent.length;i++)
    listcontent[i].checked = false;
  }
}
