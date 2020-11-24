//show PI value
document.getElementById('math1').innerHTML = Math.PI;
console.log(Math.PI);

//round figure float number
document.getElementById('math2').innerHTML = Math.round(3.49);
console.log(Math.round(3.51));

//use power function
document.getElementById('math3').innerHTML = Math.pow(3,2);
console.log(Math.pow(7,2));

//use square root function
document.getElementById('math4').innerHTML = Math.sqrt(144);
console.log(Math.sqrt(49));

//show only positive/absolute value
document.getElementById('math5').innerHTML = Math.abs(-50);
console.log(Math.abs(20));

//round figure using ceil function for show next number of given decimal point
document.getElementById('math6').innerHTML = Math.ceil(4.1);
console.log(Math.ceil(5.01));

//round figure using floor function for show before decimal point number
document.getElementById('math7').innerHTML = Math.floor(4.9);
console.log(Math.floor(5.2));

//show sin,cos,tan etc value
document.getElementById('math8').innerHTML = Math.sin(90 * Math.PI/180);
console.log(Math.cos(45 * Math.PI/180));

//find/show minimum number
document.getElementById('math9').innerHTML = Math.min(4,8,3,12,2,10);
console.log(Math.min(5,15,6,20,0,25,10));

//find/show maximum number
document.getElementById('math10').innerHTML = Math.max(4,8,3,12,2,10);
console.log(Math.max(5,15,6,20,0,25,10));

//show random number
document.getElementById('math11').innerHTML = Math.random();
console.log(Math.random());