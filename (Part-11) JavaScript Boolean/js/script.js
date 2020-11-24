//Booleann use for nomber 0 is return false
let number = 0;
document.getElementById('math1').innerHTML = Boolean(number);
console.log(Boolean(number));

//Boolean use for any number without 0 is return true
let number1 = 5;
document.getElementById('math2').innerHTML = Boolean(number1);
console.log(Boolean(number1));

//Boolean use for any string is return true
let number2 = 'ovi';
document.getElementById('math3').innerHTML = Boolean(number2);
console.log(Boolean(number2));

//Boolean use for empty string is return false
let number3 = '';
document.getElementById('math4').innerHTML = Boolean(number3);
console.log(Boolean(number3));

//Boolean use for undefined variable is return false
let number4;
document.getElementById('math5').innerHTML = Boolean(number4);
console.log(Boolean(number4));