var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var price = Math.ceil(Math.random() * 100)
  cart.push({[itemName] : price})
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
