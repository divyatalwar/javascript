var count = 0;

function addRow( )
{ 
  var table = document.getElementById("tableid");
  var rowNum = table.rows.length;
  var rowid = "arr" + rowNum + count;
  var row = table.insertRow(rowNum);
  row.setAttribute("id",rowid);
  row.insertCell(0);
  var name = document.createElement("input");
  name.setAttribute("type","text");
  col1id="col1"+ rowid;
  name.setAttribute("id",col1id);
  row.cells[0].appendChild(name);
  row.insertCell(1);
  var email = document.createElement("input");
  email.setAttribute("type","email");
  col2id = "col2" + rowid;
  email.setAttribute("id",col2id);
  row.cells[1].appendChild(email);
  row.insertCell(2);
  var save = document.createElement("input");
  col3id = "col3" + rowid;  
  save.setAttribute("type","button");
  save.setAttribute("value","save");
  save.setAttribute("onclick","saveRow(\""+rowid+"\")");
  save.setAttribute("id",col3id);
  row.cells[2].appendChild(save);
  count = count + 1;  
}

function saveRow(id)
{

  col1 = "col1"+ id;
  col2 = "col2"+ id;
  col3 = "col3"+ id;
  var rows = document.getElementById(id);
  newname =  document.createElement("div");
  oldname = document.getElementById(col1);
  namecontent = document.createTextNode(oldname.value);
  newname.appendChild(namecontent);
  rows.cells[0].replaceChild(newname,oldname);
  newemail = document.createElement("div");
  oldemail = document.getElementById(col2);
  newname.setAttribute("id",col1id);
  emailcontent = document.createTextNode(oldemail.value);
  newemail.appendChild(emailcontent);
  rows.cells[1].replaceChild(newemail,oldemail);
  newemail.setAttribute("id",col2id);
  link = document.createElement("div");
  newlink = document.createElement("a");
  oldlink = document.getElementById(col3);
  newlink.appendChild(document.createTextNode("edit"));
  newlink.href = "javascript:void(0)";
  link.appendChild(newlink);
  newlink.setAttribute("onClick","editRow('" + id + "')");
  link.appendChild(document.createTextNode("/"));
  dellink = document.createElement("a");
  dellink.appendChild(document.createTextNode("delete"));
  dellink.href = "javascript:void(0)";
  link.appendChild(dellink);
  dellink.setAttribute("onClick","deleteRow('" + id + "')");
  link.setAttribute("id",col3);
  rows.cells[2].replaceChild(link,oldlink);

}
function deleteRow(id)
{
  document.getElementById("tableid").lastChild.removeChild(document.getElementById(id));
}
function editRow(id)
{
  col1 = "col1"+ id;
  col2 = "col2"+ id;
  col3 = "col3"+ id;
  var rows = document.getElementById(id);
  oname = rows.cells[0].textContent;
  oemail = rows.cells[1].textContent;
  savedname = document.getElementById(col1);
  savedemail = document.getElementById(col2);
  savedlink = document.getElementById(col3);
  editname = document.createElement("input");
  editname.setAttribute("type","text");
  editname.setAttribute("id",col1);
  editname.setAttribute("value",oname);
  editmail = document.createElement("input");
  editmail.setAttribute("type","text");
  editmail.setAttribute("id",col2);
  editmail.setAttribute("value",oemail);
  newsave = document.createElement("input");
  newsave.setAttribute("type","button");
  newsave.setAttribute("value","Save");
  newsave.setAttribute("id",col3);
  newsave.setAttribute("onclick","saveRow('"+ id +"')");
  rows.cells[0].replaceChild(editname,savedname);
  rows.cells[1].replaceChild(editmail,savedemail);
  rows.cells[2].replaceChild(newsave,savedlink);
 }
