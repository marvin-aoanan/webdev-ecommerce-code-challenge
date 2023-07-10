// Get the "Add to Cart" button from the modal
const addToCartButton = document.querySelector('.modal-footer .btn-secondary');

// Get the shopping cart icon and the number element
const shoppingCartIcon = document.querySelector('.icon-shop-bag');
const cartNumber = shoppingCartIcon.querySelector('sup');

// Function to handle the click event of the "Add to Cart" button
function addToCart(event) {
  // Close the modal
  const modal = document.querySelector('#addToCart');
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();

  // Increment the cart number
  let currentNumber = parseInt(cartNumber.textContent);
  cartNumber.textContent = currentNumber + 1;
}

// Attach the click event listener to the "Add to Cart" button
addToCartButton.addEventListener('click', addToCart);
