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
  row.setAttribute("id",rowid);
  var name = document.createElement("input");
  name.setAttribute("type","text");
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
    var column1id = "col1"+ rowid;
    name.setAttribute("id", column1id);
    row.cells[0].appendChild(name);
    row.insertCell(1);
    var column2id = "col2" + rowid;
    email.setAttribute("id", column2id);
    row.cells[1].appendChild(email);
    row.insertCell(2);
    var column3id = "col3" + rowid;  
    save.setAttribute("id", column3id);
    row.cells[2].appendChild(save);
    save.setAttribute("onclick", "saveRow(\""+rowid+"\")");
}
  else
  {
    var rows = document.getElementById(id);
    oname = rows.cells[0].textContent;
    oemail = rows.cells[1].textContent;
    savedName = document.getElementById("col1" + id);
    savedEmail = document.getElementById("col2" + id);
    savedLink = document.getElementById("col3" + id);
    name.setAttribute("id", "col1"+ id);
    email.setAttribute("id", "col2"+ id);
    save.setAttribute("id", "col3" + id);
    save.setAttribute("onclick", "saveRow(\""+id+"\")");
    name.setAttribute("value", oname);
    email.setAttribute("value", oemail);
    // replace the textnodes with the previously occupying textboxes
    rows.cells[0].replaceChild(name, savedName);
    rows.cells[1].replaceChild(email, savedEmail);
    rows.cells[2].replaceChild(save, savedLink);
  } 
}

// a function to save the changes made while editing or adding a new row
function saveRow(id)
{
  rows = document.getElementById(id);
  oldName = document.getElementById("col1"+ id);
  newName =  document.createElement("div");
  newName.appendChild(document.createTextNode(oldName.value));
  rows.cells[0].replaceChild(newName,oldName);
  oldEmail = document.getElementById("col2"+ id);
  newEmail = document.createElement("div");
  newName.setAttribute("id","col1"+ id);
  newEmail.appendChild(document.createTextNode(oldEmail.value));
  rows.cells[1].replaceChild(newEmail,oldEmail);
  newEmail.setAttribute("id","col2"+ id);
  oldLink = document.getElementById("col3"+ id);
  link = document.createElement("div");
  editLink = document.createElement("a");
  editLink.appendChild(document.createTextNode("edit/"));
  editLink.href = "javascript:void(0)";
  link.appendChild(editLink);
  editLink.setAttribute("onClick","addOrEditRow(true,'" + id + "')");
  delLink = document.createElement("a");
  delLink.appendChild(document.createTextNode("delete"));
  delLink.href = "javascript:void(0)";
  link.appendChild(delLink);
  delLink.setAttribute("onClick","deleteRow('" + id + "')");
  link.setAttribute("id","col3"+ id);
  rows.cells[2].replaceChild(link,oldLink);

}
//a function to delete a row based on an existing id
function deleteRow(id)
{
  document.getElementById("tableid").lastChild.removeChild(document.getElementById(id));
}

