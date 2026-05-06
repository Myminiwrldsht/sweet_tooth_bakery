
//----------------------
// SHOP INFORMATION
//----------------------


const shopName ="Sweet Tooth Bakery"; // creates a constant variable called ShopName.

// Track whether the bakery is open or closed
let isOpen = true;
const shopStatus = isOpen ? "Fresh pastries available!" : "Sorry, we're closed!"; //creates a constant variable called shopStatus.

//-----------------------
// BAKERY MENU
//-----------------------
const menu = ["bread", "cupcake", "croissant", "donut", "cake", "muffin"]; //creates an array of menu items


const formatCurrency = amount => `Ksh ${amount.toFixed(2)}`; //creates a constant variable named "formatCurrency", stores a function

//--------------------------
// DISPLAY MENU FUNCTION
//--------------------------

// Function to display the bakery menu and prices
function displayMenu () {
console.log ("\n ---WELCOME TO SWEET TOOTH BAKERY---"); //Print bakery heading
console.log("\n --FRESHLY BAKED DAILY--");
console.log("\n -MENU-");

let menuDisplay = {}; // empty object that stores menu items and prices

// Loop through each item in the menu
for (let i = 0; i < menu.length; i++) { 
    const item = menu[i]; //grabs current bakery item
    const price = getItemPrice(item); //gets price of the current item

    menuDisplay[item] = price; //adds item and its price into the menu object
    console.log (`${i + 1}. ${item} -${formatCurrency(price)}`); //prints item number, name, and formatted price
}

return menuDisplay; //returns the completed menu object when function completes 

} 

//---------------------
// PRICE LOOKUP FUNCTION
//---------------------

// Function to return the price of a bakery item
function getItemPrice(item){ 
    // Check item name and return matching price
    if(item=== "bread"){
        return 200;
    } //checks if item is bread then returns 200


    if (item==="cupcake"){ //checks if item is cupcake then returns 150
        return 150;
    }


    if (item==="croissant"){ //checks if item is croissant then retuurns 180
        return 180;
    }


    if (item==="donut"){ //checks if item is donut then returns 100
        return 100;
    }


    if (item==="cake"){ //checks if item is cake then returns 500
        return 500;
    }


    if(item==="muffin"){ //checks if item is muffin then returns 140
        return 140;
    } 

console.log("Sorry, we don't sell that item"); //if none of the items match,print " sorry,we dont sell that item"
return 0; // if item is not on the menu, price is 0
}


//-----------------------------
// loyalty card 
//-----------------------------

// Stores how many stamps the customer currently has 
let stamps = 0;

// Maximum number of stamps needed to earn a reward
const maxStamps = 10;


// Function to display the loyalty card
function showCard() {
    let display = ""; // Stores the visual loyalty card as a string

    // Loop through each stamp slot on the card
    for (let i = 0; i < maxStamps; i++){
        // If customer has earned this stamp, show filled slot (0)
        // Otherwise show empty slot (1)
        display += i < stamps ? "0" : "1";
    }

    // Print the completed loyalty card
    console.log("Loyalty Card:", display);
}



// function to add one stamp to the loyalty card
function addStamp() {
    // Only adds a stamp if the card is not full
    if (stamps < maxStamps) {
        stamps++;

        // Show updated stamp progress
        console.log(`Added Stamp!(${stamps}/${maxStamps})`);
    }

    //Display updated loyalty card after adding stamp
    showCard();

    // If a customer has collected all stamps, reward them
    if (stamps === maxStamps) {
        // display message
        console.log("Earned a free product!");

    }
}


//----------------------
// DAILY SPECIAL SYSTEM
//----------------------

// Get the current day of the week as a number
// 0=sunday, 1=monday.......5=friday, 6=saturday
let day = new Date().getDay();

// Variable to store the special offer for today
let specialMenu;

// Use switch to assign a daily special based on the day
switch (day) {
    case 0:
        specialMenu = "Sunday Foam cakes";
        break;


    case 1:
        specialMenu = "Monday cholate cakes";
        break;


    case 5:
        specialMenu = "Friday fruit cake";
        break;


    case 6:
        specialMenu = "saturday butter cake";
        break;


    default:
        specialMenu = "no special offer today";

}

// Print today's special offer
console.log("Special for the day:");
console.log(specialMenu);

//------------------------
// RUN PROGRAM
//------------------------

// Display the bakery menu when program starts
displayMenu();

console.log(shopName);
console.log(shopStatus);
addStamp();

