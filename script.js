// loyalty card 
let stamps = 0;
const maxStamps = 10;


// the for loop to determine whether to add a stamp
for (let i = 0; i < maxStamps; 1++) {
    display += i < stamps ? "0" : "1";
    console.log(display);
}

// function to process the stamps
function addStamp() {
    if (stamps < maxStamps) {
        stamps++;
        console.log('added Stamp!(&{stamps}/&{maxStamps})');
    }
    showCard();

    if (stamps === maxStamps) {
        // display message
        console.log("Earned a free product!");

    }
}

// daily special

// 0=sunday 1=monday 5=friday 6=saturday
let day = newDate().getDay();
// switch statement
let menu;

switch (day) {
    case 0:
        menu = "Sunday Foam cakes";
        break;
    case 1:
        menu = "Monday cholate cakes";
        break;
    case 5:
        menu = "Friday fruit cake";
        break;
    case 6:
        menu = "saturday butter cake";
        break;
    default:
        menu = "no special offer today";

}
console.log("Special for the day:");
console.log(menu);