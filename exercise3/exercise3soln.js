var count = 0;

function addRow( )
{ 
  var table=document.getElementById("tableid");
  var rowNum=table.rows.length;
  var rowid="arr" + rowNum + count;
  var row = table.insertRow(rowNum);
  row.setAttribute("id",rowid);
  row.insertCell(0);
  var name=document.createElement("input");
  name.setAttribute("type","text");
  col1id="col1"+ rowNum +count;
  name.setAttribute("id",col1id);
  row.cells[0].appendChild(name);
  row.insertCell(1);
  var email=document.createElement("input");
  email.setAttribute("type","email");
  col2id="col2" + rowNum + count;
  email.setAttribute("id",col2id);
  row.cells[1].appendChild(email);
  row.insertCell(2);
  var save=document.createElement("input");
  save.setAttribute("type","button");
  save.setAttribute("value","save");
  save.setAttribute("onclick","saveRow(\""+rowid+"\")");
  row.cells[2].appendChild(save);
  count += 1;  
}

function saveRow(id)
{
  var rows=document.getElementById(id);
  rows.cells[0].innerHTML="<p>" + document.getElementById(col1id).value + "</p>" ;
  rows.cells[1].innerHTML="<p>" + document.getElementById(col2id).value + "</p>" ;
  rows.cells[2].innerHTML="<a href='javascript:void(0);' onclick ='editRow(\"" + id + "\")'>edit</a> / <a href='javascript:void(0);'   onclick='deleteRow(\"" + id + "\")'>delete</a>";
  
}

function deleteRow(id)
{
  document.getElementById("tableid").lastChild.removeChild(document.getElementById(id));
}
function editRow(id)
{
  var rows=document.getElementById(id);
  oldname=rows.cells[0].textContent;
  oldemail=rows.cells[1].textContent;
  rows.cells[0].innerHTML = "<input type='text' id='" +col1id+"' value='" +oldname +"' />" ;
  rows.cells[1].innerHTML="<input type='text'  id='" +col2id+"' value='" + oldemail +"' />" ;
  rows.cells[2].innerHTML= "<input type='button' value='save' onClick='saveRow(\"" + id + "\")' />";
  }
