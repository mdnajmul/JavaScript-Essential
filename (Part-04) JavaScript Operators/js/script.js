/*variables*/
let oviAge = 23;
//oviAge +=5;
//oviAge -=5;
//oviAge *=5;
let jewelAge = 25;

let totalAge = oviAge + jewelAge; 

document.getElementById('name1').innerHTML = totalAge;
console.log(totalAge);


/*properies & method*/
let myName = "Md. Najmul Ovi";


//find length of string by using 'length' properties
document.getElementById('name2').innerHTML = myName.length;
console.log(myName.length);


//convert uppercase by using 'toUpperCase()' method
document.getElementById('name3').innerHTML = myName.toUpperCase();
console.log(myName.toUpperCase());

//convert lowercase by using 'toLowerCase()' method
document.getElementById('name4').innerHTML = myName.toLowerCase();
console.log(myName.toLowerCase());

//using 'substring()' method for short text
document.getElementById('name5').innerHTML = myName.substring(0,10);
console.log(myName.substring(0,10));

//using 'split()' method
document.getElementById('name6').innerHTML = myName.split('');
console.log(myName.split(''));

/* User give input after program run by using 'prompt()' method*/
let fullName = prompt('What is your full name?');
let age = prompt('What is your age?');
let details = 'I am '+fullName+' and I am '+age+' years old.';
document.getElementById('name7').innerHTML = details;
console.log(details);
