//JavaScript Loops

//use for loop

const vehicle = ['Bus','Car','Truck','Bike','CNG'];

//show values from vehicle array by using for loop
for(let i=0; i<vehicle.length; i++){
    console.log(vehicle[i]);
}
//line break
console.log("\n");
//another way to show array value by using for loop
for(x of vehicle){
    console.log(x);
}