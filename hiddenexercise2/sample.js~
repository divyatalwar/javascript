var jsonCart=[{"category":"clothing","name":"clothing product1" , "price":500, "description":"it is a clothing product intended to give specific  functionality"},
{"category":"clothing","name":"clothing product2" , "price":600, "description":"it is a clothing product intended to give specific  functionality"},
{"category":"clothing","name":"clothing product3" , "price":700, "description":"it is a clothing product intended to give specific  functionality"},
{"category":"electronics","name":"electronics product1" , "price":700, "description":"it is a electronics product intended to give specific  functionality"},
{"category":"electronics","name":"electronics product2" , "price":300, "description":"it is a electronics product intended to give specific  functionality"},
{"category":"electronics","name":"electronics product3" , "price":200, "description":"it is a electronics product intended to give specific  functionality"},
{"category":"grocery","name":"grocery product1" , "price":400, "description":"it is a grocery product intended to give specific  functionality"},
{"category":"grocery","name":"grocery product2" , "price":100, "description":"it is a grocery product intended to give specific  functionality"},
{"category":"grocery","name":"grocery product3" , "price":300, "description":"it is a grocery product intended to give specific  functionality"}];
function Cart() {
  this.count = 0;
  this.j = 0;
  this.array = [];
  this.prices =[];
  var cart=this;
  //function that displays the cart
  this.mycart = function() {
    document.getElementById("lowercontent").style.visibility = "visible";
    document.getElementById("lowerportion").style.visibility = "visible";
    document.getElementById("mycart1").style.visibility = "hidden";
    document.getElementById("products").style.borderBottomColor = "#cfcfcf"; 
  }
  //function that displays the itme by fetching them from json array
  this.display = function(event) {
  //alert("hey");
    index = -1;
    document.getElementById("lowercontent").style.visibility = "visible";
    var items = document.getElementsByClassName("content");
    var val=event.target;
    for (i = 0; i < items.length; i++) {
      index = cart.getJsonProduct(val.value,index+1);
      items[i].innerHTML = jsonCart[index].name + "<br/>" +jsonCart[index].description +"<br/>" +jsonCart[index].price ;
    }
  }

  this.getJsonProduct = function(val,index) {
      for(var i = index; i < jsonCart.length; i++) {
          if(jsonCart[i].category == val) {
              return i;
          }
      }
   }
  this.getAddedCartProduct =function(val,index) {
      for(var i = index; i < jsonCart.length; i++) {
          if(jsonCart[i].name == val) {
              return i;
          }
      }
   }

  //function that adds the item to your cart
  this.add=function(event) {
    index = -1;
    var value=event.target.id;
    var selectbox = document.getElementById("types");
    for(i = 0; i < selectbox.options.length; i++) {
      if(selectbox.options[i].selected) {
        var product = document.getElementsByClassName(value);
        var content = document.getElementsByClassName("content");
        var quantity = document.getElementById("quantityfor" +value);
        var productcontent = content[value.charAt(7)-1];
        var name = productcontent.innerHTML.split("<br>")[0];
        var index = cart.getAddedCartProduct(name,index+1)
        var productprice = jsonCart[index].price;
        if(!parseInt(quantity.value)) {
          alert("specify the quantity...u cant leave it blank.please enter numeric values");
        }
        else {
          alert("It has been successfully added to ur cart");
          cart.addtocart(index,quantity );
          quantity.value = "";        
          cart.calculatetotal();
          break;       
        }
      }
    }
  }
  //function that add the items to the table visible in your cart if it is not already added otherwise just chnge the qunatity
  this.addtocart =function(index, quantity) {
    document.getElementById("mycart1").style.visibility="hidden";
    table = document.getElementById("tableid");
    rowNum = table.rows.length;
    //assigning id to each row
    var rowid = "arr" + rowNum + cart.count;
    //checks if the itme is not already present in your cart.if it is changes the quantity as specified and recalculates the total
    for(i = 1;i <= rowNum;i++) {
      var element = document.getElementById("arr"+i+cart.count);
      if (element != null) {
        if(jsonCart[index].name == element.cells[0].textContent) {
          element.cells[2].textContent = quantity.value;
          var subtotal = quantity.value *jsonCart[index].price;
          element.cells[3].textContent = subtotal;
          cart.calculatetotal();
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
    save = document.createElement("input");
    save.setAttribute("type","button");
    save.setAttribute("value","remove");
    save.setAttribute("id",("r"+rowNum +cart.count));
    row.cells[4].appendChild(save);
    cart.j = cart.j+1;
    document.getElementById("mycart").innerHTML="mycart(" + cart.j +")";
    cart.array.push([jsonCart[index].name]);
    save.addEventListener("click",this.removerow,false); 
  }
  //functiom that removes the elements from ur cart and recalculates the total
  this.removerow =function(event) {
    var id="ar"+event.target.id;
    document.getElementById("tableid").lastChild.removeChild(document.getElementById(id));
    cart.j -= 1;
    document.getElementById("mycart").innerHTML="mycart(" + cart.j +")";
    cart.calculatetotal();
  }
  //function that displays ur cart
  this.displaycart=function() {
    document.getElementById("lowerportion").style.visibility = "hidden";
    document.getElementById("lowercontent").style.visibility = "hidden";
    document.getElementById("mycart1").style.visibility = "visible";
    document.getElementById("products").style.borderBottomColor = "black";
    document.getElementById("mycart").style.borderBottomColor = "#cfcfcf";
    cart.calculatetotal();
  }
  //function that calculates ur total  
  this.calculatetotal=function() {
    var  total = 0;
    for (i = 1; i <= rowNum; i++) {
      a = document.getElementById("arr"+i+cart.count);
      if(a!=null) {
        cart.prices[i] = parseInt(a.cells[3].textContent);
        total += cart.prices[i];
      }
    }
    document.getElementById("totalprice").value = total;
  }

  this.cleartext =function() {
    document.getElementById("search").value = "";
  }
  document.getElementById("mycart").addEventListener("click",this.displaycart,false);
  document.getElementById("products").addEventListener("click",this.mycart,false);
  document.getElementById("types").addEventListener("change",this.display,false);
  document.getElementById("product1").addEventListener("click", this.add,false);
  document.getElementById("product2").addEventListener("click", this.add,false);
  document.getElementById("product3").addEventListener("click", this.add,false);
  
}
var shoppingcart=new Cart();
