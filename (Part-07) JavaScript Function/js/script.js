/* JavaScript Function */

//create function
function myName(){
    console.log('Md. Najmul Ovi');
}

//call myName() function
myName();


//create another function
function myAge(age){
    document.getElementById('name2').innerHTML = age;
    console.log(age);
}

//call myAge() function
myAge(25);


//create another function
function fullName(firstName, lastName){
    document.getElementById('name3').innerHTML = firstName+' '+lastName;
    console.log(firstName+' '+lastName);
}

//call fullName() function
fullName('Najmul','Ovi');


//create another function
function math(number){
    return number + number;
    //here, return is a statement
}
//show values from math() function
document.getElementById('name4').innerHTML = math(10);
console.log(math(15));


