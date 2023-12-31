// Get all the "Buy" buttons
const buyButtons = document.querySelectorAll('.buy-item button');

// Get the dialog container and its content elements
const modalBody = document.querySelector('.modal-body');
const modalImg = modalBody.querySelector('.item-img');
const modalName = modalBody.querySelector('.itemName');
const modalDesc = modalBody.querySelector('.itemDesc');
const modalSize = modalBody.querySelector('.itemSize');
const modalColor = modalBody.querySelector('.itemColor');
const modalQty = modalBody.querySelector('.itemQty');
const modalPrice = modalBody.querySelector('.itemPrice');
const modalOrigPrice = modalBody.querySelector('.itemOrigPrice');

// Function to handle the click event
function addToCart(event) {
  // Get the parent element of the clicked button
  const parent = event.target.closest('.recent-item');

  // Get the product details from the parent element
  const itemImg = parent.querySelector('.item-img img').src;
  const itemText = parent.querySelector('.item-text p').textContent;

  // Get the product details from the parent element
  const imgSrc = parent.querySelector('.item-img img').src;
  const name = parent.querySelector('.item-text p').textContent;

  // Check if the item is on sale
  const itemPriceSale = parent.querySelector('.item-price .item-price-sale');
  const itemPriceOriginal = parent.querySelector('.item-price .item-price-original');
  let itemPrice;
  if (itemPriceOriginal && itemPriceOriginal.textContent !== "") {
    itemPrice = itemPriceSale.textContent;
  } else if (itemPriceSale && itemPriceSale.textContent !== "") {
    itemPrice = itemPriceSale.textContent;
  } else {
    itemPrice = parent.querySelector('.item-price .item-price-normal').textContent;
  }

  // Update the content of the dialog container with the clicked item details
  modalImg.innerHTML = `<img src="${imgSrc}" alt="">`;
  modalName.textContent = name;
  modalDesc.textContent = name;
  modalSize.textContent = '';
  modalColor.textContent = '';
  modalQty.textContent = '';
  modalPrice.textContent = itemPrice;
  modalOrigPrice.textContent = itemPriceOriginal.textContent;

  // Perform the action of adding the item to the cart
  // You can customize this part based on your requirements
  console.log('Item added to cart:');
  console.log('Image:', itemImg);
  console.log('Text:', itemText);
  console.log('Sale Price:', itemPrice);
  console.log('Original Price:', itemPriceOriginal.textContent)
}

// Attach the click event listener to each "Buy" button
buyButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});
