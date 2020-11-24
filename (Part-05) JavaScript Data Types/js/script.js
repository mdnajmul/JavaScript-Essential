/* DataTypes */

//String
let name = "Najmul";

//datatype
document.getElementById('name1').innerHTML = typeof name;
console.log(typeof name);

//Number
let age = 25;

//datatype
document.getElementById('name2').innerHTML = typeof age;
console.log(typeof age);

//String = String + Number//
//phone is string
let phone = "Samsung";
//model is number
let model = 7;
//myPhone will be string
let myPhone = phone + model;

//datatype
document.getElementById('name3').innerHTML = typeof myPhone;
console.log(typeof myPhone);
//show value
document.getElementById('name4').innerHTML = myPhone;
console.log(myPhone);

//String = number + number + string //
let newPhone = 6 + 8 + "Samsung";
//It shows '14Samsung'
//show value
document.getElementById('name5').innerHTML = newPhone;
console.log(newPhone);
//datatype show string
document.getElementById('name6').innerHTML = typeof newPhone;
console.log(typeof newPhone);

//String = string + number + number //
let myNewPhone = "Samsung" + 6 + 8;
//It shows 'Samsung68'
//show value
document.getElementById('name7').innerHTML = myNewPhone;
console.log(myNewPhone);
//datatype show string
document.getElementById('name8').innerHTML = typeof myNewPhone;
console.log(typeof myNewPhone);


//Boolean Check//
let mobile1 = 7;
let mobile2 = 8;
document.getElementById('name9').innerHTML = (mobile1 == mobile2);
console.log((mobile1 == mobile2));


// Use Array //
let allPhone = ['Samsung','Apple','Huwei','Oppo','Nokia'];
//show array values
document.getElementById('name10').innerHTML = allPhone;
console.log(allPhone);
//show number 2 index value from array
document.getElementById('name11').innerHTML = allPhone[2];
console.log(allPhone[2]);


// Use Object //
//create object
let allMobile = {
   model: 'iPhone7',
   storage: '128GB',
   color: 'black'
};
// show storage from allMobile object
document.getElementById('name12').innerHTML = allMobile.storage;
console.log(allMobile);


