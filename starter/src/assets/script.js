/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [];
let totalPaid = 0;
/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const cherry = {
  name: 'cherry',
  price: 10,
  quantity: 0,
  productId: 1,
  image: './images/cherry.jpg'
}

const orange = {
  name: 'orange',
  price: 1,
  quantity: 0,
  productId: 2,
  image: './images/orange.jpg'
}

const strawberry = {
  name: 'strawberry',
  price: 2,
  quantity: 0,
  productId: 3,
  image: './images/strawberry.jpg'
}

products.push(cherry, orange, strawberry);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/


/* findProductInCart - return specific product object refrence from array. used in 3 funcs. */
const findProductInCart = (arrayToSearch, productId) => {
  return arrayToSearch.find((product) => product.productId === productId);
}

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

const addProductToCart = (productId) => {
  const product = findProductInCart(products, productId);
  if (cart.indexOf(product) === -1) { cart.push(product) } // indexOf returns -1 if not in array
  product.quantity++; // regardless quantity grows, if added to cart or already in


}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

const increaseQuantity = (productId) => {
  const product = findProductInCart(cart, productId);
  product.quantity++;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
const decreaseQuantity = (productId) => {
  const product = findProductInCart(cart, productId);
  if (product.quantity === 1) {
      removeProductFromCart(productId);
      return;
  }
  product.quantity--;
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

const removeProductFromCart = (productId) => {
  const product = cart.find((product) => product.productId === productId)
  product.quantity = 0;
  cart.splice(cart.indexOf(product), 1);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

const cartTotal = () => {
  let sum = 0;
  cart.forEach((product) => {
    sum += product.price * product.quantity;
  })
  return sum;
}

/* Create a function called emptyCart that empties the products from the cart */

const emptyCart = () => {
  while (cart.length > 0) {
    cart.pop().quantity = 0;
  }
  // products.forEach((product) => {
  //   product.quantity = 0;
  // })
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

const pay = (amount) => {
  const diff = amount + totalPaid - cartTotal();
  
  if (diff < 0){
    totalPaid += amount;
  }

  return diff;
  // return (amount - cartTotal() ? amount - cartTotal() : cartTotal() - amount);
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

// const currency = () => {
// }

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
