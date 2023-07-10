/*
// Get all the "Buy" buttons
const buyButtons = document.querySelectorAll('.buy-item button');

// Function to handle the click event
function addToCart(event) {
  // Get the parent element of the clicked button
  const parent = event.target.closest('.recent-item');

  // Get the product details from the parent element
  const itemImg = parent.querySelector('.item-img img').src;
  const itemText = parent.querySelector('.item-text p').textContent;

  // Check if the item is on sale
  const itemPriceSale = parent.querySelector('.item-price .item-price-sale');
  const itemPriceOriginal = parent.querySelector('.item-price .item-price-original');
  let itemPrice;
  if (itemPriceSale && itemPriceSale.textContent !== "") {
    itemPrice = itemPriceSale.textContent;
  } else {
    itemPrice = parent.querySelector('.item-price .item-price-normal').textContent;
  }

  // Perform the action of adding the item to the cart
  // You can customize this part based on your requirements
  console.log('Item added to cart:');
  console.log('Image:', itemImg);
  console.log('Text:', itemText);
  console.log('Original Price:', itemPrice);
  console.log('Sale Price:', itemPriceOriginal.textContent)
}

// Attach the click event listener to each "Buy" button
buyButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});
*/

// Get all the "Buy" buttons
const buyButtons = document.querySelectorAll('.buy-item button');

// Get the dialog container and its content elements
const modalBody = document.querySelector('.modal-body');
const itemImg = modalBody.querySelector('.item-img');
const itemName = modalBody.querySelector('.itemName');
const itemDesc = modalBody.querySelector('.itemDesc');
const itemSize = modalBody.querySelector('.itemSize');
const itemColor = modalBody.querySelector('.itemColor');
const itemQty = modalBody.querySelector('.itemQty');
const itemPrice = modalBody.querySelector('.itemPrice');

// Function to handle the click event
function addToCart(event) {
  // Get the parent element of the clicked button
  const parent = event.target.closest('.recent-item');

  // Get the product details from the parent element
  const imgSrc = parent.querySelector('.item-img img').src;
  const name = parent.querySelector('.item-text p').textContent;
  const price = parent.querySelector('.item-price .item-price-normal').textContent;

  // Update the content of the dialog container with the clicked item details
  itemImg.innerHTML = `<img src="${imgSrc}" alt="">`;
  itemName.textContent = name;
  itemDesc.textContent = name;
  itemSize.textContent = '';
  itemColor.textContent = '';
  itemQty.textContent = '';
  itemPrice.textContent = `${price}`;

  // Open the dialog container
  // You can customize this part based on how you want to show the dialog (e.g., adding a CSS class to display it)
  modalBody.style.display = 'block';
}

// Attach the click event listener to each "Buy" button
buyButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});
