//JavaScript switch

let day;

switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednusday";
        break;
    case 4:
        day = "Thusday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Not Found";
}
document.getElementById('math1').innerHTML = day;
console.log(day);