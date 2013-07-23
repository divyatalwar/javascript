var jsonCart=[{"category":"clothing","name":"clothing product1" , "price":500, "description":"it is a clothing product intended to give specific  functionality"},
{"category":"clothing","name":"clothing product2" , "price":600, "description":"it is a clothing product intended to give specific  functionality"},
{"category":"clothing","name":"clothing product3" , "price":700, "description":"it is a clothing product intended to give specific  functionality"},
{"category":"electronics","name":"electronics product1" , "price":700, "description":"it is a electronics product intended to give specific  functionality"},
{"category":"electronics","name":"electronics product2" , "price":300, "description":"it is a electronics product intended to give specific  functionality"},
{"category":"electronics","name":"electronics product3" , "price":200, "description":"it is a electronics product intended to give specific  functionality"},
{"category":"grocery","name":"grocery product1" , "price":400, "description":"it is a grocery product intended to give specific  functionality"},
{"category":"grocery","name":"grocery product2" , "price":100, "description":"it is a grocery product intended to give specific  functionality"},
{"category":"grocery","name":"grocery product3" , "price":300, "description":"it is a grocery product intended to give specific  functionality"}];
count = 0;
j = 0;
array = [];
prices =[];
//function that displays the cart
function mycart() {
  document.getElementById("lowercontent").style.visibility = "visible";
  document.getElementById("lowerportion").style.visibility = "visible";
  document.getElementById("mycart1").style.visibility = "hidden";
  document.getElementById("products").style.borderBottomColor = "#cfcfcf"; 
}
//function that displays the itme by fetching them from json array
function display(val) {
  index = -1;
  document.getElementById("lowercontent").style.visibility = "visible";
  var items = document.getElementsByClassName("content");
  for (i = 0; i < items.length; i++) {
    index = getJsonProduct(val.value,index+1);
    items[i].innerHTML = jsonCart[index].name + "<br/>" +jsonCart[index].description +"<br/>" +jsonCart[index].price ;
  }
}

function getJsonProduct(val,index) {
    for(var i = index; i < jsonCart.length; i++) {
        if(jsonCart[i].category == val) {
            return i;
        }
    }
 }
function getAddedCartProduct(val,index) {
    for(var i = index; i < jsonCart.length; i++) {
        if(jsonCart[i].name == val) {
            return i;
        }
    }
 }

//function that adds the item to your cart
function add(value) {
  index = -1;
  selectbox = document.getElementById("types");
  for(i = 0; i < selectbox.options.length; i++) {
    if(selectbox.options[i].selected) {
      product = document.getElementsByClassName(value);
      content = document.getElementsByClassName("content");
      quantity = document.getElementById("quantityfor" +value);
      productcontent = content[value.charAt(7)-1];
      name = productcontent.innerHTML.split("<br>")[0];
      index = getAddedCartProduct(name,index+1)
      productprice = jsonCart[index].price;
      if(!parseInt(quantity.value)) {
        alert("specify the quantity...u cant leave it blank.please enter numeric values");
      }
      else {
        alert("It has been successfully added to ur cart");
        addtocart(index,quantity );
        quantity.value = "";        
        calculatetotal();
        break;       
      }
    }
  }
}
//function that add the items to the table visible in your cart if it is not already added otherwise just chnge the qunatity
function addtocart(index, quantity) {
  document.getElementById("mycart1").style.visibility="hidden";
  table = document.getElementById("tableid");
  rowNum = table.rows.length;
  //assigning id to each row
  var rowid = "arr" + rowNum + count;
  //checks if the itme is not already present in your cart.if it is changes the quantity as specified and recalculates the total
  for(i = 1;i <= rowNum;i++) {
    element = document.getElementById("arr"+i+count);
    if (element != null) {
      if(jsonCart[index].name == element.cells[0].textContent) {
        element.cells[2].textContent = quantity.value;
        subtotal = quantity.value *jsonCart[index].price;
        element.cells[3].textContent = subtotal;
        calculatetotal();
        return;
      }
    }
  }
  row = table.insertRow(rowNum);
  row.setAttribute("id", rowid); 
  row.insertCell(0);        
  row.cells[0].appendChild(document.createTextNode(jsonCart[index].name));
  row.insertCell(1);
  row.cells[1].appendChild(document.createTextNode(jsonCart[index].price));
  row.insertCell(2);
  row.cells[2].appendChild(document.createTextNode(quantity.value));
  row.insertCell(3);
  subtotal = quantity.value *jsonCart[index].price;
  row.cells[3].appendChild(document.createTextNode(subtotal));
  row.insertCell(4);
  var save = document.createElement("input");
  save.setAttribute("type","button");
  save.setAttribute("value","remove");
  save.setAttribute("onclick", "removerow(\""+rowid+"\")");
  row.cells[4].appendChild(save);
  j = j+1;
  document.getElementById("mycart").innerHTML="mycart(" + j +")";
  array.push([jsonCart[index].name]);
}
//functiom that removes the elements from ur cart and recalculates the total
function removerow(id) {
  document.getElementById("tableid").lastChild.removeChild(document.getElementById(id));
  j -= 1;
  document.getElementById("mycart").innerHTML="mycart(" + j +")";
  calculatetotal();
}
//function that displays ur cart
function displaycart() {
  document.getElementById("lowerportion").style.visibility = "hidden";
  document.getElementById("lowercontent").style.visibility = "hidden";
  document.getElementById("mycart1").style.visibility = "visible";
  document.getElementById("products").style.borderBottomColor = "black";
  document.getElementById("mycart").style.borderBottomColor = "#cfcfcf";
  alert("your cart contains " +array.join(' , '));
  calculatetotal();
}
//function that calculates ur total  
function calculatetotal() {
  var  total = 0;
  for (i = 1; i <= rowNum; i++) {
    a = document.getElementById("arr"+i+count);
    if(a!=null) {
      prices[i] = parseInt(a.cells[3].textContent);
      total += prices[i];
    }
  }
  document.getElementById("totalprice").value = total;
}

function cleartext() {
  document.getElementById("search").value = "";
}

