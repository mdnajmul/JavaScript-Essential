//JavaScript Conditional
//if time between 6am to 11.59pm then it shows "Good Morning"
//if time between 12pm to 6pm then it shows "Good Afternoon"
//Otherwise it shows "Good Night"

//hold current time
let time = new Date().getHours();
//console.log(time);
if(time>=6 && time < 12){
    document.getElementById('math1').innerHTML = 'Good Morning';
    console.log('Good Morning');
}
else if(time >= 12 && time < 18){
    document.getElementById('math1').innerHTML = 'Good Afternoon';
    console.log('Good Afternoon');
}
else{
    document.getElementById('math1').innerHTML = 'Good Night';
    console.log('Good Night');
}