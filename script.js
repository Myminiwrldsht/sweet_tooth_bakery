// loyalty card 
let stamps = 0;
const maxStamps = 10;
const card = document.getElementById("cards");
const message = document.getElementById("message");

// the for loop
for (let i = 0; i < maxStamps; 1++) {
    let div = document.createElement("div");
    div.classList.add("stamp");
    card.appendChild(div);
}

// function to process the codes
function addStamp() {
    if (stamps < maxStamps) {
        card.children[stamps]
        div.style.background = "green";
        stamps++;
    }

    if (stamps === maxStamps) {
        // display message
        message.textContent = "Earned a free product!";

    }
}

// daily special
const special = document.getElementById("special");
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
special.textContent = menu;