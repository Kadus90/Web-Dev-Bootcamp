// ------------------------------------
// VARIABLES
// ------------------------------------

var faker = require('faker');

var randomProducts = [];

var title = "===================\nWELCOME TO MY SHOP!\n===================";

// -----------------------------------
// PUSH FAKER
// -----------------------------------
console.log(title);
for (var i = 0; i < 10; i++){    
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}
