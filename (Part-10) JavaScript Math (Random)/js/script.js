//show 2 digit after decimal point
document.getElementById('math1').innerHTML = Math.random().toFixed(2);
console.log(Math.random().toFixed(1));

//show random number between 0 to 10
document.getElementById('math2').innerHTML = Math.random().toFixed(1) * 10;
console.log(Math.random().toFixed(1) * 10);

//Ludo board system (It shows number from 1 to 6)
let uppervalue = 6;
let lowervalue = 0;
let resultvalue = Math.floor(Math.random() * (uppervalue - lowervalue) + 1);
document.getElementById('math3').innerHTML = resultvalue;
console.log(resultvalue);