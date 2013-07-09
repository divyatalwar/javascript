function additems(fromSelectId, toSelectId)
{
  var fromSelectBox = document.getElementById(fromSelectId);
  var toSelectBox = document.getElementById(toSelectId);
  while (fromSelectBox.selectedIndex != -1) {
    toSelectBox.add(fromSelectBox.options[fromSelectBox.selectedIndex]);
  }
}
