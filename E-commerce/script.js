// script.js

let cart = [];
let cartCount = 0;

function addToCart() {
    const productName = document.querySelector('.product-info h1').innerText;
    const productPrice = document.querySelector('.price').innerText;
    const product = { name: productName, price: productPrice };

    cart.push(product);
    cartCount++;
    updateCartCount();
    updateCartItems();
    openModal();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cartCount;
}

function updateCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <p>${item.name} - ${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(itemDiv);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    cartCount--;
    updateCartCount();
    updateCartItems();
}

function openModal() {
    document.getElementById('cart-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}