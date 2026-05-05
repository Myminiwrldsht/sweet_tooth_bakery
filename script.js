const shopName ="Sweet Tooth Bakery"; // creates a constant variable called ShopName.
let isOpen = true;
const shopStatus = isOpen ? "Fresh pastries available!" : "Sorry, we're closed!"; //creates a constant variable called shopStatus.


const menu = ["bread", "cupcake", "croissant", "donut", "cake", "muffin"]; //creates an array of menu items


const formatCurrency = amount => `Ksh ${amount.toFixed(2)}`;

//menu display logic
//print headings function
function displayMenu () {
console.log ("\n ---WELCOME TO SWEET TOOTH BAKERY---");
console.log("\n --FRESHLY BAKED DAILY--");
console.log("\n -MENU-");

let menuDisplay = {}; //stores menu items and prices


for (let i = 0; i < menu.length; i++){
    const item = menu[i];
    const price = getItemPrice(item);

    menuDisplay[item] = price;
    console.log (`\n ${i + 1}. ${item} -${formatCurrency(price)}`);
}

return menuDisplay;

} 
// console.log(shopName);