// a variable to assign unique id to each row
var count = 0;
//add or edit function to preform the desire functions
function addOrEditRow(bool,id)
{ 
  var table = document.getElementById("tableid");
  var rowNum = table.rows.length;
  //assigning id to each row
  var rowid = "arr" + rowNum + count;
  var row = table.insertRow(rowNum);
  row.setAttribute("id", rowid);
  var name = document.createElement("input");
  name.setAttribute("type", "text");
  var email = document.createElement("input");
  email.setAttribute("type","email");
  var save = document.createElement("input");
  save.setAttribute("type","button");
  save.setAttribute("value","save");
  count = count + 1;
  // a boolean variable to check if the user wants to add a row or edit the existing row
  if(bool == false) {
    // row insertion  
    row.insertCell(0);
    column1id = "name_" + rowid;
    name.setAttribute("id", "name" + rowid);
    row.cells[0].setAttribute("id", column1id);
    row.cells[0].appendChild(name);
    row.insertCell(1);
    column2id = "email_"+ rowid;
    email.setAttribute("id", "email" + rowid);
    row.cells[1].appendChild(email);
    row.cells[1].setAttribute("id", column2id);
    row.insertCell(2);
    column3id = "action_"+ rowid;  
    save.setAttribute("id", "action" + rowid);
    row.cells[2].appendChild(save);
    row.cells[2].setAttribute("id", column3id);    
    save.setAttribute("onclick", "saveRow(\""+rowid+"\")");
}
  else
  {
    var rows = document.getElementById(id);
    oname = document.getElementById("name_"+ id).textContent;
    oemail = document.getElementById("email_"+ id).textContent;
    savedName = document.getElementById("name" + id);
    savedEmail = document.getElementById("email"+ id);
    savedLink = document.getElementById("action"+ id);
    name.setAttribute("id", "name"+ id);
    email.setAttribute("id", "email"+ id);
    save.setAttribute("id", "action" + id);
    save.setAttribute("onclick", "saveRow(\""+id+"\")");
    name.setAttribute("value", oname);
    email.setAttribute("value", oemail);
    // replace the textnodes with the previously occupying textboxes
    document.getElementById("name_"+id).replaceChild(name, savedName);
    document.getElementById("email_"+id).replaceChild(email, savedEmail);
    document.getElementById("action_"+id).replaceChild(save, savedLink);
  } 
}

// a function to save the changes made while editing or adding a new row
function saveRow(id)
{
  rows = document.getElementById(id);
  oldName = document.getElementById("name"+ id);
  newName =  document.createElement("div");
  newName.appendChild(document.createTextNode(oldName.value));
  document.getElementById("name_"+id).replaceChild(newName, oldName);
  oldEmail = document.getElementById("email"+ id);
  newEmail = document.createElement("div");
  newName.setAttribute("id", "name"+ id);
  newEmail.appendChild(document.createTextNode(oldEmail.value));
  document.getElementById("email_"+id).replaceChild(newEmail, oldEmail);
  newEmail.setAttribute("id","email"+ id);
  oldLink = document.getElementById("action"+ id);
  link = document.createElement("div");
  editLink = document.createElement("a");
  editLink.appendChild(document.createTextNode("edit/"));
  editLink.href = "javascript:void(0)";
  link.appendChild(editLink);
  editLink.setAttribute("onClick", "addOrEditRow(true,'" + id + "')");
  delLink = document.createElement("a");
  delLink.appendChild(document.createTextNode("delete"));
  delLink.href = "javascript:void(0)";
  link.appendChild(delLink);
  delLink.setAttribute("onClick", "deleteRow('" + id + "')");
  link.setAttribute("id", "action"+ id);
  document.getElementById("action_"+id).replaceChild(link, oldLink);
}
//a function to delete a row based on an existing id
function deleteRow(id)
{
  document.getElementById("tableid").lastChild.removeChild(document.getElementById(id));
}

