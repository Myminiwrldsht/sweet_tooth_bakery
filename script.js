const shopName ="Sweet Tooth Bakery"; // creates a constant variable called ShopName.
let isOpen = true;
const shopStatus = isOpen ? "Fresh pastries available!" : "Sorry, we're closed!"; //creates a constant variable called shopStatus.


const menu = ["bread", "cupcake", "croissant", "donut", "cake", "muffin"]; //creates an array of menu items


const formatCurrency = amount => `Ksh ${amount.toFixed(2)}`; //creates a constant variable named "formatCurrency", stores a function

//menu display logic
//print headings function (displayMenu), displays bakery menu
function displayMenu () {
console.log ("\n ---WELCOME TO SWEET TOOTH BAKERY---"); //start of bakery title
console.log("\n --FRESHLY BAKED DAILY--");
console.log("\n -MENU-");

let menuDisplay = {}; // empty object that stores menu items and prices


for (let i = 0; i < menu.length; i++) { //goes through the menu array one item at a time
    const item = menu[i]; //grabs current bakery item
    const price = getItemPrice(item); //gets price of the current item

    menuDisplay[item] = price; //adds item and its price into the object
    console.log (`${i + 1}. ${item} -${formatCurrency(price)}`); //prints a clean menu line
}

return menuDisplay; //returns the completed menu object when function completes 

} 


function getItemPrice(item){ //creates a function called getItemPrice
    if(item=== "bread"){
        return 200;
    } //checks if item is bread then returns 200


    if (item==="cupcake"){ //checks if item is cupcake then returns 150
        return 150;
    }


    if (item==="croissant"){ //checks if item is croissant then retuurns 180
        return 180;
    }


    if (item==="donut"){ //checks if item is donut then retuurns 100
        return 100;
    }


    if (item==="cake"){ //checks if item is cake then retuurns 500
        return 500;
    }


    if(item==="muffin"){ //checks if item is muffin then retuurns 140
        return 140;
    } 

console.log("Sorry, we don't sell that item"); //if none of the items match,print " sorry,we dont sell that item"
return 0; // if item is not on the menu, price is 0
}


displayMenu();
// console.log(shopName);