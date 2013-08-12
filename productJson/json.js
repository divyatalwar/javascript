$(document).ready(function() {
var jsonData = null;
  $.ajax({
    url: "product.json",
    type: "GET",
    dataType: "json",
    success: function(data){
      jsonData = data;
      var outerDiv = $('#container');
      for(var i = 0; i < jsonData.length; i = i + 1) {
        var url = 'images/' + jsonData[i].url;
        var brand = jsonData[i].brand;
        var sold_out = jsonData[i].sold_out;
        var color = jsonData[i].color;
	var name = jsonData[i].name;
      	var $innerDiv = $('<div id="' + i + '">');
        $innerDiv.appendTo(outerDiv).attr({'data-name': name, 'data-brand':brand,'data-color':color,'data-sold_out':sold_out,'data-type':'innerdiv'});
        $innerDiv.append('<img  src="../productJson/'  + url +'"/>');
      }
    }
  });
  $('body').delegate('#dropDown', 'change', function() {
    var choice = $(this).val();
    if (choice == "SORTBY") {
      return
    }
    var sortedJson = sortJson(choice,$('div[data-type=innerdiv]'));
    for(var i = 0 ; i < sortedJson.length; i++) {
      $('#container').append(sortedJson[i]);
    }
  });
  function sortJson(key,jsonObj){
    jsonObj.sort(function(a,b){
       var firstValue = $(a).attr('data-' + key);
       var secondValue = $(b).attr('data-' + key);
       return (firstValue < secondValue) ? -1 : (firstValue > secondValue) ? 1 : 0;
    })
    return jsonObj;
  }
});
