// Simple Coffee Shop JavaScript

// 1. Menu Data Array
const menuItems = [
  { name: 'Espresso', price: 234, image: 'images/hero.png' },
  { name: 'Cappuccino', price: 297, image: 'images/hero.png' },
  { name: 'Latte', price: 297, image: 'images/hero.png' },
  { name: 'Iced Salted Caramel Latte', price: 513, image: 'images/iced_salted_caramel_latte.jpg' },
  { name: 'Almond Croissant', price: 410, image: 'images/almond_croissant.jpg' },
  { name: 'Dubai Chocolate Brownie', price: 315, image: 'images/dubai_brownie.jpg' }
];

// Shopping Cart Array
let cart = [];

// 2. Render Menu Items to Page
function renderMenu() {
  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';

  menuItems.forEach((item, index) => {
    grid.innerHTML += `
      <div class="card">
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p class="price">৳${item.price}</p>
        <button class="btn" onclick="addToCart(${index})">Add to Cart</button>
      </div>
    `;
  });
}

// 3. Add Item to Cart
function addToCart(index) {
  cart.push(menuItems[index]);
  updateCart();
}

// 4. Update Cart UI & Total Price
function updateCart() {
  const cartList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  cartList.innerHTML = cart.length === 0 ? '<p>Your cart is empty.</p>' : '';
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    cartList.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>৳${item.price}</span>
      </div>
    `;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

// 5. Checkout Function
function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  alert(`Order placed successfully! Total: ৳${document.getElementById('cart-total').textContent}`);
  cart = [];
  updateCart();
}

// Run renderMenu when page loads
renderMenu();
