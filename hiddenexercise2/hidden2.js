j=0;
count=0;
prices=[];
//function that displays the cart
function mycart() {
  document.getElementById("lowercontent").style.visibility="visible";
  document.getElementById("lowerportion").style.visibility="visible";
  document.getElementById("mycart1").style.visibility="hidden";
  document.getElementById("products").style.borderBottomColor="#cfcfcf";
}
//function that displays the specific items according to the three main menu items in the dropdown list i.e clothing grocery electronics
function display(val) {
  document.getElementById("lowercontent").style.visibility="visible";
  var items=document.getElementsByClassName("content");
  var prices=document.getElementsByClassName("price");
  for (i=0;i<items.length;i++) {
    items[i].innerHTML= val.value + " product " + i + " * <br>" +" description:  its is US based <br> product intended <br> to give the specific functionality" + "<br>" ;
  }
  //prices set randomly
  for (i=0;i<prices.length;i++) {
    prices[i].innerHTML="Rs."+ Math.floor(Math.random()*300 +100);
  }
}
//function that adds the item to your cart
function add(value) {
  selectbox=document.getElementById("types");
  for(i=0;i<selectbox.options.length;i++) {
    if(selectbox.options[i].selected) {
      product=document.getElementsByClassName(value);
      content=document.getElementsByClassName("content");
      price=document.getElementsByClassName("price");
      quantity=document.getElementById("quantityfor" +value);
      productcontent=content[value.charAt(7)-1];
      productprice=price[value.charAt(7)-1];
      if(!parseInt(quantity.value)) {
        alert("specify the quantity...u cant leave it blank.please enter numeric values");
      }
      else {
        alert("It has been successfully added to ur cart");
        addtocart(productcontent , productprice , quantity );
        quantity.value="";
        break;       
      }
    }
  }
}
//function that add the items to the table visible in your cart if it is not already added otherwise just chnge the qunatity
function addtocart(productcontent , productprice , quantity) {
  document.getElementById("mycart1").style.visibility="hidden";
  table = document.getElementById("tableid");
  rowNum = table.rows.length;
  //assigning id to each row
  var rowid = "arr" + rowNum + count;
  //checks if the itme is not already present in your cart.if it is changes the quantity as specified and recalculates the total
  for(i=1;i<=rowNum;i++) {
    element=document.getElementById("arr"+i+count);
    if (element!=null) {
      productname=productcontent.innerHTML.split("*")[0];
      if(productname==element.cells[0].textContent) {
        element.cells[2].textContent=quantity.value;
        subtotal=quantity.value *productprices;
        element.cells[3].textContent=subtotal;
        calculatetotal();
        return;
      }
    }
  }
  row = table.insertRow(rowNum);
  row.setAttribute("id", rowid); 
  row.insertCell(0);        
  producttitle=productcontent.innerHTML.split("*")[0];
  row.cells[0].appendChild(document.createTextNode(producttitle));
  row.insertCell(1);
  productprices=productprice.innerHTML.replace("Rs." ,"");
  row.cells[1].appendChild(document.createTextNode(productprices));
  row.insertCell(2);
  row.cells[2].appendChild(document.createTextNode(quantity.value));
  row.insertCell(3);
  subtotal=quantity.value *productprices;
  row.cells[3].appendChild(document.createTextNode(subtotal));
  row.insertCell(4);
  var save = document.createElement("input");
  save.setAttribute("type","button");
  save.setAttribute("value","remove");
  save.setAttribute("onclick", "removerow(\""+rowid+"\")");
  row.cells[4].appendChild(save);
  j=j+1;
  document.getElementById("mycart").innerHTML="mycart(" + j +")";
}
//functiom that removes the elements from ur cart and recalculates the total
function removerow(id) {
  document.getElementById("tableid").lastChild.removeChild(document.getElementById(id));
  calculatetotal();
}
//function that displays ur cart
function displaycart() {
  document.getElementById("lowerportion").style.visibility="hidden";
  document.getElementById("lowercontent").style.visibility="hidden";
  document.getElementById("mycart1").style.visibility="visible";
  document.getElementById("products").style.borderBottomColor="black";
  document.getElementById("mycart").style.borderBottomColor="#cfcfcf";
  calculatetotal();
}
//function that calculates ur total  
function calculatetotal() {
  var total=0;
  for (i=1;i<=rowNum;i++) {
    a=document.getElementById("arr"+i+count);
    if(a!=null) {
      prices[i]=parseInt(a.cells[3].textContent);
      total+=prices[i];
    }
  }
  document.getElementById("totalprice").value=total;
}

function cleartext() {
document.getElementById("search").value="";
}

