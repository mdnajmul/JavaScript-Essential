/*
  Here, value is fixed.If we write 50 or any name or any number,It will be fixed.
  We can't change after write.So,It is called 'literals'
*/
// document.getElementById('name').innerHTML = 50;


/*
  Here, value is not fixed.If we write x=10,It show 10.If we write x=40,It shows 50.
  We can change after write.So,It is called 'variables'
*/
var x;
//x = 10;
x = 40;
document.getElementById('name').innerHTML = x;