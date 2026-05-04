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