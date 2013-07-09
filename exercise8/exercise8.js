function additems(selectId1,selectId2)
{
  var selectbox1=document.getElementById(selectId1);
  var selectbox2=document.getElementById(selectId2);
  while(selectbox1.selectedIndex!=-1) {
    selectbox2.appendChild(selectbox1.options[selectbox1.selectedIndex]);
  }
}
